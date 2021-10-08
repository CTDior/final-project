import { ObjectId } from "mongodb";



interface Answer {
    answer: string
}



export interface HardCodedQuestionArray {
    _id?: string
    text: string
    options: Answer[]
}


export interface GroupMember {
    _id?: string;
    userUid: string;   
    groupId: string;
    groupName: Group;
    memberName: string;
    birthday:string;
    answers: string;
}


export interface Group {
    _id?:  ObjectId;
    name: string;
    adminUid?: string;
    profileQuestions: string;
}
