export default {
    name : 'portfolio',
    title : 'Portfolio',
    type : 'document',
    fields : [
        {
            name : 'name',
            title : 'Project Name',
            type : 'string'
        },
        {
            name : 'category',
            title : 'Project Category',
            type : 'string'
        },
        {
            name : 'info',
            title : 'Project detaits',
            type : 'text'
        },
        {
            name : 'image',
            title : 'Project Image',
            type : 'image',
            options : {
                hotspot : true
            }
        }
    ]
}