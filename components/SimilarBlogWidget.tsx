import React, {useState} from 'react';
import {useGetSimilarBlogsQuery } from '../graphql/generated/schema';

type Props = {
    slug: string,
    tags: any
};

const SimilarBlogWidget = ({slug, tags}:Props) => {
   const [widgetBlogs, setWidgetBlogs] = useState([])

    const {data} = useGetSimilarBlogsQuery({
        variables : {
            slug : slug,
            tags: tags
        }
    })


    return (
        <div>
            
        </div>
    );
};

export default SimilarBlogWidget;