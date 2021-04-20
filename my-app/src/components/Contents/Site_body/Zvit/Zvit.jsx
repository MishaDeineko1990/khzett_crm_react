// import React from 'react';
// import s from './Correspondence.module.css';
// import Dialogs from './Dialogs/Dialogs';
// import Mes from './Mes/Mes';

import React from 'react';
import s from './Zvit.module.css';
import {NavLink} from "react-router-dom"

const Zvit = () =>{







        
        function debag_encode (data){

            var result = []

            data.forEach(its => {
                let el = its 

                let check = {
                é: ["é", "й"], ö: ["ö", "ц"], ó: ["ó", "у"], ê: ["ê", "к"], å: ["å", "е"], í: ["í", "н"], ã: ["ã", "г"], ø: ["ø", "ш"], ù: ["ù", "щ"], ç: ["ç", "з"], õ: ["õ", "х"], ô: ["ô", "ф"], â: ["â", "в"], à: ["à", "а"], ï: ["ï", "п"], ð: ["ð", "р"], î: ["î", "о"], ë: ["ë", "л"], ä: ["ä", "д"], æ: ["æ", "ж"], º: ["º", "є"], ÿ: ["ÿ", "я"], ñ: ["ñ", "с"], ì: ["ì", "м"], è: ["è", "и"], ò: ["ò", "т"], ü: ["ü", "ь"], á: ["á", "б"], þ: ["þ", "ю"], É: ["É", "Й"], Ö: ["Ö", "Ц"], Ó: ["Ó", "У"], Ê: ["Ê", "К"], Å: ["Å", "Е"], Í: ["Í", "Н"], Ã: ["Ã", "Г"], Ø: ["Ø", "Ш"], Ù: ["Ù", "Щ"], Ç: ["Ç", "З"], Õ: ["Õ", "Х"], Ô: ["Ô", "Ф"], Â: ["Â", "В"], À: ["À", "А"], Ï: ["Ï", "П"], Ð: ["Ð", "Р"], Î: ["Î", "О"], Ë: ["Ë", "Л"], Ä: ["Ä", "Д"], Æ: ["Æ", "Ж"], ª: ["ª", "Є"], ß: ["ß", "Я"], Ñ: ["Ñ", "С"], Ì: ["Ì", "М"], È: ["È", "И"], Ò: ["Ò", "Т"], Ü: ["Ü", "Ь"], Á: ["Á", "Б"], Þ: ["Þ", "Ю"]
                }

                el = el.replace(/[éöóêåíãøùçõôâàïðîëäæÿñìèòüáþÉÖÓÊÅÍÃØÙÇÕÔÂÀÏÐÎËÄÆßÑÌÈÒÜÁÞ]/g, (a1) => {           
                    

                    if (check[a1]){
                        return check[a1][1]
                    }
                    
                })

                el = el.replace(/[³]/g, "і")
                el = el.replace(/[¿]/g, "ї")
                el = el.replace(/[º]/g, "є")
                el = el.replace(/[÷]/g, "ч")
                el = el.replace(/[¯]/g, "Ї")
                el = el.replace(/[²]/g, "І")
                el = el.replace(/[ª]/g, "Є")
                el = el.replace(/[×]/g, "Ч")
                for(let i=0; i<10; i++){
                    el = el.replace(/  /g, " ")
                }
                
                el = el.replace(" Шнекова", "Шнекова")

                result.push(el)

            })
            
        console.log(result); 
        }





        let data = [
            "    Øíåêîâà ñï³ðàëü 225*76*220  S-4 L-2,0ì ë³âà 01300",
            "6666 ",
            "   Øíåêîâà ñï³ðàëü 225*76*220  S-4 L-2,0ì ë³âà 01300 ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " "
            ]    


    debag_encode(data)

      










    return (
        <div>

        </div>
    )



}

export default Zvit;