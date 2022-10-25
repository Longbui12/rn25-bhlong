tao 1 component.(ten component viet hoa chu cai dau tien)
import component vua tao vao App.tsx
Chay thu ten component vua tao xem co ra ket qua khong.
khai bao type cho interface (nho them I )
I> nho dua props va ten props tren interface vao function (vd:function NewCpn(props: INewCpn) )
1) the <div>{props.type ghi tren interface}</div>
2) neu su dung css internal: style={ {color : props.nameProps} }
3) Su dung css external : className = {props.nameProps} -> Tao 1 file css, css ten class -> import vao file component

