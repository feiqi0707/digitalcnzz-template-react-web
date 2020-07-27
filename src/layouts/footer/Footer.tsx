import React from 'react';
import Link from 'umi/link';
import style from './Footer.less';

class FooterComponent extends React.Component {
    constructor(props: any, context?: any) {
        super(props, context);
    }

    public render(): React.ReactNode {
        return (
            <div className={style.footerContent}>
                <div>数字郑州科技有限公司</div>
                <div className={style.copyright}>
                    <span>Copyright &copy; 数字郑州</span>
                    {/* <Link to="/listExample">列表示例</Link> */}
                </div>
            </div>
        );
    }
}

export default FooterComponent;
