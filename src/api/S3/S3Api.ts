import AWS from "aws-sdk";
import S3Instance from "./S3Instance";
import constants from "../../utils/Constants";
import _ from "lodash";

interface S3Folder {
  name: string;
  image: string;
  images: string;
}

export default async function getS3Objects<T>(prefix?: string): Promise<T[]> {
  try {
    const s3 = S3Instance.getInstance();
    const params: AWS.S3.ListObjectsV2Request = {
      Bucket: constants.bucketName,
    };

    if (prefix) {
      params.Prefix = prefix;
    } else {
      params.Delimiter = "/";
    }

    const data = await s3.listObjectsV2(params).promise();

    if (prefix) {
      return getImages(data, prefix) as T[];
    } else {
      return getCategories(data) as T[];
    }
  } catch (error) {
    console.error("Error al listar los objetos:", error);
    return [];
  }
}

function getImages(data: AWS.S3.ListObjectsV2Output, prefix: string): string[] {
  const contents = data.Contents ? data.Contents : [];

  const folderNames = contents
    .map((item) => item.Key)
    .filter((value) => value != prefix);
  const values = folderNames.map((item) => constants.baseUrl + item);

  return values;
}

function getCategories(data: AWS.S3.ListObjectsV2Output): S3Folder[] {
  const commonPrefixes = data.CommonPrefixes ? data.CommonPrefixes : [];

  const folderNames: S3Folder[] = commonPrefixes.map((prefix) => {
    const categoryName = prefix.Prefix ?? "";
    return {
      name: _.capitalize(_.lowerCase(categoryName.replace("/", ""))),
      image: `${constants.baseUrl}${categoryName}front.png`,
      images: `${categoryName}images/`,
    };
  });

  return folderNames;
}
