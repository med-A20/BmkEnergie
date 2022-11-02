export default {
  name: "skill",
  title: "Your Skills",
  type: "document",
  fields : [
    {
        name : 'name',
        title : 'Name Of Skill or tool',
        type : 'string'
    },
    {
        name : 'image',
        title : 'Image Of Skill Or Tool',
        type : 'image',
        options : {
            hotspot : true
        }
    },
  ]
};
