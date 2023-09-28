import axios from 'axios';


const ACCOUNT_TRANSFER_API_URL = 
'http://onlinewallet-env.eba-kvnmjap9.us-east-1.elasticbeanstalk.com/transfer';


const ACCOUNT_TRANSACTIONS_API_URL = 
'http://onlinewallet-env.eba-kvnmjap9.us-east-1.elasticbeanstalk.com/transactions';

const ACCOUNT_TRANSACTIONS_SEVEN_DAYS_API_URL = 
'http://onlinewallet-env.eba-kvnmjap9.us-east-1.elasticbeanstalk.com/transactions/sevendays';


class TransferService{

     newTransfer(transferInfo){
         return axios.post(ACCOUNT_TRANSFER_API_URL,transferInfo)
     }

     
    
     getTransactionsAllTime(){
        return axios.get(ACCOUNT_TRANSACTIONS_API_URL);
    }
    getTransactionsSevenDays(currentdate,username){
        return axios.get(ACCOUNT_TRANSACTIONS_SEVEN_DAYS_API_URL+"/"+currentdate+"/"+username);
    }

    getMoneyInToday(currentdate,username){
        return axios.get( ACCOUNT_TRANSACTIONS_API_URL+"/receive/today/"+currentdate+"/"+username);
    }
    getMoneyInSevenDays(currentdate,username){
        return axios.get( ACCOUNT_TRANSACTIONS_API_URL+"/receive/sevendays/"+currentdate+"/"+username);
    }
    getMoneyInMonth(currentdate,username){
        return axios.get( ACCOUNT_TRANSACTIONS_API_URL+"/receive/month/"+currentdate+"/"+username);
    }

    getMoneyInTotal(username){
        return axios.get( ACCOUNT_TRANSACTIONS_API_URL+"/receive/"+username);
    }

   
    getMoneyOutToday(currentdate,username){
        return axios.get( ACCOUNT_TRANSACTIONS_API_URL+"/sent/today/"+currentdate+"/"+username);
    }
    getMoneyOutSevenDays(currentdate,username){
        return axios.get( ACCOUNT_TRANSACTIONS_API_URL+"/sent/sevendays/"+currentdate+"/"+username);
    }
    getMoneyOutMonth(currentdate,username){
        return axios.get( ACCOUNT_TRANSACTIONS_API_URL+"/sent/month/"+currentdate+"/"+username);
    }

    getMoneyOutTotal(username){
        return axios.get( ACCOUNT_TRANSACTIONS_API_URL+"/sent/"+username);
    }



}
export default new TransferService();