import { useEffect } from 'react';

const LightClassV3 = () => {

    useEffect(() => {
        document.body.classList.add("bg-fixed");
        document.body.style.backgroundImage = "url('/assets/img/shape/6.jpg')";

        return () => {
            document.body.classList.remove("bg-fixed");
            document.body.style.backgroundImage = "";
        };
    }, []);

    return (
        <>

        </>
    );
};

export default LightClassV3;