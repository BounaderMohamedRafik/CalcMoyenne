function Calc(){
    
    //analyse variales:
    var analyseExam = document.getElementById('analyseExam').value;
    var analyseTD = parseFloat(document.getElementById('analyseTD').value);

    //algeber variales:
    var algebreEXAM = parseFloat(document.getElementById('algebreEXAM').value);
    var algebreTD = parseFloat(document.getElementById('algebreTD').value);

    //struct variales:
    var structEXAM = parseFloat(document.getElementById('structEXAM').value);
    var structTD = parseFloat(document.getElementById('structTD').value);

    //Electronic variales:
    var electEXAM = parseFloat(document.getElementById('electEXAM').value);
    var electTD = parseFloat(document.getElementById('electTD').value);

    //Anglais variales:
    var anglaisEXAM = parseFloat(document.getElementById('anglaisEXAM').value);

    //Terminologie variales:
    var termEXAM = parseFloat(document.getElementById('termEXAM').value);

    //algorithm variales:
    var algoEXAM = parseFloat(document.getElementById('algoEXAM').value);
    var algoTD = parseFloat(document.getElementById('algoTD').value);
    var algoTP = parseFloat(document.getElementById('algoTP').value);

    var a = 0;

    //analyse silencer :
    if((analyseExam < 0)||(analyseExam > 20)){
        alert("Il y a erreur ( Examen De Analyse )"); 
    }
    if((analyseTD < 0)||(analyseTD > 20)){
        alert("Il y a erreur ( TD De Analyse )");
    }

    //algebre silencer :
    if((algebreEXAM < 0)||(algebreEXAM > 20)){
        alert("Il y a erreur ( Examen De algebre )");
    }
    if((algebreTD < 0)||(algebreTD > 20)){
        alert("Il y a erreur ( TD De algebre )");
    }

    //struct silencer :
    if((structEXAM < 0)||(structEXAM > 20)){
        alert("Il y a erreur ( Examen De Structure Machine )");
    }
    if((structTD < 0)||(structTD > 20)){
        alert("Il y a erreur ( TD De Structure Machine )");
    }

    //electronic silencer :
    if((electEXAM < 0)||(electEXAM > 20)){
        alert("Il y a erreur ( Examen De Electronique et Composant )");
    }
    if((electTD < 0)||(electTD > 20)){
        alert("Il y a erreur ( TD De Electronic et Composant )");
    }

    //anglais silencer :
    if((anglaisEXAM < 0)||(anglaisEXAM > 20)){
        alert("Il y a erreur ( Examen De Anlgais )");
    }


    //term silencer :
    if((termEXAM < 0)||(termEXAM > 20)){
        alert("Il y a erreur ( Examen De Terminologie )");
    }


    //algo silencer :
    if((algoEXAM < 0)||(algoEXAM > 20)){
        alert("Il y a erreur ( Examen De Algorithm )");
    }

    if((algoTD < 0)||(algoTD > 20)){
        alert("Il y a erreur ( TD De Algorithm )");
    }

    if((algoTP < 0)||(algoTP > 20)){
        alert("Il y a erreur ( Examen De Algorithm )");
    }

    //calculer chaque module : 

    //((TD * 0.4 + TP * 0.4)/2 ) + (Examen * 0.6) *lmo3aml
    //(TD * 0.4) + (EXAM * 0.6)   * lmo3aml


    // (majmou3 mo3dl les modules)/(majmou3 lmo3amilat)


    //mo3adel analyse :
    var AnalyseMod;
    AnalyseMod = ((analyseTD * 0.4)+(analyseExam * 0.6));
    
    //mo3adel algebre :
    var AlgebreMod;
    AlgebreMod = ((algebreTD * 0.4)+(algebreEXAM * 0.6));

    //mo3adel struct
    var StructMod = ((structTD * 0.4)+(structEXAM * 0.6));

    var electMod = ((electTD * 0.4)+(electEXAM * 0.6));

    var AnlgaisMod = anglaisEXAM + 0;
    var termMod = termEXAM + 0;

    var algoMod = (((algoTD * 0.4)+(algoTP * 0.4))/2) + (algoEXAM * 0.6);

    var moaadel = ((algoMod * 4)+(AnalyseMod * 4)+(AlgebreMod * 3)+(StructMod * 3)+(electMod * 2)+(AnlgaisMod)+(termMod))/18;

    var succ;

    if(moaadel >= 10){
        succ = 'succéder';
    }

    else if ( moaadel < 10){
        succ = 'échoué';
    }
    alert(`- Algorithmic = ${algoMod.toFixed(2)} \n - analyse = ${AnalyseMod.toFixed(2)} \n - algebre = ${AlgebreMod.toFixed(2)} \n - structure Machine = ${StructMod.toFixed(2)} \n - Electronic = ${electMod.toFixed(2)} \n - Anglais = ${AnlgaisMod.toFixed(2)} \n - Terminologie = ${termMod.toFixed(2)} \n \n \n - La Resultat = ${moaadel.toFixed(2)} (${succ}) `);





    

    

    
    

    
    

    


    
}