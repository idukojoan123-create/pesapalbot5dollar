export default async function handler(req,res){
const P="https://cybqa.pesapal.com/pesapalv3/api";
const K="ZupFcYIwH3rdbtuozo7NZzqVfcurITI";
const S="3k+/qwViw+RM+WJqd/dYhsNqu4Y=";
const a=await fetch(P+"/Auth/RequestToken",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({consumer_key:K,consumer_secret:S})});
const b=await a.json();
if(!b.token) return res.json(b);
const c=await fetch(P+"/URLSetup/RegisterIPN",{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+b.token},body:JSON.stringify({url:"https://"+req.headers.host+"/api/pesapal/ipn",ipn_notification_type:"GET"})});
const d=await c.json();
return res.json({ipn_id:d.ipn_id,full:d});
}
