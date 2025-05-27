import { useEffect } from 'react';

const DarkClassV3 = () => {

    useEffect(() => {
        document.body.classList.add("bg-dark", "bg-cover");
        document.body.style.backgroundImage = "url('/assets/img/shape/2.jpg')";

        return () => {
            document.body.classList.remove("bg-dark", "bg-cover");
            document.body.style.backgroundImage = "";
        };
    }, []);

    return (
        <>

        </>
    );
};

export default DarkClassV3;