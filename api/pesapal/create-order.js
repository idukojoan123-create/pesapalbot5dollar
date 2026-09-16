export default async function handler(req,res){
res.setHeader("Access-Control-Allow-Origin","*");
const IPN=(req.query.ipn_id||req.body?.ipn_id||"").toString();
const P="https://cybqa.pesapal.com/pesapalv3/api";
const K="ZupFcYIwH3rdbtuozo7NZzqVfcurITI";
const S="3k+/qwViw+RM+WJqd/dYhsNqu4Y=";
const a=await fetch(P+"/Auth/RequestToken",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({consumer_key:K,consumer_secret:S})});
const b=await a.json();
const o=await fetch(P+"/Transactions/SubmitOrderRequest",{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+b.token},body:JSON.stringify({id:"BOT5_"+Date.now(),currency:"UGX",amount:20000,description:"AI Bot $5 ("+(req.body?.currency||"UGX")+") =20k UGX -> MTN 0789525512",callback_url:"https://"+req.headers.host+"/",notification_id:IPN,billing_address:{email_address:req.body?.email||"a@a.com",phone_number:req.body?.phone||"256789525512",country_code:"UG",first_name:req.body?.name||"Trader",last_name:"Bot",line_1:"Kampala"}})});
const d=await o.json();
return res.json(d);
}
