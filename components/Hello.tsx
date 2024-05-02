import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { useDeletePostMutation, useFindAllPostQuery, useUpdatePostMutation } from '../src/api/AppApi';
import CreatePost from './Post';

interface Props {
    user: string;
    edad: number;
}

const Hello: React.FC<Props> = ({user, edad}) => {
    const { isLoading, data, error } = useFindAllPostQuery();
    const [deletePost, { data: deletePostData }] = useDeletePostMutation();
    const [updatePost, { data: updatePostData }] = useUpdatePostMutation();

    const [uvIndex, setUVIndex] = useState<number | null>(null);

    const sentimientos = ["Feliz", "Triste", "enojado", "contento", "sorprendido"];

    // const DetailUsuario = () => {
    //     const route = useRoute();
    //     const { user } = route.params as RouteParams;

    //     return user;
    // }

    const indiceAleatorio = Math.floor(Math.random() + sentimientos.length-1);
    const sentimientoAleatorio = sentimientos[indiceAleatorio];

    const year = new Date().getFullYear();
    const saludo: string = user;
    let miEdad: number = edad;
    let activo: boolean = true;
    let nacimiento = year - miEdad;

    useEffect(() => {
        fetch('https://api.open-meteo.com/v1/forecast?latitude=0&longitude=0')
        .then((response) => response.json())
        .then((data) => {
            const uvValue = data.generationtime_ms;
            setUVIndex(uvValue);
        })
        .catch((error) => {
            console.error(error);
        });
    });

    if (isLoading) return <Text style={styles.content}>Loading</Text>
    if (error) return <Text style={styles.content}>Error</Text>

    return (
        <View style={styles.container}>
            <Text style={styles.content}>Hello World! <b>{saludo}</b> edad {miEdad} nacimiento {nacimiento}, esperamos que hoy te sientas {sentimientoAleatorio}
            <ul>
                {sentimientos.map((sentimiento, index) => {
                    return <li key={index}>{sentimiento}</li>
                })}
            </ul>
            </Text>
            {uvIndex != null ? 
            <Text style={styles.content}>
                <b>UV Index:</b> {uvIndex}
            </Text>: null
            }
             {data?.map(todo => (
                <View key={todo.id} >
                    <Text style={styles.content}>author: {todo.author}</Text>
                    <Text style={styles.content}>content: {todo.content}</Text>
                    <Button title='Delete' onPress={() => deletePost(todo.id)}/>
                    <Button title='update' onPress={() => updatePost({id: todo.id, content: todo.content + todo.id})}/>
                </View>
             ))}
             <CreatePost/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        textAlign: 'center',
        padding: 10,
    }
});

export default Hello;