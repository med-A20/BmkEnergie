export default {
    name : "testamonial",
    title : "Your Testamonials",
    type : 'document',
    fields : [
        {
            name : 'name',
            title : 'Full Name Of Client',
            type : 'string'
        },
        {
            name : 'job',
            title : 'Job Or Functionality Of Client',
            type : 'string'
        },
        {
            name : 'image',
            title : 'Image',
            type : 'image',
            options : {
                hotspot : true
            }
        },
        {
            name : 'testamonial',
            title : 'Testamonial',
            type : 'text',
            options : {
                maxLenght : 40
            }
        }
    ]
}