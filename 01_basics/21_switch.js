/*switch (key) {
    case value:
        
        break;

    default:
        break;
} */
const month = "march"             //const month = 3         string likhenge toh case 1: ki jgh case "jan"  string me likhna pdega
switch (month) {
    case 1:  
        console.log("january");
        break;
        case 2:
        console.log("february");
        break;
        case 3:
        console.log("march");
        //break;                      // agr brk na ho toh sare case execute hojayenge
        case 4:
        console.log("april");
        break;
    default:
        console.log("default case match");
        break;
}

    