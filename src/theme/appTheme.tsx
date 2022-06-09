import { StyleSheet } from "react-native";

export  const colores = {
    primary:'#C2E7D9',
    secondary:'#A6CFD5',
    third:'#26408B',
    fourth:'#0F084B',
    fifthy:'#0D0221'
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal:  20,
    },
    title:{
        fontSize: 30,
        marginBottom: 5,

    },
    botonGrande:{
        width: 100,
        height: 100,
        backgroundColor:'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent:'center',
        marginRight: 10,
        
    },
    botonGrandeTexto:{
        color:'white',
        fontSize:20,
        fontWeight: 'bold',
    },
    avatarContainer:{
        alignItems:'center',
        marginTop:20,
   
    },
    avatar:{
        width:150,
        height: 150,
        borderRadius:100,

    },
    menuContainer:{
        marginVertical: 25,
        marginHorizontal:50,

    },
    menuBoton:{
        marginVertical:10,
    },
    menuTexto:{
       fontSize: 20,

    }
     
});