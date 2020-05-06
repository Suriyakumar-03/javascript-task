var name ="@ashik || #hello && #there || @hey";

const result_array=[];
const resultmap = name.split(" ").map(x=>{
    if(x.startsWith("@a")){
        result_array.push({
            "type":"entity",
            "value":x
        })
      }
     else if (x.startsWith("||")){

        return  result_array.push({
              "type":"operator",
              "value":x,
          })
      }
      else if (x.startsWith("#")){
          return result_array.push({
              "type":"intent",
              "value":x
          })
      }
      else if(x.startsWith("&&")){
          return result_array.push({
              "type":"operator",
              "value":"OR"
          })
      }
      else if (x.startsWith("@")){
          return result_array.push({
              "type":"entity",
              "value":x,
          })
        }
    })
console.log(result_array)