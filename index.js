const image_gallery = ['https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_480,c_limit,dpr_1/cdn/2c2dd0ea-8dec-4d49-8a95-f7b18f0b7aed/df312655-1d96-457d-88f4-cfc93c580d1d_560_420.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpR0X1hmpt4Kd2WviLXQGPrnUllW2UoLgtoWBoesgtFtSPFCF808bibJ8K2VhHRCki48&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmLTuD78jeZaVR3I_xfIuvmE4tse_JuhGjQ&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxWrBodkwbTlxbMexeQCOneifPHaOUoTFwPA&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQMwmsMjdYfF0W0cyMPX673aKVK3m8sSDjg&usqp=CAU']
        function random_image_picker(min, max) {
            let a = Math.floor(Math.random() * (max - min + 1) + min);
            return image_gallery[a];
        }
        let background_theme = document.querySelector('#background_theme');
        let main = document.getElementsByTagName('main');
        background_theme.addEventListener('click',function(){
            main.style.backgroundImage = URL(random_image_picker(0,4))
        })


        /*************************************************/
        function changeBackgroundImage(){
          if (times < 10){
            return " img1.PNG ";
                    } else {
                      return " img2.PNG" ;
                    }

        }

        