var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(o,t,a)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,r=(e,o)=>{for(var t in o||(o={}))n.call(o,t)&&l(e,t,o[t]);if(a)for(var t of a(o))s.call(o,t)&&l(e,t,o[t]);return e},i=(e,a)=>o(e,t(a));import{r as c,d,M as u,l as p,k as m,A as f,c as g,e as y,a2 as h,B as b,f as v,a6 as O,a8 as w,b2 as k,bi as S,p as C,b as F,bh as j,a1 as x,g as z,h as R,a3 as _,F as E,C as P,Y as T,i as W,t as $,w as D}from"./vendor.c1c0e565.js";import{_ as I}from"./schema-form.0256b7ba.js";var L=d({name:"OperateModal",components:{[u.name]:u,SchemaForm:I},props:{remove:{type:Function},formSchema:{type:Object,default:()=>({})},fields:{type:Object,default:()=>({})},hiddenFields:{type:Array,default:()=>[]},handleOk:{type:Function}},setup(e){const o=c(null),t=p({visible:!0,confirmLoading:!1,dynamicValidateForm:e.formSchema});e.hiddenFields.forEach((o=>t.dynamicValidateForm.formItem.find((e=>e.field==o)).hidden=!!e.fields));return i(r({},m(t)),{onOk:()=>{t.confirmLoading=!0,o.value.validate().then((async a=>{await(e.handleOk&&e.handleOk(o.value.modelRef,t)).finally((()=>t.confirmLoading=!1)),t.visible=!1})).catch((e=>{t.confirmLoading=!1}))},dynamicForm:o})}});L.render=function(e,o,t,a,n,s){const l=f("schema-form"),r=f("a-modal");return g(),y(r,h({visible:e.visible,"onUpdate:visible":o[1]||(o[1]=o=>e.visible=o)},e.$attrs,{"confirm-loading":e.confirmLoading,afterClose:e.remove,onOk:e.onOk}),{default:b((()=>[v(l,{ref:"dynamicForm",fields:e.fields,"form-schema":e.dynamicValidateForm},null,8,["fields","form-schema"])])),_:1},16,["visible","confirm-loading","afterClose","onOk"])};const X=e=>{let o,t,a,n;const s=()=>n.onmouseup=n.onmousedown=n.onmousemove=null;e.forEach((e=>e.customHeaderCell=e=>({onmouseenter:()=>{n=e.title[0].el.closest("th"),null!=a||(a=n.closest(".ant-table-wrapper")),null!=t||(t=a.clientWidth),n.onmousemove=function(e){e.offsetX>this.offsetWidth-10?this.style.cursor="col-resize":this.style.cursor="default",null==o&&(o=this),null!=o.mouseDown&&1==o.mouseDown&&(o.style.cursor="default",o.oldWidth+(e.x-o.oldX)>0&&(o.width=o.oldWidth+(e.x-o.oldX)),o.style.width=o.width,a.style.width=t+(e.x-o.oldX)+"px",o.style.cursor="col-resize")},n.onmousedown=function(e){o=this,e.offsetX>o.offsetWidth-10&&(o.mouseDown=!0,o.oldX=e.x,o.oldWidth=o.offsetWidth)},n.onmouseup=s,a.onmouseup=function(){s(),null==o&&(o=this),o.mouseDown=!1,o.style.cursor="default",t=a.clientWidth}},onmouseup:()=>s})))};var K=d({name:"DynamicTable",components:{[O.name]:O,[w.name]:w,[k.name]:k,[S.name]:S,Option:k.Option},inheritAttrs:!1,props:{columns:{type:Object,required:!0},getListFunc:{type:Function,required:!0},rowSelection:{type:Object},rowKey:{type:[String,Function]},pageOption:{type:Object,default:()=>({})},dragColEnable:{type:Boolean,default:!0},dragRowEnable:Boolean},setup(e){var o;const{pageOptions:t}=function(e){const o=c(r({current:1,pageSize:10,total:0,pageSizeOptions:["10","20","30","40","50"],showQuickJumper:!0,showSizeChanger:!0,showTotal:e=>`共 ${e} 条`,onChange:(o,t)=>{var a;return null==(a=null==e?void 0:e.pageChange)?void 0:a.call(e,o,t)},onShowSizeChange:(o,t)=>{var a;return null==(a=null==e?void 0:e.pageChange)?void 0:a.call(e,o,t)}},e));return{pageOptions:o,updatePageOption:(e={})=>{Object.assign(o.value,e)}}}();Object.assign(t.value,e.pageOption),e.dragColEnable&&X(e.columns);const a=p({expandItemRefs:{},customRow:()=>({}),data:[],actions:(null==(o=e.columns.find((e=>"action"==(e.dataIndex||e.key))))?void 0:o.actions)||[],loading:!1}),n=async(o={})=>{o=r(r({pageNumber:t.value.current,pageSize:t.value.pageSize},e.pageOption),o),a.loading=!0;const{data:n,pageNumber:s,pageSize:l,total:i}=await e.getListFunc(o).finally((()=>a.loading=!1));Object.assign(t.value,{current:~~s,pageSize:~~l,total:~~i}),a.data=n,e.dragRowEnable&&(a.customRow=function(e){let o,t;return a=>({draggable:!0,ondrag(e){o=a},ondrop(e){t=a},ondragend(a){if(o!==t){const a=e.indexOf(o),n=e.indexOf(t);[e[a],e[n]]=[e[n],e[a]]}},ondragover:e=>!1})}(a.data))};n();return i(r({},m(a)),{pageOptions:t,buttonProps:{size:"small"},actionEvent:async(o,s,l)=>{await s({record:o,props:e},(()=>setTimeout((()=>n())))),"del"==l&&a.data.length<2&&(t.value.current=Math.max(1,t.value.current-1))},refreshTableData:n,paginationChange:(o,a,s)=>{const{field:l,order:c}=s;t.value=r(r({},t.value),o),n(i(r(r({pageSize:o.pageSize,pageNumber:o.current},e.pageOption),a),{field:l,order:c}))}})}});const A=R();C("data-v-0b3bcfc2");const B=W(" 您确定要删除吗？ ");F();const M=A(((e,o,t,a,n,s)=>{const l=f("router-link"),i=f("Option"),c=f("a-select"),d=f("a-button"),u=f("a-popconfirm"),p=f("a-table"),m=j("permission");return g(),y(p,h({columns:e.columns,loading:e.loading,rowSelection:e.rowSelection,rowKey:e.rowKey,size:"middle","data-source":e.data,pagination:e.pageOptions,bordered:"",customRow:e.customRow},r(r({},e.$props),e.$attrs),{onChange:e.paginationChange}),x({_:2},[z(e.$slots,((o,t)=>({name:t,fn:A((o=>[_(e.$slots,t,o,void 0,!0)]))}))),z(e.columns.filter((e=>e.slots)),(o=>({name:o.slots.customRender,fn:A((t=>[e.$slots[o.slots.customRender]?_(e.$slots,o.slots.customRender,h({key:0},t),void 0,!0):(g(),y(E,{key:1},["action"!==o.slots.customRender?(g(),y(E,{key:0},["component"==o.slotsType?(g(),y(P(o.slotsFunc(t.record)),{key:0})):T("",!0),"format"==o.slotsType?(g(),y(E,{key:1},[W($(o.slotsFunc(t.record[o.dataIndex||o.key],t.record)),1)],64)):T("",!0),"link"==o.slotsType?(g(),y(l,{key:2,to:o.linkPath+t.record[o.linkId]},{default:A((()=>[W($(t.text),1)])),_:2},1032,["to"])):T("",!0)],64)):T("",!0),"action"==o.slots.customRender?(g(),y("div",{key:o.slots.customRender,class:"actions"},[(g(!0),y(E,null,z(e.actions,((o,a)=>(g(),y(E,null,["select"==o.type?(g(),y(c,{key:a,value:t.record[o.key],"onUpdate:value":e=>t.record[o.key]=e,size:"small"},{default:A((()=>[(g(!0),y(E,null,z(o.options,(e=>(g(),y(i,{key:e.value,value:e.value},{default:A((()=>[W($(e.label),1)])),_:2},1032,["value"])))),128))])),_:2},1032,["value","onUpdate:value"])):T("",!0),"button"==o.type?D((g(),y(d,h({key:1},r(r({},e.buttonProps),o.props),{key:a,onClick:a=>e.actionEvent(t.record,o.func)}),{default:A((()=>[W($(o.text),1)])),_:2},1040,["onClick"])),[[m,o.permission]]):T("",!0),"popconfirm"==o.type?(g(),y(u,{key:a,placement:"leftTop",onConfirm:a=>e.actionEvent(t.record,o.func,"del")},{title:A((()=>[B])),default:A((()=>[v(d,r(r({},e.buttonProps),o.props),{default:A((()=>[W($(o.text),1)])),_:2},1040)])),_:2},1032,["onConfirm"])):T("",!0)],64)))),256))])):T("",!0)],64))]))})))]),1040,["columns","loading","rowSelection","rowKey","data-source","pagination","customRow","onChange"])}));K.render=M,K.__scopeId="data-v-0b3bcfc2";export{K as _,L as a};
