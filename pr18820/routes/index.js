const express = require('express');
const router = express.Router();
const db = require('../serverGeral-s');  //caminho relativo em nosso projeto do arquivo de conexão
const { connect } = require('mongodb');


/* GET home page. */
router.get('/', function(req, res, next) {
  db.consultarDocumentos()
    .then(docs => {
      console.log('----------------------------------------');
      const documento=docs.forEach(item => {

        console.log(item.topic); 
        t = item.topic.split('/');
        t0 = t[0];                    //chave geral do mqtt -- METRO_DF
        t1 = t[1];                    //Estação
        if(t1 ==='ARN'){
        m = item.message.split(',');
        arnmA = m[9];                    // total da estação para todos os bloqueios no modo entrada
        arnmB = m[10];                   // total da estação para todos os bloqueios no modo saída 
        }
        else if(t1 ==='GAL'){
          m = item.message.split(',');
          galmA = m[9];                    // total da estação para todos os bloqueios no modo entrada
          galmB = m[10];  
        }         
        else if(t1==='CTL'){
          m = item.message.split(',');
          ctlmA = m[9];                    // total da estação para todos os bloqueios no modo entrada
          ctlmB = m[10];   
        }   
       // arnmA=0;
       // arnmB=0;
       // galmA=0;
       // galmB=0;
       if(t1!=='CTL'){
        ctlmA=0;
        ctlmB=0;
       }
                          
      });
        
      res.render('index', { title: 'Controle de usuários', docs, arnmA, arnmB, galmA, galmB, ctlmA, ctlmB}); 
    })
    .catch(error => console.log(error)); 

  })


  router.get('/ARN', function(req, res, next) {
    db.consultarDocumentos()
      .then(docs => {
        
        console.log('----------------------------------------');
        const documento=docs.forEach(item => {
          console.log(item.topic); 
          t = item.topic.split('/');
          t0 = t[0];                    //chave geral do mqtt -- METRO_DF
          t1 = t[1];                    //Estação
          if(t1 ==='ARN'){
            console.log(t0);
            console.log(t1);
            m = item.message.split(',');
            m2 = m[1];                    // modo (entrada (false) ou saída (true))
            m3 = m[2];                    // total para o modo do bloqueio
            m4 = m[3];                    // dia
            m5 = m[4];                    // mes
            m6 = m[5];                    // ano
            m7 = m[6];                    // hora
            m8 = m[7];                    // minuto
            m9 = m[8];                    // segundo
            arnmA = m[9];                    // total da estação para todos os bloqueios no modo entrada
            arnmB = m[10];                   // total da estação para todos os bloqueios no modo saída 
            mC = m[11];                   // tipo de bilhete 
            mD = m[12];                   // flag de fim do pacote = 0]}
                         
            //tratamento de m0
            a = m[0].split(':');
            b=a[0].split('"');
            arnm0=b[1];                    // bloqueio  a1...a8 / b1...b8 / c1...c4  
            m1 = a[1]                   // flag de inicio da mensagem = [1
            console.log('oiarn'+arnmA);

          }

        }); 
        
        res.render('arn.ejs',{arnmA, arnmB});
        //res.render('arn.ejs',{arnmAdma, arnmB});
        console.log(arnmA);
        
      })
      .catch(error => console.log(error)); 
  });


  /*
  router.get('/ARN', function(req, res, next) {
    db.consultarDocumentos()
      .then(docs => {
        
        console.log('----------------------------------------');
        const documento=docs.forEach(item => {
          console.log(item.topic); 
          t = item.topic.split('/');
          t0 = t[0];                    //chave geral do mqtt -- METRO_DF
          t1 = t[1];                    //Estação
          if(t1 ==='ARN'){

            console.log(t0);
            console.log(t1);
            m = item.message.split(',');
            m2 = m[1];                    // modo (entrada (false) ou saída (true))
            m3 = m[2];                    // total para o modo do bloqueio
            m4 = m[3];                    // dia
            m5 = m[4];                    // mes
            m6 = m[5];                    // ano
            m7 = m[6];                    // hora
            m8 = m[7];                    // minuto
            m9 = m[8];                    // segundo
            arnmA = m[9];                    // total da estação para todos os bloqueios no modo entrada
            arnmB = m[10];                   // total da estação para todos os bloqueios no modo saída 
            mC = m[11];                   // tipo de bilhete 
            mD = m[12];                   // flag de fim do pacote = 0]}
                         
            //tratamento de m0
            a = m[0].split(':');
            b=a[0].split('"');
            arnm0=b[1];                    // bloqueio  a1...a8 / b1...b8 / c1...c4  
            m1 = a[1]                   // flag de inicio da mensagem = [1
            console.log('oiarn'+arnmA);
            const z = arnmA;
          }
        });   

        res.render('arn.ejs',{arnmA, arnmB});
        console.log(arnmB);  
      })
      .catch(error => console.log(error)); 
  });
*/
  router.get('/GAL', function(req, res, next) {
    db.consultarDocumentos()
      .then(docs => {
        
        console.log('----------------------------------------');
        const documento=docs.forEach(item => {
          console.log(item.topic); 
          t = item.topic.split('/');
          t0 = t[0];                    //chave geral do mqtt -- METRO_DF
          t1 = t[1];                    //Estação
          if(t1 ==='GAL'){
            console.log(t0);
            console.log(t1);
            m = item.message.split(',');
            m2 = m[1];                    // modo (entrada (false) ou saída (true))
            m3 = m[2];                    // total para o modo do bloqueio
            m4 = m[3];                    // dia
            m5 = m[4];                    // mes
            m6 = m[5];                    // ano
            m7 = m[6];                    // hora
            m8 = m[7];                    // minuto
            m9 = m[8];                    // segundo
            galmA = m[9];                    // total da estação para todos os bloqueios no modo entrada
            galmB = m[10];                   // total da estação para todos os bloqueios no modo saída 
            mC = m[11];                   // tipo de bilhete 
            mD = m[12];                   // flag de fim do pacote = 0]}
                         
            //tratamento de m0
            a = m[0].split(':');
            b=a[0].split('"');
            galm0=b[1];                    // bloqueio  a1...a8 / b1...b8 / c1...c4  
            m1 = a[1]                   // flag de inicio da mensagem = [1
            console.log('oigal'+galmA);

          }

        }); 
        
        res.render('gal.ejs',{galmA, galmB});
        //res.render('gal.ejs',{galmAdma, galmB});
        console.log(galmA);
        
      })
      .catch(error => console.log(error)); 
  });

router.get('/CTL', function(req, res, next) {
  db.consultarDocumentos()
    .then(docs => {
      
      console.log('----------------------------------------');
      const documento=docs.forEach(item => {
        console.log(item.topic); 
        t = item.topic.split('/');
        t0 = t[0];                    //chave geral do mqtt -- METRO_DF
        t1 = t[1];                    //Estação
        if(t1 ==='CTL'){
        console.log(t0);
        console.log(t1);
        m = item.message.split(',');
        m2 = m[1];                    // modo (entrada (false) ou saída (true))
        m3 = m[2];                    // total para o modo do bloqueio
        m4 = m[3];                    // dia
        m5 = m[4];                    // mes
        m6 = m[5];                    // ano
        m7 = m[6];                    // hora
        m8 = m[7];                    // minuto
        m9 = m[8];                    // segundo
        ctlmA = m[9];                    // total da estação para todos os bloqueios no modo entrada
        ctlmB = m[10];                   // total da estação para todos os bloqueios no modo saída 
        mC = m[11];                   // tipo de bilhete 
        mD = m[12];                   // flag de fim do pacote = 0]}
                       
        //tratamento de m0
        a = m[0].split(':');
        b=a[0].split('"');
        ctlm0=b[1];                    // bloqueio  a1...a8 / b1...b8 / c1...c4  
        m1 = a[1]                   // flag de inicio da mensagem = [1
        console.log('oictl'+mA);
        res.render('ctl.ejs',{ctlmA, ctlmB});
        console.log(ctlmB);
      }
      });     
    })
    .catch(error => console.log(error)); 
});

module.exports = router;
