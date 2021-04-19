import {rerenderEntireTree} from "../render";

let debag_encode = (data) => {

    var result = []

    data.forEach(its => {
        let el = its 

        let check = {
        é: ["é", "й"], ö: ["ö", "ц"], ó: ["ó", "у"], ê: ["ê", "к"], å: ["å", "е"], í: ["í", "н"], ã: ["ã", "г"], ø: ["ø", "ш"], ù: ["ù", "щ"], ç: ["ç", "з"], õ: ["õ", "х"], ô: ["ô", "ф"], â: ["â", "в"], à: ["à", "а"], ï: ["ï", "п"], ð: ["ð", "р"], î: ["î", "о"], ë: ["ë", "л"], ä: ["ä", "д"], æ: ["æ", "ж"], º: ["º", "є"], ÿ: ["ÿ", "я"], ñ: ["ñ", "с"], ì: ["ì", "м"], è: ["è", "и"], ò: ["ò", "т"], ü: ["ü", "ь"], á: ["á", "б"], þ: ["þ", "ю"], É: ["É", "Й"], Ö: ["Ö", "Ц"], Ó: ["Ó", "У"], Ê: ["Ê", "К"], Å: ["Å", "Е"], Í: ["Í", "Н"], Ã: ["Ã", "Г"], Ø: ["Ø", "Ш"], Ù: ["Ù", "Щ"], Ç: ["Ç", "З"], Õ: ["Õ", "Х"], Ô: ["Ô", "Ф"], Â: ["Â", "В"], À: ["À", "А"], Ï: ["Ï", "П"], Ð: ["Ð", "Р"], Î: ["Î", "О"], Ë: ["Ë", "Л"], Ä: ["Ä", "Д"], Æ: ["Æ", "Ж"], ª: ["ª", "Є"], ß: ["ß", "Я"], Ñ: ["Ñ", "С"], Ì: ["Ì", "М"], È: ["È", "И"], Ò: ["Ò", "Т"], Ü: ["Ü", "Ь"], Á: ["Á", "Б"], Þ: ["Þ", "Ю"]
        }

        el = el.replace(/[éöóêåíãøùçõôâàïðîëäæÿñìèòüáþÉÖÓÊÅÍÃØÙÇÕÔÂÀÏÐÎËÄÆßÑÌÈÒÜÁÞ]/g, (a1) => {           
            

            if (check[a1][0]==a1){
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
        el = el.replace(/[  ]/g, " ")
        
        result.push(el)

    })

    
   return result;

  
}

export default debag_encode










// let state = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'Hi, how are you?', likesCount: 12},
//             {id: 2, message: 'It\'s my first post', likesCount: 11},
//             {id: 3, message: 'Blabla', likesCount: 11},
//             {id: 4, message: 'Dada', likesCount: 11}
//         ],
//         new_post_text: "it-kamasutra.com"
//     },
//     dialogsPage: {
//         dialogs: [
//             {
//                 id: 1, 
//                 name: 'Dimych',
//                 messages: [
//                     {id: 1, message: 'Hi'},
//                     {id: 0, message: 'How is your it-kamasutra?'},
//                     {id: 1, message: 'Yo'}
//                 ]
//             },
//             {id: 2, name: 'Andrew',
//             messages: [
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'}
//             ]
//             },
//             {id: 3, name: 'Sveta',
//             messages: [
//                 {id: 1, message: 'whay'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'}
//             ]
//             },
//             {id: 4, name: 'Sasha',
//             messages: [
//                 {id: 1, message: 'lo'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'}
//             ]
//             },
//             {id: 5, name: 'Viktor',
//             messages: [
//                 {id: 1, message: 'nit'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'}
//             ]
//             },
//             {id: 6, name: 'Valera',
//             messages: [
//                 {id: 1, message: 'dat'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'},
//                 {id: 1, message: 'Hi222'},
//                 {id: 0, message: 'How is your it-kamasutra?2222'},
//                 {id: 1, message: 'Yo2222'},
//                 {id: 1, message: 'Hi'},
//                 {id: 0, message: 'How is your it-kamasutra?'},
//                 {id: 1, message: 'Yo'}
//             ]
//             }
//         ]

//     },
//     sidebar: {}


// }

// export let add_post = (post_message) => {
//     let new_post = {
//         id: state.profilePage.posts.length + 1, 
//         message: post_message,
//         likesCount: 115
//     }    
//     state.profilePage.posts.push(new_post)
//     rerenderEntireTree(state);
// }

// // add_post('hi bro miha');



// export default state