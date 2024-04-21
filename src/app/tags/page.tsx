
import { getTags } from "../actions";

export default async function TagsPage() {
    const posts = await getTags()
    const expand = posts.map(p => p.expand)
    const tags = expand.map(t => t?.tags)
    let tagObjects: any = []
    tags.forEach(t => {
        tagObjects = [...tagObjects, ...t]
    })
    const countTags: any = {}
    tagObjects.forEach((t: any) => {
        if (Object.keys(countTags).includes(t.tag.replace(' ', '-'))) {
            countTags[t.tag.replace(' ', '-')] += 1
        } else {
            countTags[t.tag.replace(' ', '-')] = 1
        }
    })

    return (
        <div>oi</div>
    )
}