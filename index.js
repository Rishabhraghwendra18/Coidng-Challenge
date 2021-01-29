function solution(D) {
      let days = new Array(8), daySum=new Array(8),
      newD={Mon:null,
            Tue:null,
            Wed:null,
            Thu:null,
            Fri:null,
            Sat:null,
            Sun:null
            };
      for (let i = 0; i < 8; i++) {
            days[i]=0;    
            daySum[i]=0;        
      }
      Object.keys(D).map((e) => {
            const date = new Date(e);
            const day = date.getDay();
            switch (day) {
                  case 1:
                        days[1] = 1;
                        daySum[1] += D[e];
                        break;
                  case 2:
                        days[2] = 1;
                        daySum[2] += D[e];
                        break;
                  case 3:
                        days[3] = 1;
                        daySum[3] += D[e];
                        break;
                  case 4:
                        days[4] = 1;
                        daySum[4] += D[e];
                        break;
                  case 5:
                        days[5] = 1;
                        daySum[5] += D[e];
                        break;
                  case 6:
                        days[6] = 1;
                        daySum[6] += D[e];
                        break;
                  case 0:
                        days[7] = 1;
                        daySum[7] += D[e];
                        break;

                  default:
                        break;
            }
      })
      for (let i = 1; i < 8; i++) {
            let mean=0;
            if(!days[i]){
                  if(i!=7){
                        mean=(daySum[i-1]+daySum[i+1])/2;

                  }
                  else{
                         mean=(daySum[i-1]+0)/2;
                  }
                  daySum[i]=mean;
            }
            switch (i) {
                  case 1:
                        newD.Mon=daySum[i];
                        break;
                  case 2:
                        newD.Tue=daySum[i];
                        break;
                  case 3:
                        newD.Wed=daySum[i];
                        break;
                  case 4:
                        newD.Thu=daySum[i];
                        break;
                  case 5:
                        newD.Fri=daySum[i];
                        break;
                  case 6:
                        newD.Sat=daySum[i];
                        break;
                  case 7:
                        newD.Sun=daySum[i];
                        break;

                  default:
                        break;
            }       
      }
      return newD;
}

module.exports=solution;
