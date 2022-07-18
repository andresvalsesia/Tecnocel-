const Product = require("../model/products");

const productController={
                   
    createProduct: async (req, res) => {
      console.log(req)
        let product;
        let {name,description,price,brand,color,sizeTv,RAM,images,category,stock,system,disc,processor} = req.body
        let error=null;
        
        try{
    
         product = await new Product({
                name:name,
                description:description,
                price:price,
                brand:brand,
                color:color,
                sizeTv:sizeTv,
                RAM:RAM,
                images:images,
                category:category,
                stock:stock,
                system:system,
                disc:disc,
                processor:processor
    
         }).save()
        }
        
        catch(err){
            error=err} 
        
       res.json({
         response: error? 'ERROR':{product},
         success: error ? false : true,
         error:error
       });
     },

     getAllproducts: async(req,res)=>{
      let products;
      let error=null;

      try{
          products=await Product.find();
      }
      catch(err){error=err}
    
      
     res.json({
        response: error? 'ERROR':{products},
        success:error? false:true,
        error:error
     })
    },
    
    getOneproduct: async(req, res)=>{
        let id=req.params.id;
        let product;
        let error=null;

        try{
          product= await Product.findById(id);
        }
        catch(err){error=err}

        res.json({
          reponse: error? 'ERROR':{product},
          success:error? false:true,
          error:error
        })
    }
}

module.exports=productController;

