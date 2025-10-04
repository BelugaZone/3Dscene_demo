//集成UI相关事件，在应用程序中进行事件的监听、分发和移除，也具有声明全局事件的功能
//dispatch可以触发多个通过UIEventBus开启监听的事件内容
const UIEventBus = {
    on(event: string, callback: (...args: any[]) => any) {
        // @ts-ignore
        document.addEventListener(event, (e) => callback(e.detail));
    },
    dispatch(event: string, data: any) {
        document.dispatchEvent(new CustomEvent(event, { detail: data }));
    },
    remove(event: string, callback: (...args: any[]) => any) {
        document.removeEventListener(event, callback);
    },
};

export default UIEventBus;
