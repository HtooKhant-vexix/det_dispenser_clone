import color from "./color"


export default {
    color,
    tableCell: {
        width:100,
        backgroundColor: color.background,
        fontSize: 10,
        height:50,
        borderWidth: 0.4,
        borderColor: '#535c68',
        padding: 5, 
        display: 'flex',
        alignItem: 'center',
        justifyContent:'center'

    },
    tableCellText: {
        color: color.light,
        fontSize: 13,
        fontWeight:'500',
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
        textAlign: 'center',
        lineHeight: 20,
    }
}