



export default function About(props) {





    return (

        <>
            <div className="container" mode={props.mode}>
                <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042734' }}>
                    TextUtils is a utility website to manipulate text such as converting lowercase to uppercase and vice versa or clearing the text , removing extra spaces , copying the text etc. You can count the number of words and Characters also .
                </div>
            </div>
        </>
    );


}
