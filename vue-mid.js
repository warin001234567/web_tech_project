class Card {
    constructor(id, link, title, img, location, text) {
        this.id = id;
        this.link = link;
        this.title = title;
        this.img = img;
        this.location = location;
        this.text = text;
    }
}

class Detail {
    constructor(id, title, address, information, place, image1, image2, image3){
        this.id = id;
        this.title = title;
        this.address = address;
        this.information = information;
        this.place = place;
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;

    }
}

const app = new Vue({
    el: '#app',
    data: {
        search: '',
        select: 0,
        informationlist: [
            new Detail(
                1,//ภาคกลาง
                "ปราสาทเมืองสิงห์",//Title
                "ตำบลสิงห์ อำเภอไทรโยค จังหวัดกาญจนบุรี",//Address
                "เป็นเมืองที่สร้างขึ้นตั้งแต่ขอมมีอำนาจ ประมาณ พ.ศ. ๑๔๐๐ - ๑๗๐๐ ครั้นเมื่อขอมหมดอำนาจและไทยได้เข้ามาครอบครองดินแดนแถบนี้แทน ในสมัยกรุงศรีอยุธยา \
                คงเห็นว่าเมืองสิงห์เป็นเมืองเล็กไม่มีความสำคัญจึงมิได้แต่งตั้งผู้ใดมาเป็นเจ้าเมือง คงปล่อยให้ร้างไปหลังจากขอมหมดอำนาจลง เมื่อถึงรัชสมัยพระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลก \
                จึงได้ทรงตั้งเมืองสิงห์ขึ้นใหม่อีกครั้ง และแต่งตั้งเจ้าเมืองมาครองในฐานะเป็นเมืองหน้าด่านขึ้นอยู่กับจังหวัดกาญจนบุรี เมืองสิงห์คงมีสภาพเป็นเมืองมาจนถึงสมัยพระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว \
                จึงได้เปลี่ยนแปลงการปกครองใหม่โดยจัดให้เป็นแบบมณฑลเทศาภิบาล เมืองสิงห์ จึงถูกยุบลงกลายเป็นตำบล ขึ้นอยู่กับอำเภอไทรโยคมาจนปัจจุบัน",//Information
                "จากการขุดแต่งบริเวณปราสาทเมืองสิงห์ โดยเจ้าหน้าที่กองโบราณคดี ได้พบประติมากรรมศิลปะขอมแบบบายนในพุทธศาสนาลัทธิมหายานที่สำคัญหลายชิ้น \
                ได้แก่ ประติมากรรมรูปพระโพธิสัตว์อวโลกิเตศวร นางปรัชญาปารมิตา และชิ้นส่วนของพระพุทธรูป เป็นต้น",//Place เป็นหลักฐานที่พบ
                "../../img/mid/ปราสาทเมืองสิงห์/ปราสาทเมืองสิงห์1.jpg",
                "../../img/mid/ปราสาทเมืองสิงห์/ปราสาทเมืองสิงห์2.gif",
                "../../img/mid/ปราสาทเมืองสิงห์/ปราสาทเมืองสิงห์3.jpg"
            ),
            new Detail(
                2,//ภาคกลาง
                "โบราณสถานเมืองเพนียด",//Title
                "สถานที่ตั้ง หมู่ที่ ๔ ตำบลคลองนารายณ์ อำเภอเมือง จังหวัดจันทบุรี",//Address
                "เพนียด เป็นชุมชนโบราณ ที่พบหลักฐานทางโบราณคดี ประวัติศาสตร์ที่สำคัญจากจารึกภาษาขอม อายุราว พ.ศ. ๘๐๐-๑๐๐๐ ได้กล่าวว่า บริเวณที่ตั้งโบราณสถานเพนียดนั้น \
                เดิมเป็นที่ตั้งเมืองจันทบุรีในยุคแรก ซึ่งขอมถือเป็นแหล่งอารยธรรมที่สำคัญเมืองหนึ่งของอาณาจักรกัมพูชา โดยมีเจ้าผู้ครองนครทำการปกครองอย่างเป็นอิสระ \
                ได้มีการติดต่อกับอินเดียและรับเอาวัฒนธรรมของอินเดียเข้ามาใช้ในวิถีชีวิต เนื่องจากเป็นบริเวณที่มีเรือสำเภาผ่านไปมาค้าขายกับจีน และอินเดีย ดังนั้นชาวพื้นเมืองก็คือชาวชองและชาวขอม",//Information
                "หลักฐานที่พบ ๑. พบจารึกเพนียด ๑ ขนาดกว้าง ๔๙ ซม. สูง ๔๗ ซม. หนา ๑๖.๕ ซม. ทำด้วยศิลาทราย จารึกด้วยอักษรขอมโบราณ ภาษาสันสกฤตและเขมร \
                ปัจจุบันอยู่ที่หอพระสมุดวชิรญาณ กองหอสมุดแห่งชาติ กรุงเทพมหานคร๒. โบราณวัตถุ เป็นหินแกะสลัก เป็นรูปและลวดลายต่าง ๆ เช่น ราหูอมจันทร์ เทวรูปหรือรามสูรย์ และเศษถ้วยชามต่าง ๆ \
                ปัจจุบันเก็บไว้ที่วัดทองทั่ว",//Place เป็นหลักฐานที่พบ
                "../../img/mid/โบราณสถานเมืองเพนียด/โบราณสถานเมืองเพนียด1.jpg",
                "../../img/mid/โบราณสถานเมืองเพนียด/โบราณสถานเมืองเพนียด2.jpeg",
                "../../img/mid/โบราณสถานเมืองเพนียด/โบราณสถานเมืองเพนียด3.jpg"
            ),
            new Detail(
                3,//ภาคกลาง
                "เขาโต๊ะโมะ",//Title
                "บ้านอีเร็ม ตำบลประณีต อำเภอเขาสมิง จังหวัดตราด",//Address
                "คำว่า โต๊ะโมะ เป็นภาษาชอง แปลว่า ฉางที่เก็บของ ภาษาเขมรต่ำ แปลว่า ภูเขาหรือเนินสูง กรมศิลปากร สันนิษฐานว่า โบราณสถานเขาโต๊ะโมะ \
                เป็นซากโบราณสถานที่เก่าแก่และใหญ่โต ระบุไม่ได้ว่าเป็นสมัยใด ได้ประกาศขึ้นทะเบียนเป็นโบราณสถาน เมื่อ ๓๑ สิงหาคม พ.ศ.๒๕๓๑ คณะสิ่งแวดล้อมและทรัพยากรศาสตร์ มหาวิทยาลัยมหิดล \
                สันนิษฐานว่าแท่งหินเหล่านี้เกิดจากการแทรกดันตัวของหินอัคนี เรียกว่า หินบะซอลท์จากคำบอกเล่าเชื่อว่าคงมีการนำแท่งหินจากบ่อขุมทรัพย์ซึ่งอยู่บริเวณใกล้เคียงกับโบราณสถาน \
                มาเรียงกันเพื่อทำเทวสถานไว้เป็นเครื่องสักการะบูชา สังเกตได้จากการปลูกต้นโศกไว้รอบ ๆ เทวสถาน",//Information
                "หลักฐานที่พบ บริเวณพื้นที่รอบ ๆ โบราณสถานประมาณ ๕ กิโลเมตร ชาวบ้านพบวัตถุโบราณสมัยก่อนประวัติศาสตร์ เป็นเครื่องมือ เครื่องใช้ประเภทหินขัด เครื่องปั้นดินเผา \
                เครื่องบดยาหิน พระพุทธรูปเก่าแก่ จากหลักฐานที่พบแสดงให้เห็นว่าบริเวณนี้อาจเป็นที่ตั้งของชุมชนโบราณ หรืออาจเป็นการอพยพเร่ร่อนของชนเผ่าดั้งเดิมที่อพยพเคลื่อนย้ายมาอยู่ในแถบนี้",//Place เป็นหลักฐานที่พบ
                "../../img/mid/เขาโต๊ะโมะ/เขาโต๊ะโมะ1.jpg",
                "../../img/mid/เขาโต๊ะโมะ/เขาโต๊ะโมะ2.jpg",
                "../../img/mid/เขาโต๊ะโมะ/เขาโต๊ะโมะ3.jpg"
            ),
            new Detail(
                4,// ภาคกลาง
                "เขาดิน",//Title
                "สถานที่ตั้ง อำเภอบางปะกง จังหวัดฉะเชิงเทรา",//Address
                "เขาดินมีลักษณะเป็นเนินหินแกรนิตที่เป็นหินชนิดเดียวกับหินที่ราบบริเวณเขาสามมุข จังหวัดชลบุรี มีความสูงจากพื้นที่ราบรอบบริเวณเขาดินประมาณ ๑๕ เมตร \
                ตั้งอยู่โดดเดี่ยวล้อมรอบด้วยทุ่งนาและป่าจาก บนยอดเขาซึ่งมีต้นไม้ขนาดเล็กขึ้นอยู่นั้นเป็นที่ตั้งของ วัดเขาดิน หรือ วัดปถวีบัพตาราม \
                นับว่าเป็นแหล่งโบราณคดีบนเนินหินและเป็นสถานที่ท่องเที่ยวแห่งเดียวของอำเภอบางปะกง ที่มีความสูงกว่าที่แหล่งอื่น",//Information
                "หลักฐานที่พบภายในวัดมีมณฑปร้างเหลือแต่อิฐสีเทาอยู่หลังหนึ่ง สันนิษฐานว่าเป็นที่ประดิษฐานรอยพระพุทธบาทจำลอง พระบาทสมเด็จพระจอมเกล้าเจ้าอยู่หัว \
                เคยเสด็จประพาสตอนขากลับจากเสด็จฯ ชายทะเลตะวันตก เมื่อ พ.ศ.๒๔๐๑",//Place เป็นสถานที่พบ
                "../../img/mid/เขาดิน/เขาดิน1.jpg",
                "../../img/mid/เขาดิน/เขาดิน2.jpg",
                "../../img/mid/เขาดิน/เขาดิน3.jpeg"
            )
        ],
        cardlist: [
            new Card(
                1,
                'content/mid/first.html',
                'ปราสาทเมืองสิงห์',
                'img/mid/ปราสาทเมืองสิงห์/ปราสาทเมืองสิงห์4.jpg',
                'จังหวัดกาญจนบุรี',
                'เป็นเมืองที่สร้างขึ้นตั้งแต่ขอมมีอำนาจ ประมาณ พ.ศ. ๑๔๐๐ - ๑๗๐๐ ครั้นเมื่อขอมหมดอำนาจและไทยได้เข้ามาครอบครองดินแดนแถบนี้แทน ในสมัยกรุงศรีอยุธยา'
            ),
            new Card(
                2,
                'content/mid/first.html',
                'โบราณสถานเมืองเพนียด',
                'img/mid/โบราณสถานเมืองเพนียด/โบราณสถานเมืองเพนียด1.jpg',
                'จังหวัดจันทบุรี',
                'เพนียด เป็นชุมชนโบราณ ที่พบหลักฐานทางโบราณคดี ประวัติศาสตร์ที่สำคัญจากจารึกภาษาขอม อายุราว พ.ศ. ๘๐๐-๑๐๐๐ ได้กล่าวว่า บริเวณที่ตั้งโบราณสถานเพนียดนั้น'
            ),
            new Card(
                3,
                'content/mid/first.html',
                'เขาโต๊ะโมะ',
                'img/mid/เขาโต๊ะโมะ/เขาโต๊ะโมะ1.jpg',
                'จังหวัดตราด',
                'คำว่า โต๊ะโมะ เป็นภาษาชอง แปลว่า ฉางที่เก็บของ ภาษาเขมรต่ำ แปลว่า ภูเขาหรือเนินสูง กรมศิลปากร สันนิษฐานว่า โบราณสถานเขาโต๊ะโมะ'
            ),
            new Card(
                4,
                'content/mid/first.html',
                'เขาดิน',
                'img/mid/เขาดิน/เขาดิน1.jpg',
                'จังหวัดฉะเชิงเทรา',
                'เขาดินมีลักษณะเป็นเนินหินแกรนิตที่เป็นหินชนิดเดียวกับหินที่ราบบริเวณเขาสามมุข จังหวัดชลบุรี มีความสูงจากพื้นที่ราบรอบบริเวณเขาดินประมาณ ๑๕ เมตร'
            ),
        ]
    },
    // mounted(){
    //     if(localStorage.select)
    //     this.select = localStorage.select;
    // },
    methods:{
        eiei(id){
            app.select = id;
            console.log(app.select);
            console.log(localStorage);
        },
        checkselect: function(){
            console.log(localStorage.select);
            return app.select;
        }
    },
    mounted() {
        console.log(localStorage.select);
        if (localStorage.select) {
          this.select = localStorage.select;
        }
      },
    watch: {
        select(newName) {
          localStorage.select = newName;
        }
    },
    computed: {
        filterCard() {
            return this.cardlist.filter(card => {
                return card.title.includes(this.search) || card.location.includes(this.search);
            })
        }
    },
})