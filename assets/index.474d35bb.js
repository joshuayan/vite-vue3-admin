var e=Object.defineProperty,a=Object.prototype.hasOwnProperty,l=Object.getOwnPropertySymbols,t=Object.prototype.propertyIsEnumerable,o=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,s=(e,s)=>{for(var d in s||(s={}))a.call(s,d)&&o(e,d,s[d]);if(l)for(var d of l(s))t.call(s,d)&&o(e,d,s[d]);return e};import{c as d,n,bG as r,c9 as i,s as c,ct as u,cu as m,d as p,ab as f,cp as b,cl as v,cn as y,r as R,S as g,at as w,t as h,aN as I,x,y as k,Y as _,z as A,A as N,F as O,a4 as j,_ as E,$ as S,a3 as C,a0 as T,W as L,U as q,bo as U,a6 as F,C as M}from"./index.387353af.js";import{_ as D}from"./dynamic-table.aa4772e5.js";import{I as K}from"./schema-form.ff968d6e.js";import{f as P}from"./common.d76a3fc3.js";import{I as G}from"./icon-font.d7e9d236.js";import{Q as $}from"./QuestionCircleOutlined.236020bc.js";import"./vendor.183d7d35.js";const Q=(e,a,l)=>{let t=null;const o=document.createElement("div"),i=()=>{r(null,o),t=null,o.remove()};return t=d(e),t.props=n(t.props,s({remove:i},a)),r(t,o),t.component.ctx.remove=i,t.component.ctx.$updateProps=function(e){e&&Object.keys(e).forEach((a=>{t.component.props[a]=e[a]}))},t.component.ctx};var z,H;function W(e){return u.request({url:z.adminAccess,method:m.GET,params:e})}function Y(e){return u.request({url:[z.adminAccess,e].join("/"),method:m.DELETE},{isShowErrorMessage:!0,successMessageText:"删除成功"})}(H=z||(z={})).adminAccess="/admin/access",H.adminAccessModule="/admin/access/module";var B=p({name:"add-modal",components:{[f.name]:f,[b.name]:b,[b.Item.name]:b.Item,[K.name]:K,[v.name]:v,[y.name]:y,ASelectOption:y.Option},props:{remove:{type:Function},fields:{type:Object,default:()=>({})},callback:{type:Function}},setup(e){const a=R(null),l=g({visible:!0,confirmLoading:!1,moduleList:[]}),t=g({moduleName:"",moduleId:void 0,actionName:"",type:void 0,url:"",icon:"",sort:1,keepAlive:1});e.fields.moduleId&&(Object.keys(t).forEach((a=>t[a]=e.fields[a])),t.type=-1==e.fields.moduleId?1:2);w((async()=>{var e;l.moduleList=await u.request({url:z.adminAccessModule,method:m.GET,params:e})}));return s(s({},h(l)),{formRef:a,rules:{moduleName:[{required:!0,message:"模块名称不能为空"}],moduleId:[{required:!0,message:"模块名称不能为空"}],actionName:[{required:!0,message:"请输入菜单名称"}],type:[{required:!0,message:"请选择类型"}],url:[{required:!0,message:"请输入url地址"}]},prefix:"/vite-vue3-admin/",labelCol:{span:6},wrapperCol:{span:18},modelRef:t,handleOk:o=>{o.preventDefault(),l.confirmLoading=!0,a.value.validate().then((async()=>{const a=e.fields.id,o=I(t);a&&delete o.type,await(a?function(e,a){return u.request({url:[z.adminAccess,e].join("/"),method:m.PATCH,params:a},{isShowErrorMessage:!0,successMessageText:"修改成功"})}(a,o):function(e){return u.request({url:z.adminAccess,method:m.POST,params:e},{isShowErrorMessage:!0,successMessageText:"创建成功"})}(o)).finally((()=>l.confirmLoading=!1)),l.visible=!1,e.callback&&e.callback()})).catch((e=>{l.confirmLoading=!1}))}})}});const J=O();x("data-v-4be6cd36");const V=C(" 模块 "),X=C(" 菜单 "),Z=C(" 否 "),ee=C(" 是 ");k();const ae=J(((e,a,l,t,o,s)=>{const n=_("a-select-option"),r=_("a-select"),i=_("a-form-item"),c=_("a-input"),u=_("a-input-number"),m=_("a-form"),p=_("a-modal");return A(),N(p,{title:Number.isInteger(e.fields.id)?"编辑资源":"新增资源",visible:e.visible,"onUpdate:visible":a[9]||(a[9]=a=>e.visible=a),"confirm-loading":e.confirmLoading,afterClose:e.remove,onOk:e.handleOk},{default:J((()=>[d(m,{ref:"formRef",model:e.modelRef,"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:J((()=>[d(i,{label:"类别",rules:e.rules.type,name:"type"},{default:J((()=>[d(r,{value:e.modelRef.type,"onUpdate:value":a[1]||(a[1]=a=>e.modelRef.type=a),disabled:Number.isInteger(e.fields.id),placeholder:"请选择类型"},{default:J((()=>[d(n,{value:1},{default:J((()=>[V])),_:1}),d(n,{value:2},{default:J((()=>[X])),_:1})])),_:1},8,["value","disabled"])])),_:1},8,["rules"]),1==e.modelRef.type?(A(),N(i,{key:0,label:"模块名称",rules:e.rules.moduleName,name:"moduleName"},{default:J((()=>[d(c,{value:e.modelRef.moduleName,"onUpdate:value":a[2]||(a[2]=a=>e.modelRef.moduleName=a),disabled:Number.isInteger(e.fields.id),placeholder:"请输入模块名称"},null,8,["value","disabled"])])),_:1},8,["rules"])):j("",!0),2==e.modelRef.type?(A(),N(i,{key:1,label:"模块名称",rules:e.rules.moduleId,name:"moduleId"},{default:J((()=>[d(r,{value:e.modelRef.moduleId,"onUpdate:value":a[3]||(a[3]=a=>e.modelRef.moduleId=a),disabled:Number.isInteger(e.fields.id),placeholder:"请选择模块"},{default:J((()=>[(A(!0),N(E,null,S(e.moduleList,(e=>(A(),N(n,{key:e.id,value:e.id},{default:J((()=>[C(T(e.moduleName),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value","disabled"])])),_:1},8,["rules"])):j("",!0),2==e.modelRef.type?(A(),N(i,{key:2,label:"菜单名称",rules:e.rules.actionName,name:"actionName"},{default:J((()=>[d(c,{value:e.modelRef.actionName,"onUpdate:value":a[4]||(a[4]=a=>e.modelRef.actionName=a),placeholder:"请输入菜单名称"},null,8,["value"])])),_:1},8,["rules"])):j("",!0),d(i,{label:"路径",rules:e.rules.url,name:"url"},{default:J((()=>[d(c,{value:e.modelRef.url,"onUpdate:value":a[5]||(a[5]=a=>e.modelRef.url=a),placeholder:"请输入路径"},null,8,["value"])])),_:1},8,["rules"]),d(i,{label:"小图标"},{default:J((()=>[d(c,{value:e.modelRef.icon,"onUpdate:value":a[6]||(a[6]=a=>e.modelRef.icon=a),placeholder:"小图标"},null,8,["value"]),d("a",{href:`${e.prefix}#/icons`,target:"_blank"},"可选图标",8,["href"])])),_:1}),d(i,{label:"排序"},{default:J((()=>[d(u,{value:e.modelRef.sort,"onUpdate:value":a[7]||(a[7]=a=>e.modelRef.sort=a),min:1,placeholder:"排序"},null,8,["value"])])),_:1}),d(i,{label:"keepAlive",name:"keepAlive"},{default:J((()=>[d(r,{value:e.modelRef.keepAlive,"onUpdate:value":a[8]||(a[8]=a=>e.modelRef.keepAlive=a),placeholder:"是否缓存页面"},{default:J((()=>[d(n,{value:0},{default:J((()=>[Z])),_:1}),d(n,{value:1},{default:J((()=>[ee])),_:1})])),_:1},8,["value"])])),_:1})])),_:1},8,["model","label-col","wrapper-col"])])),_:1},8,["title","visible","confirm-loading","afterClose","onOk"])}));B.render=ae,B.__scopeId="data-v-4be6cd36";const le=[{title:"名称",dataIndex:"moduleName",slots:{customRender:"moduleName"}},{title:"url地址",dataIndex:"url"},{title:"icon图标",dataIndex:"icon",slots:{customRender:"icon"},slotsType:"component",slotsFunc:e=>d(G,{type:e.icon})},{title:"排序",dataIndex:"sort"},{title:"创建时间",dataIndex:"createdAt",slots:{customRender:"createdAt"},slotsType:"format",slotsFunc:e=>P(e)},{title:"最后更新时间",dataIndex:"updatedAt",slots:{customRender:"updatedAt"},slotsType:"format",slotsFunc:e=>P(e)},{title:"操作",dataIndex:"action",width:200,slots:{customRender:"action"},actions:[{type:"popconfirm",text:"删除",permission:{action:"delete",effect:"disabled"},props:{type:"danger"},func:async({record:e},a)=>e.id<6?L.warn("系统预置菜单，不能删除！"):await Y(e.id).then((()=>a()))},{type:"button",text:"编辑",permission:{action:"update",effect:"disabled"},props:{type:"warning"},func:({record:e},a)=>Q(B,{fields:e,callback:a})}]}];var te=p({name:"system-access",components:{DynamicTable:D},setup(){const e=R(null),a=g({itemRefs:{},expandedRowKeys:[],tableLoading:!1,rowSelection:{onChange:(e,l)=>{a.rowSelection.selectedRowKeys=e},selectedRowKeys:[]}}),l=q((()=>0==a.rowSelection.selectedRowKeys.length));return s(s({},h(a)),{columns:le,tableRef:e,expand:async(e,l)=>{const t=a.itemRefs[l.id],o=await(async({expanded:e,record:a,expandItemEl:l,asyncFunc:t,params:o})=>{if(e&&a.children&&!Array.isArray(a.children)){const e=l.closest("td").querySelector(".ant-table-row-expand-icon");return r(d(i),e),await c(),e.classList.add("loading-icon"),t(o).finally((async()=>{r(null,e),await c(),e.classList.remove("loading-icon")}))}})({expanded:e,record:l,expandItemEl:t,asyncFunc:W,params:{id:l.id,limit:100}});(null==o?void 0:o.data)&&(l.children=o.data)},getAdminAccess:W,isDisabled:l,addItem:()=>{Q(B,{callback:()=>{e.value.refreshTableData()}})},deleteItems:()=>{f.confirm({title:"提示",icon:d($),content:"您确定要删除所有选中吗？",onOk:async()=>{await Y(a.rowSelection.selectedRowKeys.toString()),await e.value.refreshTableData(),a.rowSelection.selectedRowKeys=[]}})}})}});const oe=C(" 添加 "),se=C(" 删除 ");te.render=function(e,a,l,t,o,s){const n=_("a-button"),r=_("dynamic-table"),i=U("permission");return A(),N(r,{ref:"tableRef",onExpand:e.expand,columns:e.columns,"get-list-func":e.getAdminAccess,rowKey:"id","row-selection":e.rowSelection},{title:F((()=>[M(d(n,{onClick:e.addItem,type:"primary"},{default:F((()=>[oe])),_:1},8,["onClick"]),[[i,{action:"create",effect:"disabled"}]]),M(d(n,{onClick:e.deleteItems,disabled:e.isDisabled,type:"primary"},{default:F((()=>[se])),_:1},8,["onClick","disabled"]),[[i,{action:"delete"}]])])),moduleName:F((({record:a})=>[d("span",{ref:l=>e.itemRefs[a.id]=l},T(a.moduleName||a.actionName),513)])),_:1},8,["onExpand","columns","get-list-func","row-selection"])};export default te;
