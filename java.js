const product = [
    {
        id: 0,
        image: 'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/19ZX1000Y_201GY3DRS1CG_A.png',
        title: 'Kawazaki Ninja H2R ',
        price: 56000,
    },
    {
        id: 1,
        image: 'https://th.bing.com/th/id/R.d703d0968a323ebb8e8e4e9430e11b7c?rik=7tZlvFPKZktf0A&pid=ImgRaw&r=0',
        title: 'Aprilia sx50 limited edition 2016',
        price: 3000,
    },
    {
        id: 2,
        image: 'https://th.bing.com/th/id/OIP.-Zm-9D5YnM7Q-tbidzgrnQAAAA?rs=1&pid=ImgDetMain',
        title: 'bmw r 1250 gs black',
        price: 23700,
    },
    
    {
        id: 3,
        image: 'https://www.motoplanete.com/yamaha/zoom-700px/9981-YZ-450-F-50eme-anniversaire-2024-1000px.webp',
        title: 'Yamaha YZ 450 F 50th Anniversary 2024',
        price: 10000,
    },

    {
        id: 3,
        image: 'https://th.bing.com/th/id/R.e62ab84a21250d3edcf6a4188e9e4b21?rik=3B88iDWbaLDZWA&pid=ImgRaw&r=0',
        title: 'Kawazaki Z1000 Robot 2018',
        price: 23500,
    },

    {
        id: 3,
        image: 'https://img3.stcrm.it/images/14594168/HOR_STD/1000x/yamaha-t-max-530-sx-sport-edition-2018-04.jpg',
        title: 'Yamaha T-max 530 iron 2015',
        price: 35670,
    },

    {
        id: 3,
        image: 'https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2021/07/Yamaha-YZ450F-2022-motocross-33.jpg',
        title: 'Yamaha YZF 450 2022',
        price: 10000,
    },

    {
        id: 3,
        image: 'https://th.bing.com/th/id/R.fa0d5f68ae750656227de1020307f0c0?rik=uO3vAlQn5JIBMA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-9dR00m38y-I%2fTZdkp3PmIEI%2fAAAAAAAAAtQ%2f1h1f73_reTs%2fs1600%2fyamaha_r6-1280x800.jpg&ehk=CKNh9m3KcOIqQ7LsJb7l5ySoSfo5WTSFfPb1MiHqoV8%3d&risl=&pid=ImgRaw&r=0',
        title: 'Yamaha Y6 ZF 2023',
        price: 18900,
    },

    {
        id: 3,
        image: 'https://th.bing.com/th/id/R.f32b7bffa5faa4aa4aed86354dc9e195?rik=6nwBGhLuu28eXg&pid=ImgRaw&r=0',
        title: 'Yamaha Xtx 660 2012',
        price: 9850,
    },

    {
        id: 3,
        image: 'https://dakarvente.com/media/annonces/pics/1592e23f45fd8bac0d5329265a49f43b.jpg',
        title: 'Yamaha Mt07 2023',
        price: 38200,
    },

    {
        id: 3,
        image: 'https://s1.paultan.org/image/2016/10/2017-Yamaha-MT-10-10.jpg',
        title: 'Yamaha MT10 2017',
        price: 42500    ,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

 
}
