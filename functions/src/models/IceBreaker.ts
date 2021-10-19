import { ObjectId } from "mongodb";

interface Answer {
  answer: string;
}

export interface HardCodedQuestionArray {
  _id?: string;
  text: string;
  options: Answer[];
}

export interface GroupMember {
  _id?: ObjectId;
  userUid: string;
  groupId: string;
  groupName: Group;
  memberName: string;
  favoriteColor: string;
  birthday: string;
  answers: string;
}

export interface Group {
  [x: string]: any;
  _id?: ObjectId;
  name: string;
  adminUid?: string;
  profileQuestions: string;
}

export interface Question {
  _id?: string;
  text: string;
  options: string[];
}
