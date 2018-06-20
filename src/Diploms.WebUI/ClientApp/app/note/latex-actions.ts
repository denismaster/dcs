export interface Action{
    code:string;
    mode: "replace"
}
export const LATEX_ACTIONS: {[key:string]:Action} = {
    "bold": {
        code: `\\textbf{$selection}`,
        mode: "replace"
    },
    "italic": {
        code: `\\textit{$selection}`,
        mode: "replace"
    },
    "center":{
        code: `\\begin{center}\n$selection\n\\end{center}`,
        mode: "replace"
    },
    "table": { code:`\\begin{tabular}{ | c | c | c | }
    \\hline 
    $selection &  &  \\\\\\hline
     &  &  \\\\\\hline
     &  &  \\\\\\hline
     \\hline
  \end{tabular}`, mode: "replace"}
};

export function applyAction(action_name:string, selection:string):string{
    const action = LATEX_ACTIONS[action_name];
    if(!action) return selection;

    if(action.mode=="replace"){
        return action.code.replace("$selection", selection);
    }

    return selection;
}