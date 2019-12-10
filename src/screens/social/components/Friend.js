export default function Friends(prop) {
    //When user click, it will move to the chat 
    return (
        <TouchableOpacity style = {prop.style[0]}>
            <Text style = {prop.style[1]}> 
                {prop.title} 
            </Text>
        </TouchableOpacity>
    );
}