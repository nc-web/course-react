
# PROPS

    - React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.
    
    - Las props son como atributos que se le pueden agregar a un componente
    - Se pueden pasar de padre a hijo
    - No son mutables (No puedes cambiar el valor de ellas en los hijos)


## Familiar props 

    - Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an <img>:

    Example:

        function Avatar() {
            return (
                <img
                className="avatar"
                src="https://i.imgur.com/1bX5QH6.jpg"
                alt="Lin Lanying"
                width={100}
                height={100}
                />
            );
        }
                       
        export default function Profile() {
            return (
                <Avatar />
            );
        }


## Passing props to a component 

    - In this code, the Profile component isn’t passing any props to its child component, Avatar:


    - irst, pass some props to Avatar. For example, let’s pass two props: person (an object), and size (a number):

        export default function Profile() {
            return (
                <Avatar
                person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
                size={100}
                />
            );
        }

    - You can read these props by listing their names person, size separated by the commas inside ({ and }) directly after function Avatar. This lets you use them inside the Avatar code, like you would with a variable.

        function Avatar({ person, size }) {
            // person and size are available here
        }


    - Add some logic to Avatar that uses the person and size props for rendering, and you’re done.

    Now you can configure Avatar to render in many different ways with different props. Try tweaking the values!

    import { getImageUrl } from './utils.js';

    function Avatar({ person, size }) {
        return (
            <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
            />
        );
    }

    export default function Profile() {
        return (
            <div>
            <Avatar
                size={100}
                person={{ 
                name: 'Katsuko Saruhashi', 
                imageId: 'YfeOqp2'
                }}
            />
            <Avatar
                size={80}
                person={{
                name: 'Aklilu Lemma', 
                imageId: 'OKS67lh'
                }}
            />
            <Avatar
                size={50}
                person={{ 
                name: 'Lin Lanying',
                imageId: '1bX5QH6'
                }}
            />
            </div>
        );
    }