import "../IndividualTopics.css"
import {useParams} from "react-router-dom"

const IndividualTopics = () => {
    const {slug} = useParams()

    return <h2 className="indiv-topic-header">{slug}</h2>
}

export default IndividualTopics