var md=document.createElement('div')
document.body.appendChild(md)
md.setAttribute('class','md')

var fm=document.createElement('form')
md.appendChild(fm)

var fs=document.createElement('fieldset')
fm.appendChild(fs)
fs.setAttribute('class','fset')
var brr=document.createElement('br')
fs.appendChild(brr)

var lgd=document.createElement('legend')
fs.appendChild(lgd)
lgd.innerText='LOGIN'
lgd.style.color='white'

var cd=document.createElement('div')
fs.appendChild(cd)
cd.setAttribute('class','cd')

var md1=document.createElement('div')
cd.appendChild(md1)
md1.setAttribute('class','md1')

var md2=document.createElement('div')
cd.appendChild(md2)
md2.setAttribute('class','md2')

var p1=document.createElement('label')
md1.appendChild(p1)
p1.innerHTML='<i style="font-size:24px" class="fa">&#xf2c0;</i> email or user_name'

var brr=document.createElement('br')
md1.appendChild(brr)
var brr=document.createElement('br')
md1.appendChild(brr)

var p2=document.createElement('label')
md1.appendChild(p2)
p2.innerHTML='<i style="font-size:24px" class="fa">&#xf084;</i> enter password'

var in1=document.createElement('input')
md2.appendChild(in1)

var brr=document.createElement('br')
md2.appendChild(brr)
var brr=document.createElement('br')
md2.appendChild(brr)

var in2=document.createElement('input')
md2.appendChild(in2)
in2.setAttribute('type','password')
in2.setAttribute('required','true')


var brr=document.createElement('br')
fs.appendChild(brr)

var bb=document.createElement('div')
fs.appendChild(bb)
bb.style.textAlign='center'

var btn=document.createElement('button')
bb.appendChild(btn)
btn.innerText='LogIn'

var fmm=document.getElementsByTagName('form')[0]
fmm.addEventListener('submit',()=>{
    var given_user_details=document.getElementsByTagName('input')
    var eml_unm=given_user_details[0].value
    var psd=given_user_details[1].value

    
    var userdata={First_Name:"First_Name",
                Last_Name:'Last Name',
                email:eml_unm,
                conform_password:psd
        }

        window.location.assign('./display.html')
        var send_data_to_display=JSON.stringify(userdata)
        window.sessionStorage.setItem('Login_user',send_data_to_display)
                    window.alert('LOGEDIN SUCCESSFULL')  

})
