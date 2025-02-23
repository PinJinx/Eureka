import { FormEvent } from "react";


export async function GetAllPost(tags: string[]) {
    const url = "https://temp2-nu.vercel.app/posts";
    const tagQuery = tags.length > 0 ? `tags=${tags.join(",")}` : "";
    const apiUrl = tagQuery ? `${url}?${tagQuery}` : url;

    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            console.error("Failed to fetch data:", response.statusText);
            return;
        }
        const result = await response.json();
        let l = [];
        for (const i of result) {
            let k = [];
            if (i.replies) {
                for (const reply of i.replies) {
                    k.push([reply.users.username, reply.content]);
                }
            }
            l.push({
                title: i.title || "",
                author: i.users?.username || "Unknown",
                desc: i.content || "",
                interested: i.interested?.[0]?.count || 0,
                tags: i.tags ? i.tags.split(",") : [],
                comments: k,
                postid:i.id
            });
        }
        return l;
    } catch (error) {
        console.error("Error fetching data:", error);
        return ({
            title: "Title Not Loaded Properly",
            author: "Author",
            desc: "No Description",
            interested: 0,
            tags: ["AI", "ML", "Web", "DeepNet", "Blockchain"],
            comments: [[""]],
            postid:""
        });
    }
}



export async function AddAPost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const req = {
        title: data.get("title"),
        content: data.get("content"),
        tags: data.get("tags"),
        id:sessionStorage.getItem("ID")
    };
    if (!req.title || !req.content) {
        console.error("Title and content cannot be empty.");
        return;
    }
    try {
        const response = await fetch("https://temp2-nu.vercel.app/post", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req),
        });

        if (!response.ok) {
            console.error("Failed to post:", response.statusText);
            return;
        }

        return GetAllPost([]);
    } catch (error) {
        console.error("Error posting:", error);
    }
}



export async function AddAComment(content:string,rid:string) {
    const req = {
        content: content,
        id:sessionStorage.getItem("ID")
    };
    try {
        const response = await fetch("https://temp2-nu.vercel.app/reply/"+rid, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req),
        });

        if (!response.ok) {
            console.error("Failed to post:", response.statusText);
            return;
        }
        return 200;
    } catch (error) {
        console.error("Error posting:", error);
        return 400;
    }
}
