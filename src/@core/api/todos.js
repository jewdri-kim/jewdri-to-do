
const today = new Date();

/*
 state : todo, ing, hold , end
*/
const todo = {
    data : [
        {
            id: 1,
            group: '운동 할일',
            date: new Date(),
            list : [
                {
                    id: 'item_1-1',
                    text: '공복 유산소',
                    checked: true, 
                    state: 'end', 
                    date: today,
                    isRemoved: false
                },
                
                {
                    id: 'item_1-2',
                    text: '웨이트 등',
                    checked: true, 
                    state: 'ing', 
                    date: new Date(today.setDate(today.getDate()+1)),
                    isRemoved: true 
                },
                
                {
                    id: 'item_1-3',
                    text: '스트레칭',
                    checked: false, 
                    state: 'todo', 
                    date: today,
                    isRemoved: true 
                },
            ]
        },
        
        {
            id: 2,
            group: '회사 할일',
            date: new Date(today.setDate(today.getDate()-1)),
            list : [
                {
                    id: 'item_2-1',
                    text: '티켓정산',
                    checked: true, 
                    state: 'hold', 
                    date: new Date(today.setDate(today.getDate()-1)),
                    isRemoved: true
                },
                
                {
                    id: 'item_2-2',
                    text: '점심회식',
                    checked: true, 
                    date: today,  
                    state: 'todo',
                    isRemoved: true
                },
                
                {
                    id: 'item_2-3',
                    text: '주간보고',
                    checked: false, 
                    date: today,   
                    state: 'ing',
                    isRemoved: true 
                },
                
                {
                    id: 'item_2-4',
                    text: '주간보고22',
                    checked: false, 
                    date: today,   
                    state: 'ing',
                    isRemoved: true 
                },
            ]
        }
    ]
};

export function reqGetTodo() {
    return todo.data;
}