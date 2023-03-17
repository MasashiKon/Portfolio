import { useParams } from "react-router-dom";

export default function Project() {
    const {url} = useParams();

    return (
        <iframe 
            src={`https://${url}.vercel.app`}
            style={{width:'100%', height:'80vh'}}
        ></iframe>
    );
}