export default{
    name : 'experience',
    title : 'Your Experiences',
    type : 'document',
    fields : [
        {
            name : 'start',
            title : 'Start Date',
            type : 'date',
            options : {
                dateFormat : "YYYY",
            }
        },
        {
            name : 'end',
            title : 'End Date',
            type : 'date',
            options : {
                dateFormat : "YYYY",
            }
        },
        {
            name : 'jobs',
            title : 'lists Of jobs',
            type : 'array',
            of : [{type : 'job'}]
        }
    ]
}