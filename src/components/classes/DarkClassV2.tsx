import { useEffect } from 'react';

const DarkClassV2 = () => {

    useEffect(() => {
        document.body.classList.add("bg-dark", "bg-fixed", "fixed-cursor");
        document.body.style.backgroundImage = "url('/assets/img/shape/1.jpg')";

        return () => {
            document.body.classList.remove("bg-dark", "bg-fixed", "fixed-cursor");
            document.body.style.backgroundImage = "";
        };
    }, []);

    return (
        <>

        </>
    );
};

export default DarkClassV2;