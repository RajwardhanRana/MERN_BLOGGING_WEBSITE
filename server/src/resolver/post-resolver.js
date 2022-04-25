//CRUD OPERATIONS
import blog from "../schema/schema.js";
export const CreatePost= async (req,res) =>{
    console.log(req.body)
    try{
     const post =await new blog(req.body)
     post.save()
     res.status(200).json('blog saved')
    }
    catch(error){
      res.status(500).json(error)
    }
}
//create^
//read
export const getAllPost=async(req,res)=>{
  // let author =req.query.author;
  let posts;
 try{

posts=await blog.find({})
res.status(200).json(posts)   }
 //read by id
 catch(error){
   console.log('error while featching post ')
   res.status(500).json(error)
 }
};
//mongodb->fix permanantely
//if(update)->id update
export const getPost = async (req, res) => {
  try {
    // params -> parameters user-> server
    const post = await blog.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};
// mongo_id, text, title, author

export const updatePost = async (req, res) => {
  try {
    // _id, new value of the schema
    await blog.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("blog updated");
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deletePost = async (req, res) => {
  // findById ->
  try {
    const post = await blog.findById(req.params.id);
    await post.delete();
    res.status(200).json('blog deleted');
  } catch (error) {
    res.status(500).json(error);
  }
};