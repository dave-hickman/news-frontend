import { useEffect, useState } from "react"
import { getSingleArticle } from "../utils"
import {useParams} from "react-router-dom"

const IndividualArticle = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [article, setArticle] = useState({})
    const {article_id} = useParams()

    useEffect(() => {
        const fetchSingleArticle = async () => {
        const response = await getSingleArticle(article_id)
        setArticle(response.data)
   }
   fetchSingleArticle()
}, [])
    

    return <p>This is an individual article</p>
}

export default IndividualArticle