export default {
    name : 'about',
    title : 'about',
    type : 'document',
    fields : [
        {
            name : 'image',
            title : 'Image',
            type : 'image',
            options : {
                hotspot : true
            }
        },
        {
            name : 'job',
            title : 'Job',
            type : 'string',
            maxLength : 25,
            validation: Rule => Rule.max(25).warning(`A title shouldn't be more than 120 characters.`)
        },
        {
            name : 'description',
            title : 'description',
            type : 'text',
        }
    ]
}