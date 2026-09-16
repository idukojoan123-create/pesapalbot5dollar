export default async function handler(req,res){
console.log("PAYMENT $5 -> 20k UGX to 0789525512",req.query);
return res.json({ok:true});
}
