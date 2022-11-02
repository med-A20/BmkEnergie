export default {
    name : "home",
    title : "Home",
    type : "document",
    fields : [
        {
            name : "logo",
            title : "Logo",
            type : 'image',
            options : {
                hotspot : true
            }
        },
        {
            name : "image",
            title : "Landing Page Image",
            type : 'image',
            options : {
                hotspot : true
            }
        },
        {
            name : "title",
            title : "Title",
            type : "string"
        },
        {
            name : "yellowTitle",
            title : "YellowTitle",
            type : "string"
        },
        {
            name : "description",
            title : "Description",
            type : "string"
        },
        {
            name : "cv",
            title : "CV",
            type : "file",
        }
    ]
}