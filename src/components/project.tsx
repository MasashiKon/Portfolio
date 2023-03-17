import { useParams } from "react-router-dom";

export default function Project() {
    const {url} = useParams();

    return (
        <iframe 
            src={`http://${url}.vercel.app`}
            style={{width:'100%', height:'80vh'}}
        ></iframe>
    );
}