var TypeScript;
(function(TypeScript) {
  function hasFlag(val, flag) {
    return(val & flag) != 0
  }
  TypeScript.hasFlag = hasFlag;
  (function(ErrorRecoverySet) {
    ErrorRecoverySet._map = [];
    ErrorRecoverySet.None = 0;
    ErrorRecoverySet.Comma = 1;
    ErrorRecoverySet.SColon = 1 << 1;
    ErrorRecoverySet.Asg = 1 << 2;
    ErrorRecoverySet.BinOp = 1 << 3;
    ErrorRecoverySet.RBrack = 1 << 4;
    ErrorRecoverySet.RCurly = 1 << 5;
    ErrorRecoverySet.RParen = 1 << 6;
    ErrorRecoverySet.Dot = 1 << 7;
    ErrorRecoverySet.Colon = 1 << 8;
    ErrorRecoverySet.PrimType = 1 << 9;
    ErrorRecoverySet.AddOp = 1 << 10;
    ErrorRecoverySet.LCurly = 1 << 11;
    ErrorRecoverySet.PreOp = 1 << 12;
    ErrorRecoverySet.RegExp = 1 << 13;
    ErrorRecoverySet.LParen = 1 << 14;
    ErrorRecoverySet.LBrack = 1 << 15;
    ErrorRecoverySet.Scope = 1 << 16;
    ErrorRecoverySet.In = 1 << 17;
    ErrorRecoverySet.SCase = 1 << 18;
    ErrorRecoverySet.Else = 1 << 19;
    ErrorRecoverySet.Catch = 1 << 20;
    ErrorRecoverySet.Var = 1 << 21;
    ErrorRecoverySet.Stmt = 1 << 22;
    ErrorRecoverySet.While = 1 << 23;
    ErrorRecoverySet.ID = 1 << 24;
    ErrorRecoverySet.Prefix = 1 << 25;
    ErrorRecoverySet.Literal = 1 << 26;
    ErrorRecoverySet.RLit = 1 << 27;
    ErrorRecoverySet.Func = 1 << 28;
    ErrorRecoverySet.EOF = 1 << 29;
    ErrorRecoverySet.TypeScriptS = 1 << 30;
    ErrorRecoverySet.ExprStart = ErrorRecoverySet.SColon | ErrorRecoverySet.AddOp | ErrorRecoverySet.LCurly | ErrorRecoverySet.PreOp | ErrorRecoverySet.RegExp | ErrorRecoverySet.LParen | ErrorRecoverySet.LBrack | ErrorRecoverySet.ID | ErrorRecoverySet.Prefix | ErrorRecoverySet.RLit | ErrorRecoverySet.Func | ErrorRecoverySet.Literal;
    ErrorRecoverySet.StmtStart = ErrorRecoverySet.ExprStart | ErrorRecoverySet.SColon | ErrorRecoverySet.Var | ErrorRecoverySet.Stmt | ErrorRecoverySet.While | ErrorRecoverySet.TypeScriptS;
    ErrorRecoverySet.Postfix = ErrorRecoverySet.Dot | ErrorRecoverySet.LParen | ErrorRecoverySet.LBrack
  })(TypeScript.ErrorRecoverySet || (TypeScript.ErrorRecoverySet = {}));
  var ErrorRecoverySet = TypeScript.ErrorRecoverySet;
  (function(AllowedElements) {
    AllowedElements._map = [];
    AllowedElements.None = 0;
    AllowedElements.Statements = 1;
    AllowedElements.FunctionDecls = 1 << 1;
    AllowedElements.ModuleDecls = 1 << 2;
    AllowedElements.ClassDecls = 1 << 3;
    AllowedElements.InterfaceDecls = 1 << 4;
    AllowedElements.TypedFuncDecls = 1 << 5;
    AllowedElements.TypedDecls = 1 << 6;
    AllowedElements.TypedFuncSignatures = 1 << 8;
    AllowedElements.TypedSignatures = 1 << 9;
    AllowedElements.AmbientDecls = 1 << 10;
    AllowedElements.Properties = 1 << 11;
    AllowedElements.Block = AllowedElements.Statements | AllowedElements.FunctionDecls | AllowedElements.TypedFuncDecls | AllowedElements.TypedDecls;
    AllowedElements.Global = AllowedElements.Statements | AllowedElements.FunctionDecls | AllowedElements.ModuleDecls | AllowedElements.ClassDecls | AllowedElements.InterfaceDecls | AllowedElements.AmbientDecls;
    AllowedElements.FunctionBody = AllowedElements.Statements | AllowedElements.FunctionDecls;
    AllowedElements.ModuleMembers = AllowedElements.TypedFuncDecls | AllowedElements.FunctionDecls | AllowedElements.ModuleDecls | AllowedElements.ClassDecls | AllowedElements.InterfaceDecls | AllowedElements.TypedDecls | AllowedElements.Statements | AllowedElements.AmbientDecls;
    AllowedElements.ClassMembers = AllowedElements.TypedFuncDecls | AllowedElements.FunctionDecls | AllowedElements.Statements | AllowedElements.TypedDecls | AllowedElements.Properties;
    AllowedElements.InterfaceMembers = AllowedElements.TypedFuncSignatures | AllowedElements.TypedSignatures;
    AllowedElements.QuickParse = AllowedElements.Global | AllowedElements.Properties
  })(TypeScript.AllowedElements || (TypeScript.AllowedElements = {}));
  var AllowedElements = TypeScript.AllowedElements;
  (function(Modifiers) {
    Modifiers._map = [];
    Modifiers.None = 0;
    Modifiers.Private = 1;
    Modifiers.Public = 1 << 1;
    Modifiers.Readonly = 1 << 2;
    Modifiers.Ambient = 1 << 3;
    Modifiers.Exported = 1 << 4;
    Modifiers.Getter = 1 << 5;
    Modifiers.Setter = 1 << 6;
    Modifiers.Static = 1 << 7
  })(TypeScript.Modifiers || (TypeScript.Modifiers = {}));
  var Modifiers = TypeScript.Modifiers;
  (function(ASTFlags) {
    ASTFlags._map = [];
    ASTFlags.None = 0;
    ASTFlags.ExplicitSemicolon = 1;
    ASTFlags.AutomaticSemicolon = 1 << 1;
    ASTFlags.Writeable = 1 << 2;
    ASTFlags.Error = 1 << 3;
    ASTFlags.DotLHSPartial = 1 << 4;
    ASTFlags.DotLHS = 1 << 5;
    ASTFlags.IsStatement = 1 << 6;
    ASTFlags.StrictMode = 1 << 7;
    ASTFlags.PossibleOptionalParameter = 1 << 8;
    ASTFlags.ClassBaseConstructorCall = 1 << 9;
    ASTFlags.OptionalName = 1 << 10
  })(TypeScript.ASTFlags || (TypeScript.ASTFlags = {}));
  var ASTFlags = TypeScript.ASTFlags;
  (function(DeclFlags) {
    DeclFlags._map = [];
    DeclFlags.None = 0;
    DeclFlags.Exported = 1;
    DeclFlags.Private = 1 << 1;
    DeclFlags.Public = 1 << 2;
    DeclFlags.Ambient = 1 << 3;
    DeclFlags.Static = 1 << 4;
    DeclFlags.LocalStatic = 1 << 5;
    DeclFlags.GetAccessor = 1 << 6;
    DeclFlags.SetAccessor = 1 << 7
  })(TypeScript.DeclFlags || (TypeScript.DeclFlags = {}));
  var DeclFlags = TypeScript.DeclFlags;
  (function(ModuleFlags) {
    ModuleFlags._map = [];
    ModuleFlags.None = 0;
    ModuleFlags.Exported = 1;
    ModuleFlags.Private = 1 << 1;
    ModuleFlags.Public = 1 << 2;
    ModuleFlags.Ambient = 1 << 3;
    ModuleFlags.Static = 1 << 4;
    ModuleFlags.LocalStatic = 1 << 5;
    ModuleFlags.GetAccessor = 1 << 6;
    ModuleFlags.SetAccessor = 1 << 7;
    ModuleFlags.IsEnum = 1 << 8;
    ModuleFlags.ShouldEmitModuleDecl = 1 << 9;
    ModuleFlags.IsWholeFile = 1 << 10;
    ModuleFlags.IsDynamic = 1 << 11
  })(TypeScript.ModuleFlags || (TypeScript.ModuleFlags = {}));
  var ModuleFlags = TypeScript.ModuleFlags;
  (function(SymbolFlags) {
    SymbolFlags._map = [];
    SymbolFlags.None = 0;
    SymbolFlags.Exported = 1;
    SymbolFlags.Private = 1 << 1;
    SymbolFlags.Public = 1 << 2;
    SymbolFlags.Ambient = 1 << 3;
    SymbolFlags.Static = 1 << 4;
    SymbolFlags.LocalStatic = 1 << 5;
    SymbolFlags.GetAccessor = 1 << 6;
    SymbolFlags.SetAccessor = 1 << 7;
    SymbolFlags.Property = 1 << 8;
    SymbolFlags.Readonly = 1 << 9;
    SymbolFlags.ModuleMember = 1 << 10;
    SymbolFlags.InterfaceMember = 1 << 11;
    SymbolFlags.ClassMember = 1 << 12;
    SymbolFlags.BuiltIn = 1 << 13;
    SymbolFlags.TypeSetDuringScopeAssignment = 1 << 14;
    SymbolFlags.Constant = 1 << 15;
    SymbolFlags.Optional = 1 << 16;
    SymbolFlags.RecursivelyReferenced = 1 << 17;
    SymbolFlags.Bound = 1 << 18
  })(TypeScript.SymbolFlags || (TypeScript.SymbolFlags = {}));
  var SymbolFlags = TypeScript.SymbolFlags;
  (function(VarFlags) {
    VarFlags._map = [];
    VarFlags.None = 0;
    VarFlags.Exported = 1;
    VarFlags.Private = 1 << 1;
    VarFlags.Public = 1 << 2;
    VarFlags.Ambient = 1 << 3;
    VarFlags.Static = 1 << 4;
    VarFlags.LocalStatic = 1 << 5;
    VarFlags.GetAccessor = 1 << 6;
    VarFlags.SetAccessor = 1 << 7;
    VarFlags.AutoInit = 1 << 8;
    VarFlags.Property = 1 << 9;
    VarFlags.Readonly = 1 << 10;
    VarFlags.Class = 1 << 11;
    VarFlags.ClassProperty = 1 << 12;
    VarFlags.ClassBodyProperty = 1 << 13;
    VarFlags.ClassConstructorProperty = 1 << 14;
    VarFlags.ClassSuperMustBeFirstCallInConstructor = 1 << 15;
    VarFlags.Constant = 1 << 16
  })(TypeScript.VarFlags || (TypeScript.VarFlags = {}));
  var VarFlags = TypeScript.VarFlags;
  (function(FncFlags) {
    FncFlags._map = [];
    FncFlags.None = 0;
    FncFlags.Exported = 1;
    FncFlags.Private = 1 << 1;
    FncFlags.Public = 1 << 2;
    FncFlags.Ambient = 1 << 3;
    FncFlags.Static = 1 << 4;
    FncFlags.LocalStatic = 1 << 5;
    FncFlags.GetAccessor = 1 << 6;
    FncFlags.SetAccessor = 1 << 7;
    FncFlags.Definition = 1 << 8;
    FncFlags.Signature = 1 << 9;
    FncFlags.Method = 1 << 10;
    FncFlags.HasReturnExpression = 1 << 11;
    FncFlags.CallMember = 1 << 12;
    FncFlags.ConstructMember = 1 << 13;
    FncFlags.HasSelfReference = 1 << 14;
    FncFlags.IsFatArrowFunction = 1 << 15;
    FncFlags.IndexerMember = 1 << 16;
    FncFlags.IsFunctionExpression = 1 << 17;
    FncFlags.ClassMethod = 1 << 18;
    FncFlags.ClassPropertyMethodExported = 1 << 19
  })(TypeScript.FncFlags || (TypeScript.FncFlags = {}));
  var FncFlags = TypeScript.FncFlags;
  (function(SignatureFlags) {
    SignatureFlags._map = [];
    SignatureFlags.None = 0;
    SignatureFlags.IsIndexer = 1;
    SignatureFlags.IsStringIndexer = 1 << 1;
    SignatureFlags.IsNumberIndexer = 1 << 2
  })(TypeScript.SignatureFlags || (TypeScript.SignatureFlags = {}));
  var SignatureFlags = TypeScript.SignatureFlags;
  function ToDeclFlags(fncOrVarOrSymbolOrModuleFlags) {
    return fncOrVarOrSymbolOrModuleFlags
  }
  TypeScript.ToDeclFlags = ToDeclFlags;
  (function(TypeFlags) {
    TypeFlags._map = [];
    TypeFlags.None = 0;
    TypeFlags.HasImplementation = 1;
    TypeFlags.HasSelfReference = 1 << 1;
    TypeFlags.MergeResult = 1 << 2;
    TypeFlags.IsEnum = 1 << 3;
    TypeFlags.BuildingName = 1 << 4;
    TypeFlags.HasBaseType = 1 << 5;
    TypeFlags.HasBaseTypeOfObject = 1 << 6;
    TypeFlags.IsClass = 1 << 7
  })(TypeScript.TypeFlags || (TypeScript.TypeFlags = {}));
  var TypeFlags = TypeScript.TypeFlags;
  (function(TypeRelationshipFlags) {
    TypeRelationshipFlags._map = [];
    TypeRelationshipFlags.SuccessfulComparison = 0;
    TypeRelationshipFlags.SourceIsNullTargetIsVoidOrUndefined = 1;
    TypeRelationshipFlags.RequiredPropertyIsMissing = 1 << 1;
    TypeRelationshipFlags.IncompatibleSignatures = 1 << 2;
    TypeRelationshipFlags.SourceSignatureHasTooManyParameters = 3;
    TypeRelationshipFlags.IncompatibleReturnTypes = 1 << 4;
    TypeRelationshipFlags.IncompatiblePropertyTypes = 1 << 5;
    TypeRelationshipFlags.IncompatibleParameterTypes = 1 << 6
  })(TypeScript.TypeRelationshipFlags || (TypeScript.TypeRelationshipFlags = {}));
  var TypeRelationshipFlags = TypeScript.TypeRelationshipFlags;
  (function(CodeGenTarget) {
    CodeGenTarget._map = [];
    CodeGenTarget.ES3 = 0;
    CodeGenTarget.ES5 = 1
  })(TypeScript.CodeGenTarget || (TypeScript.CodeGenTarget = {}));
  var CodeGenTarget = TypeScript.CodeGenTarget;
  (function(ModuleGenTarget) {
    ModuleGenTarget._map = [];
    ModuleGenTarget.Synchronous = 0;
    ModuleGenTarget.Asynchronous = 1;
    ModuleGenTarget.Local = 1 << 1
  })(TypeScript.ModuleGenTarget || (TypeScript.ModuleGenTarget = {}));
  var ModuleGenTarget = TypeScript.ModuleGenTarget;
  TypeScript.codeGenTarget = CodeGenTarget.ES3;
  TypeScript.moduleGenTarget = ModuleGenTarget.Synchronous;
  TypeScript.optimizeModuleCodeGen = true;
  function flagsToString(e, flags) {
    var builder = "";
    for(var i = 1;i < 1 << 31;i = i << 1) {
      if((flags & i) != 0) {
        for(var k in e) {
          if(e[k] == i) {
            if(builder.length > 0) {
              builder += "|"
            }
            builder += k;
            break
          }
        }
      }
    }
    return builder
  }
  TypeScript.flagsToString = flagsToString
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  (function(NodeType) {
    NodeType._map = [];
    NodeType._map[0] = "None";
    NodeType.None = 0;
    NodeType._map[1] = "Empty";
    NodeType.Empty = 1;
    NodeType._map[2] = "EmptyExpr";
    NodeType.EmptyExpr = 2;
    NodeType._map[3] = "True";
    NodeType.True = 3;
    NodeType._map[4] = "False";
    NodeType.False = 4;
    NodeType._map[5] = "This";
    NodeType.This = 5;
    NodeType._map[6] = "Super";
    NodeType.Super = 6;
    NodeType._map[7] = "QString";
    NodeType.QString = 7;
    NodeType._map[8] = "Regex";
    NodeType.Regex = 8;
    NodeType._map[9] = "Null";
    NodeType.Null = 9;
    NodeType._map[10] = "ArrayLit";
    NodeType.ArrayLit = 10;
    NodeType._map[11] = "ObjectLit";
    NodeType.ObjectLit = 11;
    NodeType._map[12] = "Void";
    NodeType.Void = 12;
    NodeType._map[13] = "Comma";
    NodeType.Comma = 13;
    NodeType._map[14] = "Pos";
    NodeType.Pos = 14;
    NodeType._map[15] = "Neg";
    NodeType.Neg = 15;
    NodeType._map[16] = "Delete";
    NodeType.Delete = 16;
    NodeType._map[17] = "Await";
    NodeType.Await = 17;
    NodeType._map[18] = "In";
    NodeType.In = 18;
    NodeType._map[19] = "Dot";
    NodeType.Dot = 19;
    NodeType._map[20] = "From";
    NodeType.From = 20;
    NodeType._map[21] = "Is";
    NodeType.Is = 21;
    NodeType._map[22] = "InstOf";
    NodeType.InstOf = 22;
    NodeType._map[23] = "Typeof";
    NodeType.Typeof = 23;
    NodeType._map[24] = "NumberLit";
    NodeType.NumberLit = 24;
    NodeType._map[25] = "Name";
    NodeType.Name = 25;
    NodeType._map[26] = "TypeRef";
    NodeType.TypeRef = 26;
    NodeType._map[27] = "Index";
    NodeType.Index = 27;
    NodeType._map[28] = "Call";
    NodeType.Call = 28;
    NodeType._map[29] = "New";
    NodeType.New = 29;
    NodeType._map[30] = "Asg";
    NodeType.Asg = 30;
    NodeType._map[31] = "AsgAdd";
    NodeType.AsgAdd = 31;
    NodeType._map[32] = "AsgSub";
    NodeType.AsgSub = 32;
    NodeType._map[33] = "AsgDiv";
    NodeType.AsgDiv = 33;
    NodeType._map[34] = "AsgMul";
    NodeType.AsgMul = 34;
    NodeType._map[35] = "AsgMod";
    NodeType.AsgMod = 35;
    NodeType._map[36] = "AsgAnd";
    NodeType.AsgAnd = 36;
    NodeType._map[37] = "AsgXor";
    NodeType.AsgXor = 37;
    NodeType._map[38] = "AsgOr";
    NodeType.AsgOr = 38;
    NodeType._map[39] = "AsgLsh";
    NodeType.AsgLsh = 39;
    NodeType._map[40] = "AsgRsh";
    NodeType.AsgRsh = 40;
    NodeType._map[41] = "AsgRs2";
    NodeType.AsgRs2 = 41;
    NodeType._map[42] = "QMark";
    NodeType.QMark = 42;
    NodeType._map[43] = "LogOr";
    NodeType.LogOr = 43;
    NodeType._map[44] = "LogAnd";
    NodeType.LogAnd = 44;
    NodeType._map[45] = "Or";
    NodeType.Or = 45;
    NodeType._map[46] = "Xor";
    NodeType.Xor = 46;
    NodeType._map[47] = "And";
    NodeType.And = 47;
    NodeType._map[48] = "Eq";
    NodeType.Eq = 48;
    NodeType._map[49] = "Ne";
    NodeType.Ne = 49;
    NodeType._map[50] = "Eqv";
    NodeType.Eqv = 50;
    NodeType._map[51] = "NEqv";
    NodeType.NEqv = 51;
    NodeType._map[52] = "Lt";
    NodeType.Lt = 52;
    NodeType._map[53] = "Le";
    NodeType.Le = 53;
    NodeType._map[54] = "Gt";
    NodeType.Gt = 54;
    NodeType._map[55] = "Ge";
    NodeType.Ge = 55;
    NodeType._map[56] = "Add";
    NodeType.Add = 56;
    NodeType._map[57] = "Sub";
    NodeType.Sub = 57;
    NodeType._map[58] = "Mul";
    NodeType.Mul = 58;
    NodeType._map[59] = "Div";
    NodeType.Div = 59;
    NodeType._map[60] = "Mod";
    NodeType.Mod = 60;
    NodeType._map[61] = "Lsh";
    NodeType.Lsh = 61;
    NodeType._map[62] = "Rsh";
    NodeType.Rsh = 62;
    NodeType._map[63] = "Rs2";
    NodeType.Rs2 = 63;
    NodeType._map[64] = "Not";
    NodeType.Not = 64;
    NodeType._map[65] = "LogNot";
    NodeType.LogNot = 65;
    NodeType._map[66] = "IncPre";
    NodeType.IncPre = 66;
    NodeType._map[67] = "DecPre";
    NodeType.DecPre = 67;
    NodeType._map[68] = "IncPost";
    NodeType.IncPost = 68;
    NodeType._map[69] = "DecPost";
    NodeType.DecPost = 69;
    NodeType._map[70] = "TypeAssertion";
    NodeType.TypeAssertion = 70;
    NodeType._map[71] = "FuncDecl";
    NodeType.FuncDecl = 71;
    NodeType._map[72] = "Member";
    NodeType.Member = 72;
    NodeType._map[73] = "VarDecl";
    NodeType.VarDecl = 73;
    NodeType._map[74] = "ArgDecl";
    NodeType.ArgDecl = 74;
    NodeType._map[75] = "Return";
    NodeType.Return = 75;
    NodeType._map[76] = "Break";
    NodeType.Break = 76;
    NodeType._map[77] = "Continue";
    NodeType.Continue = 77;
    NodeType._map[78] = "Throw";
    NodeType.Throw = 78;
    NodeType._map[79] = "For";
    NodeType.For = 79;
    NodeType._map[80] = "ForIn";
    NodeType.ForIn = 80;
    NodeType._map[81] = "If";
    NodeType.If = 81;
    NodeType._map[82] = "While";
    NodeType.While = 82;
    NodeType._map[83] = "DoWhile";
    NodeType.DoWhile = 83;
    NodeType._map[84] = "Block";
    NodeType.Block = 84;
    NodeType._map[85] = "Case";
    NodeType.Case = 85;
    NodeType._map[86] = "Switch";
    NodeType.Switch = 86;
    NodeType._map[87] = "Try";
    NodeType.Try = 87;
    NodeType._map[88] = "TryCatch";
    NodeType.TryCatch = 88;
    NodeType._map[89] = "TryFinally";
    NodeType.TryFinally = 89;
    NodeType._map[90] = "Finally";
    NodeType.Finally = 90;
    NodeType._map[91] = "Catch";
    NodeType.Catch = 91;
    NodeType._map[92] = "List";
    NodeType.List = 92;
    NodeType._map[93] = "Script";
    NodeType.Script = 93;
    NodeType._map[94] = "Class";
    NodeType.Class = 94;
    NodeType._map[95] = "Interface";
    NodeType.Interface = 95;
    NodeType._map[96] = "Module";
    NodeType.Module = 96;
    NodeType._map[97] = "Import";
    NodeType.Import = 97;
    NodeType._map[98] = "With";
    NodeType.With = 98;
    NodeType._map[99] = "Label";
    NodeType.Label = 99;
    NodeType._map[100] = "LabeledStatement";
    NodeType.LabeledStatement = 100;
    NodeType._map[101] = "EBStart";
    NodeType.EBStart = 101;
    NodeType._map[102] = "GotoEB";
    NodeType.GotoEB = 102;
    NodeType._map[103] = "EndCode";
    NodeType.EndCode = 103;
    NodeType._map[104] = "Error";
    NodeType.Error = 104;
    NodeType._map[105] = "Comment";
    NodeType.Comment = 105;
    NodeType._map[106] = "Debugger";
    NodeType.Debugger = 106;
    NodeType.GeneralNode = NodeType.FuncDecl;
    NodeType.LastAsg = NodeType.AsgRs2
  })(TypeScript.NodeType || (TypeScript.NodeType = {}));
  var NodeType = TypeScript.NodeType
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  var BlockIntrinsics = function() {
    function BlockIntrinsics() {
      this.prototype = undefined;
      this.toString = undefined;
      this.toLocaleString = undefined;
      this.valueOf = undefined;
      this.hasOwnProperty = undefined;
      this.propertyIsEnumerable = undefined;
      this.isPrototypeOf = undefined;
      this["constructor"] = undefined
    }
    return BlockIntrinsics
  }();
  TypeScript.BlockIntrinsics = BlockIntrinsics;
  var StringHashTable = function() {
    function StringHashTable() {
      this.itemCount = 0;
      this.table = new BlockIntrinsics
    }
    StringHashTable.prototype.getAllKeys = function() {
      var result = [];
      for(var k in this.table) {
        if(this.table[k] != undefined) {
          result[result.length] = k
        }
      }
      return result
    };
    StringHashTable.prototype.add = function(key, data) {
      if(this.table[key] != undefined) {
        return false
      }
      this.table[key] = data;
      this.itemCount++;
      return true
    };
    StringHashTable.prototype.addOrUpdate = function(key, data) {
      if(this.table[key] != undefined) {
        this.table[key] = data;
        return false
      }
      this.table[key] = data;
      this.itemCount++;
      return true
    };
    StringHashTable.prototype.map = function(fn, context) {
      for(var k in this.table) {
        var data = this.table[k];
        if(data != undefined) {
          fn(k, this.table[k], context)
        }
      }
    };
    StringHashTable.prototype.every = function(fn, context) {
      for(var k in this.table) {
        var data = this.table[k];
        if(data != undefined) {
          if(!fn(k, this.table[k], context)) {
            return false
          }
        }
      }
      return true
    };
    StringHashTable.prototype.some = function(fn, context) {
      for(var k in this.table) {
        var data = this.table[k];
        if(data != undefined) {
          if(fn(k, this.table[k], context)) {
            return true
          }
        }
      }
      return false
    };
    StringHashTable.prototype.count = function() {
      return this.itemCount
    };
    StringHashTable.prototype.lookup = function(key) {
      var data = this.table[key];
      if(data != undefined) {
        return data
      }else {
        return null
      }
    };
    return StringHashTable
  }();
  TypeScript.StringHashTable = StringHashTable;
  var DualStringHashTable = function() {
    function DualStringHashTable(primaryTable, secondaryTable) {
      this.primaryTable = primaryTable;
      this.secondaryTable = secondaryTable;
      this.insertPrimary = true
    }
    DualStringHashTable.prototype.getAllKeys = function() {
      return this.primaryTable.getAllKeys().concat(this.secondaryTable.getAllKeys())
    };
    DualStringHashTable.prototype.add = function(key, data) {
      if(this.insertPrimary) {
        return this.primaryTable.add(key, data)
      }else {
        return this.secondaryTable.add(key, data)
      }
    };
    DualStringHashTable.prototype.addOrUpdate = function(key, data) {
      if(this.insertPrimary) {
        return this.primaryTable.addOrUpdate(key, data)
      }else {
        return this.secondaryTable.addOrUpdate(key, data)
      }
    };
    DualStringHashTable.prototype.map = function(fn, context) {
      this.primaryTable.map(fn, context);
      this.secondaryTable.map(fn, context)
    };
    DualStringHashTable.prototype.every = function(fn, context) {
      return this.primaryTable.every(fn, context) && this.secondaryTable.every(fn, context)
    };
    DualStringHashTable.prototype.some = function(fn, context) {
      return this.primaryTable.some(fn, context) || this.secondaryTable.some(fn, context)
    };
    DualStringHashTable.prototype.count = function() {
      return this.primaryTable.count() + this.secondaryTable.count()
    };
    DualStringHashTable.prototype.lookup = function(key) {
      var data = this.primaryTable.lookup(key);
      if(data != undefined) {
        return data
      }else {
        return this.secondaryTable.lookup(key)
      }
    };
    return DualStringHashTable
  }();
  TypeScript.DualStringHashTable = DualStringHashTable;
  function numberHashFn(key) {
    var c2 = 668265261;
    key = key ^ 61 ^ key >>> 16;
    key = key + (key << 3);
    key = key ^ key >>> 4;
    key = key * c2;
    key = key ^ key >>> 15;
    return key
  }
  TypeScript.numberHashFn = numberHashFn;
  function combineHashes(key1, key2) {
    return key2 ^ (key1 >> 5) + key1
  }
  TypeScript.combineHashes = combineHashes;
  var HashEntry = function() {
    function HashEntry(key, data) {
      this.key = key;
      this.data = data
    }
    return HashEntry
  }();
  TypeScript.HashEntry = HashEntry;
  var HashTable = function() {
    function HashTable(size, hashFn, equalsFn) {
      this.size = size;
      this.hashFn = hashFn;
      this.equalsFn = equalsFn;
      this.itemCount = 0;
      this.table = new Array;
      for(var i = 0;i < this.size;i++) {
        this.table[i] = null
      }
    }
    HashTable.prototype.add = function(key, data) {
      var current;
      var entry = new HashEntry(key, data);
      var val = this.hashFn(key);
      val = val % this.size;
      for(current = this.table[val];current != null;current = current.next) {
        if(this.equalsFn(key, current.key)) {
          return false
        }
      }
      entry.next = this.table[val];
      this.table[val] = entry;
      this.itemCount++;
      return true
    };
    HashTable.prototype.remove = function(key) {
      var current;
      var val = this.hashFn(key);
      val = val % this.size;
      var result = null;
      var prevEntry = null;
      for(current = this.table[val];current != null;current = current.next) {
        if(this.equalsFn(key, current.key)) {
          result = current.data;
          this.itemCount--;
          if(prevEntry) {
            prevEntry.next = current.next
          }else {
            this.table[val] = current.next
          }
          break
        }
        prevEntry = current
      }
      return result
    };
    HashTable.prototype.count = function() {
      return this.itemCount
    };
    HashTable.prototype.lookup = function(key) {
      var current;
      var val = this.hashFn(key);
      val = val % this.size;
      for(current = this.table[val];current != null;current = current.next) {
        if(this.equalsFn(key, current.key)) {
          return current.data
        }
      }
      return null
    };
    return HashTable
  }();
  TypeScript.HashTable = HashTable
})(TypeScript || (TypeScript = {}));
var __extends = this.__extends || function(d, b) {
  function __() {
    this.constructor = d
  }
  __.prototype = b.prototype;
  d.prototype = new __
};
var TypeScript;
(function(TypeScript) {
  var AST = function() {
    function AST(nodeType) {
      this.nodeType = nodeType;
      this.type = null;
      this.flags = TypeScript.ASTFlags.Writeable;
      this.minChar = -1;
      this.limChar = -1;
      this.passCreated = TypeScript.CompilerDiagnostics.analysisPass;
      this.preComments = null;
      this.postComments = null;
      this.isParenthesized = false
    }
    AST.prototype.isStatementOrExpression = function() {
      return false
    };
    AST.prototype.isCompoundStatement = function() {
      return false
    };
    AST.prototype.isLeaf = function() {
      return this.isStatementOrExpression() && !this.isCompoundStatement()
    };
    AST.prototype.typeCheck = function(typeFlow) {
      switch(this.nodeType) {
        case TypeScript.NodeType.Error:
        ;
        case TypeScript.NodeType.EmptyExpr:
          this.type = typeFlow.anyType;
          break;
        case TypeScript.NodeType.This:
          return typeFlow.typeCheckThis(this);
        case TypeScript.NodeType.Null:
          this.type = typeFlow.nullType;
          break;
        case TypeScript.NodeType.False:
        ;
        case TypeScript.NodeType.True:
          this.type = typeFlow.booleanType;
          break;
        case TypeScript.NodeType.Super:
          return typeFlow.typeCheckSuper(this);
        case TypeScript.NodeType.EndCode:
        ;
        case TypeScript.NodeType.Empty:
        ;
        case TypeScript.NodeType.Void:
          this.type = typeFlow.voidType;
          break;
        default:
          throw new Error("please implement in derived class");
      }
      return this
    };
    AST.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      switch(this.nodeType) {
        case TypeScript.NodeType.This:
          if(emitter.thisFnc && TypeScript.hasFlag(emitter.thisFnc.fncFlags, TypeScript.FncFlags.IsFatArrowFunction)) {
            emitter.writeToOutput("_this")
          }else {
            emitter.writeToOutput("this")
          }
          break;
        case TypeScript.NodeType.Null:
          emitter.writeToOutput("null");
          break;
        case TypeScript.NodeType.False:
          emitter.writeToOutput("false");
          break;
        case TypeScript.NodeType.True:
          emitter.writeToOutput("true");
          break;
        case TypeScript.NodeType.Super:
          emitter.emitSuperReference();
        case TypeScript.NodeType.EndCode:
          break;
        case TypeScript.NodeType.Error:
        ;
        case TypeScript.NodeType.EmptyExpr:
          break;
        case TypeScript.NodeType.Empty:
          emitter.writeToOutput("; ");
          break;
        case TypeScript.NodeType.Void:
          emitter.writeToOutput("void ");
          break;
        default:
          throw new Error("please implement in derived class");
      }
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    AST.prototype.print = function(context) {
      context.startLine();
      var lineCol = {line:-1, col:-1};
      var limLineCol = {line:-1, col:-1};
      if(context.parser !== null) {
        context.parser.getSourceLineCol(lineCol, this.minChar);
        context.parser.getSourceLineCol(limLineCol, this.limChar);
        context.write("(" + lineCol.line + "," + lineCol.col + ")--" + "(" + limLineCol.line + "," + limLineCol.col + "): ")
      }
      var lab = this.printLabel();
      if(TypeScript.hasFlag(this.flags, TypeScript.ASTFlags.Error)) {
        lab += " (Error)"
      }
      context.writeLine(lab)
    };
    AST.prototype.printLabel = function() {
      if(TypeScript.nodeTypeTable[this.nodeType] !== undefined) {
        return TypeScript.nodeTypeTable[this.nodeType]
      }else {
        return TypeScript.NodeType._map[this.nodeType]
      }
    };
    AST.prototype.addToControlFlow = function(context) {
      context.walker.options.goChildren = false;
      context.addContent(this)
    };
    AST.prototype.netFreeUses = function(container, freeUses) {
    };
    AST.prototype.treeViewLabel = function() {
      return TypeScript.NodeType._map[this.nodeType]
    };
    return AST
  }();
  TypeScript.AST = AST;
  var IncompleteAST = function(_super) {
    __extends(IncompleteAST, _super);
    function IncompleteAST(min, lim) {
      _super.call(this, TypeScript.NodeType.Error);
      this.minChar = min;
      this.limChar = lim
    }
    return IncompleteAST
  }(AST);
  TypeScript.IncompleteAST = IncompleteAST;
  var ASTList = function(_super) {
    __extends(ASTList, _super);
    function ASTList() {
      _super.call(this, TypeScript.NodeType.List);
      this.enclosingScope = null;
      this.members = new Array
    }
    ASTList.prototype.addToControlFlow = function(context) {
      var len = this.members.length;
      for(var i = 0;i < len;i++) {
        if(context.noContinuation) {
          context.addUnreachable(this.members[i]);
          break
        }else {
          this.members[i] = context.walk(this.members[i], this)
        }
      }
      context.walker.options.goChildren = false
    };
    ASTList.prototype.append = function(ast) {
      this.members[this.members.length] = ast;
      return this
    };
    ASTList.prototype.appendAll = function(ast) {
      if(ast.nodeType == TypeScript.NodeType.List) {
        var list = ast;
        for(var i = 0, len = list.members.length;i < len;i++) {
          this.append(list.members[i])
        }
      }else {
        this.append(ast)
      }
      return this
    };
    ASTList.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitJavascriptList(this, null, TypeScript.TokenID.SColon, startLine, false, false, writeDeclFile)
    };
    ASTList.prototype.typeCheck = function(typeFlow) {
      var len = this.members.length;
      typeFlow.nestingLevel++;
      for(var i = 0;i < len;i++) {
        if(this.members[i]) {
          this.members[i] = this.members[i].typeCheck(typeFlow)
        }
      }
      typeFlow.nestingLevel--;
      return this
    };
    return ASTList
  }(AST);
  TypeScript.ASTList = ASTList;
  var Identifier = function(_super) {
    __extends(Identifier, _super);
    function Identifier(text) {
      _super.call(this, TypeScript.NodeType.Name);
      this.text = text;
      this.sym = null;
      this.cloId = -1
    }
    Identifier.prototype.isMissing = function() {
      return false
    };
    Identifier.prototype.isLeaf = function() {
      return true
    };
    Identifier.prototype.treeViewLabel = function() {
      return"id: " + this.text
    };
    Identifier.prototype.printLabel = function() {
      if(this.text) {
        return"id: " + this.text
      }else {
        return"name node"
      }
    };
    Identifier.prototype.typeCheck = function(typeFlow) {
      return typeFlow.typeCheckName(this)
    };
    Identifier.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitJavascriptName(this, true)
    };
    return Identifier
  }(AST);
  TypeScript.Identifier = Identifier;
  var MissingIdentifier = function(_super) {
    __extends(MissingIdentifier, _super);
    function MissingIdentifier() {
      _super.call(this, "__missing")
    }
    MissingIdentifier.prototype.isMissing = function() {
      return true
    };
    MissingIdentifier.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
    };
    return MissingIdentifier
  }(Identifier);
  TypeScript.MissingIdentifier = MissingIdentifier;
  var Label = function(_super) {
    __extends(Label, _super);
    function Label(id) {
      _super.call(this, TypeScript.NodeType.Label);
      this.id = id
    }
    Label.prototype.printLabel = function() {
      return this.id.text + ":"
    };
    Label.prototype.typeCheck = function(typeFlow) {
      this.type = typeFlow.voidType;
      return this
    };
    Label.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      emitter.writeLineToOutput(this.id.text + ":");
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    return Label
  }(AST);
  TypeScript.Label = Label;
  var UnaryExpression = function(_super) {
    __extends(UnaryExpression, _super);
    function UnaryExpression(nty, operand) {
      _super.call(this, nty);
      this.operand = operand;
      this.targetType = null;
      this.castTerm = null;
      this.nty = nty
    }
    UnaryExpression.prototype.isStatementOrExpression = function() {
      return true
    };
    UnaryExpression.prototype.addToControlFlow = function(context) {
      _super.prototype.addToControlFlow.call(this, context);
      if(this.nodeType == TypeScript.NodeType.Throw) {
        context.returnStmt()
      }
    };
    UnaryExpression.prototype.typeCheck = function(typeFlow) {
      switch(this.nty) {
        case TypeScript.NodeType.Not:
          return typeFlow.typeCheckBitNot(this);
        case TypeScript.NodeType.LogNot:
          return typeFlow.typeCheckLogNot(this);
        case TypeScript.NodeType.Pos:
        ;
        case TypeScript.NodeType.Neg:
          return typeFlow.typeCheckUnaryNumberOperator(this);
        case TypeScript.NodeType.IncPost:
        ;
        case TypeScript.NodeType.IncPre:
        ;
        case TypeScript.NodeType.DecPost:
        ;
        case TypeScript.NodeType.DecPre:
          return typeFlow.typeCheckIncOrDec(this);
        case TypeScript.NodeType.ArrayLit:
          typeFlow.typeCheckArrayLit(this);
          return this;
        case TypeScript.NodeType.ObjectLit:
          typeFlow.typeCheckObjectLit(this);
          return this;
        case TypeScript.NodeType.Throw:
          this.operand = typeFlow.typeCheck(this.operand);
          this.type = typeFlow.voidType;
          return this;
        case TypeScript.NodeType.Typeof:
          this.operand = typeFlow.typeCheck(this.operand);
          this.type = typeFlow.stringType;
          return this;
        case TypeScript.NodeType.Delete:
          this.operand = typeFlow.typeCheck(this.operand);
          this.type = typeFlow.booleanType;
          break;
        case TypeScript.NodeType.TypeAssertion:
          this.castTerm = typeFlow.typeCheck(this.castTerm);
          var applyTargetType = !this.operand.isParenthesized;
          var targetType = applyTargetType ? this.castTerm.type : null;
          typeFlow.checker.typeCheckWithContextualType(targetType, typeFlow.checker.inProvisionalTypecheckMode(), true, this.operand);
          typeFlow.castWithCoercion(this.operand, this.castTerm.type, false, true);
          this.type = this.castTerm.type;
          return this;
        case TypeScript.NodeType.Void:
          this.operand = typeFlow.typeCheck(this.operand);
          this.type = typeFlow.checker.undefinedType;
          break;
        default:
          throw new Error("please implement in derived class");
      }
      return this
    };
    UnaryExpression.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      switch(this.nty) {
        case TypeScript.NodeType.IncPost:
          emitter.emitJavascript(this.operand, TypeScript.TokenID.Inc, false);
          emitter.writeToOutput("++");
          break;
        case TypeScript.NodeType.LogNot:
          emitter.writeToOutput("!");
          emitter.emitJavascript(this.operand, TypeScript.TokenID.Bang, false);
          break;
        case TypeScript.NodeType.DecPost:
          emitter.emitJavascript(this.operand, TypeScript.TokenID.Dec, false);
          emitter.writeToOutput("--");
          break;
        case TypeScript.NodeType.ObjectLit:
          emitter.emitObjectLiteral(this.operand);
          break;
        case TypeScript.NodeType.ArrayLit:
          emitter.emitArrayLiteral(this.operand);
          break;
        case TypeScript.NodeType.Not:
          emitter.writeToOutput("~");
          emitter.emitJavascript(this.operand, TypeScript.TokenID.Tilde, false);
          break;
        case TypeScript.NodeType.Neg:
          emitter.writeToOutput("-");
          if(this.operand.nodeType == TypeScript.NodeType.Neg) {
            this.operand.isParenthesized = true
          }
          emitter.emitJavascript(this.operand, TypeScript.TokenID.Sub, false);
          break;
        case TypeScript.NodeType.Pos:
          emitter.writeToOutput("+");
          if(this.operand.nodeType == TypeScript.NodeType.Pos) {
            this.operand.isParenthesized = true
          }
          emitter.emitJavascript(this.operand, TypeScript.TokenID.Add, false);
          break;
        case TypeScript.NodeType.IncPre:
          emitter.writeToOutput("++");
          emitter.emitJavascript(this.operand, TypeScript.TokenID.Inc, false);
          break;
        case TypeScript.NodeType.DecPre:
          emitter.writeToOutput("--");
          emitter.emitJavascript(this.operand, TypeScript.TokenID.Dec, false);
          break;
        case TypeScript.NodeType.Throw:
          emitter.writeToOutput("throw ");
          emitter.emitJavascript(this.operand, TypeScript.TokenID.Tilde, false);
          emitter.writeToOutput(";");
          break;
        case TypeScript.NodeType.Typeof:
          emitter.writeToOutput("typeof ");
          emitter.emitJavascript(this.operand, TypeScript.TokenID.Tilde, false);
          break;
        case TypeScript.NodeType.Delete:
          emitter.writeToOutput("delete ");
          emitter.emitJavascript(this.operand, TypeScript.TokenID.Tilde, false);
          break;
        case TypeScript.NodeType.Void:
          emitter.writeToOutput("void ");
          emitter.emitJavascript(this.operand, TypeScript.TokenID.Tilde, false);
          break;
        case TypeScript.NodeType.TypeAssertion:
          emitter.emitJavascript(this.operand, TypeScript.TokenID.Tilde, false);
          break;
        default:
          throw new Error("please implement in derived class");
      }
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    return UnaryExpression
  }(AST);
  TypeScript.UnaryExpression = UnaryExpression;
  var CallExpression = function(_super) {
    __extends(CallExpression, _super);
    function CallExpression(nty, target, args) {
      _super.call(this, nty);
      this.target = target;
      this.args = args;
      this.signature = null;
      this.nty = nty;
      this.minChar = this.target.minChar
    }
    CallExpression.prototype.isStatementOrExpression = function() {
      return true
    };
    CallExpression.prototype.typeCheck = function(typeFlow) {
      if(this.nty == TypeScript.NodeType.New) {
        return typeFlow.typeCheckNew(this)
      }else {
        return typeFlow.typeCheckCall(this)
      }
    };
    CallExpression.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      if(this.nty == TypeScript.NodeType.New) {
        emitter.emitNew(this.target, this.args)
      }else {
        emitter.emitCall(this, this.target, this.args)
      }
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    return CallExpression
  }(AST);
  TypeScript.CallExpression = CallExpression;
  var BinaryExpression = function(_super) {
    __extends(BinaryExpression, _super);
    function BinaryExpression(nty, operand1, operand2) {
      _super.call(this, nty);
      this.operand1 = operand1;
      this.operand2 = operand2;
      this.nty = nty
    }
    BinaryExpression.prototype.isStatementOrExpression = function() {
      return true
    };
    BinaryExpression.prototype.typeCheck = function(typeFlow) {
      switch(this.nty) {
        case TypeScript.NodeType.Dot:
          return typeFlow.typeCheckDotOperator(this);
        case TypeScript.NodeType.Asg:
          return typeFlow.typeCheckAsgOperator(this);
        case TypeScript.NodeType.Add:
        ;
        case TypeScript.NodeType.Sub:
        ;
        case TypeScript.NodeType.Mul:
        ;
        case TypeScript.NodeType.Div:
        ;
        case TypeScript.NodeType.Mod:
        ;
        case TypeScript.NodeType.Or:
        ;
        case TypeScript.NodeType.And:
          return typeFlow.typeCheckArithmeticOperator(this, false);
        case TypeScript.NodeType.Xor:
          return typeFlow.typeCheckBitwiseOperator(this, false);
        case TypeScript.NodeType.Ne:
        ;
        case TypeScript.NodeType.Eq:
          var text;
          if(typeFlow.checker.styleSettings.eqeqeq) {
            text = TypeScript.nodeTypeTable[this.nty];
            typeFlow.checker.errorReporter.styleError(this, "use of " + text)
          }else {
            if(typeFlow.checker.styleSettings.eqnull) {
              text = TypeScript.nodeTypeTable[this.nty];
              if(this.operand2 !== null && this.operand2.nodeType == TypeScript.NodeType.Null) {
                typeFlow.checker.errorReporter.styleError(this, "use of " + text + " to compare with null")
              }
            }
          }
        ;
        case TypeScript.NodeType.Eqv:
        ;
        case TypeScript.NodeType.NEqv:
        ;
        case TypeScript.NodeType.Lt:
        ;
        case TypeScript.NodeType.Le:
        ;
        case TypeScript.NodeType.Ge:
        ;
        case TypeScript.NodeType.Gt:
          return typeFlow.typeCheckBooleanOperator(this);
        case TypeScript.NodeType.Index:
          return typeFlow.typeCheckIndex(this);
        case TypeScript.NodeType.Member:
          this.type = typeFlow.voidType;
          return this;
        case TypeScript.NodeType.LogOr:
          return typeFlow.typeCheckLogOr(this);
        case TypeScript.NodeType.LogAnd:
          return typeFlow.typeCheckLogAnd(this);
        case TypeScript.NodeType.AsgAdd:
        ;
        case TypeScript.NodeType.AsgSub:
        ;
        case TypeScript.NodeType.AsgMul:
        ;
        case TypeScript.NodeType.AsgDiv:
        ;
        case TypeScript.NodeType.AsgMod:
        ;
        case TypeScript.NodeType.AsgOr:
        ;
        case TypeScript.NodeType.AsgAnd:
          return typeFlow.typeCheckArithmeticOperator(this, true);
        case TypeScript.NodeType.AsgXor:
          return typeFlow.typeCheckBitwiseOperator(this, true);
        case TypeScript.NodeType.Lsh:
        ;
        case TypeScript.NodeType.Rsh:
        ;
        case TypeScript.NodeType.Rs2:
          return typeFlow.typeCheckShift(this, false);
        case TypeScript.NodeType.AsgLsh:
        ;
        case TypeScript.NodeType.AsgRsh:
        ;
        case TypeScript.NodeType.AsgRs2:
          return typeFlow.typeCheckShift(this, true);
        case TypeScript.NodeType.Comma:
          return typeFlow.typeCheckCommaOperator(this);
        case TypeScript.NodeType.InstOf:
          return typeFlow.typeCheckInstOf(this);
        case TypeScript.NodeType.In:
          return typeFlow.typeCheckInOperator(this);
        case TypeScript.NodeType.From:
          typeFlow.checker.errorReporter.simpleError(this, "Illegal use of 'from' keyword in binary expression");
          break;
        default:
          throw new Error("please implement in derived class");
      }
      return this
    };
    BinaryExpression.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      var binTokenId = TypeScript.nodeTypeToTokTable[this.nodeType];
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      if(binTokenId != undefined) {
        emitter.emitJavascript(this.operand1, binTokenId, false);
        if(TypeScript.tokenTable[binTokenId].text == "instanceof") {
          emitter.writeToOutput(" instanceof ")
        }else {
          if(TypeScript.tokenTable[binTokenId].text == "in") {
            emitter.writeToOutput(" in ")
          }else {
            emitter.writeToOutputTrimmable(" " + TypeScript.tokenTable[binTokenId].text + " ")
          }
        }
        emitter.emitJavascript(this.operand2, binTokenId, false)
      }else {
        switch(this.nty) {
          case TypeScript.NodeType.Dot:
            if(!emitter.tryEmitConstant(this)) {
              emitter.emitJavascript(this.operand1, TypeScript.TokenID.Dot, false);
              emitter.writeToOutput(".");
              emitter.emitJavascriptName(this.operand2, false)
            }
            break;
          case TypeScript.NodeType.Index:
            emitter.emitIndex(this.operand1, this.operand2);
            break;
          case TypeScript.NodeType.Member:
            if(this.operand2.nodeType == TypeScript.NodeType.FuncDecl && this.operand2.isAccessor()) {
              var funcDecl = this.operand2;
              if(TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.GetAccessor)) {
                emitter.writeToOutput("get ")
              }else {
                emitter.writeToOutput("set ")
              }
              emitter.emitJavascript(this.operand1, TypeScript.TokenID.Colon, false)
            }else {
              emitter.emitJavascript(this.operand1, TypeScript.TokenID.Colon, false);
              emitter.writeToOutputTrimmable(": ")
            }
            emitter.emitJavascript(this.operand2, TypeScript.TokenID.Comma, false);
            break;
          case TypeScript.NodeType.Comma:
            emitter.emitJavascript(this.operand1, TypeScript.TokenID.Comma, false);
            if(emitter.emitState.inObjectLiteral) {
              emitter.writeLineToOutput(", ")
            }else {
              emitter.writeToOutput(",")
            }
            emitter.emitJavascript(this.operand2, TypeScript.TokenID.Comma, false);
            break;
          case TypeScript.NodeType.Is:
            throw new Error("should be de-sugared during type check");;
          default:
            throw new Error("please implement in derived class");
        }
      }
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    return BinaryExpression
  }(AST);
  TypeScript.BinaryExpression = BinaryExpression;
  var TrinaryExpression = function(_super) {
    __extends(TrinaryExpression, _super);
    function TrinaryExpression(nty, operand1, operand2, operand3) {
      _super.call(this, nty);
      this.operand1 = operand1;
      this.operand2 = operand2;
      this.operand3 = operand3;
      this.nty = nty
    }
    TrinaryExpression.prototype.isStatementOrExpression = function() {
      return true
    };
    TrinaryExpression.prototype.typeCheck = function(typeFlow) {
      return typeFlow.typeCheckQMark(this)
    };
    TrinaryExpression.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      emitter.emitJavascript(this.operand1, TypeScript.TokenID.QMark, false);
      emitter.writeToOutput(" ? ");
      emitter.emitJavascript(this.operand2, TypeScript.TokenID.QMark, false);
      emitter.writeToOutput(" : ");
      emitter.emitJavascript(this.operand3, TypeScript.TokenID.QMark, false);
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    return TrinaryExpression
  }(AST);
  TypeScript.TrinaryExpression = TrinaryExpression;
  var NumberLiteral = function(_super) {
    __extends(NumberLiteral, _super);
    function NumberLiteral(value) {
      _super.call(this, TypeScript.NodeType.NumberLit);
      this.value = value;
      this.isNegativeZero = false
    }
    NumberLiteral.prototype.isStatementOrExpression = function() {
      return true
    };
    NumberLiteral.prototype.typeCheck = function(typeFlow) {
      this.type = typeFlow.doubleType;
      return this
    };
    NumberLiteral.prototype.treeViewLabel = function() {
      return"num: " + this.value
    };
    NumberLiteral.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      if(this.isNegativeZero) {
        emitter.writeToOutput("-")
      }
      emitter.writeToOutput(this.value.toString());
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    NumberLiteral.prototype.printLabel = function() {
      if(Math.floor(this.value) != this.value) {
        return this.value.toFixed(2).toString()
      }else {
        return this.value.toString()
      }
    };
    return NumberLiteral
  }(AST);
  TypeScript.NumberLiteral = NumberLiteral;
  var RegexLiteral = function(_super) {
    __extends(RegexLiteral, _super);
    function RegexLiteral(regex) {
      _super.call(this, TypeScript.NodeType.Regex);
      this.regex = regex
    }
    RegexLiteral.prototype.isStatementOrExpression = function() {
      return true
    };
    RegexLiteral.prototype.typeCheck = function(typeFlow) {
      this.type = typeFlow.regexType;
      return this
    };
    RegexLiteral.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      emitter.writeToOutput(this.regex.toString());
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    return RegexLiteral
  }(AST);
  TypeScript.RegexLiteral = RegexLiteral;
  var StringLiteral = function(_super) {
    __extends(StringLiteral, _super);
    function StringLiteral(text) {
      _super.call(this, TypeScript.NodeType.QString);
      this.text = text
    }
    StringLiteral.prototype.isStatementOrExpression = function() {
      return true
    };
    StringLiteral.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      emitter.emitStringLiteral(this.text);
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    StringLiteral.prototype.typeCheck = function(typeFlow) {
      this.type = typeFlow.stringType;
      return this
    };
    StringLiteral.prototype.treeViewLabel = function() {
      return"st: " + this.text
    };
    StringLiteral.prototype.printLabel = function() {
      return this.text
    };
    return StringLiteral
  }(AST);
  TypeScript.StringLiteral = StringLiteral;
  var ImportDecl = function(_super) {
    __extends(ImportDecl, _super);
    function ImportDecl(id, alias) {
      _super.call(this, TypeScript.NodeType.Import);
      this.id = id;
      this.alias = alias;
      this.varFlags = TypeScript.VarFlags.None;
      this.isDynamicImport = false
    }
    ImportDecl.prototype.isStatementOrExpression = function() {
      return true
    };
    ImportDecl.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      var mod = this.alias.type;
      if(writeDeclFile) {
        emitter.emitImportDecl(this)
      }
      if(!this.isDynamicImport || this.id.sym && !this.id.sym.onlyReferencedAsTypeRef) {
        var prevModAliasId = emitter.modAliasId;
        var prevFirstModAlias = emitter.firstModAlias;
        emitter.recordSourceMappingStart(this);
        emitter.emitParensAndCommentsInPlace(this, true);
        emitter.writeToOutput("var " + this.id.text + " = ");
        emitter.modAliasId = this.id.text;
        emitter.firstModAlias = this.firstAliasedModToString();
        emitter.emitJavascript(this.alias, TypeScript.TokenID.Tilde, false, writeDeclFile);
        if(!this.isDynamicImport) {
          emitter.writeToOutput(";")
        }
        emitter.emitParensAndCommentsInPlace(this, false);
        emitter.recordSourceMappingEnd(this);
        emitter.modAliasId = prevModAliasId;
        emitter.firstModAlias = prevFirstModAlias
      }
    };
    ImportDecl.prototype.typeCheck = function(typeFlow) {
      return typeFlow.typeCheckImportDecl(this)
    };
    ImportDecl.prototype.getAliasName = function(aliasAST) {
      if(typeof aliasAST === "undefined") {
        aliasAST = this.alias
      }
      if(aliasAST.nodeType == TypeScript.NodeType.Name) {
        return aliasAST.text
      }else {
        var dotExpr = aliasAST;
        return this.getAliasName(dotExpr.operand1) + "." + this.getAliasName(dotExpr.operand2)
      }
    };
    ImportDecl.prototype.firstAliasedModToString = function() {
      if(this.alias.nodeType == TypeScript.NodeType.Name) {
        return this.alias.text
      }else {
        var dotExpr = this.alias;
        var firstMod = dotExpr.operand1;
        return firstMod.text
      }
    };
    return ImportDecl
  }(AST);
  TypeScript.ImportDecl = ImportDecl;
  var BoundDecl = function(_super) {
    __extends(BoundDecl, _super);
    function BoundDecl(id, nodeType, nestingLevel) {
      _super.call(this, nodeType);
      this.id = id;
      this.nestingLevel = nestingLevel;
      this.init = null;
      this.typeExpr = null;
      this.varFlags = TypeScript.VarFlags.None;
      this.sym = null
    }
    BoundDecl.prototype.isStatementOrExpression = function() {
      return true
    };
    BoundDecl.prototype.isPrivate = function() {
      return TypeScript.hasFlag(this.varFlags, TypeScript.VarFlags.Private)
    };
    BoundDecl.prototype.isPublic = function() {
      return TypeScript.hasFlag(this.varFlags, TypeScript.VarFlags.Public)
    };
    BoundDecl.prototype.isProperty = function() {
      return TypeScript.hasFlag(this.varFlags, TypeScript.VarFlags.Property)
    };
    BoundDecl.prototype.typeCheck = function(typeFlow) {
      return typeFlow.typeCheckBoundDecl(this)
    };
    BoundDecl.prototype.printLabel = function() {
      return this.treeViewLabel()
    };
    return BoundDecl
  }(AST);
  TypeScript.BoundDecl = BoundDecl;
  var VarDecl = function(_super) {
    __extends(VarDecl, _super);
    function VarDecl(id, nest) {
      _super.call(this, id, TypeScript.NodeType.VarDecl, nest)
    }
    VarDecl.prototype.isAmbient = function() {
      return TypeScript.hasFlag(this.varFlags, TypeScript.VarFlags.Ambient)
    };
    VarDecl.prototype.isExported = function() {
      return TypeScript.hasFlag(this.varFlags, TypeScript.VarFlags.Exported)
    };
    VarDecl.prototype.isStatic = function() {
      return TypeScript.hasFlag(this.varFlags, TypeScript.VarFlags.Static)
    };
    VarDecl.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitJavascriptVarDecl(this, tokenId, writeDeclFile)
    };
    VarDecl.prototype.treeViewLabel = function() {
      return"var " + this.id.text
    };
    return VarDecl
  }(BoundDecl);
  TypeScript.VarDecl = VarDecl;
  var ArgDecl = function(_super) {
    __extends(ArgDecl, _super);
    function ArgDecl(id) {
      _super.call(this, id, TypeScript.NodeType.ArgDecl, 0);
      this.isOptional = false;
      this.parameterPropertySym = null
    }
    ArgDecl.prototype.isOptionalArg = function() {
      return this.isOptional || this.init
    };
    ArgDecl.prototype.treeViewLabel = function() {
      return"arg: " + this.id.text
    };
    ArgDecl.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      emitter.writeToOutput(this.id.text);
      if(writeDeclFile) {
        emitter.emitArgDecl(this)
      }
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    return ArgDecl
  }(BoundDecl);
  TypeScript.ArgDecl = ArgDecl;
  var internalId = 0;
  var FuncDecl = function(_super) {
    __extends(FuncDecl, _super);
    function FuncDecl(name, bod, isConstructor, args, vars, scopes, statics, nodeType) {
      _super.call(this, nodeType);
      this.name = name;
      this.bod = bod;
      this.isConstructor = isConstructor;
      this.args = args;
      this.vars = vars;
      this.scopes = scopes;
      this.statics = statics;
      this.hint = null;
      this.fncFlags = TypeScript.FncFlags.None;
      this.returnTypeAnnotation = null;
      this.variableArgList = false;
      this.jumpRefs = null;
      this.internalNameCache = null;
      this.tmp1Declared = false;
      this.enclosingFnc = null;
      this.freeVariables = [];
      this.unitIndex = -1;
      this.classDecl = null;
      this.boundToProperty = null;
      this.isOverload = false;
      this.innerStaticFuncs = [];
      this.isTargetTypedAsMethod = false;
      this.isInlineCallLiteral = false;
      this.accessorSymbol = null;
      this.leftCurlyCount = 0;
      this.rightCurlyCount = 0;
      this.returnStatementsWithExpressions = [];
      this.scopeType = null
    }
    FuncDecl.prototype.internalName = function() {
      if(this.internalNameCache == null) {
        var extName = this.getNameText();
        if(extName) {
          this.internalNameCache = "_internal_" + extName
        }else {
          this.internalNameCache = "_internal_" + internalId++
        }
      }
      return this.internalNameCache
    };
    FuncDecl.prototype.hasSelfReference = function() {
      return TypeScript.hasFlag(this.fncFlags, TypeScript.FncFlags.HasSelfReference)
    };
    FuncDecl.prototype.setHasSelfReference = function() {
      this.fncFlags |= TypeScript.FncFlags.HasSelfReference
    };
    FuncDecl.prototype.addCloRef = function(id, sym) {
      if(this.envids == null) {
        this.envids = new Array
      }
      this.envids[this.envids.length] = id;
      var outerFnc = this.enclosingFnc;
      if(sym) {
        while(outerFnc && outerFnc.type.symbol != sym.container) {
          outerFnc.addJumpRef(sym);
          outerFnc = outerFnc.enclosingFnc
        }
      }
      return this.envids.length - 1
    };
    FuncDecl.prototype.addJumpRef = function(sym) {
      if(this.jumpRefs == null) {
        this.jumpRefs = new Array
      }
      var id = new Identifier(sym.name);
      this.jumpRefs[this.jumpRefs.length] = id;
      id.sym = sym;
      id.cloId = this.addCloRef(id, null)
    };
    FuncDecl.prototype.buildControlFlow = function() {
      var entry = new TypeScript.BasicBlock;
      var exit = new TypeScript.BasicBlock;
      var context = new TypeScript.ControlFlowContext(entry, exit);
      var controlFlowPrefix = function(ast, parent, walker) {
        ast.addToControlFlow(walker.state);
        return ast
      };
      var walker = TypeScript.getAstWalkerFactory().getWalker(controlFlowPrefix, null, null, context);
      context.walker = walker;
      walker.walk(this.bod, this);
      return context
    };
    FuncDecl.prototype.typeCheck = function(typeFlow) {
      return typeFlow.typeCheckFunction(this)
    };
    FuncDecl.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitJavascriptFunction(this, writeDeclFile)
    };
    FuncDecl.prototype.getNameText = function() {
      if(this.name) {
        return this.name.text
      }else {
        return this.hint
      }
    };
    FuncDecl.prototype.isMethod = function() {
      return(this.fncFlags & TypeScript.FncFlags.Method) != TypeScript.FncFlags.None
    };
    FuncDecl.prototype.isCallMember = function() {
      return TypeScript.hasFlag(this.fncFlags, TypeScript.FncFlags.CallMember)
    };
    FuncDecl.prototype.isConstructMember = function() {
      return TypeScript.hasFlag(this.fncFlags, TypeScript.FncFlags.ConstructMember)
    };
    FuncDecl.prototype.isIndexerMember = function() {
      return TypeScript.hasFlag(this.fncFlags, TypeScript.FncFlags.IndexerMember)
    };
    FuncDecl.prototype.isSpecialFn = function() {
      return this.isCallMember() || this.isIndexerMember() || this.isConstructMember()
    };
    FuncDecl.prototype.isAnonymousFn = function() {
      return this.name === null
    };
    FuncDecl.prototype.isAccessor = function() {
      return TypeScript.hasFlag(this.fncFlags, TypeScript.FncFlags.GetAccessor) || TypeScript.hasFlag(this.fncFlags, TypeScript.FncFlags.SetAccessor)
    };
    FuncDecl.prototype.isGetAccessor = function() {
      return TypeScript.hasFlag(this.fncFlags, TypeScript.FncFlags.GetAccessor)
    };
    FuncDecl.prototype.isSetAccessor = function() {
      return TypeScript.hasFlag(this.fncFlags, TypeScript.FncFlags.SetAccessor)
    };
    FuncDecl.prototype.isAmbient = function() {
      return TypeScript.hasFlag(this.fncFlags, TypeScript.FncFlags.Ambient)
    };
    FuncDecl.prototype.isExported = function() {
      return TypeScript.hasFlag(this.fncFlags, TypeScript.FncFlags.Exported)
    };
    FuncDecl.prototype.isPrivate = function() {
      return TypeScript.hasFlag(this.fncFlags, TypeScript.FncFlags.Private)
    };
    FuncDecl.prototype.isPublic = function() {
      return TypeScript.hasFlag(this.fncFlags, TypeScript.FncFlags.Public)
    };
    FuncDecl.prototype.isStatic = function() {
      return TypeScript.hasFlag(this.fncFlags, TypeScript.FncFlags.Static)
    };
    FuncDecl.prototype.treeViewLabel = function() {
      if(this.name == null) {
        return"funcExpr"
      }else {
        return"func: " + this.name.text
      }
    };
    FuncDecl.prototype.ClearFlags = function() {
      this.fncFlags = TypeScript.FncFlags.None
    };
    FuncDecl.prototype.isSignature = function() {
      return(this.fncFlags & TypeScript.FncFlags.Signature) != TypeScript.FncFlags.None
    };
    FuncDecl.prototype.hasStaticDeclarations = function() {
      return!this.isConstructor && (this.statics.members.length > 0 || this.innerStaticFuncs.length > 0)
    };
    return FuncDecl
  }(AST);
  TypeScript.FuncDecl = FuncDecl;
  var LocationInfo = function() {
    function LocationInfo(filename, lineMap, unitIndex) {
      this.filename = filename;
      this.lineMap = lineMap;
      this.unitIndex = unitIndex
    }
    return LocationInfo
  }();
  TypeScript.LocationInfo = LocationInfo;
  TypeScript.unknownLocationInfo = new LocationInfo("unknown", null, -1);
  var Script = function(_super) {
    __extends(Script, _super);
    function Script(vars, scopes) {
      _super.call(this, new Identifier("script"), null, false, null, vars, scopes, null, TypeScript.NodeType.Script);
      this.locationInfo = null;
      this.requiresGlobal = false;
      this.requiresInherits = false;
      this.isResident = false;
      this.isDeclareFile = false;
      this.hasBeenTypeChecked = false;
      this.topLevelMod = null;
      this.leftCurlyCount = 0;
      this.rightCurlyCount = 0;
      this.vars = vars;
      this.scopes = scopes
    }
    Script.prototype.typeCheck = function(typeFlow) {
      return typeFlow.typeCheckScript(this)
    };
    Script.prototype.treeViewLabel = function() {
      return"Script"
    };
    Script.prototype.emitRequired = function() {
      if(!this.isDeclareFile && !this.isResident && this.bod) {
        for(var i = 0, len = this.bod.members.length;i < len;i++) {
          var stmt = this.bod.members[i];
          if(stmt.nodeType == TypeScript.NodeType.Module) {
            if(!TypeScript.hasFlag(stmt.modFlags, TypeScript.ModuleFlags.ShouldEmitModuleDecl | TypeScript.ModuleFlags.Ambient)) {
              return true
            }
          }else {
            if(stmt.nodeType == TypeScript.NodeType.Class) {
              if(!TypeScript.hasFlag(stmt.varFlags, TypeScript.VarFlags.Ambient)) {
                return true
              }
            }else {
              if(stmt.nodeType == TypeScript.NodeType.VarDecl) {
                if(!TypeScript.hasFlag(stmt.varFlags, TypeScript.VarFlags.Ambient)) {
                  return true
                }
              }else {
                if(stmt.nodeType == TypeScript.NodeType.FuncDecl) {
                  if(!stmt.isSignature()) {
                    return true
                  }
                }else {
                  if(stmt.nodeType != TypeScript.NodeType.Interface && stmt.nodeType != TypeScript.NodeType.Empty) {
                    return true
                  }
                }
              }
            }
          }
        }
      }
      return false
    };
    Script.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      if(this.emitRequired()) {
        emitter.emitParensAndCommentsInPlace(this, true);
        emitter.recordSourceMappingStart(this);
        emitter.emitPrologue(this.requiresInherits);
        var oldDeclContainingAST = writeDeclFile ? emitter.setDeclContainingAST(this) : null;
        emitter.emitJavascriptList(this.bod, null, TypeScript.TokenID.SColon, true, false, false, writeDeclFile);
        if(writeDeclFile) {
          emitter.setDeclContainingAST(oldDeclContainingAST)
        }
        emitter.recordSourceMappingEnd(this);
        emitter.emitParensAndCommentsInPlace(this, false)
      }
    };
    return Script
  }(FuncDecl);
  TypeScript.Script = Script;
  var Record = function(_super) {
    __extends(Record, _super);
    function Record(nty, name, members) {
      _super.call(this, nty);
      this.name = name;
      this.members = members;
      this.nty = nty
    }
    return Record
  }(AST);
  TypeScript.Record = Record;
  var ModuleDecl = function(_super) {
    __extends(ModuleDecl, _super);
    function ModuleDecl(name, members, vars, scopes) {
      _super.call(this, TypeScript.NodeType.Module, name, members);
      this.modFlags = TypeScript.ModuleFlags.ShouldEmitModuleDecl;
      this.alias = null;
      this.leftCurlyCount = 0;
      this.rightCurlyCount = 0;
      this.amdDependencies = [];
      this.members = members;
      this.vars = vars;
      this.name = name;
      this.scopes = scopes;
      this.prettyName = this.name.text
    }
    ModuleDecl.prototype.isExported = function() {
      return TypeScript.hasFlag(this.modFlags, TypeScript.ModuleFlags.Exported)
    };
    ModuleDecl.prototype.isAmbient = function() {
      return TypeScript.hasFlag(this.modFlags, TypeScript.ModuleFlags.Ambient)
    };
    ModuleDecl.prototype.isEnum = function() {
      return TypeScript.hasFlag(this.modFlags, TypeScript.ModuleFlags.IsEnum)
    };
    ModuleDecl.prototype.recordNonInterface = function() {
      this.modFlags &= ~TypeScript.ModuleFlags.ShouldEmitModuleDecl
    };
    ModuleDecl.prototype.typeCheck = function(typeFlow) {
      return typeFlow.typeCheckModule(this)
    };
    ModuleDecl.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      if(!TypeScript.hasFlag(this.modFlags, TypeScript.ModuleFlags.ShouldEmitModuleDecl)) {
        emitter.emitParensAndCommentsInPlace(this, true);
        emitter.emitJavascriptModule(this, writeDeclFile);
        emitter.emitParensAndCommentsInPlace(this, false)
      }else {
        if(writeDeclFile) {
          emitter.emitModuleSignature(this)
        }
      }
    };
    return ModuleDecl
  }(Record);
  TypeScript.ModuleDecl = ModuleDecl;
  var NamedType = function(_super) {
    __extends(NamedType, _super);
    function NamedType(nty, name, extendsList, implementsList, members) {
      _super.call(this, nty, name, members);
      this.extendsList = extendsList;
      this.implementsList = implementsList;
      this.name = name;
      this.members = members
    }
    return NamedType
  }(Record);
  TypeScript.NamedType = NamedType;
  var ClassDecl = function(_super) {
    __extends(ClassDecl, _super);
    function ClassDecl(name, definitionMembers, baseClass, implementsList) {
      _super.call(this, TypeScript.NodeType.Class, name, baseClass, implementsList, definitionMembers);
      this.varFlags = TypeScript.VarFlags.None;
      this.leftCurlyCount = 0;
      this.rightCurlyCount = 0;
      this.knownMemberNames = {};
      this.constructorDecl = null;
      this.constructorNestingLevel = 0;
      this.allMemberDefinitions = new ASTList;
      this.name = name;
      this.baseClass = baseClass;
      this.implementsList = implementsList;
      this.definitionMembers = definitionMembers
    }
    ClassDecl.prototype.isExported = function() {
      return TypeScript.hasFlag(this.varFlags, TypeScript.VarFlags.Exported)
    };
    ClassDecl.prototype.isAmbient = function() {
      return TypeScript.hasFlag(this.varFlags, TypeScript.VarFlags.Ambient)
    };
    ClassDecl.prototype.typeCheck = function(typeFlow) {
      return typeFlow.typeCheckClass(this)
    };
    ClassDecl.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitJavascriptClass(this, writeDeclFile)
    };
    return ClassDecl
  }(NamedType);
  TypeScript.ClassDecl = ClassDecl;
  var TypeDecl = function(_super) {
    __extends(TypeDecl, _super);
    function TypeDecl(nty, name, members, args, extendsList, implementsList) {
      _super.call(this, nty, name, extendsList, implementsList, members);
      this.args = args;
      this.varFlags = TypeScript.VarFlags.None;
      this.isOverload = false;
      this.leftCurlyCount = 0;
      this.rightCurlyCount = 0;
      this.nty = nty;
      this.name = name;
      this.extendsList = extendsList;
      this.implementsList = implementsList;
      this.members = members
    }
    TypeDecl.prototype.isExported = function() {
      return TypeScript.hasFlag(this.varFlags, TypeScript.VarFlags.Exported)
    };
    TypeDecl.prototype.isAmbient = function() {
      return TypeScript.hasFlag(this.varFlags, TypeScript.VarFlags.Ambient)
    };
    TypeDecl.prototype.typeCheck = function(typeFlow) {
      if(this.nty == TypeScript.NodeType.Interface) {
        return typeFlow.typeCheckInterface(this)
      }else {
        throw new Error("please implement type check for node type" + this.nty);
      }
    };
    TypeDecl.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      if(this.nty == TypeScript.NodeType.Interface) {
        if(writeDeclFile) {
          emitter.emitInterfaceDeclaration(this)
        }
      }else {
        throw new Error("please implement emit for node type" + this.nty);
      }
    };
    return TypeDecl
  }(NamedType);
  TypeScript.TypeDecl = TypeDecl;
  var Statement = function(_super) {
    __extends(Statement, _super);
    function Statement(nty) {
      _super.call(this, nty);
      this.flags |= TypeScript.ASTFlags.IsStatement
    }
    Statement.prototype.isLoop = function() {
      return false
    };
    Statement.prototype.isCompoundStatement = function() {
      return this.isLoop()
    };
    Statement.prototype.typeCheck = function(typeFlow) {
      this.type = typeFlow.voidType;
      return this
    };
    return Statement
  }(AST);
  TypeScript.Statement = Statement;
  var LabeledStatement = function(_super) {
    __extends(LabeledStatement, _super);
    function LabeledStatement(labels, stmt) {
      _super.call(this, TypeScript.NodeType.LabeledStatement);
      this.labels = labels;
      this.stmt = stmt
    }
    LabeledStatement.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      if(this.labels) {
        var labelsLen = this.labels.members.length;
        for(var i = 0;i < labelsLen;i++) {
          this.labels.members[i].emit(emitter, tokenId, startLine, writeDeclFile)
        }
      }
      this.stmt.emit(emitter, tokenId, true, writeDeclFile);
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    LabeledStatement.prototype.typeCheck = function(typeFlow) {
      typeFlow.typeCheck(this.labels);
      this.stmt = this.stmt.typeCheck(typeFlow);
      return this
    };
    LabeledStatement.prototype.addToControlFlow = function(context) {
      var beforeBB = context.current;
      var bb = new TypeScript.BasicBlock;
      context.current = bb;
      beforeBB.addSuccessor(bb)
    };
    return LabeledStatement
  }(Statement);
  TypeScript.LabeledStatement = LabeledStatement;
  var Block = function(_super) {
    __extends(Block, _super);
    function Block(stmts, visible) {
      _super.call(this, TypeScript.NodeType.Block);
      this.stmts = stmts;
      this.visible = visible
    }
    Block.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      if(this.visible) {
        emitter.writeLineToOutput(" {");
        emitter.increaseIndent()
      }
      var temp = emitter.setInObjectLiteral(false);
      if(this.stmts) {
        emitter.emitJavascriptList(this.stmts, null, TypeScript.TokenID.SColon, true, false, false)
      }
      if(this.visible) {
        emitter.decreaseIndent();
        emitter.emitIndent();
        emitter.writeToOutput("}")
      }
      emitter.setInObjectLiteral(temp);
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    Block.prototype.addToControlFlow = function(context) {
      var afterIfNeeded = new TypeScript.BasicBlock;
      context.pushStatement(this, context.current, afterIfNeeded);
      if(this.stmts) {
        context.walk(this.stmts, this)
      }
      context.walker.options.goChildren = false;
      context.popStatement();
      if(afterIfNeeded.predecessors.length > 0) {
        context.current.addSuccessor(afterIfNeeded);
        context.current = afterIfNeeded
      }
    };
    Block.prototype.typeCheck = function(typeFlow) {
      if(!typeFlow.checker.styleSettings.emptyBlocks) {
        if(this.stmts === null || this.stmts.members.length == 0) {
          typeFlow.checker.errorReporter.styleError(this, "empty block")
        }
      }
      typeFlow.typeCheck(this.stmts);
      return this
    };
    return Block
  }(Statement);
  TypeScript.Block = Block;
  var Jump = function(_super) {
    __extends(Jump, _super);
    function Jump(nty) {
      _super.call(this, nty);
      this.target = null;
      this.resolvedTarget = null;
      this.nty = nty
    }
    Jump.prototype.hasExplicitTarget = function() {
      return this.target
    };
    Jump.prototype.setResolvedTarget = function(parser, stmt) {
      if(stmt.isLoop()) {
        this.resolvedTarget = stmt;
        return true
      }
      if(this.nty === TypeScript.NodeType.Continue) {
        parser.reportParseError("continue statement applies only to loops");
        return false
      }else {
        if(stmt.nodeType == TypeScript.NodeType.Switch || this.hasExplicitTarget()) {
          this.resolvedTarget = stmt;
          return true
        }else {
          parser.reportParseError("break statement with no label can apply only to a loop or switch statement");
          return false
        }
      }
    };
    Jump.prototype.addToControlFlow = function(context) {
      _super.prototype.addToControlFlow.call(this, context);
      context.unconditionalBranch(this.resolvedTarget, this.nty == TypeScript.NodeType.Continue)
    };
    Jump.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      if(this.nty == TypeScript.NodeType.Break) {
        emitter.writeToOutput("break")
      }else {
        emitter.writeToOutput("continue")
      }
      if(this.hasExplicitTarget()) {
        emitter.writeToOutput(" " + this.target)
      }
      emitter.writeToOutput(";");
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    return Jump
  }(Statement);
  TypeScript.Jump = Jump;
  var WhileStatement = function(_super) {
    __extends(WhileStatement, _super);
    function WhileStatement(cond) {
      _super.call(this, TypeScript.NodeType.While);
      this.cond = cond;
      this.body = null
    }
    WhileStatement.prototype.isStatementOrExpression = function() {
      return true
    };
    WhileStatement.prototype.isLoop = function() {
      return true
    };
    WhileStatement.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      var temp = emitter.setInObjectLiteral(false);
      emitter.writeToOutput("while(");
      emitter.emitJavascript(this.cond, TypeScript.TokenID.WHILE, false);
      emitter.writeToOutput(")");
      emitter.emitJavascriptStatements(this.body, false, false);
      emitter.setInObjectLiteral(temp);
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    WhileStatement.prototype.typeCheck = function(typeFlow) {
      return typeFlow.typeCheckWhile(this)
    };
    WhileStatement.prototype.addToControlFlow = function(context) {
      var loopHeader = context.current;
      var loopStart = new TypeScript.BasicBlock;
      var afterLoop = new TypeScript.BasicBlock;
      loopHeader.addSuccessor(loopStart);
      context.current = loopStart;
      context.addContent(this.cond);
      var condBlock = context.current;
      var targetInfo = null;
      if(this.body) {
        context.current = new TypeScript.BasicBlock;
        condBlock.addSuccessor(context.current);
        context.pushStatement(this, loopStart, afterLoop);
        context.walk(this.body, this);
        targetInfo = context.popStatement()
      }
      if(!context.noContinuation) {
        var loopEnd = context.current;
        loopEnd.addSuccessor(loopStart)
      }
      context.current = afterLoop;
      condBlock.addSuccessor(afterLoop);
      context.noContinuation = false;
      context.walker.options.goChildren = false
    };
    return WhileStatement
  }(Statement);
  TypeScript.WhileStatement = WhileStatement;
  var DoWhileStatement = function(_super) {
    __extends(DoWhileStatement, _super);
    function DoWhileStatement() {
      _super.call(this, TypeScript.NodeType.DoWhile);
      this.body = null;
      this.whileAST = null;
      this.cond = null
    }
    DoWhileStatement.prototype.isStatementOrExpression = function() {
      return true
    };
    DoWhileStatement.prototype.isLoop = function() {
      return true
    };
    DoWhileStatement.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      var temp = emitter.setInObjectLiteral(false);
      emitter.writeToOutput("do");
      emitter.emitJavascriptStatements(this.body, true, false);
      emitter.recordSourceMappingStart(this.whileAST);
      emitter.writeToOutput("while");
      emitter.recordSourceMappingEnd(this.whileAST);
      emitter.writeToOutput("(");
      emitter.emitJavascript(this.cond, TypeScript.TokenID.RParen, false);
      emitter.writeToOutput(")");
      emitter.setInObjectLiteral(temp);
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    DoWhileStatement.prototype.typeCheck = function(typeFlow) {
      return typeFlow.typeCheckDoWhile(this)
    };
    DoWhileStatement.prototype.addToControlFlow = function(context) {
      var loopHeader = context.current;
      var loopStart = new TypeScript.BasicBlock;
      var afterLoop = new TypeScript.BasicBlock;
      loopHeader.addSuccessor(loopStart);
      context.current = loopStart;
      var targetInfo = null;
      if(this.body) {
        context.pushStatement(this, loopStart, afterLoop);
        context.walk(this.body, this);
        targetInfo = context.popStatement()
      }
      if(!context.noContinuation) {
        var loopEnd = context.current;
        loopEnd.addSuccessor(loopStart);
        context.addContent(this.cond);
        context.current = afterLoop;
        loopEnd.addSuccessor(afterLoop)
      }else {
        context.addUnreachable(this.cond)
      }
      context.walker.options.goChildren = false
    };
    return DoWhileStatement
  }(Statement);
  TypeScript.DoWhileStatement = DoWhileStatement;
  var IfStatement = function(_super) {
    __extends(IfStatement, _super);
    function IfStatement(cond) {
      _super.call(this, TypeScript.NodeType.If);
      this.cond = cond;
      this.elseBod = null
    }
    IfStatement.prototype.isStatementOrExpression = function() {
      return true
    };
    IfStatement.prototype.isCompoundStatement = function() {
      return true
    };
    IfStatement.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      var temp = emitter.setInObjectLiteral(false);
      emitter.writeToOutput("if(");
      emitter.emitJavascript(this.cond, TypeScript.TokenID.IF, false);
      emitter.writeToOutput(")");
      emitter.emitJavascriptStatements(this.thenBod, true, false);
      if(this.elseBod) {
        emitter.writeToOutput(" else");
        emitter.emitJavascriptStatements(this.elseBod, true, true)
      }
      emitter.setInObjectLiteral(temp);
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    IfStatement.prototype.typeCheck = function(typeFlow) {
      return typeFlow.typeCheckIf(this)
    };
    IfStatement.prototype.addToControlFlow = function(context) {
      this.cond.addToControlFlow(context);
      var afterIf = new TypeScript.BasicBlock;
      var beforeIf = context.current;
      context.pushStatement(this, beforeIf, afterIf);
      var hasContinuation = false;
      context.current = new TypeScript.BasicBlock;
      beforeIf.addSuccessor(context.current);
      context.walk(this.thenBod, this);
      if(!context.noContinuation) {
        hasContinuation = true;
        context.current.addSuccessor(afterIf)
      }
      if(this.elseBod) {
        context.current = new TypeScript.BasicBlock;
        context.noContinuation = false;
        beforeIf.addSuccessor(context.current);
        context.walk(this.elseBod, this);
        if(!context.noContinuation) {
          hasContinuation = true;
          context.current.addSuccessor(afterIf)
        }else {
          if(hasContinuation) {
            context.noContinuation = false
          }
        }
      }else {
        beforeIf.addSuccessor(afterIf);
        context.noContinuation = false;
        hasContinuation = true
      }
      var targetInfo = context.popStatement();
      if(afterIf.predecessors.length > 0) {
        context.noContinuation = false;
        hasContinuation = true
      }
      if(hasContinuation) {
        context.current = afterIf
      }
      context.walker.options.goChildren = false
    };
    return IfStatement
  }(Statement);
  TypeScript.IfStatement = IfStatement;
  var ReturnStatement = function(_super) {
    __extends(ReturnStatement, _super);
    function ReturnStatement() {
      _super.call(this, TypeScript.NodeType.Return);
      this.returnExpression = null
    }
    ReturnStatement.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      var temp = emitter.setInObjectLiteral(false);
      if(this.returnExpression) {
        emitter.writeToOutput("return ");
        emitter.emitJavascript(this.returnExpression, TypeScript.TokenID.SColon, false)
      }else {
        emitter.writeToOutput("return;")
      }
      emitter.setInObjectLiteral(temp);
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    ReturnStatement.prototype.addToControlFlow = function(context) {
      _super.prototype.addToControlFlow.call(this, context);
      context.returnStmt()
    };
    ReturnStatement.prototype.typeCheck = function(typeFlow) {
      return typeFlow.typeCheckReturn(this)
    };
    return ReturnStatement
  }(Statement);
  TypeScript.ReturnStatement = ReturnStatement;
  var EndCode = function(_super) {
    __extends(EndCode, _super);
    function EndCode() {
      _super.call(this, TypeScript.NodeType.EndCode)
    }
    return EndCode
  }(AST);
  TypeScript.EndCode = EndCode;
  var ForInStatement = function(_super) {
    __extends(ForInStatement, _super);
    function ForInStatement(lval, obj) {
      _super.call(this, TypeScript.NodeType.ForIn);
      this.lval = lval;
      this.obj = obj;
      if(this.lval && this.lval.nodeType == TypeScript.NodeType.VarDecl) {
        this.lval.varFlags |= TypeScript.VarFlags.AutoInit
      }
    }
    ForInStatement.prototype.isStatementOrExpression = function() {
      return true
    };
    ForInStatement.prototype.isLoop = function() {
      return true
    };
    ForInStatement.prototype.isFiltered = function() {
      if(this.body) {
        var singleItem = null;
        if(this.body.nodeType == TypeScript.NodeType.List) {
          var stmts = this.body;
          if(stmts.members.length == 1) {
            singleItem = stmts.members[0]
          }
        }else {
          singleItem = this.body
        }
        if(singleItem !== null) {
          if(singleItem.nodeType == TypeScript.NodeType.Block) {
            var block = singleItem;
            if(block.stmts !== null && block.stmts.members.length == 1) {
              singleItem = block.stmts.members[0]
            }
          }
          if(singleItem.nodeType == TypeScript.NodeType.If) {
            var cond = singleItem.cond;
            if(cond.nodeType == TypeScript.NodeType.Call) {
              var target = cond.target;
              if(target.nodeType == TypeScript.NodeType.Dot) {
                var binex = target;
                if(binex.operand1.nodeType == TypeScript.NodeType.Name && this.obj.nodeType == TypeScript.NodeType.Name && binex.operand1.text == this.obj.text) {
                  var prop = binex.operand2;
                  if(prop.text == "hasOwnProperty") {
                    var args = cond.args;
                    if(args !== null && args.members.length == 1) {
                      var arg = args.members[0];
                      if(arg.nodeType == TypeScript.NodeType.Name && this.lval.nodeType == TypeScript.NodeType.Name) {
                        if(this.lval.text == arg.text) {
                          return true
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      return false
    };
    ForInStatement.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      var temp = emitter.setInObjectLiteral(false);
      emitter.writeToOutput("for(");
      emitter.emitJavascript(this.lval, TypeScript.TokenID.FOR, false);
      emitter.writeToOutput(" in ");
      emitter.emitJavascript(this.obj, TypeScript.TokenID.FOR, false);
      emitter.writeToOutput(")");
      emitter.emitJavascriptStatements(this.body, true, false);
      emitter.setInObjectLiteral(temp);
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    ForInStatement.prototype.typeCheck = function(typeFlow) {
      if(typeFlow.checker.styleSettings.forin) {
        if(!this.isFiltered()) {
          typeFlow.checker.errorReporter.styleError(this, "no hasOwnProperty filter")
        }
      }
      return typeFlow.typeCheckForIn(this)
    };
    ForInStatement.prototype.addToControlFlow = function(context) {
      if(this.lval) {
        context.addContent(this.lval)
      }
      if(this.obj) {
        context.addContent(this.obj)
      }
      var loopHeader = context.current;
      var loopStart = new TypeScript.BasicBlock;
      var afterLoop = new TypeScript.BasicBlock;
      loopHeader.addSuccessor(loopStart);
      context.current = loopStart;
      if(this.body) {
        context.pushStatement(this, loopStart, afterLoop);
        context.walk(this.body, this);
        context.popStatement()
      }
      if(!context.noContinuation) {
        var loopEnd = context.current;
        loopEnd.addSuccessor(loopStart)
      }
      context.current = afterLoop;
      context.noContinuation = false;
      loopHeader.addSuccessor(afterLoop);
      context.walker.options.goChildren = false
    };
    return ForInStatement
  }(Statement);
  TypeScript.ForInStatement = ForInStatement;
  var ForStatement = function(_super) {
    __extends(ForStatement, _super);
    function ForStatement(init) {
      _super.call(this, TypeScript.NodeType.For);
      this.init = init
    }
    ForStatement.prototype.isStatementOrExpression = function() {
      return true
    };
    ForStatement.prototype.isLoop = function() {
      return true
    };
    ForStatement.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      var temp = emitter.setInObjectLiteral(false);
      emitter.writeToOutput("for(");
      if(this.init) {
        if(this.init.nodeType != TypeScript.NodeType.List) {
          emitter.emitJavascript(this.init, TypeScript.TokenID.FOR, false)
        }else {
          emitter.emitForVarList(this.init)
        }
      }
      emitter.writeToOutput("; ");
      emitter.emitJavascript(this.cond, TypeScript.TokenID.FOR, false);
      emitter.writeToOutput("; ");
      emitter.emitJavascript(this.incr, TypeScript.TokenID.FOR, false);
      emitter.writeToOutput(")");
      emitter.emitJavascriptStatements(this.body, true, false);
      emitter.setInObjectLiteral(temp);
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    ForStatement.prototype.typeCheck = function(typeFlow) {
      return typeFlow.typeCheckFor(this)
    };
    ForStatement.prototype.addToControlFlow = function(context) {
      if(this.init) {
        context.addContent(this.init)
      }
      var loopHeader = context.current;
      var loopStart = new TypeScript.BasicBlock;
      var afterLoop = new TypeScript.BasicBlock;
      loopHeader.addSuccessor(loopStart);
      context.current = loopStart;
      var condBlock = null;
      var continueTarget = loopStart;
      var incrBB = null;
      if(this.incr) {
        incrBB = new TypeScript.BasicBlock;
        continueTarget = incrBB
      }
      if(this.cond) {
        condBlock = context.current;
        context.addContent(this.cond);
        context.current = new TypeScript.BasicBlock;
        condBlock.addSuccessor(context.current)
      }
      var targetInfo = null;
      if(this.body) {
        context.pushStatement(this, continueTarget, afterLoop);
        context.walk(this.body, this);
        targetInfo = context.popStatement()
      }
      if(this.incr) {
        if(context.noContinuation) {
          if(incrBB.predecessors.length == 0) {
            context.addUnreachable(this.incr)
          }
        }else {
          context.current.addSuccessor(incrBB);
          context.current = incrBB;
          context.addContent(this.incr)
        }
      }
      var loopEnd = context.current;
      if(!context.noContinuation) {
        loopEnd.addSuccessor(loopStart)
      }
      if(condBlock) {
        condBlock.addSuccessor(afterLoop);
        context.noContinuation = false
      }
      if(afterLoop.predecessors.length > 0) {
        context.noContinuation = false;
        context.current = afterLoop
      }
      context.walker.options.goChildren = false
    };
    return ForStatement
  }(Statement);
  TypeScript.ForStatement = ForStatement;
  var WithStatement = function(_super) {
    __extends(WithStatement, _super);
    function WithStatement(expr) {
      _super.call(this, TypeScript.NodeType.With);
      this.expr = expr;
      this.withSym = null
    }
    WithStatement.prototype.isStatementOrExpression = function() {
      return true
    };
    WithStatement.prototype.isCompoundStatement = function() {
      return true
    };
    WithStatement.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      emitter.writeToOutput("with (");
      if(this.expr) {
        emitter.emitJavascript(this.expr, TypeScript.TokenID.WITH, false)
      }
      emitter.writeToOutput(")");
      emitter.emitJavascriptStatements(this.body, true, false);
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    WithStatement.prototype.typeCheck = function(typeFlow) {
      return typeFlow.typeCheckWith(this)
    };
    return WithStatement
  }(Statement);
  TypeScript.WithStatement = WithStatement;
  var SwitchStatement = function(_super) {
    __extends(SwitchStatement, _super);
    function SwitchStatement(val) {
      _super.call(this, TypeScript.NodeType.Switch);
      this.val = val;
      this.defaultCase = null
    }
    SwitchStatement.prototype.isStatementOrExpression = function() {
      return true
    };
    SwitchStatement.prototype.isCompoundStatement = function() {
      return true
    };
    SwitchStatement.prototype.emit = function(emitter, tokenId, startLine) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      var temp = emitter.setInObjectLiteral(false);
      emitter.writeToOutput("switch(");
      emitter.emitJavascript(this.val, TypeScript.TokenID.ID, false);
      emitter.writeLineToOutput(") {");
      emitter.increaseIndent();
      var casesLen = this.caseList.members.length;
      for(var i = 0;i < casesLen;i++) {
        var caseExpr = this.caseList.members[i];
        emitter.emitJavascript(caseExpr, TypeScript.TokenID.CASE, true);
        emitter.writeLineToOutput("")
      }
      emitter.decreaseIndent();
      emitter.emitIndent();
      emitter.writeToOutput("}");
      emitter.setInObjectLiteral(temp);
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    SwitchStatement.prototype.typeCheck = function(typeFlow) {
      var len = this.caseList.members.length;
      this.val = typeFlow.typeCheck(this.val);
      for(var i = 0;i < len;i++) {
        this.caseList.members[i] = typeFlow.typeCheck(this.caseList.members[i])
      }
      this.defaultCase = typeFlow.typeCheck(this.defaultCase);
      this.type = typeFlow.voidType;
      return this
    };
    SwitchStatement.prototype.addToControlFlow = function(context) {
      var condBlock = context.current;
      context.addContent(this.val);
      var execBlock = new TypeScript.BasicBlock;
      var afterSwitch = new TypeScript.BasicBlock;
      condBlock.addSuccessor(execBlock);
      context.pushSwitch(execBlock);
      context.current = execBlock;
      context.pushStatement(this, execBlock, afterSwitch);
      context.walk(this.caseList, this);
      context.popSwitch();
      var targetInfo = context.popStatement();
      var hasCondContinuation = this.defaultCase == null;
      if(this.defaultCase == null) {
        condBlock.addSuccessor(afterSwitch)
      }
      if(afterSwitch.predecessors.length > 0) {
        context.noContinuation = false;
        context.current = afterSwitch
      }else {
        context.noContinuation = true
      }
      context.walker.options.goChildren = false
    };
    return SwitchStatement
  }(Statement);
  TypeScript.SwitchStatement = SwitchStatement;
  var CaseStatement = function(_super) {
    __extends(CaseStatement, _super);
    function CaseStatement() {
      _super.call(this, TypeScript.NodeType.Case);
      this.expr = null
    }
    CaseStatement.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      if(this.expr) {
        emitter.writeToOutput("case ");
        emitter.emitJavascript(this.expr, TypeScript.TokenID.ID, false)
      }else {
        emitter.writeToOutput("default")
      }
      emitter.writeToOutput(":");
      emitter.emitJavascriptStatements(this.body, false, false);
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    CaseStatement.prototype.typeCheck = function(typeFlow) {
      this.expr = typeFlow.typeCheck(this.expr);
      typeFlow.typeCheck(this.body);
      this.type = typeFlow.voidType;
      return this
    };
    CaseStatement.prototype.addToControlFlow = function(context) {
      var execBlock = new TypeScript.BasicBlock;
      var sw = context.currentSwitch[context.currentSwitch.length - 1];
      if(this.expr) {
        var exprBlock = new TypeScript.BasicBlock;
        context.current = exprBlock;
        sw.addSuccessor(exprBlock);
        context.addContent(this.expr);
        exprBlock.addSuccessor(execBlock)
      }else {
        sw.addSuccessor(execBlock)
      }
      context.current = execBlock;
      if(this.body) {
        context.walk(this.body, this)
      }
      context.noContinuation = false;
      context.walker.options.goChildren = false
    };
    return CaseStatement
  }(Statement);
  TypeScript.CaseStatement = CaseStatement;
  var TypeReference = function(_super) {
    __extends(TypeReference, _super);
    function TypeReference(term, arrayCount) {
      _super.call(this, TypeScript.NodeType.TypeRef);
      this.term = term;
      this.arrayCount = arrayCount
    }
    TypeReference.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      throw new Error("should not emit a type ref");
    };
    TypeReference.prototype.typeCheck = function(typeFlow) {
      var prevInTCTR = typeFlow.inTypeRefTypeCheck;
      typeFlow.inTypeRefTypeCheck = true;
      var typeLink = TypeScript.getTypeLink(this, typeFlow.checker, true);
      typeFlow.checker.resolveTypeLink(typeFlow.scope, typeLink, false);
      typeFlow.checkForVoidConstructor(typeLink.type, this);
      this.type = typeLink.type;
      if(this.term) {
        this.term.type = this.type
      }
      typeFlow.inTypeRefTypeCheck = prevInTCTR;
      return this
    };
    return TypeReference
  }(AST);
  TypeScript.TypeReference = TypeReference;
  var TryFinally = function(_super) {
    __extends(TryFinally, _super);
    function TryFinally(tryNode, finallyNode) {
      _super.call(this, TypeScript.NodeType.TryFinally);
      this.tryNode = tryNode;
      this.finallyNode = finallyNode
    }
    TryFinally.prototype.isStatementOrExpression = function() {
      return true
    };
    TryFinally.prototype.isCompoundStatement = function() {
      return true
    };
    TryFinally.prototype.emit = function(emitter, tokenId, startLine) {
      emitter.recordSourceMappingStart(this);
      emitter.emitJavascript(this.tryNode, TypeScript.TokenID.TRY, false);
      emitter.emitJavascript(this.finallyNode, TypeScript.TokenID.FINALLY, false);
      emitter.recordSourceMappingEnd(this)
    };
    TryFinally.prototype.typeCheck = function(typeFlow) {
      this.tryNode = typeFlow.typeCheck(this.tryNode);
      this.finallyNode = typeFlow.typeCheck(this.finallyNode);
      this.type = typeFlow.voidType;
      return this
    };
    TryFinally.prototype.addToControlFlow = function(context) {
      var afterFinally = new TypeScript.BasicBlock;
      context.walk(this.tryNode, this);
      var finBlock = new TypeScript.BasicBlock;
      if(context.current) {
        context.current.addSuccessor(finBlock)
      }
      context.current = finBlock;
      context.pushStatement(this, null, afterFinally);
      context.walk(this.finallyNode, this);
      if(!context.noContinuation && context.current) {
        context.current.addSuccessor(afterFinally)
      }
      if(afterFinally.predecessors.length > 0) {
        context.current = afterFinally
      }else {
        context.noContinuation = true
      }
      context.popStatement();
      context.walker.options.goChildren = false
    };
    return TryFinally
  }(Statement);
  TypeScript.TryFinally = TryFinally;
  var TryCatch = function(_super) {
    __extends(TryCatch, _super);
    function TryCatch(tryNode, catchNode) {
      _super.call(this, TypeScript.NodeType.TryCatch);
      this.tryNode = tryNode;
      this.catchNode = catchNode
    }
    TryCatch.prototype.isStatementOrExpression = function() {
      return true
    };
    TryCatch.prototype.isCompoundStatement = function() {
      return true
    };
    TryCatch.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      emitter.emitJavascript(this.tryNode, TypeScript.TokenID.TRY, false);
      emitter.emitJavascript(this.catchNode, TypeScript.TokenID.CATCH, false);
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    TryCatch.prototype.addToControlFlow = function(context) {
      var beforeTry = context.current;
      var tryBlock = new TypeScript.BasicBlock;
      beforeTry.addSuccessor(tryBlock);
      context.current = tryBlock;
      var afterTryCatch = new TypeScript.BasicBlock;
      context.pushStatement(this, null, afterTryCatch);
      context.walk(this.tryNode, this);
      if(!context.noContinuation) {
        if(context.current) {
          context.current.addSuccessor(afterTryCatch)
        }
      }
      context.current = new TypeScript.BasicBlock;
      beforeTry.addSuccessor(context.current);
      context.walk(this.catchNode, this);
      context.popStatement();
      if(!context.noContinuation) {
        if(context.current) {
          context.current.addSuccessor(afterTryCatch)
        }
      }
      context.current = afterTryCatch;
      context.walker.options.goChildren = false
    };
    TryCatch.prototype.typeCheck = function(typeFlow) {
      this.tryNode = typeFlow.typeCheck(this.tryNode);
      this.catchNode = typeFlow.typeCheck(this.catchNode);
      this.type = typeFlow.voidType;
      return this
    };
    return TryCatch
  }(Statement);
  TypeScript.TryCatch = TryCatch;
  var Try = function(_super) {
    __extends(Try, _super);
    function Try(body) {
      _super.call(this, TypeScript.NodeType.Try);
      this.body = body
    }
    Try.prototype.isStatementOrExpression = function() {
      return true
    };
    Try.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      emitter.writeToOutput("try ");
      emitter.emitJavascript(this.body, TypeScript.TokenID.TRY, false);
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    Try.prototype.typeCheck = function(typeFlow) {
      this.body = typeFlow.typeCheck(this.body);
      return this
    };
    Try.prototype.addToControlFlow = function(context) {
      if(this.body) {
        context.walk(this.body, this)
      }
      context.walker.options.goChildren = false;
      context.noContinuation = false
    };
    return Try
  }(Statement);
  TypeScript.Try = Try;
  var Catch = function(_super) {
    __extends(Catch, _super);
    function Catch(param, body) {
      _super.call(this, TypeScript.NodeType.Catch);
      this.param = param;
      this.body = body;
      this.containedScope = null;
      if(this.param) {
        this.param.varFlags |= TypeScript.VarFlags.AutoInit
      }
    }
    Catch.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      emitter.writeToOutput(" catch (");
      emitter.emitJavascript(this.param, TypeScript.TokenID.LParen, false);
      emitter.writeToOutput(")");
      emitter.emitJavascript(this.body, TypeScript.TokenID.CATCH, false);
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    Catch.prototype.addToControlFlow = function(context) {
      if(this.param) {
        context.addContent(this.param);
        var bodBlock = new TypeScript.BasicBlock;
        context.current.addSuccessor(bodBlock);
        context.current = bodBlock
      }
      if(this.body) {
        context.walk(this.body, this)
      }
      context.noContinuation = false;
      context.walker.options.goChildren = false
    };
    Catch.prototype.typeCheck = function(typeFlow) {
      var prevScope = typeFlow.scope;
      typeFlow.scope = this.containedScope;
      this.param = typeFlow.typeCheck(this.param);
      var exceptVar = new TypeScript.ValueLocation;
      var varSym = new TypeScript.VariableSymbol(this.param.id.text, this.param.minChar, typeFlow.checker.locationInfo.unitIndex, exceptVar);
      exceptVar.symbol = varSym;
      exceptVar.typeLink = new TypeScript.TypeLink;
      exceptVar.typeLink.type = typeFlow.anyType;
      var thisFnc = typeFlow.thisFnc;
      if(thisFnc && thisFnc.type) {
        exceptVar.symbol.container = thisFnc.type.symbol
      }else {
        exceptVar.symbol.container = null
      }
      this.param.sym = exceptVar.symbol;
      typeFlow.scope.enter(exceptVar.symbol.container, this.param, exceptVar.symbol, typeFlow.checker.errorReporter, false, false, false);
      this.body = typeFlow.typeCheck(this.body);
      if(typeFlow.checker.inProvisionalTypecheckMode()) {
        var table = typeFlow.scope.getTable();
        table.secondaryTable.table[exceptVar.symbol.name] = undefined
      }
      this.type = typeFlow.voidType;
      typeFlow.scope = prevScope;
      return this
    };
    return Catch
  }(Statement);
  TypeScript.Catch = Catch;
  var Finally = function(_super) {
    __extends(Finally, _super);
    function Finally(body) {
      _super.call(this, TypeScript.NodeType.Finally);
      this.body = body
    }
    Finally.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      emitter.writeToOutput("finally");
      emitter.emitJavascript(this.body, TypeScript.TokenID.FINALLY, false);
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    Finally.prototype.addToControlFlow = function(context) {
      if(this.body) {
        context.walk(this.body, this)
      }
      context.walker.options.goChildren = false;
      context.noContinuation = false
    };
    Finally.prototype.typeCheck = function(typeFlow) {
      this.body = typeFlow.typeCheck(this.body);
      return this
    };
    return Finally
  }(Statement);
  TypeScript.Finally = Finally;
  var Comment = function(_super) {
    __extends(Comment, _super);
    function Comment(content, isBlockComment, endsLine) {
      _super.call(this, TypeScript.NodeType.Comment);
      this.content = content;
      this.isBlockComment = isBlockComment;
      this.endsLine = endsLine;
      this.text = null
    }
    Comment.prototype.getText = function() {
      if(this.text == null) {
        if(this.isBlockComment) {
          this.text = this.content.split("\n");
          for(var i = 0;i < this.text.length;i++) {
            this.text[i] = this.text[i].replace(/^\s+|\s+$/g, "")
          }
        }else {
          this.text = [this.content.replace(/^\s+|\s+$/g, "")]
        }
      }
      return this.text
    };
    return Comment
  }(AST);
  TypeScript.Comment = Comment;
  var DebuggerStatement = function(_super) {
    __extends(DebuggerStatement, _super);
    function DebuggerStatement() {
      _super.call(this, TypeScript.NodeType.Debugger)
    }
    DebuggerStatement.prototype.emit = function(emitter, tokenId, startLine, writeDeclFile) {
      emitter.emitParensAndCommentsInPlace(this, true);
      emitter.recordSourceMappingStart(this);
      emitter.writeLineToOutput("debugger;");
      emitter.recordSourceMappingEnd(this);
      emitter.emitParensAndCommentsInPlace(this, false)
    };
    return DebuggerStatement
  }(Statement);
  TypeScript.DebuggerStatement = DebuggerStatement
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  var AstWalkOptions = function() {
    function AstWalkOptions() {
      this.goChildren = true;
      this.goNextSibling = true;
      this.reverseSiblings = false
    }
    AstWalkOptions.prototype.stopWalk = function(stop) {
      if(typeof stop === "undefined") {
        stop = true
      }
      this.goChildren = !stop;
      this.goNextSibling = !stop
    };
    return AstWalkOptions
  }();
  TypeScript.AstWalkOptions = AstWalkOptions;
  var AstWalker = function() {
    function AstWalker(childrenWalkers, pre, post, options, state) {
      this.childrenWalkers = childrenWalkers;
      this.pre = pre;
      this.post = post;
      this.options = options;
      this.state = state
    }
    AstWalker.prototype.walk = function(ast, parent) {
      var preAst = this.pre(ast, parent, this);
      if(preAst === undefined) {
        preAst = ast
      }
      if(this.options.goChildren) {
        var svGoSib = this.options.goNextSibling;
        this.options.goNextSibling = true;
        this.childrenWalkers[ast.nodeType](ast, parent, this);
        this.options.goNextSibling = svGoSib
      }else {
        this.options.goChildren = true
      }
      if(this.post) {
        var postAst = this.post(preAst, parent, this);
        if(postAst === undefined) {
          postAst = preAst
        }
        return postAst
      }else {
        return preAst
      }
    };
    return AstWalker
  }();
  var AstWalkerFactory = function() {
    function AstWalkerFactory() {
      this.childrenWalkers = [];
      this.initChildrenWalkers()
    }
    AstWalkerFactory.prototype.walk = function(ast, pre, post, options, state) {
      return this.getWalker(pre, post, options, state).walk(ast, null)
    };
    AstWalkerFactory.prototype.getWalker = function(pre, post, options, state) {
      return this.getSlowWalker(pre, post, options, state)
    };
    AstWalkerFactory.prototype.getSlowWalker = function(pre, post, options, state) {
      if(!options) {
        options = new AstWalkOptions
      }
      return new AstWalker(this.childrenWalkers, pre, post, options, state)
    };
    AstWalkerFactory.prototype.initChildrenWalkers = function() {
      this.childrenWalkers[TypeScript.NodeType.None] = ChildrenWalkers.walkNone;
      this.childrenWalkers[TypeScript.NodeType.Empty] = ChildrenWalkers.walkNone;
      this.childrenWalkers[TypeScript.NodeType.EmptyExpr] = ChildrenWalkers.walkNone;
      this.childrenWalkers[TypeScript.NodeType.True] = ChildrenWalkers.walkNone;
      this.childrenWalkers[TypeScript.NodeType.False] = ChildrenWalkers.walkNone;
      this.childrenWalkers[TypeScript.NodeType.This] = ChildrenWalkers.walkNone;
      this.childrenWalkers[TypeScript.NodeType.Super] = ChildrenWalkers.walkNone;
      this.childrenWalkers[TypeScript.NodeType.QString] = ChildrenWalkers.walkNone;
      this.childrenWalkers[TypeScript.NodeType.Regex] = ChildrenWalkers.walkNone;
      this.childrenWalkers[TypeScript.NodeType.Null] = ChildrenWalkers.walkNone;
      this.childrenWalkers[TypeScript.NodeType.ArrayLit] = ChildrenWalkers.walkUnaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.ObjectLit] = ChildrenWalkers.walkUnaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Void] = ChildrenWalkers.walkNone;
      this.childrenWalkers[TypeScript.NodeType.Comma] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Pos] = ChildrenWalkers.walkUnaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Neg] = ChildrenWalkers.walkUnaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Delete] = ChildrenWalkers.walkUnaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Await] = ChildrenWalkers.walkUnaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.In] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Dot] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.From] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Is] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.InstOf] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Typeof] = ChildrenWalkers.walkUnaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.NumberLit] = ChildrenWalkers.walkNone;
      this.childrenWalkers[TypeScript.NodeType.Name] = ChildrenWalkers.walkNone;
      this.childrenWalkers[TypeScript.NodeType.TypeRef] = ChildrenWalkers.walkTypeReferenceChildren;
      this.childrenWalkers[TypeScript.NodeType.Index] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Call] = ChildrenWalkers.walkCallExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.New] = ChildrenWalkers.walkCallExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Asg] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.AsgAdd] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.AsgSub] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.AsgDiv] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.AsgMul] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.AsgMod] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.AsgAnd] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.AsgXor] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.AsgOr] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.AsgLsh] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.AsgRsh] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.AsgRs2] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.QMark] = ChildrenWalkers.walkTrinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.LogOr] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.LogAnd] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Or] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Xor] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.And] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Eq] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Ne] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Eqv] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.NEqv] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Lt] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Le] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Gt] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Ge] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Add] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Sub] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Mul] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Div] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Mod] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Lsh] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Rsh] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Rs2] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.Not] = ChildrenWalkers.walkUnaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.LogNot] = ChildrenWalkers.walkUnaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.IncPre] = ChildrenWalkers.walkUnaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.DecPre] = ChildrenWalkers.walkUnaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.IncPost] = ChildrenWalkers.walkUnaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.DecPost] = ChildrenWalkers.walkUnaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.TypeAssertion] = ChildrenWalkers.walkUnaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.FuncDecl] = ChildrenWalkers.walkFuncDeclChildren;
      this.childrenWalkers[TypeScript.NodeType.Member] = ChildrenWalkers.walkBinaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.VarDecl] = ChildrenWalkers.walkBoundDeclChildren;
      this.childrenWalkers[TypeScript.NodeType.ArgDecl] = ChildrenWalkers.walkBoundDeclChildren;
      this.childrenWalkers[TypeScript.NodeType.Return] = ChildrenWalkers.walkReturnStatementChildren;
      this.childrenWalkers[TypeScript.NodeType.Break] = ChildrenWalkers.walkNone;
      this.childrenWalkers[TypeScript.NodeType.Continue] = ChildrenWalkers.walkNone;
      this.childrenWalkers[TypeScript.NodeType.Throw] = ChildrenWalkers.walkUnaryExpressionChildren;
      this.childrenWalkers[TypeScript.NodeType.For] = ChildrenWalkers.walkForStatementChildren;
      this.childrenWalkers[TypeScript.NodeType.ForIn] = ChildrenWalkers.walkForInStatementChildren;
      this.childrenWalkers[TypeScript.NodeType.If] = ChildrenWalkers.walkIfStatementChildren;
      this.childrenWalkers[TypeScript.NodeType.While] = ChildrenWalkers.walkWhileStatementChildren;
      this.childrenWalkers[TypeScript.NodeType.DoWhile] = ChildrenWalkers.walkDoWhileStatementChildren;
      this.childrenWalkers[TypeScript.NodeType.Block] = ChildrenWalkers.walkBlockChildren;
      this.childrenWalkers[TypeScript.NodeType.Case] = ChildrenWalkers.walkCaseStatementChildren;
      this.childrenWalkers[TypeScript.NodeType.Switch] = ChildrenWalkers.walkSwitchStatementChildren;
      this.childrenWalkers[TypeScript.NodeType.Try] = ChildrenWalkers.walkTryChildren;
      this.childrenWalkers[TypeScript.NodeType.TryCatch] = ChildrenWalkers.walkTryCatchChildren;
      this.childrenWalkers[TypeScript.NodeType.TryFinally] = ChildrenWalkers.walkTryFinallyChildren;
      this.childrenWalkers[TypeScript.NodeType.Finally] = ChildrenWalkers.walkFinallyChildren;
      this.childrenWalkers[TypeScript.NodeType.Catch] = ChildrenWalkers.walkCatchChildren;
      this.childrenWalkers[TypeScript.NodeType.List] = ChildrenWalkers.walkListChildren;
      this.childrenWalkers[TypeScript.NodeType.Script] = ChildrenWalkers.walkScriptChildren;
      this.childrenWalkers[TypeScript.NodeType.Class] = ChildrenWalkers.walkClassDeclChildren;
      this.childrenWalkers[TypeScript.NodeType.Interface] = ChildrenWalkers.walkTypeDeclChildren;
      this.childrenWalkers[TypeScript.NodeType.Module] = ChildrenWalkers.walkModuleDeclChildren;
      this.childrenWalkers[TypeScript.NodeType.Import] = ChildrenWalkers.walkImportDeclChildren;
      this.childrenWalkers[TypeScript.NodeType.With] = ChildrenWalkers.walkWithStatementChildren;
      this.childrenWalkers[TypeScript.NodeType.Label] = ChildrenWalkers.walkLabelChildren;
      this.childrenWalkers[TypeScript.NodeType.LabeledStatement] = ChildrenWalkers.walkLabeledStatementChildren;
      this.childrenWalkers[TypeScript.NodeType.EBStart] = ChildrenWalkers.walkNone;
      this.childrenWalkers[TypeScript.NodeType.GotoEB] = ChildrenWalkers.walkNone;
      this.childrenWalkers[TypeScript.NodeType.EndCode] = ChildrenWalkers.walkNone;
      this.childrenWalkers[TypeScript.NodeType.Error] = ChildrenWalkers.walkNone;
      this.childrenWalkers[TypeScript.NodeType.Comment] = ChildrenWalkers.walkNone;
      this.childrenWalkers[TypeScript.NodeType.Debugger] = ChildrenWalkers.walkNone;
      for(var e in TypeScript.NodeType._map) {
        if(this.childrenWalkers[e] === undefined) {
          throw new Error("initWalkers function is not up to date with enum content!");
        }
      }
    };
    return AstWalkerFactory
  }();
  TypeScript.AstWalkerFactory = AstWalkerFactory;
  var globalAstWalkerFactory;
  function getAstWalkerFactory() {
    if(!globalAstWalkerFactory) {
      globalAstWalkerFactory = new AstWalkerFactory
    }
    return globalAstWalkerFactory
  }
  TypeScript.getAstWalkerFactory = getAstWalkerFactory;
  var ChildrenWalkers;
  (function(ChildrenWalkers) {
    function walkNone(preAst, parent, walker) {
    }
    ChildrenWalkers.walkNone = walkNone;
    function walkListChildren(preAst, parent, walker) {
      var len = preAst.members.length;
      if(walker.options.reverseSiblings) {
        for(var i = len - 1;i >= 0;i--) {
          if(walker.options.goNextSibling) {
            preAst.members[i] = walker.walk(preAst.members[i], preAst)
          }
        }
      }else {
        for(var i = 0;i < len;i++) {
          if(walker.options.goNextSibling) {
            preAst.members[i] = walker.walk(preAst.members[i], preAst)
          }
        }
      }
    }
    ChildrenWalkers.walkListChildren = walkListChildren;
    function walkUnaryExpressionChildren(preAst, parent, walker) {
      if(preAst.castTerm) {
        preAst.castTerm = walker.walk(preAst.castTerm, preAst)
      }
      if(preAst.operand) {
        preAst.operand = walker.walk(preAst.operand, preAst)
      }
    }
    ChildrenWalkers.walkUnaryExpressionChildren = walkUnaryExpressionChildren;
    function walkBinaryExpressionChildren(preAst, parent, walker) {
      if(walker.options.reverseSiblings) {
        if(preAst.operand2) {
          preAst.operand2 = walker.walk(preAst.operand2, preAst)
        }
        if(preAst.operand1 && walker.options.goNextSibling) {
          preAst.operand1 = walker.walk(preAst.operand1, preAst)
        }
      }else {
        if(preAst.operand1) {
          preAst.operand1 = walker.walk(preAst.operand1, preAst)
        }
        if(preAst.operand2 && walker.options.goNextSibling) {
          preAst.operand2 = walker.walk(preAst.operand2, preAst)
        }
      }
    }
    ChildrenWalkers.walkBinaryExpressionChildren = walkBinaryExpressionChildren;
    function walkTypeReferenceChildren(preAst, parent, walker) {
      if(preAst.term) {
        preAst.term = walker.walk(preAst.term, preAst)
      }
    }
    ChildrenWalkers.walkTypeReferenceChildren = walkTypeReferenceChildren;
    function walkCallExpressionChildren(preAst, parent, walker) {
      if(!walker.options.reverseSiblings) {
        preAst.target = walker.walk(preAst.target, preAst)
      }
      if(preAst.args && walker.options.goNextSibling) {
        preAst.args = walker.walk(preAst.args, preAst)
      }
      if(walker.options.reverseSiblings && walker.options.goNextSibling) {
        preAst.target = walker.walk(preAst.target, preAst)
      }
    }
    ChildrenWalkers.walkCallExpressionChildren = walkCallExpressionChildren;
    function walkTrinaryExpressionChildren(preAst, parent, walker) {
      if(preAst.operand1) {
        preAst.operand1 = walker.walk(preAst.operand1, preAst)
      }
      if(preAst.operand2 && walker.options.goNextSibling) {
        preAst.operand2 = walker.walk(preAst.operand2, preAst)
      }
      if(preAst.operand3 && walker.options.goNextSibling) {
        preAst.operand3 = walker.walk(preAst.operand3, preAst)
      }
    }
    ChildrenWalkers.walkTrinaryExpressionChildren = walkTrinaryExpressionChildren;
    function walkFuncDeclChildren(preAst, parent, walker) {
      if(preAst.name) {
        preAst.name = walker.walk(preAst.name, preAst)
      }
      if(preAst.args && preAst.args.members.length > 0 && walker.options.goNextSibling) {
        preAst.args = walker.walk(preAst.args, preAst)
      }
      if(preAst.returnTypeAnnotation && walker.options.goNextSibling) {
        preAst.returnTypeAnnotation = walker.walk(preAst.returnTypeAnnotation, preAst)
      }
      if(preAst.bod && preAst.bod.members.length > 0 && walker.options.goNextSibling) {
        preAst.bod = walker.walk(preAst.bod, preAst)
      }
    }
    ChildrenWalkers.walkFuncDeclChildren = walkFuncDeclChildren;
    function walkBoundDeclChildren(preAst, parent, walker) {
      if(preAst.id) {
        preAst.id = walker.walk(preAst.id, preAst)
      }
      if(preAst.init) {
        preAst.init = walker.walk(preAst.init, preAst)
      }
      if(preAst.typeExpr && walker.options.goNextSibling) {
        preAst.typeExpr = walker.walk(preAst.typeExpr, preAst)
      }
    }
    ChildrenWalkers.walkBoundDeclChildren = walkBoundDeclChildren;
    function walkReturnStatementChildren(preAst, parent, walker) {
      if(preAst.returnExpression) {
        preAst.returnExpression = walker.walk(preAst.returnExpression, preAst)
      }
    }
    ChildrenWalkers.walkReturnStatementChildren = walkReturnStatementChildren;
    function walkForStatementChildren(preAst, parent, walker) {
      if(preAst.init) {
        preAst.init = walker.walk(preAst.init, preAst)
      }
      if(preAst.cond && walker.options.goNextSibling) {
        preAst.cond = walker.walk(preAst.cond, preAst)
      }
      if(preAst.incr && walker.options.goNextSibling) {
        preAst.incr = walker.walk(preAst.incr, preAst)
      }
      if(preAst.body && walker.options.goNextSibling) {
        preAst.body = walker.walk(preAst.body, preAst)
      }
    }
    ChildrenWalkers.walkForStatementChildren = walkForStatementChildren;
    function walkForInStatementChildren(preAst, parent, walker) {
      preAst.lval = walker.walk(preAst.lval, preAst);
      if(walker.options.goNextSibling) {
        preAst.obj = walker.walk(preAst.obj, preAst)
      }
      if(preAst.body && walker.options.goNextSibling) {
        preAst.body = walker.walk(preAst.body, preAst)
      }
    }
    ChildrenWalkers.walkForInStatementChildren = walkForInStatementChildren;
    function walkIfStatementChildren(preAst, parent, walker) {
      preAst.cond = walker.walk(preAst.cond, preAst);
      if(preAst.thenBod && walker.options.goNextSibling) {
        preAst.thenBod = walker.walk(preAst.thenBod, preAst)
      }
      if(preAst.elseBod && walker.options.goNextSibling) {
        preAst.elseBod = walker.walk(preAst.elseBod, preAst)
      }
    }
    ChildrenWalkers.walkIfStatementChildren = walkIfStatementChildren;
    function walkWhileStatementChildren(preAst, parent, walker) {
      preAst.cond = walker.walk(preAst.cond, preAst);
      if(preAst.body && walker.options.goNextSibling) {
        preAst.body = walker.walk(preAst.body, preAst)
      }
    }
    ChildrenWalkers.walkWhileStatementChildren = walkWhileStatementChildren;
    function walkDoWhileStatementChildren(preAst, parent, walker) {
      preAst.cond = walker.walk(preAst.cond, preAst);
      if(preAst.body && walker.options.goNextSibling) {
        preAst.body = walker.walk(preAst.body, preAst)
      }
    }
    ChildrenWalkers.walkDoWhileStatementChildren = walkDoWhileStatementChildren;
    function walkBlockChildren(preAst, parent, walker) {
      if(preAst.stmts) {
        preAst.stmts = walker.walk(preAst.stmts, preAst)
      }
    }
    ChildrenWalkers.walkBlockChildren = walkBlockChildren;
    function walkCaseStatementChildren(preAst, parent, walker) {
      if(preAst.expr) {
        preAst.expr = walker.walk(preAst.expr, preAst)
      }
      if(preAst.body && walker.options.goNextSibling) {
        preAst.body = walker.walk(preAst.body, preAst)
      }
    }
    ChildrenWalkers.walkCaseStatementChildren = walkCaseStatementChildren;
    function walkSwitchStatementChildren(preAst, parent, walker) {
      if(preAst.val) {
        preAst.val = walker.walk(preAst.val, preAst)
      }
      if(preAst.caseList && walker.options.goNextSibling) {
        preAst.caseList = walker.walk(preAst.caseList, preAst)
      }
    }
    ChildrenWalkers.walkSwitchStatementChildren = walkSwitchStatementChildren;
    function walkTryChildren(preAst, parent, walker) {
      if(preAst.body) {
        preAst.body = walker.walk(preAst.body, preAst)
      }
    }
    ChildrenWalkers.walkTryChildren = walkTryChildren;
    function walkTryCatchChildren(preAst, parent, walker) {
      if(preAst.tryNode) {
        preAst.tryNode = walker.walk(preAst.tryNode, preAst)
      }
      if(preAst.catchNode && walker.options.goNextSibling) {
        preAst.catchNode = walker.walk(preAst.catchNode, preAst)
      }
    }
    ChildrenWalkers.walkTryCatchChildren = walkTryCatchChildren;
    function walkTryFinallyChildren(preAst, parent, walker) {
      if(preAst.tryNode) {
        preAst.tryNode = walker.walk(preAst.tryNode, preAst)
      }
      if(preAst.finallyNode && walker.options.goNextSibling) {
        preAst.finallyNode = walker.walk(preAst.finallyNode, preAst)
      }
    }
    ChildrenWalkers.walkTryFinallyChildren = walkTryFinallyChildren;
    function walkFinallyChildren(preAst, parent, walker) {
      if(preAst.body) {
        preAst.body = walker.walk(preAst.body, preAst)
      }
    }
    ChildrenWalkers.walkFinallyChildren = walkFinallyChildren;
    function walkCatchChildren(preAst, parent, walker) {
      if(preAst.param) {
        preAst.param = walker.walk(preAst.param, preAst)
      }
      if(preAst.body && walker.options.goNextSibling) {
        preAst.body = walker.walk(preAst.body, preAst)
      }
    }
    ChildrenWalkers.walkCatchChildren = walkCatchChildren;
    function walkRecordChildren(preAst, parent, walker) {
      preAst.name = walker.walk(preAst.name, preAst);
      if(walker.options.goNextSibling && preAst.members) {
        preAst.members = walker.walk(preAst.members, preAst)
      }
    }
    ChildrenWalkers.walkRecordChildren = walkRecordChildren;
    function walkNamedTypeChildren(preAst, parent, walker) {
      walkRecordChildren(preAst, parent, walker)
    }
    ChildrenWalkers.walkNamedTypeChildren = walkNamedTypeChildren;
    function walkClassDeclChildren(preAst, parent, walker) {
      walkNamedTypeChildren(preAst, parent, walker);
      if(walker.options.goNextSibling && preAst.baseClass) {
        preAst.baseClass = walker.walk(preAst.baseClass, preAst)
      }
      if(walker.options.goNextSibling && preAst.implementsList) {
        preAst.implementsList = walker.walk(preAst.implementsList, preAst)
      }
    }
    ChildrenWalkers.walkClassDeclChildren = walkClassDeclChildren;
    function walkScriptChildren(preAst, parent, walker) {
      if(preAst.bod) {
        preAst.bod = walker.walk(preAst.bod, preAst)
      }
    }
    ChildrenWalkers.walkScriptChildren = walkScriptChildren;
    function walkTypeDeclChildren(preAst, parent, walker) {
      walkNamedTypeChildren(preAst, parent, walker);
      if(walker.options.goNextSibling && preAst.extendsList) {
        preAst.extendsList = walker.walk(preAst.extendsList, preAst)
      }
      if(walker.options.goNextSibling && preAst.implementsList) {
        preAst.implementsList = walker.walk(preAst.implementsList, preAst)
      }
    }
    ChildrenWalkers.walkTypeDeclChildren = walkTypeDeclChildren;
    function walkModuleDeclChildren(preAst, parent, walker) {
      walkRecordChildren(preAst, parent, walker);
      if(walker.options.goNextSibling && preAst.alias) {
        preAst.alias = walker.walk(preAst.alias, preAst)
      }
    }
    ChildrenWalkers.walkModuleDeclChildren = walkModuleDeclChildren;
    function walkImportDeclChildren(preAst, parent, walker) {
      if(preAst.id) {
        preAst.id = walker.walk(preAst.id, preAst)
      }
      if(preAst.alias) {
        preAst.alias = walker.walk(preAst.alias, preAst)
      }
    }
    ChildrenWalkers.walkImportDeclChildren = walkImportDeclChildren;
    function walkWithStatementChildren(preAst, parent, walker) {
      if(preAst.expr) {
        preAst.expr = walker.walk(preAst.expr, preAst)
      }
      if(preAst.body && walker.options.goNextSibling) {
        preAst.body = walker.walk(preAst.body, preAst)
      }
    }
    ChildrenWalkers.walkWithStatementChildren = walkWithStatementChildren;
    function walkLabelChildren(preAst, parent, walker) {
    }
    ChildrenWalkers.walkLabelChildren = walkLabelChildren;
    function walkLabeledStatementChildren(preAst, parent, walker) {
      preAst.labels = walker.walk(preAst.labels, preAst);
      if(walker.options.goNextSibling) {
        preAst.stmt = walker.walk(preAst.stmt, preAst)
      }
    }
    ChildrenWalkers.walkLabeledStatementChildren = walkLabeledStatementChildren
  })(ChildrenWalkers || (ChildrenWalkers = {}))
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  function lastOf(items) {
    return items === null || items.length === 0 ? null : items[items.length - 1]
  }
  TypeScript.lastOf = lastOf;
  function max(a, b) {
    return a >= b ? a : b
  }
  TypeScript.max = max;
  function min(a, b) {
    return a <= b ? a : b
  }
  TypeScript.min = min;
  var AstPath = function() {
    function AstPath() {
      this.asts = [];
      this.top = -1
    }
    AstPath.reverseIndexOf = function reverseIndexOf(items, index) {
      return items === null || items.length <= index ? null : items[items.length - index - 1]
    };
    AstPath.prototype.clone = function() {
      var clone = new AstPath;
      clone.asts = this.asts.map(function(value) {
        return value
      });
      clone.top = this.top;
      return clone
    };
    AstPath.prototype.pop = function() {
      var head = this.ast();
      this.up();
      while(this.asts.length > this.count()) {
        this.asts.pop()
      }
      return head
    };
    AstPath.prototype.push = function(ast) {
      while(this.asts.length > this.count()) {
        this.asts.pop()
      }
      this.top = this.asts.length;
      this.asts.push(ast)
    };
    AstPath.prototype.up = function() {
      if(this.top <= -1) {
        throw new Error("Invalid call to 'up'");
      }
      this.top--
    };
    AstPath.prototype.down = function() {
      if(this.top == this.ast.length - 1) {
        throw new Error("Invalid call to 'down'");
      }
      this.top++
    };
    AstPath.prototype.nodeType = function() {
      if(this.ast() == null) {
        return TypeScript.NodeType.None
      }
      return this.ast().nodeType
    };
    AstPath.prototype.ast = function() {
      return AstPath.reverseIndexOf(this.asts, this.asts.length - (this.top + 1))
    };
    AstPath.prototype.parent = function() {
      return AstPath.reverseIndexOf(this.asts, this.asts.length - this.top)
    };
    AstPath.prototype.count = function() {
      return this.top + 1
    };
    AstPath.prototype.get = function(index) {
      return this.asts[index]
    };
    AstPath.prototype.isNameOfClass = function() {
      if(this.ast() === null || this.parent() === null) {
        return false
      }
      return this.ast().nodeType === TypeScript.NodeType.Name && this.parent().nodeType === TypeScript.NodeType.Class && this.parent().name === this.ast()
    };
    AstPath.prototype.isNameOfInterface = function() {
      if(this.ast() === null || this.parent() === null) {
        return false
      }
      return this.ast().nodeType === TypeScript.NodeType.Name && this.parent().nodeType === TypeScript.NodeType.Interface && this.parent().name === this.ast()
    };
    AstPath.prototype.isNameOfArgument = function() {
      if(this.ast() === null || this.parent() === null) {
        return false
      }
      return this.ast().nodeType === TypeScript.NodeType.Name && this.parent().nodeType === TypeScript.NodeType.ArgDecl && this.parent().id === this.ast()
    };
    AstPath.prototype.isNameOfVariable = function() {
      if(this.ast() === null || this.parent() === null) {
        return false
      }
      return this.ast().nodeType === TypeScript.NodeType.Name && this.parent().nodeType === TypeScript.NodeType.VarDecl && this.parent().id === this.ast()
    };
    AstPath.prototype.isNameOfModule = function() {
      if(this.ast() === null || this.parent() === null) {
        return false
      }
      return this.ast().nodeType === TypeScript.NodeType.Name && this.parent().nodeType === TypeScript.NodeType.Module && this.parent().name === this.ast()
    };
    AstPath.prototype.isNameOfFunction = function() {
      if(this.ast() === null || this.parent() === null) {
        return false
      }
      return this.ast().nodeType === TypeScript.NodeType.Name && this.parent().nodeType === TypeScript.NodeType.FuncDecl && this.parent().name === this.ast()
    };
    AstPath.prototype.isChildOfScript = function() {
      var ast = lastOf(this.asts);
      return this.count() >= 3 && this.asts[this.top] === ast && this.asts[this.top - 1].nodeType === TypeScript.NodeType.List && this.asts[this.top - 2].nodeType === TypeScript.NodeType.Script
    };
    AstPath.prototype.isChildOfModule = function() {
      var ast = lastOf(this.asts);
      return this.count() >= 3 && this.asts[this.top] === ast && this.asts[this.top - 1].nodeType === TypeScript.NodeType.List && this.asts[this.top - 2].nodeType === TypeScript.NodeType.Module
    };
    AstPath.prototype.isChildOfClass = function() {
      var ast = lastOf(this.asts);
      return this.count() >= 3 && this.asts[this.top] === ast && this.asts[this.top - 1].nodeType === TypeScript.NodeType.List && this.asts[this.top - 2].nodeType === TypeScript.NodeType.Class
    };
    AstPath.prototype.isArgumentOfClassConstructor = function() {
      var ast = lastOf(this.asts);
      return this.count() >= 5 && this.asts[this.top] === ast && this.asts[this.top - 1].nodeType === TypeScript.NodeType.List && this.asts[this.top - 2].nodeType === TypeScript.NodeType.FuncDecl && this.asts[this.top - 3].nodeType === TypeScript.NodeType.List && this.asts[this.top - 4].nodeType === TypeScript.NodeType.Class && this.asts[this.top - 2].isConstructor && this.asts[this.top - 2].args === this.asts[this.top - 1] && this.asts[this.top - 4].constructorDecl === this.asts[this.top - 2]
    };
    AstPath.prototype.isChildOfInterface = function() {
      var ast = lastOf(this.asts);
      return this.count() >= 3 && this.asts[this.top] === ast && this.asts[this.top - 1].nodeType === TypeScript.NodeType.List && this.asts[this.top - 2].nodeType === TypeScript.NodeType.Interface
    };
    AstPath.prototype.isTopLevelImplicitModule = function() {
      return this.count() >= 1 && this.asts[this.top].nodeType === TypeScript.NodeType.Module && TypeScript.hasFlag(this.asts[this.top].modFlags, TypeScript.ModuleFlags.IsWholeFile)
    };
    AstPath.prototype.isBodyOfTopLevelImplicitModule = function() {
      return this.count() >= 2 && this.asts[this.top - 0].nodeType === TypeScript.NodeType.List && this.asts[this.top - 1].nodeType === TypeScript.NodeType.Module && this.asts[this.top - 1].members == this.asts[this.top - 0] && TypeScript.hasFlag(this.asts[this.top - 1].modFlags, TypeScript.ModuleFlags.IsWholeFile)
    };
    AstPath.prototype.isBodyOfScript = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.Script && this.asts[this.top - 1].bod == this.asts[this.top - 0]
    };
    AstPath.prototype.isBodyOfSwitch = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.Switch && this.asts[this.top - 1].caseList == this.asts[this.top - 0]
    };
    AstPath.prototype.isBodyOfModule = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.Module && this.asts[this.top - 1].members == this.asts[this.top - 0]
    };
    AstPath.prototype.isBodyOfClass = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.Class && this.asts[this.top - 1].members == this.asts[this.top - 0]
    };
    AstPath.prototype.isBodyOfFunction = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.FuncDecl && this.asts[this.top - 1].bod == this.asts[this.top - 0]
    };
    AstPath.prototype.isBodyOfInterface = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.Interface && this.asts[this.top - 1].members == this.asts[this.top - 0]
    };
    AstPath.prototype.isBodyOfBlock = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.Block && this.asts[this.top - 1].stmts == this.asts[this.top - 0]
    };
    AstPath.prototype.isBodyOfFor = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.For && this.asts[this.top - 1].body == this.asts[this.top - 0]
    };
    AstPath.prototype.isBodyOfCase = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.Case && this.asts[this.top - 1].body == this.asts[this.top - 0]
    };
    AstPath.prototype.isBodyOfTry = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.Try && this.asts[this.top - 1].body == this.asts[this.top - 0]
    };
    AstPath.prototype.isBodyOfCatch = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.Catch && this.asts[this.top - 1].body == this.asts[this.top - 0]
    };
    AstPath.prototype.isBodyOfDoWhile = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.DoWhile && this.asts[this.top - 1].body == this.asts[this.top - 0]
    };
    AstPath.prototype.isBodyOfWhile = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.While && this.asts[this.top - 1].body == this.asts[this.top - 0]
    };
    AstPath.prototype.isBodyOfForIn = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.ForIn && this.asts[this.top - 1].body == this.asts[this.top - 0]
    };
    AstPath.prototype.isBodyOfWith = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.With && this.asts[this.top - 1].body == this.asts[this.top - 0]
    };
    AstPath.prototype.isBodyOfFinally = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.Finally && this.asts[this.top - 1].body == this.asts[this.top - 0]
    };
    AstPath.prototype.isCaseOfSwitch = function() {
      return this.count() >= 3 && this.asts[this.top - 2].nodeType === TypeScript.NodeType.Switch && this.asts[this.top - 1].nodeType === TypeScript.NodeType.List && this.asts[this.top - 2].caseList == this.asts[this.top - 1]
    };
    AstPath.prototype.isDefaultCaseOfSwitch = function() {
      return this.count() >= 3 && this.asts[this.top - 2].nodeType === TypeScript.NodeType.Switch && this.asts[this.top - 1].nodeType === TypeScript.NodeType.List && this.asts[this.top - 2].caseList == this.asts[this.top - 1] && this.asts[this.top - 2].defaultCase == this.asts[this.top - 0]
    };
    AstPath.prototype.isListOfObjectLit = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.ObjectLit && this.asts[this.top - 0].nodeType === TypeScript.NodeType.List && this.asts[this.top - 1].operand == this.asts[this.top - 0]
    };
    AstPath.prototype.isBodyOfObjectLit = function() {
      return this.isListOfObjectLit()
    };
    AstPath.prototype.isEmptyListOfObjectLit = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.ObjectLit && this.asts[this.top - 0].nodeType === TypeScript.NodeType.List && this.asts[this.top - 1].operand == this.asts[this.top - 0] && this.asts[this.top - 0].members.length == 0
    };
    AstPath.prototype.isMemberOfObjectLit = function() {
      return this.count() >= 3 && this.asts[this.top - 2].nodeType === TypeScript.NodeType.ObjectLit && this.asts[this.top - 1].nodeType === TypeScript.NodeType.List && this.asts[this.top - 0].nodeType === TypeScript.NodeType.Member && this.asts[this.top - 2].operand == this.asts[this.top - 1]
    };
    AstPath.prototype.isNameOfMemberOfObjectLit = function() {
      return this.count() >= 4 && this.asts[this.top - 3].nodeType === TypeScript.NodeType.ObjectLit && this.asts[this.top - 2].nodeType === TypeScript.NodeType.List && this.asts[this.top - 1].nodeType === TypeScript.NodeType.Member && this.asts[this.top - 0].nodeType === TypeScript.NodeType.Name && this.asts[this.top - 3].operand == this.asts[this.top - 2]
    };
    AstPath.prototype.isListOfArrayLit = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.ArrayLit && this.asts[this.top - 0].nodeType === TypeScript.NodeType.List && this.asts[this.top - 1].operand == this.asts[this.top - 0]
    };
    AstPath.prototype.isTargetOfMember = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.Member && this.asts[this.top - 1].operand1 === this.asts[this.top - 0]
    };
    AstPath.prototype.isMemberOfMember = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.Member && this.asts[this.top - 1].operand2 === this.asts[this.top - 0]
    };
    AstPath.prototype.isItemOfList = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.List
    };
    AstPath.prototype.isThenOfIf = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.If && this.asts[this.top - 1].thenBod == this.asts[this.top - 0]
    };
    AstPath.prototype.isElseOfIf = function() {
      return this.count() >= 2 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.If && this.asts[this.top - 1].elseBod == this.asts[this.top - 0]
    };
    AstPath.prototype.isBodyOfDefaultCase = function() {
      return this.isBodyOfCase()
    };
    AstPath.prototype.isSingleStatementList = function() {
      return this.count() >= 1 && this.asts[this.top].nodeType === TypeScript.NodeType.List && this.asts[this.top].members.length === 1
    };
    AstPath.prototype.isArgumentListOfFunction = function() {
      return this.count() >= 2 && this.asts[this.top - 0].nodeType === TypeScript.NodeType.List && this.asts[this.top - 1].nodeType === TypeScript.NodeType.FuncDecl && this.asts[this.top - 1].args === this.asts[this.top - 0]
    };
    AstPath.prototype.isArgumentOfFunction = function() {
      return this.count() >= 3 && this.asts[this.top - 1].nodeType === TypeScript.NodeType.List && this.asts[this.top - 2].nodeType === TypeScript.NodeType.FuncDecl && this.asts[this.top - 2].args === this.asts[this.top - 1]
    };
    AstPath.prototype.isArgumentListOfCall = function() {
      return this.count() >= 2 && this.asts[this.top - 0].nodeType === TypeScript.NodeType.List && this.asts[this.top - 1].nodeType === TypeScript.NodeType.Call && this.asts[this.top - 1].args === this.asts[this.top - 0]
    };
    AstPath.prototype.isArgumentListOfNew = function() {
      return this.count() >= 2 && this.asts[this.top - 0].nodeType === TypeScript.NodeType.List && this.asts[this.top - 1].nodeType === TypeScript.NodeType.New && this.asts[this.top - 1].args === this.asts[this.top - 0]
    };
    AstPath.prototype.isSynthesizedBlock = function() {
      return this.count() >= 1 && this.asts[this.top - 0].nodeType === TypeScript.NodeType.Block && this.asts[this.top - 0].visible === false
    };
    return AstPath
  }();
  TypeScript.AstPath = AstPath;
  function isValidAstNode(ast) {
    if(ast === null) {
      return false
    }
    if(ast.minChar === -1 || ast.limChar === -1) {
      return false
    }
    return true
  }
  TypeScript.isValidAstNode = isValidAstNode;
  var AstPathContext = function() {
    function AstPathContext() {
      this.path = new TypeScript.AstPath
    }
    return AstPathContext
  }();
  TypeScript.AstPathContext = AstPathContext;
  (function(GetAstPathOptions) {
    GetAstPathOptions._map = [];
    GetAstPathOptions.Default = 0;
    GetAstPathOptions.EdgeInclusive = 1;
    GetAstPathOptions.DontPruneSearchBasedOnPosition = 1 << 1
  })(TypeScript.GetAstPathOptions || (TypeScript.GetAstPathOptions = {}));
  var GetAstPathOptions = TypeScript.GetAstPathOptions;
  function getAstPathToPosition(script, pos, options) {
    if(typeof options === "undefined") {
      options = GetAstPathOptions.Default
    }
    var lookInComments = function(comments) {
      if(comments && comments.length > 0) {
        for(var i = 0;i < comments.length;i++) {
          var minChar = comments[i].minChar;
          var limChar = comments[i].limChar;
          if(!comments[i].isBlockComment) {
            limChar++
          }
          if(pos >= minChar && pos < limChar) {
            ctx.path.push(comments[i])
          }
        }
      }
    };
    var pre = function(cur, parent, walker) {
      if(isValidAstNode(cur)) {
        var inclusive = TypeScript.hasFlag(options, GetAstPathOptions.EdgeInclusive) || cur.nodeType === TypeScript.NodeType.Name || pos === script.limChar;
        var minChar = cur.minChar;
        var limChar = cur.limChar + (inclusive ? 1 : 0);
        if(pos >= minChar && pos < limChar) {
          var previous = ctx.path.ast();
          if(previous == null || cur.minChar >= previous.minChar && cur.limChar <= previous.limChar) {
            ctx.path.push(cur)
          }else {
          }
        }
        if(pos < limChar) {
          lookInComments(cur.preComments)
        }
        if(pos >= minChar) {
          lookInComments(cur.postComments)
        }
        if(!TypeScript.hasFlag(options, GetAstPathOptions.DontPruneSearchBasedOnPosition)) {
          walker.options.goChildren = minChar <= pos && pos <= limChar
        }
      }
      return cur
    };
    var ctx = new AstPathContext;
    TypeScript.getAstWalkerFactory().walk(script, pre, null, null, ctx);
    return ctx.path
  }
  TypeScript.getAstPathToPosition = getAstPathToPosition;
  function getTokenizationOffset(script, position) {
    var bestOffset = 0;
    var pre = function(cur, parent, walker) {
      if(TypeScript.isValidAstNode(cur)) {
        if(cur.minChar <= position) {
          bestOffset = max(bestOffset, cur.minChar)
        }
        if(cur.minChar > position || cur.limChar < bestOffset) {
          walker.options.goChildren = false
        }
      }
      return cur
    };
    TypeScript.getAstWalkerFactory().walk(script, pre);
    return bestOffset
  }
  TypeScript.getTokenizationOffset = getTokenizationOffset;
  function walkAST(ast, callback) {
    var pre = function(cur, parent, walker) {
      var path = walker.state;
      path.push(cur);
      callback(path, walker);
      return cur
    };
    var post = function(cur, parent, walker) {
      var path = walker.state;
      path.pop();
      return cur
    };
    var path = new AstPath;
    TypeScript.getAstWalkerFactory().walk(ast, pre, post, null, path)
  }
  TypeScript.walkAST = walkAST
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  var AstLogger = function() {
    function AstLogger(logger) {
      this.logger = logger
    }
    AstLogger.prototype.logScript = function(script) {
      var _this = this;
      this.logLinemap(script.locationInfo.lineMap);
      var stack = [];
      var pre = function(cur, parent) {
        stack.push(cur);
        var indent = (stack.length - 1) * 2;
        _this.logComments(script, cur.preComments, indent);
        _this.logNode(script, cur, indent);
        _this.logComments(script, cur.postComments, indent);
        return cur
      };
      var post = function(cur, parent) {
        stack.pop();
        return cur
      };
      TypeScript.getAstWalkerFactory().walk(script, pre, post)
    };
    AstLogger.prototype.logNode = function(script, cur, indent) {
      var msg = this.addPadding("", indent, "| ", true);
      msg = msg.concat("+ " + cur.treeViewLabel());
      msg = this.addPadding(msg, 70, " ", false);
      msg = msg + this.addLineColumn(script, cur.minChar);
      msg = this.addPadding(msg, 80, " ", false);
      msg = msg + "=> ";
      msg = msg + this.addLineColumn(script, cur.limChar);
      msg = this.addPadding(msg, 102, " ", false);
      msg = msg.concat("[" + this.addPadding(cur.minChar.toString(), 1, " ", true) + ", " + this.addPadding(cur.limChar.toString(), 1, " ", true) + "]");
      msg = this.addPadding(msg, 115, " ", false);
      msg = msg.concat("sym=" + cur.sym);
      msg = this.addPadding(msg, 135, " ", false);
      msg = msg.concat("type=" + (cur.type === null ? "null" : cur.type.getTypeName()));
      this.logger.log(msg)
    };
    AstLogger.prototype.logComments = function(script, comments, indent) {
      if(comments == null) {
        return
      }
      for(var i = 0;i < comments.length;i++) {
        this.logNode(script, comments[i], indent)
      }
    };
    AstLogger.prototype.logLinemap = function(linemap) {
      var result = "[";
      for(var i = 0;i < linemap.length;i++) {
        if(i > 0) {
          result += ","
        }
        result += linemap[i]
      }
      result += "]";
      this.logger.log("linemap: " + result)
    };
    AstLogger.prototype.addPadding = function(s, targetLength, paddingString, leftPadding) {
      var result = leftPadding ? "" : s;
      for(var i = s.length;i < targetLength;i++) {
        result = result + paddingString
      }
      result = result + (leftPadding ? s : "");
      return result
    };
    AstLogger.prototype.addLineColumn = function(script, position) {
      var lineInfo = {line:-1, col:-1};
      TypeScript.getSourceLineColFromMap(lineInfo, position, script.locationInfo.lineMap);
      if(lineInfo.col !== -1) {
        lineInfo.col++
      }
      return"(" + lineInfo.line + ", " + lineInfo.col + ")"
    };
    return AstLogger
  }();
  TypeScript.AstLogger = AstLogger
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  var Binder = function() {
    function Binder(checker) {
      this.checker = checker
    }
    Binder.prototype.resolveBaseTypeLinks = function(typeLinks, scope) {
      var extendsList = null;
      if(typeLinks) {
        extendsList = new Array;
        for(var i = 0, len = typeLinks.length;i < len;i++) {
          var typeLink = typeLinks[i];
          this.checker.resolvingBases = true;
          this.checker.resolveTypeLink(scope, typeLink, true);
          this.checker.resolvingBases = false;
          if(typeLink.type.isClass()) {
            extendsList[i] = typeLink.type.instanceType
          }else {
            extendsList[i] = typeLink.type
          }
        }
      }
      return extendsList
    };
    Binder.prototype.resolveBases = function(scope, type) {
      type.extendsList = this.resolveBaseTypeLinks(type.extendsTypeLinks, scope);
      var i = 0;
      var len = type.extendsList.length;
      var derivedIsClass = type.isClassInstance();
      for(;i < len;i++) {
        var baseIsClass = type.extendsList[i].isClassInstance();
        if(type.extendsList[i] != this.checker.anyType) {
          if(derivedIsClass) {
            if(!baseIsClass) {
              this.checker.errorReporter.simpleErrorFromSym(type.symbol, "A export class may only extend other classes, " + type.extendsList[i].symbol.fullName() + " is an interface.")
            }
          }else {
            if(baseIsClass) {
              this.checker.errorReporter.simpleErrorFromSym(type.symbol, "An interface may only extend other interfaces, " + type.extendsList[i].symbol.fullName() + " is a class.")
            }
          }
        }
      }
      type.implementsList = this.resolveBaseTypeLinks(type.implementsTypeLinks, scope);
      if(type.implementsList) {
        for(i = 0, len = type.implementsList.length;i < len;i++) {
          var iface = type.implementsList[i];
          if(iface.isClassInstance()) {
            if(derivedIsClass) {
              this.checker.errorReporter.simpleErrorFromSym(type.symbol, "A class may only implement an interface; " + iface.symbol.fullName() + " is a class.")
            }
          }
        }
      }
    };
    Binder.prototype.resolveSignatureGroup = function(signatureGroup, scope, instanceType) {
      var supplyVar = !signatureGroup.hasImplementation;
      for(var i = 0, len = signatureGroup.signatures.length;i < len;i++) {
        var signature = signatureGroup.signatures[i];
        if(instanceType) {
          signature.returnType.type = instanceType
        }else {
          this.checker.resolveTypeLink(scope, signature.returnType, supplyVar)
        }
        var paramLen = signature.parameters.length;
        for(var j = 0;j < paramLen;j++) {
          this.bindSymbol(scope, signature.parameters[j])
        }
        if(signature.hasVariableArgList) {
          var lastParam = signature.parameters[paramLen - 1];
          lastParam.argsOffset = paramLen - 1;
          if(!lastParam.getType().isArray()) {
            this.checker.errorReporter.simpleErrorFromSym(lastParam, "... parameter must have array type");
            lastParam.parameter.typeLink.type = this.checker.makeArrayType(lastParam.parameter.typeLink.type)
          }
        }
      }
    };
    Binder.prototype.bindType = function(scope, type, instanceType) {
      if(instanceType) {
        this.bindType(scope, instanceType, null)
      }
      if(type.hasMembers()) {
        var members = type.members;
        var ambientMembers = type.ambientMembers;
        var typeMembers = type.getAllEnclosedTypes();
        var ambientTypeMembers = type.getAllAmbientEnclosedTypes();
        var memberScope = new TypeScript.SymbolTableScope(members, ambientMembers, typeMembers, ambientTypeMembers, type.symbol);
        var agg = new TypeScript.SymbolAggregateScope(type.symbol);
        var prevCurrentModDecl = this.checker.currentModDecl;
        var prevBindStatus = this.checker.inBind;
        agg.addParentScope(memberScope);
        agg.addParentScope(scope);
        if(type.isModuleType()) {
          this.checker.currentModDecl = type.symbol.declAST;
          this.checker.inBind = true
        }
        if(members) {
          this.bind(agg, type.members.allMembers)
        }
        if(typeMembers) {
          this.bind(agg, typeMembers.allMembers)
        }
        if(ambientMembers) {
          this.bind(agg, ambientMembers.allMembers)
        }
        if(ambientTypeMembers) {
          this.bind(agg, ambientTypeMembers.allMembers)
        }
        this.checker.currentModDecl = prevCurrentModDecl;
        this.checker.inBind = prevBindStatus
      }
      if(type.extendsTypeLinks) {
        this.resolveBases(scope, type)
      }
      if(type.construct) {
        this.resolveSignatureGroup(type.construct, scope, instanceType)
      }
      if(type.call) {
        this.resolveSignatureGroup(type.call, scope, null)
      }
      if(type.index) {
        this.resolveSignatureGroup(type.index, scope, null)
      }
      if(type.elementType) {
        this.bindType(scope, type.elementType, null)
      }
    };
    Binder.prototype.bindSymbol = function(scope, symbol) {
      if(!symbol.bound) {
        var prevLocationInfo = this.checker.locationInfo;
        if(this.checker.units && symbol.unitIndex >= 0 && symbol.unitIndex < this.checker.units.length) {
          this.checker.locationInfo = this.checker.units[symbol.unitIndex]
        }
        switch(symbol.kind()) {
          case TypeScript.SymbolKind.Type:
            if(symbol.flags & TypeScript.SymbolFlags.Bound) {
              break
            }
            var typeSymbol = symbol;
            typeSymbol.flags |= TypeScript.SymbolFlags.Bound;
            if(typeSymbol.aliasLink && !typeSymbol.type && typeSymbol.aliasLink.alias.nodeType == TypeScript.NodeType.Name) {
              var modPath = typeSymbol.aliasLink.alias.text;
              var modSym = this.checker.findSymbolForDynamicModule(modPath, this.checker.locationInfo.filename, function(id) {
                return scope.find(id, false, true)
              });
              if(modSym) {
                typeSymbol.type = modSym.getType()
              }
            }
            if(typeSymbol.type && typeSymbol.type != this.checker.gloModType) {
              this.bindType(scope, typeSymbol.type, typeSymbol.instanceType);
              if(typeSymbol.type.isModuleType()) {
                for(var i = 0;i < typeSymbol.expansions.length;i++) {
                  this.bindType(scope, typeSymbol.expansions[i], typeSymbol.instanceType)
                }
              }
            }
            break;
          case TypeScript.SymbolKind.Field:
            this.checker.resolveTypeLink(scope, symbol.field.typeLink, false);
            break;
          case TypeScript.SymbolKind.Parameter:
            this.checker.resolveTypeLink(scope, symbol.parameter.typeLink, true);
            break
        }
        this.checker.locationInfo = prevLocationInfo
      }
      symbol.bound = true
    };
    Binder.prototype.bind = function(scope, table) {
      table.map(function(key, sym, binder) {
        binder.bindSymbol(scope, sym)
      }, this)
    };
    return Binder
  }();
  TypeScript.Binder = Binder
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  var Base64Format = function() {
    function Base64Format() {
    }
    Base64Format.encodedValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    Base64Format.encode = function encode(inValue) {
      if(inValue < 64) {
        return Base64Format.encodedValues.charAt(inValue)
      }
      throw TypeError(inValue + ": not a 64 based value");
    };
    Base64Format.decodeChar = function decodeChar(inChar) {
      if(inChar.length === 1) {
        return Base64Format.encodedValues.indexOf(inChar)
      }else {
        throw TypeError('"' + inChar + '" must have length 1');
      }
    };
    return Base64Format
  }();
  var Base64VLQFormat = function() {
    function Base64VLQFormat() {
    }
    Base64VLQFormat.encode = function encode(inValue) {
      if(inValue < 0) {
        inValue = (-inValue << 1) + 1
      }else {
        inValue = inValue << 1
      }
      var encodedStr = "";
      do {
        var currentDigit = inValue & 31;
        inValue = inValue >> 5;
        if(inValue > 0) {
          currentDigit = currentDigit | 32
        }
        encodedStr = encodedStr + Base64Format.encode(currentDigit)
      }while(inValue > 0);
      return encodedStr
    };
    Base64VLQFormat.decode = function decode(inString) {
      var result = 0;
      var negative = false;
      var shift = 0;
      for(var i = 0;i < inString.length;i++) {
        var byte = Base64Format.decodeChar(inString[i]);
        if(i === 0) {
          if((byte & 1) === 1) {
            negative = true
          }
          result = byte >> 1 & 15
        }else {
          result = result | (byte & 31) << shift
        }
        shift += i == 0 ? 4 : 5;
        if((byte & 32) === 32) {
        }else {
          return{value:negative ? -result : result, rest:inString.substr(i + 1)}
        }
      }
      throw new Error('Base64 value "' + inString + '" finished with a continuation bit');
    };
    return Base64VLQFormat
  }();
  TypeScript.Base64VLQFormat = Base64VLQFormat
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  var SourceMapping = function() {
    function SourceMapping(ast) {
      this.parent = -1;
      this.firstChild = -1
    }
    return SourceMapping
  }();
  TypeScript.SourceMapping = SourceMapping;
  var SourceMapper = function() {
    function SourceMapper(tsFileName, jsFileName, jsFile, sourceMapOut) {
      this.jsFile = jsFile;
      this.sourceMapOut = sourceMapOut;
      this.sourceMappings = new Array;
      this.currentMapping = -1;
      this.jsFileName = TypeScript.getPrettyName(jsFileName, false, true);
      this.tsFileName = TypeScript.getPrettyName(tsFileName, false, true)
    }
    SourceMapper.MapFileExtension = ".map";
    SourceMapper.CanEmitMapping = function CanEmitMapping(sourceMappings, currentMapping) {
      if(currentMapping.firstChild !== -1) {
        var childMapping = sourceMappings[currentMapping.firstChild];
        if(childMapping.emittedStartLine === currentMapping.emittedStartLine && childMapping.emittedStartColumn === currentMapping.emittedStartColumn) {
          return false
        }
      }
      return true
    };
    SourceMapper.EmitSourceMapping = function EmitSourceMapping(allSourceMappers) {
      var sourceMapper = allSourceMappers[0];
      sourceMapper.jsFile.WriteLine("//@ sourceMappingURL=" + sourceMapper.jsFileName + SourceMapper.MapFileExtension);
      var sourceMapOut = sourceMapper.sourceMapOut;
      var mappingsString = "";
      var tsFiles = [];
      var prevEmittedColumn = 0;
      var prevEmittedLine = 0;
      var prevSourceColumn = 0;
      var prevSourceLine = 0;
      var prevSourceIndex = 0;
      var emitComma = false;
      for(var sourceMapperIndex = 0;sourceMapperIndex < allSourceMappers.length;sourceMapperIndex++) {
        sourceMapper = allSourceMappers[sourceMapperIndex];
        if(sourceMapper.sourceMappings) {
          var currentSourceIndex = tsFiles.length;
          tsFiles.push(sourceMapper.tsFileName);
          var sourceMappings = sourceMapper.sourceMappings;
          for(var i = 0, len = sourceMappings.length;i < len;i++) {
            var sourceMapping = sourceMappings[i];
            if(!SourceMapper.CanEmitMapping(sourceMappings, sourceMapping)) {
              continue
            }
            if(prevEmittedLine !== sourceMapping.emittedStartLine) {
              while(prevEmittedLine < sourceMapping.emittedStartLine) {
                prevEmittedColumn = 0;
                mappingsString = mappingsString + ";";
                prevEmittedLine++
              }
              emitComma = false
            }else {
              if(emitComma) {
                mappingsString = mappingsString + ","
              }
            }
            mappingsString = mappingsString + TypeScript.Base64VLQFormat.encode(sourceMapping.emittedStartColumn - prevEmittedColumn);
            prevEmittedColumn = sourceMapping.emittedStartColumn;
            mappingsString = mappingsString + TypeScript.Base64VLQFormat.encode(currentSourceIndex - prevSourceIndex);
            prevSourceIndex = currentSourceIndex;
            mappingsString = mappingsString + TypeScript.Base64VLQFormat.encode(sourceMapping.sourceStartLine - 1 - prevSourceLine);
            prevSourceLine = sourceMapping.sourceStartLine - 1;
            mappingsString = mappingsString + TypeScript.Base64VLQFormat.encode(sourceMapping.sourceStartColumn - prevSourceColumn);
            prevSourceColumn = sourceMapping.sourceStartColumn;
            emitComma = true
          }
        }
      }
      if(mappingsString != "") {
        sourceMapOut.Write("{");
        sourceMapOut.Write('"version":3,');
        sourceMapOut.Write('"file":"' + sourceMapper.jsFileName + '",');
        sourceMapOut.Write('"sources":["' + tsFiles.join('","') + '"],');
        sourceMapOut.Write('"names":[],');
        sourceMapOut.Write('"mappings":"' + mappingsString);
        sourceMapOut.Write('"');
        sourceMapOut.Write("}")
      }
      sourceMapOut.Close()
    };
    return SourceMapper
  }();
  TypeScript.SourceMapper = SourceMapper
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  (function(EmitContainer) {
    EmitContainer._map = [];
    EmitContainer._map[0] = "Prog";
    EmitContainer.Prog = 0;
    EmitContainer._map[1] = "Module";
    EmitContainer.Module = 1;
    EmitContainer._map[2] = "DynamicModule";
    EmitContainer.DynamicModule = 2;
    EmitContainer._map[3] = "Class";
    EmitContainer.Class = 3;
    EmitContainer._map[4] = "Constructor";
    EmitContainer.Constructor = 4;
    EmitContainer._map[5] = "Function";
    EmitContainer.Function = 5;
    EmitContainer._map[6] = "Args";
    EmitContainer.Args = 6;
    EmitContainer._map[7] = "Interface";
    EmitContainer.Interface = 7
  })(TypeScript.EmitContainer || (TypeScript.EmitContainer = {}));
  var EmitContainer = TypeScript.EmitContainer;
  var EmitState = function() {
    function EmitState() {
      this.indentAmt = 0;
      this.column = 0;
      this.line = 0;
      this.pretty = false;
      this.inObjectLiteral = false;
      this.container = EmitContainer.Prog
    }
    return EmitState
  }();
  TypeScript.EmitState = EmitState;
  var Emitter = function() {
    function Emitter(checker, outfile, emitOptions) {
      this.checker = checker;
      this.outfile = outfile;
      this.emitOptions = emitOptions;
      this.prologueEmitted = false;
      this.indentStep = 4;
      this.thisClassNode = null;
      this.thisFnc = null;
      this.moduleDeclList = [];
      this.moduleName = "";
      this.emitState = new EmitState;
      this.indentStrings = [];
      this.ambientModule = false;
      this.modAliasId = null;
      this.firstModAlias = null;
      this.allSourceMappers = [];
      this.sourceMapper = null;
      this.declDottedModuleName = false;
      this.declIndentDelta = 0;
      this.declFile = null;
      this.declContainingAST = null
    }
    Emitter.prototype.canWriteDeclFile = function() {
      return this.declFile != null
    };
    Emitter.prototype.setSourceMappings = function(mapper) {
      this.allSourceMappers.push(mapper);
      this.sourceMapper = mapper
    };
    Emitter.prototype.setDeclarationFile = function(declaresFile) {
      this.declFile = declaresFile
    };
    Emitter.prototype.increaseIndent = function() {
      this.emitState.indentAmt += this.indentStep;
      if(this.declDottedModuleName) {
        this.addDeclIndentDelta()
      }
    };
    Emitter.prototype.decreaseIndent = function() {
      this.emitState.indentAmt -= this.indentStep
    };
    Emitter.prototype.addDeclIndentDelta = function() {
      this.declIndentDelta += this.indentStep
    };
    Emitter.prototype.reduceDeclIndentDelta = function() {
      this.declIndentDelta -= this.indentStep
    };
    Emitter.prototype.writeToOutput = function(s) {
      this.outfile.Write(s);
      this.emitState.column += s.length
    };
    Emitter.prototype.writeToOutputTrimmable = function(s) {
      if(this.emitOptions.minWhitespace) {
        s = s.replace(/[\s]*/g, "")
      }
      this.writeToOutput(s)
    };
    Emitter.prototype.writeLineToOutput = function(s) {
      if(this.emitOptions.minWhitespace) {
        this.writeToOutput(s);
        var c = s.charCodeAt(s.length - 1);
        if(!(c == TypeScript.LexCodeSpace || c == TypeScript.LexCodeSMC || c == TypeScript.LexCodeLBR)) {
          this.writeToOutput(" ")
        }
      }else {
        this.outfile.WriteLine(s);
        this.emitState.column = 0;
        this.emitState.line++
      }
    };
    Emitter.prototype.setInObjectLiteral = function(val) {
      var temp = this.emitState.inObjectLiteral;
      this.emitState.inObjectLiteral = val;
      return temp
    };
    Emitter.prototype.setContainer = function(c) {
      var temp = this.emitState.container;
      this.emitState.container = c;
      return temp
    };
    Emitter.prototype.setDeclContainingAST = function(ast) {
      var temp = this.declContainingAST;
      this.declContainingAST = ast;
      return temp
    };
    Emitter.prototype.getIndentString = function(declIndent) {
      if(typeof declIndent === "undefined") {
        declIndent = false
      }
      if(this.emitOptions.minWhitespace) {
        return""
      }else {
        var indentAmt = this.emitState.indentAmt - (declIndent ? this.declIndentDelta : 0);
        var indentString = this.indentStrings[indentAmt];
        if(indentString === undefined) {
          indentString = "";
          for(var i = 0;i < indentAmt;i++) {
            indentString += " "
          }
          this.indentStrings[indentAmt] = indentString
        }
        return indentString
      }
    };
    Emitter.prototype.emitIndent = function() {
      this.writeToOutput(this.getIndentString())
    };
    Emitter.prototype.emitIndentToDeclFile = function() {
      this.declFile.Write(this.getIndentString(true))
    };
    Emitter.prototype.emitCommentInPlace = function(comment) {
      this.recordSourceMappingStart(comment);
      var text = comment.getText();
      var hadNewLine = false;
      if(comment.isBlockComment) {
        if(this.emitState.column == 0) {
          this.emitIndent()
        }
        this.writeToOutput(text[0]);
        if(text.length > 1 || comment.endsLine) {
          this.writeLineToOutput("");
          for(var i = 1;i < text.length;i++) {
            this.emitIndent();
            this.writeLineToOutput(text[i])
          }
          hadNewLine = true
        }
      }else {
        if(this.emitState.column == 0) {
          this.emitIndent()
        }
        this.writeLineToOutput(text[0]);
        hadNewLine = true
      }
      if(hadNewLine) {
        this.emitIndent()
      }else {
        this.writeToOutput(" ")
      }
      this.recordSourceMappingEnd(comment)
    };
    Emitter.prototype.emitParensAndCommentsInPlace = function(ast, pre) {
      var comments = pre ? ast.preComments : ast.postComments;
      if(ast.isParenthesized && !pre) {
        this.writeToOutput(")")
      }
      if(this.emitOptions.emitComments && comments && comments.length != 0) {
        for(var i = 0;i < comments.length;i++) {
          this.emitCommentInPlace(comments[i])
        }
      }
      if(ast.isParenthesized && pre) {
        this.writeToOutput("(")
      }
    };
    Emitter.prototype.emitObjectLiteral = function(content) {
      this.writeLineToOutput("{");
      this.increaseIndent();
      var inObjectLiteral = this.setInObjectLiteral(true);
      this.emitJavascriptList(content, ",", TypeScript.TokenID.Comma, true, false, false);
      this.setInObjectLiteral(inObjectLiteral);
      this.decreaseIndent();
      this.emitIndent();
      this.writeToOutput("}")
    };
    Emitter.prototype.emitArrayLiteral = function(content) {
      this.writeToOutput("[");
      if(content) {
        this.writeLineToOutput("");
        this.increaseIndent();
        this.emitJavascriptList(content, ", ", TypeScript.TokenID.Comma, true, false, false);
        this.decreaseIndent();
        this.emitIndent()
      }
      this.writeToOutput("]")
    };
    Emitter.prototype.emitNew = function(target, args) {
      this.recordSourceMappingStart(target);
      this.writeToOutput("new ");
      if(target.nodeType == TypeScript.NodeType.TypeRef) {
        this.writeToOutput("Array()")
      }else {
        this.emitJavascript(target, TypeScript.TokenID.Tilde, false);
        this.writeToOutput("(");
        this.emitJavascriptList(args, ", ", TypeScript.TokenID.Comma, false, false, false);
        this.writeToOutput(")")
      }
      this.recordSourceMappingEnd(target)
    };
    Emitter.prototype.tryEmitConstant = function(dotExpr) {
      if(!this.emitOptions.propagateConstants) {
        return false
      }
      var propertyName = dotExpr.operand2;
      if(propertyName && propertyName.sym && propertyName.sym.isVariable()) {
        if(TypeScript.hasFlag(propertyName.sym.flags, TypeScript.SymbolFlags.Constant)) {
          if(propertyName.sym.declAST) {
            var boundDecl = propertyName.sym.declAST;
            if(boundDecl.init && boundDecl.init.nodeType == TypeScript.NodeType.NumberLit) {
              var numLit = boundDecl.init;
              this.writeToOutput(numLit.value.toString());
              var comment = " /* ";
              comment += propertyName.text;
              comment += " */ ";
              this.writeToOutput(comment);
              return true
            }
          }
        }
      }
      return false
    };
    Emitter.prototype.emitCall = function(callNode, target, args) {
      if(!this.emitSuperCall(callNode)) {
        if(!TypeScript.hasFlag(callNode.flags, TypeScript.ASTFlags.ClassBaseConstructorCall)) {
          if(target.nodeType == TypeScript.NodeType.FuncDecl && !target.isParenthesized) {
            this.writeToOutput("(")
          }
          this.emitJavascript(target, TypeScript.TokenID.LParen, false);
          if(target.nodeType == TypeScript.NodeType.FuncDecl && !target.isParenthesized) {
            this.writeToOutput(")")
          }
          this.writeToOutput("(");
          this.emitJavascriptList(args, ", ", TypeScript.TokenID.Comma, false, false, false);
          this.writeToOutput(")")
        }else {
          this.decreaseIndent();
          this.decreaseIndent();
          var constructorCall = new TypeScript.ASTList;
          constructorCall.members[0] = callNode;
          this.emitConstructorCalls(constructorCall, this.thisClassNode);
          this.increaseIndent();
          this.increaseIndent()
        }
      }
    };
    Emitter.prototype.defaultValue = function(type) {
      if(type == this.checker.anyType) {
        return"undefined"
      }else {
        if(type == this.checker.numberType) {
          return"0"
        }else {
          if(type == this.checker.stringType) {
            return'""'
          }else {
            if(type == this.checker.booleanType) {
              return"false"
            }else {
              return"null"
            }
          }
        }
      }
    };
    Emitter.prototype.emitConstructorCalls = function(bases, classDecl) {
      if(bases == null) {
        return
      }
      var basesLen = bases.members.length;
      this.recordSourceMappingStart(classDecl);
      for(var i = 0;i < basesLen;i++) {
        var baseExpr = bases.members[i];
        var baseSymbol = null;
        if(baseExpr.nodeType == TypeScript.NodeType.Call) {
          baseSymbol = baseExpr.target.type.symbol
        }else {
          baseSymbol = baseExpr.type.symbol
        }
        var baseName = baseSymbol.name;
        if(baseSymbol.declModule != classDecl.type.symbol.declModule) {
          baseName = baseSymbol.fullName()
        }
        if(baseExpr.nodeType == TypeScript.NodeType.Call) {
          this.emitIndent();
          this.writeToOutput("_super.call(this");
          var args = baseExpr.args;
          if(args && args.members.length > 0) {
            this.writeToOutput(", ");
            this.emitJavascriptList(args, ", ", TypeScript.TokenID.Comma, false, false, false)
          }
          this.writeToOutput(")")
        }else {
          if(baseExpr.type && baseExpr.type.isClassInstance()) {
            this.emitIndent();
            this.writeToOutput(classDecl.name.text + "._super.constructor");
            this.writeToOutput(".call(this)")
          }
        }
      }
      this.recordSourceMappingEnd(classDecl)
    };
    Emitter.prototype.emitInnerFunction = function(funcDecl, printName, isProtoMember, bases, hasSelfRef, classDecl, writeDeclFile, enclosingEmitStateContainer) {
      if(typeof writeDeclFile === "undefined") {
        writeDeclFile = false
      }
      if(typeof enclosingEmitStateContainer === "undefined") {
        enclosingEmitStateContainer = this.emitState.container
      }
      var isClassConstructor = funcDecl.isConstructor && TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.ClassMethod);
      var hasNonObjectBaseType = isClassConstructor && TypeScript.hasFlag(this.thisClassNode.type.instanceType.typeFlags, TypeScript.TypeFlags.HasBaseType) && !TypeScript.hasFlag(this.thisClassNode.type.instanceType.typeFlags, TypeScript.TypeFlags.HasBaseTypeOfObject);
      var classPropertiesMustComeAfterSuperCall = hasNonObjectBaseType && TypeScript.hasFlag(this.thisClassNode.varFlags, TypeScript.VarFlags.ClassSuperMustBeFirstCallInConstructor);
      this.emitParensAndCommentsInPlace(funcDecl, true);
      this.recordSourceMappingStart(funcDecl);
      if(!(funcDecl.isAccessor() && funcDecl.accessorSymbol.isObjectLitField)) {
        this.writeToOutput("function ")
      }
      if(printName) {
        var id = funcDecl.getNameText();
        if(id && !funcDecl.isAccessor()) {
          this.writeToOutput(id)
        }
      }
      this.writeToOutput("(");
      if(writeDeclFile) {
        writeDeclFile = this.emitFuncSignatureIdentifier(funcDecl, false, enclosingEmitStateContainer)
      }
      var argsLen = 0;
      var i = 0;
      var arg;
      var defaultArgs = [];
      if(funcDecl.args) {
        var tempContainer = this.setContainer(EmitContainer.Args);
        argsLen = funcDecl.args.members.length;
        var printLen = argsLen;
        if(funcDecl.variableArgList) {
          printLen--
        }
        for(i = 0;i < printLen;i++) {
          arg = funcDecl.args.members[i];
          if(arg.init) {
            defaultArgs.push(arg)
          }
          this.emitJavascript(arg, TypeScript.TokenID.LParen, false, writeDeclFile);
          if(i < printLen - 1) {
            this.writeToOutput(", ");
            if(writeDeclFile) {
              this.declFile.Write(", ")
            }
          }
        }
        this.setContainer(tempContainer)
      }
      this.writeLineToOutput(") {");
      var oldDeclContainingAST = null;
      if(writeDeclFile) {
        this.emitFuncSignatureVariableArg(funcDecl);
        if(funcDecl.hasStaticDeclarations()) {
          oldDeclContainingAST = this.setDeclContainingAST(funcDecl)
        }
      }
      this.increaseIndent();
      for(i = 0;i < defaultArgs.length;i++) {
        var arg = defaultArgs[i];
        this.emitIndent();
        this.recordSourceMappingStart(arg);
        this.writeToOutput("if (typeof " + arg.id.text + ' === "undefined") { ');
        this.recordSourceMappingStart(arg.id);
        this.writeToOutput(arg.id.text);
        this.recordSourceMappingEnd(arg.id);
        this.writeToOutput(" = ");
        this.emitJavascript(arg.init, TypeScript.TokenID.LParen, false);
        this.writeLineToOutput("; }");
        this.recordSourceMappingEnd(arg)
      }
      if(funcDecl.isConstructor && !classPropertiesMustComeAfterSuperCall) {
        if(funcDecl.args) {
          argsLen = funcDecl.args.members.length;
          for(i = 0;i < argsLen;i++) {
            arg = funcDecl.args.members[i];
            if((arg.varFlags & TypeScript.VarFlags.Property) != TypeScript.VarFlags.None) {
              this.emitIndent();
              this.recordSourceMappingStart(arg);
              this.recordSourceMappingStart(arg.id);
              this.writeToOutput("this." + arg.id.text);
              this.recordSourceMappingEnd(arg.id);
              this.writeToOutput(" = ");
              this.recordSourceMappingStart(arg.id);
              this.writeToOutput(arg.id.text);
              this.recordSourceMappingEnd(arg.id);
              this.writeLineToOutput(";");
              this.recordSourceMappingEnd(arg)
            }
          }
        }
        if(!TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.ClassMethod)) {
          this.emitConstructorCalls(bases, classDecl)
        }
      }
      if(hasSelfRef) {
        this.emitIndent();
        this.writeLineToOutput("var _this = this;")
      }
      if(funcDecl.variableArgList) {
        argsLen = funcDecl.args.members.length;
        var lastArg = funcDecl.args.members[argsLen - 1];
        this.emitIndent();
        this.recordSourceMappingStart(lastArg);
        this.writeToOutput("var ");
        this.recordSourceMappingStart(lastArg.id);
        this.writeToOutput(lastArg.id.text);
        this.recordSourceMappingEnd(lastArg.id);
        this.writeLineToOutput(" = [];");
        this.recordSourceMappingEnd(lastArg);
        this.emitIndent();
        this.writeLineToOutput("for (var _i = 0; _i < (arguments.length - " + (argsLen - 1) + "); _i++) {");
        this.increaseIndent();
        this.emitIndent();
        this.writeLineToOutput(lastArg.id.text + "[_i] = arguments[_i + " + (argsLen - 1) + "];");
        this.decreaseIndent();
        this.emitIndent();
        this.writeLineToOutput("}")
      }
      if(funcDecl.isConstructor && TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.ClassMethod) && !classPropertiesMustComeAfterSuperCall) {
        var nProps = this.thisClassNode.members.members.length;
        for(var i = 0;i < nProps;i++) {
          if(this.thisClassNode.members.members[i].nodeType == TypeScript.NodeType.VarDecl) {
            var varDecl = this.thisClassNode.members.members[i];
            if(!TypeScript.hasFlag(varDecl.varFlags, TypeScript.VarFlags.Static) && varDecl.init) {
              this.emitIndent();
              this.emitJavascriptVarDecl(varDecl, TypeScript.TokenID.Tilde);
              this.writeLineToOutput("")
            }
          }
        }
      }
      this.emitBareJavascriptStatements(funcDecl.bod, classPropertiesMustComeAfterSuperCall);
      this.decreaseIndent();
      this.emitIndent();
      this.writeToOutput("}");
      if(!isProtoMember && !TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.IsFunctionExpression) && (TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.Definition) || funcDecl.isConstructor)) {
        this.writeLineToOutput("")
      }
      if(funcDecl.hasStaticDeclarations()) {
        this.writeLineToOutput("");
        this.emitIndent();
        var funcName = funcDecl.getNameText();
        this.writeLineToOutput("(function (" + funcName + ") {");
        this.increaseIndent();
        var len = 0;
        var i = 0;
        len = funcDecl.innerStaticFuncs.length;
        for(i = 0;i < len;i++) {
          var innerFunc = funcDecl.innerStaticFuncs[i];
          if(innerFunc.isOverload) {
            if(writeDeclFile) {
              this.emitFuncSignature(innerFunc)
            }
            continue
          }
          this.emitIndent();
          if(innerFunc.isAccessor()) {
            this.emitPropertyAccessor(innerFunc, funcDecl.name.text, false, writeDeclFile)
          }else {
            this.writeToOutput(funcName + "." + innerFunc.name.text + " = ");
            this.emitInnerFunction(innerFunc, innerFunc.name && !innerFunc.name.isMissing(), false, null, innerFunc.hasSelfReference(), null, writeDeclFile)
          }
        }
        if(funcDecl.statics) {
          this.recordSourceMappingStart(funcDecl.statics);
          len = funcDecl.statics.members.length;
          for(i = 0;i < len;i++) {
            this.emitIndent();
            this.writeToOutput(funcName);
            this.emitJavascript(funcDecl.statics.members[i], TypeScript.TokenID.Tilde, false, writeDeclFile);
            this.writeLineToOutput("")
          }
          this.recordSourceMappingEnd(funcDecl.statics)
        }
        this.decreaseIndent();
        this.emitIndent();
        var printProto = isProtoMember && this.thisClassNode;
        var prefix = printProto ? this.thisClassNode.name.text + ".prototype." : "";
        this.writeLineToOutput("})(" + prefix + funcName + ");");
        if(writeDeclFile) {
          this.setDeclContainingAST(oldDeclContainingAST);
          this.emitIndentToDeclFile();
          this.declFile.WriteLine("}")
        }
      }
      this.recordSourceMappingEnd(funcDecl);
      this.emitParensAndCommentsInPlace(funcDecl, false)
    };
    Emitter.prototype.emitArgDecl = function(argDecl) {
      this.declFile.Write(argDecl.id.text);
      if(argDecl.isOptionalArg()) {
        this.declFile.Write("?")
      }
      if((argDecl.typeExpr || argDecl.type != this.checker.anyType) && this.canEmitTypeAnnotationSignature(argDecl.type)) {
        this.declFile.Write(": " + this.getTypeSignature(argDecl.type))
      }
    };
    Emitter.prototype.emitFuncSignatureIdentifier = function(funcDecl, isInterfaceMember, enclosingEmitStateContainer) {
      if(typeof isInterfaceMember === "undefined") {
        isInterfaceMember = false
      }
      if(typeof enclosingEmitStateContainer === "undefined") {
        enclosingEmitStateContainer = this.emitState.container
      }
      if(!isInterfaceMember && !funcDecl.isOverload) {
        if(funcDecl.isConstructor) {
          if(funcDecl.type.construct.signatures.length > 1) {
            return false
          }
        }else {
          if(funcDecl.type.call.signatures.length > 1) {
            return false
          }
        }
      }
      if(!this.canEmitSignature(TypeScript.ToDeclFlags(funcDecl.fncFlags), enclosingEmitStateContainer)) {
        return false
      }
      if(funcDecl.isConstructor) {
        this.emitIndentToDeclFile();
        this.declFile.Write("constructor ")
      }else {
        var id = funcDecl.getNameText();
        if(!isInterfaceMember) {
          this.emitDeclFlags(TypeScript.ToDeclFlags(funcDecl.fncFlags), "function");
          this.declFile.Write(id)
        }else {
          this.emitIndentToDeclFile();
          if(funcDecl.isConstructMember()) {
            this.declFile.Write("new")
          }else {
            if(!funcDecl.isCallMember() && !funcDecl.isIndexerMember()) {
              this.declFile.Write(id);
              if(TypeScript.hasFlag(funcDecl.name.flags, TypeScript.ASTFlags.OptionalName)) {
                this.declFile.Write("? ")
              }
            }
          }
        }
      }
      if(!funcDecl.isIndexerMember()) {
        this.declFile.Write("(")
      }else {
        this.declFile.Write("[")
      }
      return true
    };
    Emitter.prototype.emitFuncSignatureVariableArg = function(funcDecl) {
      if(funcDecl.variableArgList) {
        var lastArg = funcDecl.args.members[funcDecl.args.members.length - 1];
        if(funcDecl.args.members.length > 1) {
          this.declFile.Write(", ...")
        }else {
          this.declFile.Write("...")
        }
        this.emitArgDecl(lastArg)
      }
      if(!funcDecl.isIndexerMember()) {
        this.declFile.Write(")")
      }else {
        this.declFile.Write("]")
      }
      if(!funcDecl.isConstructor && (funcDecl.returnTypeAnnotation || funcDecl.signature.returnType.type != this.checker.anyType) && this.canEmitTypeAnnotationSignature(funcDecl.signature.returnType.type)) {
        this.declFile.Write(": " + this.getTypeSignature(funcDecl.signature.returnType.type))
      }
      if(funcDecl.hasStaticDeclarations()) {
        this.declFile.WriteLine(" {")
      }else {
        this.declFile.WriteLine(";")
      }
    };
    Emitter.prototype.emitFuncSignature = function(funcDecl, isInterfaceMember) {
      if(typeof isInterfaceMember === "undefined") {
        isInterfaceMember = false
      }
      var emitSignature = this.emitFuncSignatureIdentifier(funcDecl, isInterfaceMember);
      if(emitSignature) {
        if(funcDecl.args) {
          var argsLen = funcDecl.args.members.length;
          if(funcDecl.variableArgList) {
            argsLen--
          }
          for(var i = 0;i < argsLen;i++) {
            var argDecl = funcDecl.args.members[i];
            this.emitArgDecl(argDecl);
            if(i < argsLen - 1) {
              this.declFile.Write(", ")
            }
          }
        }
        this.emitFuncSignatureVariableArg(funcDecl)
      }
    };
    Emitter.prototype.emitPropertyAccessorSignature = function(funcDecl) {
      var accessorSymbol = funcDecl.accessorSymbol;
      this.emitDeclFlags(TypeScript.ToDeclFlags(accessorSymbol.flags), "var");
      this.declFile.WriteLine(funcDecl.name.text + " : " + this.getTypeSignature(accessorSymbol.getType()) + ";")
    };
    Emitter.prototype.emitDeclFlags = function(declFlags, typeString) {
      this.emitIndentToDeclFile();
      var accessorString = "";
      if(TypeScript.hasFlag(declFlags, TypeScript.DeclFlags.GetAccessor)) {
        accessorString = "get "
      }else {
        if(TypeScript.hasFlag(declFlags, TypeScript.DeclFlags.SetAccessor)) {
          accessorString = "set "
        }
      }
      if(TypeScript.hasFlag(declFlags, TypeScript.DeclFlags.Exported)) {
        this.declFile.Write("export ")
      }
      if(TypeScript.hasFlag(declFlags, TypeScript.DeclFlags.LocalStatic) || TypeScript.hasFlag(declFlags, TypeScript.DeclFlags.Static)) {
        this.declFile.Write("static " + accessorString)
      }else {
        if(TypeScript.hasFlag(declFlags, TypeScript.DeclFlags.Private)) {
          this.declFile.Write("private " + accessorString)
        }else {
          if(TypeScript.hasFlag(declFlags, TypeScript.DeclFlags.Public)) {
            this.declFile.Write("public " + accessorString)
          }else {
            if(accessorString == "") {
              this.declFile.Write(typeString + " ")
            }else {
              this.declFile.Write(accessorString)
            }
          }
        }
      }
    };
    Emitter.prototype.canEmitTypeAnnotationSignature = function(type, declFlag) {
      if(typeof declFlag === "undefined") {
        declFlag = TypeScript.DeclFlags.None
      }
      if(type == null) {
        return false
      }
      if(type.primitiveTypeClass == TypeScript.Primitive.None && type.symbol && type.symbol.container != undefined && type.symbol.container != this.checker.gloMod) {
        if(TypeScript.hasFlag(declFlag, TypeScript.DeclFlags.Private)) {
          return false
        }
        if(TypeScript.hasFlag(type.symbol.container.flags, TypeScript.SymbolFlags.Exported)) {
          return true
        }
        if(type.symbol.declAST) {
          switch(type.symbol.declAST.nodeType) {
            case TypeScript.NodeType.Module:
              if(!TypeScript.hasFlag(type.symbol.declAST.modFlags, TypeScript.ModuleFlags.Exported)) {
                return false
              }
              break;
            case TypeScript.NodeType.Class:
              if(!TypeScript.hasFlag(type.symbol.declAST.varFlags, TypeScript.VarFlags.Exported)) {
                return false
              }
              break;
            case TypeScript.NodeType.Interface:
              if(!TypeScript.hasFlag(type.symbol.declAST.varFlags, TypeScript.VarFlags.Exported)) {
                return false
              }
              break;
            case TypeScript.NodeType.FuncDecl:
              if(!TypeScript.hasFlag(type.symbol.declAST.fncFlags, TypeScript.FncFlags.Exported)) {
                return false
              }
              break;
            default:
              throw Error("Catch this unhandled type container");
          }
        }
      }
      return true
    };
    Emitter.prototype.getTypeSignature = function(type) {
      var containingScope = null;
      if(this.declContainingAST) {
        switch(this.declContainingAST.nodeType) {
          case TypeScript.NodeType.Module:
          ;
          case TypeScript.NodeType.Interface:
          ;
          case TypeScript.NodeType.FuncDecl:
            if(this.declContainingAST.type) {
              containingScope = this.declContainingAST.type.containedScope
            }
            break;
          case TypeScript.NodeType.Script:
            var script = this.declContainingAST;
            if(script.bod) {
              containingScope = script.bod.enclosingScope
            }
            break;
          case TypeScript.NodeType.Class:
            if(this.declContainingAST.type) {
              containingScope = this.declContainingAST.type.instanceType.containedScope
            }
            break;
          default:
            throw Error("Unknown containing scope");
        }
      }
      return type.getScopedTypeName(containingScope)
    };
    Emitter.prototype.canEmitSignature = function(declFlags, enclosingEmitStateContainer) {
      if(typeof enclosingEmitStateContainer === "undefined") {
        enclosingEmitStateContainer = this.emitState.container
      }
      if(enclosingEmitStateContainer == EmitContainer.Module && !TypeScript.hasFlag(declFlags, TypeScript.DeclFlags.Exported)) {
        return false
      }
      return true
    };
    Emitter.prototype.emitVarSignature = function(varDecl, interfaceMember) {
      if(typeof interfaceMember === "undefined") {
        interfaceMember = false
      }
      if(this.canEmitSignature(TypeScript.ToDeclFlags(varDecl.varFlags))) {
        if(!interfaceMember) {
          this.emitDeclFlags(TypeScript.ToDeclFlags(varDecl.varFlags), "var");
          this.declFile.Write(varDecl.id.text)
        }else {
          this.emitIndentToDeclFile();
          this.declFile.Write(varDecl.id.text);
          if(TypeScript.hasFlag(varDecl.id.flags, TypeScript.ASTFlags.OptionalName)) {
            this.declFile.Write("?")
          }
        }
        var type = null;
        if(varDecl.typeExpr && varDecl.typeExpr.type) {
          type = varDecl.typeExpr.type
        }else {
          if(varDecl.sym) {
            type = varDecl.sym.getType();
            if(type == this.checker.anyType) {
              type = null
            }
          }
        }
        if(this.canEmitTypeAnnotationSignature(type, TypeScript.ToDeclFlags(varDecl.varFlags))) {
          var typeName = this.getTypeSignature(type);
          this.declFile.WriteLine(": " + typeName + ";")
        }else {
          this.declFile.WriteLine(";")
        }
      }
    };
    Emitter.prototype.emitBaseList = function(bases, qual) {
      if(bases && bases.members.length > 0) {
        this.declFile.Write(" " + qual + " ");
        var basesLen = bases.members.length;
        for(var i = 0;i < basesLen;i++) {
          var baseExpr = bases.members[i];
          var baseSymbol = baseExpr.type.symbol;
          var baseType = baseExpr.type;
          var baseName = this.getTypeSignature(baseType);
          if(i > 0) {
            this.declFile.Write(", ")
          }
          this.declFile.Write(baseName)
        }
      }
    };
    Emitter.prototype.emitClassSignatureIdentifierAndHeritage = function(classDecl) {
      if(!this.canEmitSignature(TypeScript.ToDeclFlags(classDecl.varFlags))) {
        return false
      }
      var className = classDecl.name.text;
      this.emitDeclFlags(TypeScript.ToDeclFlags(classDecl.varFlags), "class");
      this.declFile.Write(className);
      this.emitBaseList(classDecl.baseClass, "extends");
      this.emitBaseList(classDecl.implementsList, "implements");
      this.declFile.WriteLine(" {");
      return true
    };
    Emitter.prototype.emitClassSignatureClassBodyOfAmbientClass = function(classDecl) {
      var membersLen = classDecl.definitionMembers.members.length;
      for(var j = 0;j < membersLen;j++) {
        var memberDecl = classDecl.definitionMembers.members[j];
        if(memberDecl.nodeType == TypeScript.NodeType.FuncDecl) {
          var fn = memberDecl;
          if(!fn.isAccessor()) {
            this.emitFuncSignature(fn)
          }
        }else {
          if(memberDecl.nodeType == TypeScript.NodeType.VarDecl) {
            this.emitVarSignature(memberDecl)
          }else {
            throw Error("We want to catch this");
          }
        }
      }
    };
    Emitter.prototype.emitMembersFromConstructorDefinition = function(funcDecl) {
      if(funcDecl.args) {
        var argsLen = funcDecl.args.members.length;
        if(funcDecl.variableArgList) {
          argsLen--
        }
        for(var i = 0;i < argsLen;i++) {
          var argDecl = funcDecl.args.members[i];
          if(TypeScript.hasFlag(argDecl.varFlags, TypeScript.VarFlags.Property)) {
            this.emitDeclFlags(TypeScript.ToDeclFlags(argDecl.varFlags), "var");
            this.declFile.Write(argDecl.id.text);
            if(argDecl.typeExpr) {
              this.declFile.Write(": " + this.getTypeSignature(argDecl.type))
            }
            this.declFile.WriteLine(";")
          }
        }
      }
    };
    Emitter.prototype.emitClassSignature = function(classDecl) {
      var canEmitSignature = this.emitClassSignatureIdentifierAndHeritage(classDecl);
      if(canEmitSignature) {
        var oldDeclContainingAST = this.setDeclContainingAST(classDecl);
        this.increaseIndent();
        this.emitClassSignatureClassBodyOfAmbientClass(classDecl);
        this.decreaseIndent();
        this.setDeclContainingAST(oldDeclContainingAST);
        this.emitIndentToDeclFile();
        this.declFile.WriteLine("}")
      }
    };
    Emitter.prototype.emitImportDecl = function(importDecl) {
      if(this.canEmitSignature(TypeScript.ToDeclFlags(importDecl.varFlags))) {
        this.emitDeclFlags(TypeScript.ToDeclFlags(importDecl.varFlags), "import");
        this.declFile.Write(importDecl.id.text + " = ");
        if(importDecl.isDynamicImport) {
          this.declFile.WriteLine("module (" + importDecl.getAliasName() + ");")
        }else {
          this.declFile.WriteLine(importDecl.getAliasName() + ";")
        }
      }
    };
    Emitter.prototype.emitModuleIdentification = function(moduleDecl) {
      if(!this.canEmitSignature(TypeScript.ToDeclFlags(moduleDecl.modFlags))) {
        return false
      }
      if(this.declDottedModuleName) {
        this.declFile.Write(".")
      }else {
        this.emitDeclFlags(TypeScript.ToDeclFlags(moduleDecl.modFlags), "module")
      }
      this.declFile.Write(moduleDecl.name.text);
      if(moduleDecl.members.members.length == 1 && moduleDecl.members.members[0].nodeType == TypeScript.NodeType.Module && !moduleDecl.members.members[0].isEnum() && TypeScript.hasFlag(moduleDecl.members.members[0].modFlags, TypeScript.ModuleFlags.Exported)) {
        this.declDottedModuleName = true
      }else {
        this.declDottedModuleName = false;
        this.declFile.WriteLine(" {")
      }
      return true
    };
    Emitter.prototype.emitModuleBodyOfAmbientModule = function(moduleDecl) {
      var membersLen = moduleDecl.members.members.length;
      for(var j = 0;j < membersLen;j++) {
        var memberDecl = moduleDecl.members.members[j];
        switch(memberDecl.nodeType) {
          case TypeScript.NodeType.VarDecl:
            this.emitVarSignature(memberDecl);
            break;
          case TypeScript.NodeType.FuncDecl:
            this.emitFuncSignature(memberDecl);
            break;
          case TypeScript.NodeType.Class:
            this.emitClassSignature(memberDecl);
            break;
          case TypeScript.NodeType.Interface:
            this.emitInterfaceDeclaration(memberDecl);
            break;
          case TypeScript.NodeType.Module:
            this.emitModuleSignature(memberDecl);
            break;
          case TypeScript.NodeType.Import:
            this.emitImportDecl(memberDecl);
            break;
          case TypeScript.NodeType.Empty:
            break;
          default:
            throw Error("We want to catch this");
        }
      }
    };
    Emitter.prototype.emitModuleSignature = function(moduleDecl) {
      if(moduleDecl.isEnum()) {
        this.emitEnumSignature(moduleDecl)
      }else {
        var oldDeclIndentDelta = this.declIndentDelta;
        var wasDottedModuleDecl = this.declDottedModuleName;
        var canEmitSignature = this.emitModuleIdentification(moduleDecl);
        if(canEmitSignature) {
          var oldDeclContainingAST = this.setDeclContainingAST(moduleDecl);
          this.increaseIndent();
          var tempContainer = this.setContainer(EmitContainer.Module);
          this.emitModuleBodyOfAmbientModule(moduleDecl);
          this.setContainer(tempContainer);
          this.decreaseIndent();
          this.setDeclContainingAST(oldDeclContainingAST);
          if(!wasDottedModuleDecl) {
            this.declIndentDelta = oldDeclIndentDelta;
            this.emitIndentToDeclFile();
            this.declFile.WriteLine("}")
          }
        }
      }
    };
    Emitter.prototype.emitEnumBodyOfAmbientEnum = function(moduleDecl) {
      var membersLen = moduleDecl.members.members.length;
      for(var j = 1;j < membersLen;j++) {
        var memberDecl = moduleDecl.members.members[j];
        if(memberDecl.nodeType == TypeScript.NodeType.VarDecl) {
          this.emitIndentToDeclFile();
          this.declFile.WriteLine(memberDecl.id.text + ",")
        }else {
          if(memberDecl.nodeType != TypeScript.NodeType.Asg) {
            throw Error("We want to catch this");
          }
        }
      }
    };
    Emitter.prototype.emitEnumSignature = function(moduleDecl) {
      if(!this.canEmitSignature(TypeScript.ToDeclFlags(moduleDecl.modFlags))) {
        return false
      }
      this.emitDeclFlags(TypeScript.ToDeclFlags(moduleDecl.modFlags), "enum");
      this.declFile.WriteLine(moduleDecl.name.text + " {");
      this.increaseIndent();
      this.emitEnumBodyOfAmbientEnum(moduleDecl);
      this.decreaseIndent();
      this.emitIndentToDeclFile();
      this.declFile.WriteLine("}");
      return true
    };
    Emitter.prototype.emitInterfaceBody = function(typeMemberList) {
      for(var i = 0;i < typeMemberList.members.length;i++) {
        var typeMember = typeMemberList.members[i];
        switch(typeMember.nodeType) {
          case TypeScript.NodeType.FuncDecl:
            this.emitFuncSignature(typeMember, true);
            break;
          case TypeScript.NodeType.VarDecl:
            this.emitVarSignature(typeMember, true);
            break;
          default:
            throw Error("Not allowed");
        }
      }
    };
    Emitter.prototype.emitInterfaceDeclaration = function(interfaceDecl) {
      if(this.canEmitSignature(TypeScript.ToDeclFlags(interfaceDecl.varFlags))) {
        var temp = this.setContainer(EmitContainer.Interface);
        var interfaceName = interfaceDecl.name.text;
        this.emitDeclFlags(TypeScript.ToDeclFlags(interfaceDecl.varFlags), "interface");
        this.declFile.Write(interfaceName);
        this.emitBaseList(interfaceDecl.extendsList, "extends");
        this.declFile.WriteLine(" {");
        this.increaseIndent();
        var oldDeclContainingAST = this.setDeclContainingAST(interfaceDecl);
        this.emitInterfaceBody(interfaceDecl.members);
        this.setDeclContainingAST(oldDeclContainingAST);
        this.decreaseIndent();
        this.emitIndentToDeclFile();
        this.declFile.WriteLine("}");
        this.setContainer(temp)
      }
    };
    Emitter.prototype.emitJavascriptModule = function(moduleDecl, writeDeclFile) {
      var modName = moduleDecl.name.text;
      if(TypeScript.isTSFile(modName)) {
        moduleDecl.name.text = modName.substring(0, modName.length - 3)
      }else {
        if(TypeScript.isSTRFile(modName)) {
          moduleDecl.name.text = modName.substring(0, modName.length - 4)
        }
      }
      if(!TypeScript.hasFlag(moduleDecl.modFlags, TypeScript.ModuleFlags.Ambient)) {
        var isDynamicMod = TypeScript.hasFlag(moduleDecl.modFlags, TypeScript.ModuleFlags.IsDynamic);
        var oldDeclIndentDelta = this.declIndentDelta;
        var wasDottedModuleDecl = this.declDottedModuleName;
        var oldDeclContainingAST = null;
        var prevOutFile = this.outfile;
        if(writeDeclFile) {
          if(!isDynamicMod) {
            if(moduleDecl.isEnum()) {
              writeDeclFile = this.emitEnumSignature(moduleDecl)
            }else {
              writeDeclFile = this.emitModuleIdentification(moduleDecl)
            }
          }
          if(writeDeclFile) {
            oldDeclContainingAST = this.setDeclContainingAST(moduleDecl)
          }
        }
        var temp = this.setContainer(EmitContainer.Module);
        var svModuleName = this.moduleName;
        var isExported = TypeScript.hasFlag(moduleDecl.modFlags, TypeScript.ModuleFlags.Exported);
        this.moduleDeclList[this.moduleDeclList.length] = moduleDecl;
        this.moduleName = moduleDecl.name.text;
        this.recordSourceMappingStart(moduleDecl);
        if(isDynamicMod) {
          var modFilePath = TypeScript.stripQuotes(TypeScript.trimModName(moduleDecl.name.text)) + ".js";
          if(this.emitOptions.createFile) {
            if(modFilePath != this.emitOptions.path) {
              this.outfile = this.emitOptions.createFile(modFilePath)
            }else {
              if(!this.emitOptions.outputMany) {
                this.checker.errorReporter.emitterError(moduleDecl, "Module emit collides with emitted script: " + modFilePath)
              }
            }
          }
          this.setContainer(EmitContainer.DynamicModule);
          if(TypeScript.moduleGenTarget == TypeScript.ModuleGenTarget.Asynchronous) {
            var dependencyList = '["require", "exports"';
            var importList = "require, exports";
            var importStatement = null;
            for(var i = 0;i < moduleDecl.mod.importedModules.length;i++) {
              importStatement = moduleDecl.mod.importedModules[i];
              if(importStatement.id.sym && !importStatement.id.sym.onlyReferencedAsTypeRef) {
                if(i <= moduleDecl.mod.importedModules.length - 1) {
                  dependencyList += ", ";
                  importList += ", "
                }
                importList += "__" + importStatement.id.text + "__";
                dependencyList += importStatement.firstAliasedModToString()
              }
            }
            for(var i = 0;i < moduleDecl.amdDependencies.length;i++) {
              dependencyList += ', "' + moduleDecl.amdDependencies[i] + '"'
            }
            dependencyList += "]";
            this.writeLineToOutput("define(" + dependencyList + "," + " function(" + importList + ") {")
          }else {
          }
        }else {
          if(!isExported) {
            this.writeLineToOutput("var " + this.moduleName + ";");
            this.emitIndent()
          }
          this.writeLineToOutput("(function (" + this.moduleName + ") {")
        }
        if(!isDynamicMod || TypeScript.moduleGenTarget == TypeScript.ModuleGenTarget.Asynchronous) {
          this.increaseIndent();
          if(isDynamicMod) {
            this.addDeclIndentDelta()
          }
        }
        this.emitJavascriptList(moduleDecl.members, null, TypeScript.TokenID.SColon, true, false, false, writeDeclFile && !moduleDecl.isEnum());
        if(!isDynamicMod || TypeScript.moduleGenTarget == TypeScript.ModuleGenTarget.Asynchronous) {
          this.decreaseIndent();
          if(isDynamicMod) {
            this.reduceDeclIndentDelta()
          }
        }
        this.emitIndent();
        if(isDynamicMod) {
          if(writeDeclFile) {
            this.setDeclContainingAST(oldDeclContainingAST)
          }
          if(TypeScript.moduleGenTarget == TypeScript.ModuleGenTarget.Asynchronous) {
            this.writeLineToOutput("})")
          }else {
          }
          if(this.outfile != prevOutFile) {
            this.outfile.Close();
            this.outfile = prevOutFile
          }
        }else {
          if(writeDeclFile) {
            this.setDeclContainingAST(oldDeclContainingAST);
            if(!moduleDecl.isEnum() && !wasDottedModuleDecl) {
              this.declIndentDelta = oldDeclIndentDelta;
              this.emitIndentToDeclFile();
              this.declFile.WriteLine("}")
            }
          }
          var containingMod = null;
          if(moduleDecl.type && moduleDecl.type.symbol.container && moduleDecl.type.symbol.container.declAST) {
            containingMod = moduleDecl.type.symbol.container.declAST
          }
          var parentIsDynamic = containingMod && TypeScript.hasFlag(containingMod.modFlags, TypeScript.ModuleFlags.IsDynamic);
          if(temp == EmitContainer.Prog && isExported) {
            this.writeLineToOutput("})(this." + this.moduleName + " || (this." + this.moduleName + " = {}));")
          }else {
            if(isExported || temp == EmitContainer.Prog) {
              var dotMod = svModuleName != "" ? (parentIsDynamic ? "exports" : svModuleName) + "." : svModuleName;
              this.writeLineToOutput("})(" + dotMod + this.moduleName + " || (" + dotMod + this.moduleName + " = {}));")
            }else {
              if(!isExported && temp != EmitContainer.Prog) {
                this.writeLineToOutput("})(" + this.moduleName + " || (" + this.moduleName + " = {}));")
              }else {
                this.writeLineToOutput("})();")
              }
            }
          }
          if(temp != EmitContainer.Prog && !parentIsDynamic && isExported) {
            this.emitIndent();
            this.writeLineToOutput("var " + this.moduleName + " = " + svModuleName + "." + this.moduleName + ";")
          }
        }
        this.recordSourceMappingEnd(moduleDecl);
        this.setContainer(temp);
        this.moduleName = svModuleName;
        this.moduleDeclList.length--
      }else {
        if(writeDeclFile) {
          this.emitModuleSignature(moduleDecl)
        }
      }
    };
    Emitter.prototype.emitIndex = function(operand1, operand2) {
      var temp = this.setInObjectLiteral(false);
      this.emitJavascript(operand1, TypeScript.TokenID.Tilde, false);
      this.writeToOutput("[");
      this.emitJavascriptList(operand2, ", ", TypeScript.TokenID.Comma, false, false, false);
      this.writeToOutput("]");
      this.setInObjectLiteral(temp)
    };
    Emitter.prototype.emitStringLiteral = function(text) {
      this.writeToOutput(text)
    };
    Emitter.prototype.emitJavascriptFunction = function(funcDecl, writeDeclFile) {
      if(TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.Signature) || funcDecl.isOverload) {
        if(writeDeclFile) {
          this.emitFuncSignature(funcDecl)
        }
        return
      }
      var temp;
      var tempFnc = this.thisFnc;
      this.thisFnc = funcDecl;
      if(funcDecl.isConstructor) {
        temp = this.setContainer(EmitContainer.Constructor)
      }else {
        temp = this.setContainer(EmitContainer.Function)
      }
      var bases = null;
      var hasSelfRef = false;
      var funcName = funcDecl.getNameText();
      if((this.emitState.inObjectLiteral || !funcDecl.isAccessor()) && (temp != EmitContainer.Constructor || (funcDecl.fncFlags & TypeScript.FncFlags.Method) == TypeScript.FncFlags.None)) {
        var tempLit = this.setInObjectLiteral(false);
        if(this.thisClassNode) {
          bases = this.thisClassNode.extendsList
        }
        hasSelfRef = funcDecl.hasSelfReference();
        this.recordSourceMappingStart(funcDecl);
        if(TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.Exported | TypeScript.FncFlags.ClassPropertyMethodExported) && funcDecl.type.symbol.container == this.checker.gloMod && !funcDecl.isConstructor) {
          this.writeToOutput("this." + funcName + " = ");
          this.emitInnerFunction(funcDecl, false, false, bases, hasSelfRef, this.thisClassNode, writeDeclFile, temp)
        }else {
          this.emitInnerFunction(funcDecl, funcDecl.name && !funcDecl.name.isMissing(), false, bases, hasSelfRef, this.thisClassNode, writeDeclFile, temp)
        }
        this.recordSourceMappingEnd(funcDecl);
        this.setInObjectLiteral(tempLit)
      }
      this.setContainer(temp);
      this.thisFnc = tempFnc;
      if(TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.Definition)) {
        if(TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.Static)) {
          if(this.thisClassNode) {
            if(funcDecl.isAccessor()) {
              this.emitPropertyAccessor(funcDecl, this.thisClassNode.name.text, false, false)
            }else {
              this.emitIndent();
              this.recordSourceMappingStart(funcDecl);
              this.writeLineToOutput(this.thisClassNode.name.text + "." + funcName + " = " + funcName + ";");
              this.recordSourceMappingEnd(funcDecl)
            }
          }
        }else {
          if((this.emitState.container == EmitContainer.Module || this.emitState.container == EmitContainer.DynamicModule) && TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.Exported | TypeScript.FncFlags.ClassPropertyMethodExported)) {
            this.emitIndent();
            var modName = this.emitState.container == EmitContainer.Module ? this.moduleName : "exports";
            this.recordSourceMappingStart(funcDecl);
            this.writeLineToOutput(modName + "." + funcName + " = " + funcName + ";");
            this.recordSourceMappingEnd(funcDecl)
          }
        }
      }
    };
    Emitter.prototype.emitAmbientVarDecl = function(varDecl) {
      if(varDecl.init) {
        this.emitParensAndCommentsInPlace(varDecl, true);
        this.recordSourceMappingStart(varDecl);
        this.recordSourceMappingStart(varDecl.id);
        this.writeToOutput(varDecl.id.text);
        this.recordSourceMappingEnd(varDecl.id);
        this.writeToOutput(" = ");
        this.emitJavascript(varDecl.init, TypeScript.TokenID.Comma, false);
        this.recordSourceMappingEnd(varDecl);
        this.writeToOutput(";");
        this.emitParensAndCommentsInPlace(varDecl, false)
      }
    };
    Emitter.prototype.emitForVarList = function(varDeclList) {
      if(varDeclList) {
        this.recordSourceMappingStart(varDeclList);
        var len = varDeclList.members.length;
        for(var i = 0;i < len;i++) {
          var varDecl = varDeclList.members[i];
          this.emitJavascriptVarDecl(varDecl, i == 0 ? TypeScript.TokenID.FOR : TypeScript.TokenID.LParen);
          if(i < len - 1) {
            this.writeToOutput(", ")
          }
        }
        this.recordSourceMappingEnd(varDeclList)
      }
    };
    Emitter.prototype.emitJavascriptVarDecl = function(varDecl, tokenId, writeDeclFile) {
      if(typeof writeDeclFile === "undefined") {
        writeDeclFile = false
      }
      if((varDecl.varFlags & TypeScript.VarFlags.Ambient) == TypeScript.VarFlags.Ambient) {
        this.emitAmbientVarDecl(varDecl)
      }else {
        var sym = varDecl.sym;
        var hasInitializer = varDecl.init != null;
        this.emitParensAndCommentsInPlace(varDecl, true);
        this.recordSourceMappingStart(varDecl);
        if(sym && sym.isMember() && sym.container && sym.container.kind() == TypeScript.SymbolKind.Type) {
          var type = sym.container.type;
          if(type.isClass() && !TypeScript.hasFlag(sym.flags, TypeScript.SymbolFlags.ModuleMember)) {
            if(this.emitState.container != EmitContainer.Args) {
              if(TypeScript.hasFlag(sym.flags, TypeScript.SymbolFlags.Static)) {
                this.writeToOutput(sym.container.name + ".")
              }else {
                this.writeToOutput("this.")
              }
            }
          }else {
            if(type.hasImplementation()) {
              if(!TypeScript.hasFlag(sym.flags, TypeScript.SymbolFlags.Exported) && (sym.container == this.checker.gloMod || !TypeScript.hasFlag(sym.flags, TypeScript.SymbolFlags.Property))) {
                this.writeToOutput("var ")
              }else {
                if(TypeScript.hasFlag(varDecl.varFlags, TypeScript.VarFlags.LocalStatic)) {
                  this.writeToOutput(".")
                }else {
                  if(this.emitState.container == EmitContainer.DynamicModule) {
                    this.writeToOutput("exports.")
                  }else {
                    this.writeToOutput(this.moduleName + ".")
                  }
                }
              }
            }else {
              if(tokenId != TypeScript.TokenID.LParen) {
                if(TypeScript.hasFlag(sym.flags, TypeScript.SymbolFlags.Exported) && sym.container == this.checker.gloMod) {
                  this.writeToOutput("this.")
                }else {
                  this.writeToOutput("var ")
                }
              }
            }
          }
        }else {
          if(tokenId != TypeScript.TokenID.LParen) {
            this.writeToOutput("var ")
          }
        }
        this.recordSourceMappingStart(varDecl.id);
        this.writeToOutput(varDecl.id.text);
        this.recordSourceMappingEnd(varDecl.id);
        if(hasInitializer) {
          this.writeToOutputTrimmable(" = ");
          this.emitJavascript(varDecl.init, TypeScript.TokenID.Comma, false)
        }else {
          if(sym && sym.isMember() && this.emitState.container == EmitContainer.Constructor) {
            this.writeToOutputTrimmable(" = ");
            this.writeToOutput(this.defaultValue(varDecl.type))
          }
        }
        if(tokenId != TypeScript.TokenID.FOR && tokenId != TypeScript.TokenID.LParen) {
          this.writeToOutputTrimmable(";")
        }
        this.recordSourceMappingEnd(varDecl);
        this.emitParensAndCommentsInPlace(varDecl, false)
      }
      if(writeDeclFile) {
        this.emitVarSignature(varDecl)
      }
    };
    Emitter.prototype.declEnclosed = function(moduleDecl) {
      if(moduleDecl == null) {
        return true
      }
      for(var i = 0, len = this.moduleDeclList.length;i < len;i++) {
        if(this.moduleDeclList[i] == moduleDecl) {
          return true
        }
      }
      return false
    };
    Emitter.prototype.emitJavascriptName = function(name, addThis) {
      var sym = name.sym;
      this.emitParensAndCommentsInPlace(name, true);
      this.recordSourceMappingStart(name);
      if(!name.isMissing()) {
        if(addThis && this.emitState.container != EmitContainer.Args && sym) {
          if(sym.container && sym.container.name != TypeScript.globalId) {
            if(TypeScript.hasFlag(sym.flags, TypeScript.SymbolFlags.Static) && TypeScript.hasFlag(sym.flags, TypeScript.SymbolFlags.Property)) {
              if(sym.declModule && TypeScript.hasFlag(sym.declModule.modFlags, TypeScript.ModuleFlags.IsDynamic)) {
                this.writeToOutput("exports.")
              }else {
                this.writeToOutput(sym.container.name + ".")
              }
            }else {
              if(sym.kind() == TypeScript.SymbolKind.Field) {
                var fieldSym = sym;
                if(TypeScript.hasFlag(fieldSym.flags, TypeScript.SymbolFlags.ModuleMember)) {
                  if(sym.container != this.checker.gloMod && (TypeScript.hasFlag(sym.flags, TypeScript.SymbolFlags.Property) || TypeScript.hasFlag(sym.flags, TypeScript.SymbolFlags.Exported))) {
                    if(TypeScript.hasFlag(sym.declModule.modFlags, TypeScript.ModuleFlags.IsDynamic)) {
                      this.writeToOutput("exports.")
                    }else {
                      this.writeToOutput(sym.container.name + ".")
                    }
                  }
                }else {
                  if(sym.isInstanceProperty()) {
                    if(this.thisFnc && !this.thisFnc.isMethod() && !this.thisFnc.isConstructor) {
                      this.writeToOutput("_this.")
                    }else {
                      this.writeToOutput("this.")
                    }
                  }
                }
              }else {
                if(sym.kind() == TypeScript.SymbolKind.Type) {
                  if(sym.isInstanceProperty()) {
                    var typeSym = sym;
                    var type = typeSym.type;
                    if(type.call && !TypeScript.hasFlag(sym.flags, TypeScript.SymbolFlags.ModuleMember)) {
                      if(this.thisFnc && !this.thisFnc.isMethod() && !this.thisFnc.isConstructor) {
                        this.writeToOutput("_this.")
                      }else {
                        this.writeToOutput("this.")
                      }
                    }
                  }else {
                    if(sym.unitIndex != this.checker.locationInfo.unitIndex || !this.declEnclosed(sym.declModule)) {
                      this.writeToOutput(sym.container.name + ".")
                    }
                  }
                }
              }
            }
          }else {
            if(sym.container == this.checker.gloMod && TypeScript.hasFlag(sym.flags, TypeScript.SymbolFlags.Exported) && !TypeScript.hasFlag(sym.flags, TypeScript.SymbolFlags.Ambient) && !((sym.isType() || sym.isMember()) && sym.declModule && TypeScript.hasFlag(sym.declModule.modFlags, TypeScript.ModuleFlags.Ambient)) && this.emitState.container == EmitContainer.Prog && sym.declAST.nodeType != TypeScript.NodeType.FuncDecl) {
              this.writeToOutput("this.")
            }
          }
        }
        if(sym && sym.declAST && sym.declAST.nodeType == TypeScript.NodeType.Module && TypeScript.hasFlag(sym.declAST.modFlags, TypeScript.ModuleFlags.IsDynamic)) {
          var moduleDecl = sym.declAST;
          if(TypeScript.moduleGenTarget == TypeScript.ModuleGenTarget.Asynchronous) {
            this.writeLineToOutput("__" + this.modAliasId + "__;")
          }else {
            var modPath = name.text;
            var isAmbient = moduleDecl.mod.symbol.declAST && TypeScript.hasFlag(moduleDecl.mod.symbol.declAST.modFlags, TypeScript.ModuleFlags.Ambient);
            modPath = isAmbient ? modPath : this.firstModAlias ? this.firstModAlias : TypeScript.quoteBaseName(modPath);
            modPath = isAmbient ? modPath : !TypeScript.isRelative(TypeScript.stripQuotes(modPath)) ? TypeScript.quoteStr("./" + TypeScript.stripQuotes(modPath)) : modPath;
            this.writeToOutput("require(" + modPath + ")")
          }
        }else {
          this.writeToOutput(name.text)
        }
      }
      this.recordSourceMappingEnd(name);
      this.emitParensAndCommentsInPlace(name, false)
    };
    Emitter.prototype.emitJavascriptStatements = function(stmts, emitEmptyBod, newlineAfterBlock) {
      if(stmts) {
        if(stmts.nodeType != TypeScript.NodeType.Block) {
          var hasContents = stmts && (stmts.nodeType != TypeScript.NodeType.List || stmts.members.length > 0);
          if(emitEmptyBod || hasContents) {
            var hasOnlyBlockStatement = stmts.nodeType == TypeScript.NodeType.Block || stmts.nodeType == TypeScript.NodeType.List && stmts.members.length == 1 && stmts.members[0].nodeType == TypeScript.NodeType.Block;
            this.recordSourceMappingStart(stmts);
            if(!hasOnlyBlockStatement) {
              this.writeLineToOutput(" {");
              this.increaseIndent()
            }
            this.emitJavascriptList(stmts, null, TypeScript.TokenID.SColon, true, false, false);
            if(!hasOnlyBlockStatement) {
              this.writeLineToOutput("");
              this.decreaseIndent();
              this.emitIndent();
              this.writeToOutput("}")
            }
            this.recordSourceMappingEnd(stmts)
          }
        }else {
          this.emitJavascript(stmts, TypeScript.TokenID.SColon, true)
        }
      }else {
        if(emitEmptyBod) {
          this.writeToOutput("{ }")
        }
      }
    };
    Emitter.prototype.emitBareJavascriptStatements = function(stmts, emitClassPropertiesAfterSuperCall) {
      if(stmts.nodeType != TypeScript.NodeType.Block) {
        if(stmts.nodeType == TypeScript.NodeType.List) {
          var stmtList = stmts;
          if(stmtList.members.length == 2 && stmtList.members[0].nodeType == TypeScript.NodeType.Block && stmtList.members[1].nodeType == TypeScript.NodeType.EndCode) {
            this.emitJavascript(stmtList.members[0], TypeScript.TokenID.SColon, true);
            this.writeLineToOutput("")
          }else {
            this.emitJavascriptList(stmts, null, TypeScript.TokenID.SColon, true, false, emitClassPropertiesAfterSuperCall)
          }
        }else {
          this.emitJavascript(stmts, TypeScript.TokenID.SColon, true)
        }
      }else {
        this.emitJavascript(stmts, TypeScript.TokenID.SColon, true)
      }
    };
    Emitter.prototype.recordSourceMappingStart = function(ast) {
      if(this.sourceMapper && ast) {
        var lineCol = {line:-1, col:-1};
        var sourceMapping = new TypeScript.SourceMapping(ast);
        sourceMapping.emittedStartColumn = this.emitState.column;
        sourceMapping.emittedStartLine = this.emitState.line;
        TypeScript.getSourceLineColFromMap(lineCol, ast.minChar, this.checker.locationInfo.lineMap);
        sourceMapping.sourceStartColumn = lineCol.col;
        sourceMapping.sourceStartLine = lineCol.line;
        TypeScript.getSourceLineColFromMap(lineCol, ast.limChar, this.checker.locationInfo.lineMap);
        sourceMapping.sourceEndColumn = lineCol.col;
        sourceMapping.sourceEndLine = lineCol.line;
        sourceMapping.parent = this.sourceMapper.currentMapping;
        this.sourceMapper.currentMapping = this.sourceMapper.sourceMappings.length;
        this.sourceMapper.sourceMappings.push(sourceMapping);
        if(sourceMapping.parent >= 0) {
          var parentMapping = this.sourceMapper.sourceMappings[sourceMapping.parent];
          if(parentMapping.firstChild == -1) {
            parentMapping.firstChild = this.sourceMapper.currentMapping
          }
        }
      }
    };
    Emitter.prototype.recordSourceMappingEnd = function(ast) {
      if(this.sourceMapper && ast) {
        var currentMappingIndex = this.sourceMapper.currentMapping;
        var sourceMapping = this.sourceMapper.sourceMappings[currentMappingIndex];
        sourceMapping.emittedEndColumn = this.emitState.column;
        sourceMapping.emittedEndLine = this.emitState.line;
        this.sourceMapper.currentMapping = sourceMapping.parent
      }
    };
    Emitter.prototype.emitSourceMappings = function() {
      TypeScript.SourceMapper.EmitSourceMapping(this.allSourceMappers)
    };
    Emitter.prototype.emitJavascriptList = function(ast, delimiter, tokenId, startLine, onlyStatics, emitClassPropertiesAfterSuperCall, writeDeclFile) {
      if(ast == null) {
        return
      }else {
        if(ast.nodeType != TypeScript.NodeType.List) {
          this.emitJavascript(ast, tokenId, startLine, writeDeclFile)
        }else {
          var list = ast;
          if(list.members.length == 0) {
            return
          }
          this.emitParensAndCommentsInPlace(ast, true);
          var len = list.members.length;
          for(var i = 0;i < len;i++) {
            if(i == 1 && emitClassPropertiesAfterSuperCall) {
              var constructorDecl = this.thisClassNode.constructorDecl;
              if(constructorDecl && constructorDecl.args) {
                var argsLen = constructorDecl.args.members.length;
                for(var iArg = 0;iArg < argsLen;iArg++) {
                  var arg = constructorDecl.args.members[iArg];
                  if((arg.varFlags & TypeScript.VarFlags.Property) != TypeScript.VarFlags.None) {
                    this.emitIndent();
                    this.recordSourceMappingStart(arg);
                    this.recordSourceMappingStart(arg.id);
                    this.writeToOutput("this." + arg.id.text);
                    this.recordSourceMappingEnd(arg.id);
                    this.writeToOutput(" = ");
                    this.recordSourceMappingStart(arg.id);
                    this.writeToOutput(arg.id.text);
                    this.recordSourceMappingEnd(arg.id);
                    this.writeLineToOutput(";");
                    this.recordSourceMappingEnd(arg)
                  }
                }
              }
              var nProps = this.thisClassNode.members.members.length;
              for(var iMember = 0;iMember < nProps;iMember++) {
                if(this.thisClassNode.members.members[iMember].nodeType == TypeScript.NodeType.VarDecl) {
                  var varDecl = this.thisClassNode.members.members[iMember];
                  if(!TypeScript.hasFlag(varDecl.varFlags, TypeScript.VarFlags.Static) && varDecl.init) {
                    this.emitIndent();
                    this.emitJavascriptVarDecl(varDecl, TypeScript.TokenID.Tilde);
                    this.writeLineToOutput("")
                  }
                }
              }
            }
            var emitNode = list.members[i];
            var isStaticDecl = emitNode.nodeType == TypeScript.NodeType.FuncDecl && TypeScript.hasFlag(emitNode.fncFlags, TypeScript.FncFlags.Static) || emitNode.nodeType == TypeScript.NodeType.VarDecl && TypeScript.hasFlag(emitNode.varFlags, TypeScript.VarFlags.Static);
            if(onlyStatics ? !isStaticDecl : isStaticDecl) {
              continue
            }
            this.emitJavascript(emitNode, tokenId, startLine, writeDeclFile);
            if(delimiter && i < len - 1) {
              if(startLine) {
                this.writeLineToOutput(delimiter)
              }else {
                this.writeToOutput(delimiter)
              }
            }else {
              if(startLine && emitNode.nodeType != TypeScript.NodeType.Interface && !(emitNode.nodeType == TypeScript.NodeType.VarDecl && (emitNode.varFlags & TypeScript.VarFlags.Ambient) == TypeScript.VarFlags.Ambient && emitNode.init == null) && emitNode.nodeType != TypeScript.NodeType.EndCode && emitNode.nodeType != TypeScript.NodeType.FuncDecl) {
                this.writeLineToOutput("")
              }
            }
          }
          this.emitParensAndCommentsInPlace(ast, false)
        }
      }
    };
    Emitter.prototype.emitJavascript = function(ast, tokenId, startLine, writeDeclFile) {
      if(typeof writeDeclFile === "undefined") {
        writeDeclFile = false
      }
      if(ast == null) {
        return
      }
      var parenthesize = false;
      if(startLine && this.emitState.indentAmt > 0 && ast.nodeType != TypeScript.NodeType.List && ast.nodeType != TypeScript.NodeType.Block) {
        if(ast.nodeType != TypeScript.NodeType.Interface && !(ast.nodeType == TypeScript.NodeType.VarDecl && (ast.varFlags & TypeScript.VarFlags.Ambient) == TypeScript.VarFlags.Ambient && ast.init == null) && ast.nodeType != TypeScript.NodeType.EndCode && (ast.nodeType != TypeScript.NodeType.FuncDecl || this.emitState.container != EmitContainer.Constructor)) {
          this.emitIndent()
        }
      }
      if(parenthesize) {
        this.writeToOutput("(")
      }
      ast.emit(this, tokenId, startLine, writeDeclFile);
      if(parenthesize) {
        this.writeToOutput(")")
      }
      if(tokenId == TypeScript.TokenID.SColon && ast.nodeType < TypeScript.NodeType.GeneralNode) {
        this.writeToOutput(";")
      }
    };
    Emitter.prototype.emitPropertyAccessor = function(funcDecl, className, isProto, writeDeclFile) {
      if(!funcDecl.accessorSymbol.hasBeenEmitted) {
        var accessorSymbol = funcDecl.accessorSymbol;
        this.emitIndent();
        this.recordSourceMappingStart(funcDecl);
        this.writeLineToOutput("Object.defineProperty(" + className + (isProto ? '.prototype, "' : ', "') + funcDecl.name.text + '"' + ", {");
        this.increaseIndent();
        if(accessorSymbol.getter) {
          var getter = accessorSymbol.getter.declAST;
          this.emitIndent();
          this.writeToOutput("get: ");
          this.emitInnerFunction(getter, false, isProto, null, funcDecl.hasSelfReference(), null);
          this.writeLineToOutput(",")
        }
        if(accessorSymbol.setter) {
          var setter = accessorSymbol.setter.declAST;
          this.emitIndent();
          this.writeToOutput("set: ");
          this.emitInnerFunction(setter, false, isProto, null, funcDecl.hasSelfReference(), null);
          this.writeLineToOutput(",")
        }
        this.emitIndent();
        this.writeLineToOutput("enumerable: true,");
        this.emitIndent();
        this.writeLineToOutput("configurable: true");
        this.decreaseIndent();
        this.emitIndent();
        this.writeLineToOutput("});");
        this.recordSourceMappingEnd(funcDecl);
        if(writeDeclFile) {
          this.emitPropertyAccessorSignature(funcDecl)
        }
        accessorSymbol.hasBeenEmitted = true
      }
    };
    Emitter.prototype.emitPrototypeMember = function(member, className, writeDeclFile) {
      if(member.nodeType == TypeScript.NodeType.FuncDecl) {
        var funcDecl = member;
        if(funcDecl.isAccessor()) {
          this.emitPropertyAccessor(funcDecl, className, true, writeDeclFile)
        }else {
          this.emitIndent();
          this.recordSourceMappingStart(funcDecl);
          this.writeToOutput(className + ".prototype." + funcDecl.getNameText() + " = ");
          this.emitInnerFunction(funcDecl, false, true, null, funcDecl.hasSelfReference(), null, writeDeclFile);
          this.recordSourceMappingEnd(funcDecl);
          this.writeLineToOutput(";")
        }
      }else {
        if(member.nodeType == TypeScript.NodeType.VarDecl) {
          var varDecl = member;
          if(varDecl.init) {
            this.emitIndent();
            this.recordSourceMappingStart(varDecl);
            this.recordSourceMappingStart(varDecl.id);
            this.writeToOutput(className + ".prototype." + varDecl.id.text);
            this.recordSourceMappingEnd(varDecl.id);
            this.writeToOutput(" = ");
            this.emitJavascript(varDecl.init, TypeScript.TokenID.Asg, false);
            this.recordSourceMappingEnd(varDecl);
            this.writeLineToOutput(";")
          }
          if(writeDeclFile) {
            this.emitVarSignature(varDecl)
          }
        }
      }
    };
    Emitter.prototype.emitAddBaseMethods = function(className, base, classDecl) {
      if(base.members) {
        var baseSymbol = base.symbol;
        var baseName = baseSymbol.name;
        if(baseSymbol.declModule != classDecl.type.symbol.declModule) {
          baseName = baseSymbol.fullName()
        }
        base.members.allMembers.map(function(key, s, c) {
          var sym = s;
          if(sym.kind() == TypeScript.SymbolKind.Type && sym.type.call) {
            this.recordSourceMappingStart(sym.declAST);
            this.writeLineToOutput(className + ".prototype." + sym.name + " = " + baseName + ".prototype." + sym.name + ";");
            this.recordSourceMappingEnd(sym.declAST)
          }
        }, null)
      }
      if(base.extendsList) {
        for(var i = 0, len = base.extendsList.length;i < len;i++) {
          this.emitAddBaseMethods(className, base.extendsList[i], classDecl)
        }
      }
    };
    Emitter.prototype.emitJavascriptClass = function(classDecl, writeDeclFile) {
      if(!TypeScript.hasFlag(classDecl.varFlags, TypeScript.VarFlags.Ambient)) {
        var svClassNode = this.thisClassNode;
        var i = 0;
        this.thisClassNode = classDecl;
        var className = classDecl.name.text;
        this.emitParensAndCommentsInPlace(classDecl, true);
        var oldDeclContainingAST = null;
        if(writeDeclFile) {
          writeDeclFile = this.emitClassSignatureIdentifierAndHeritage(classDecl);
          if(writeDeclFile) {
            oldDeclContainingAST = this.setDeclContainingAST(classDecl)
          }
        }
        var temp = this.setContainer(EmitContainer.Class);
        this.recordSourceMappingStart(classDecl);
        if(TypeScript.hasFlag(classDecl.varFlags, TypeScript.VarFlags.Exported) && classDecl.type.symbol.container == this.checker.gloMod) {
          this.writeToOutput("this." + className)
        }else {
          this.writeToOutput("var " + className)
        }
        var _class = classDecl.type;
        var instanceType = _class.instanceType;
        var baseClass = instanceType ? instanceType.baseClass() : null;
        var baseNameDecl = null;
        var baseName = null;
        if(baseClass) {
          this.writeLineToOutput(" = (function (_super) {")
        }else {
          this.writeLineToOutput(" = (function () {")
        }
        this.increaseIndent();
        if(baseClass) {
          baseNameDecl = classDecl.extendsList.members[0];
          baseName = baseNameDecl.nodeType == TypeScript.NodeType.Call ? baseNameDecl.target : baseNameDecl;
          this.emitIndent();
          this.writeLineToOutput("__extends(" + className + ", _super);");
          var elen = instanceType.extendsList.length;
          if(elen > 1) {
            for(var i = 1;i < elen;i++) {
              var base = instanceType.extendsList[i];
              this.emitAddBaseMethods(className, base, classDecl)
            }
          }
        }
        this.emitIndent();
        var constrDecl = classDecl.constructorDecl;
        if(constrDecl) {
          this.emitJavascript(classDecl.constructorDecl, TypeScript.TokenID.LParen, false, false);
          if(writeDeclFile) {
            this.emitMembersFromConstructorDefinition(classDecl.constructorDecl)
          }
        }else {
          var wroteProps = 0;
          this.recordSourceMappingStart(classDecl);
          this.increaseIndent();
          this.writeToOutput("function " + classDecl.name.text + "() {");
          if(baseClass) {
            this.writeLineToOutput("");
            this.emitIndent();
            this.writeLineToOutput("_super.apply(this, arguments);");
            wroteProps++
          }
          var members = this.thisClassNode.members.members;
          for(var i = 0;i < members.length;i++) {
            if(members[i].nodeType == TypeScript.NodeType.VarDecl) {
              var varDecl = members[i];
              if(!TypeScript.hasFlag(varDecl.varFlags, TypeScript.VarFlags.Static) && varDecl.init) {
                this.writeLineToOutput("");
                this.emitIndent();
                this.emitJavascriptVarDecl(varDecl, TypeScript.TokenID.Tilde);
                wroteProps++
              }
            }
          }
          if(wroteProps) {
            this.writeLineToOutput("");
            this.decreaseIndent();
            this.emitIndent();
            this.writeLineToOutput("}")
          }else {
            this.writeLineToOutput(" }");
            this.decreaseIndent()
          }
          this.recordSourceMappingEnd(classDecl)
        }
        var membersLen = classDecl.definitionMembers.members.length;
        for(var j = 0;j < membersLen;j++) {
          var memberDecl = classDecl.definitionMembers.members[j];
          if(memberDecl.nodeType == TypeScript.NodeType.FuncDecl) {
            var fn = memberDecl;
            if(TypeScript.hasFlag(fn.fncFlags, TypeScript.FncFlags.Method) && !fn.isSignature()) {
              if(!TypeScript.hasFlag(fn.fncFlags, TypeScript.FncFlags.Static)) {
                this.emitPrototypeMember(fn, className, writeDeclFile)
              }else {
                if(fn.isAccessor()) {
                  this.emitPropertyAccessor(fn, this.thisClassNode.name.text, false, writeDeclFile)
                }else {
                  this.emitIndent();
                  this.recordSourceMappingStart(fn);
                  this.writeToOutput(classDecl.name.text + "." + fn.name.text + " = ");
                  this.emitInnerFunction(fn, fn.name && !fn.name.isMissing(), false, null, fn.hasSelfReference(), null, writeDeclFile);
                  this.recordSourceMappingEnd(fn)
                }
              }
            }else {
              if(writeDeclFile) {
                this.emitFuncSignature(fn)
              }
            }
          }else {
            if(memberDecl.nodeType == TypeScript.NodeType.VarDecl) {
              var varDecl = memberDecl;
              if(TypeScript.hasFlag(varDecl.varFlags, TypeScript.VarFlags.Static)) {
                this.emitIndent();
                this.recordSourceMappingStart(varDecl);
                this.writeToOutput(classDecl.name.text + "." + varDecl.id.text + " = ");
                if(varDecl.init) {
                  this.emitJavascript(varDecl.init, TypeScript.TokenID.Asg, false);
                  this.writeLineToOutput(";")
                }else {
                  this.writeLineToOutput(this.defaultValue(varDecl.type) + ";")
                }
                if(writeDeclFile) {
                  this.emitVarSignature(varDecl)
                }
                this.recordSourceMappingEnd(varDecl)
              }else {
                if(writeDeclFile) {
                  this.emitVarSignature(varDecl)
                }
              }
            }else {
              throw Error("We want to catch this");
            }
          }
        }
        this.emitIndent();
        this.recordSourceMappingStart(classDecl);
        this.writeLineToOutput("return " + className + ";");
        this.recordSourceMappingEnd(classDecl);
        this.decreaseIndent();
        this.emitIndent();
        this.writeToOutput("})(");
        if(baseClass) {
          this.emitJavascript(baseName, TypeScript.TokenID.Tilde, false)
        }
        this.writeToOutput(");");
        if(writeDeclFile) {
          this.setDeclContainingAST(oldDeclContainingAST);
          this.emitIndentToDeclFile();
          this.declFile.WriteLine("}")
        }
        if((temp == EmitContainer.Module || temp == EmitContainer.DynamicModule) && TypeScript.hasFlag(classDecl.varFlags, TypeScript.VarFlags.Exported)) {
          this.writeLineToOutput("");
          this.emitIndent();
          var modName = temp == EmitContainer.Module ? this.moduleName : "exports";
          this.recordSourceMappingStart(classDecl);
          this.writeToOutput(modName + "." + className + " = " + className + ";");
          this.recordSourceMappingEnd(classDecl)
        }
        this.emitIndent();
        this.recordSourceMappingEnd(classDecl);
        this.emitParensAndCommentsInPlace(classDecl, false);
        this.setContainer(temp);
        this.thisClassNode = svClassNode
      }else {
        if(writeDeclFile) {
          this.emitClassSignature(classDecl)
        }
      }
    };
    Emitter.prototype.emitPrologue = function(reqInherits) {
      if(!this.prologueEmitted) {
        if(reqInherits) {
          this.prologueEmitted = true;
          this.writeLineToOutput("var __extends = this.__extends || function (d, b) {");
          this.writeLineToOutput("    function __() { this.constructor = d; }");
          this.writeLineToOutput("    __.prototype = b.prototype;");
          this.writeLineToOutput("    d.prototype = new __();");
          this.writeLineToOutput("}")
        }
      }
    };
    Emitter.prototype.emitSuperReference = function() {
      this.writeToOutput("_super.prototype")
    };
    Emitter.prototype.emitSuperCall = function(callEx) {
      if(callEx.target.nodeType == TypeScript.NodeType.Dot) {
        var dotNode = callEx.target;
        if(dotNode.operand1.nodeType == TypeScript.NodeType.Super) {
          this.emitJavascript(dotNode, TypeScript.TokenID.LParen, false);
          this.writeToOutput(".call(this");
          if(callEx.args && callEx.args.members.length > 0) {
            this.writeToOutput(", ");
            this.emitJavascriptList(callEx.args, ", ", TypeScript.TokenID.Comma, false, false, false)
          }
          this.writeToOutput(")");
          return true
        }
      }
      return false
    };
    return Emitter
  }();
  TypeScript.Emitter = Emitter
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  var ErrorReporter = function() {
    function ErrorReporter(outfile) {
      this.outfile = outfile;
      this.parser = null;
      this.checker = null;
      this.lineCol = {line:0, col:0};
      this.emitAsComments = true;
      this.hasErrors = false;
      this.pushToErrorSink = false;
      this.errorSink = []
    }
    ErrorReporter.prototype.getCapturedErrors = function() {
      return this.errorSink
    };
    ErrorReporter.prototype.freeCapturedErrors = function() {
      this.errorSink = []
    };
    ErrorReporter.prototype.captureError = function(emsg) {
      this.errorSink[this.errorSink.length] = emsg
    };
    ErrorReporter.prototype.setErrOut = function(outerr) {
      this.outfile = outerr;
      this.emitAsComments = false
    };
    ErrorReporter.prototype.emitPrefix = function() {
      if(this.emitAsComments) {
        this.outfile.Write("// ")
      }
      this.outfile.Write(this.checker.locationInfo.filename + "(" + this.lineCol.line + "," + this.lineCol.col + "): ")
    };
    ErrorReporter.prototype.writePrefix = function(ast) {
      if(ast) {
        this.setError(ast)
      }else {
        this.lineCol.line = -1;
        this.lineCol.col = -1
      }
      this.emitPrefix()
    };
    ErrorReporter.prototype.writePrefixFromSym = function(symbol) {
      if(symbol && this.checker.locationInfo.lineMap) {
        TypeScript.getSourceLineColFromMap(this.lineCol, symbol.location, this.checker.locationInfo.lineMap)
      }else {
        this.lineCol.line = -1;
        this.lineCol.col = -1
      }
      this.emitPrefix()
    };
    ErrorReporter.prototype.setError = function(ast) {
      if(ast) {
        ast.flags |= TypeScript.ASTFlags.Error;
        if(this.checker.locationInfo.lineMap) {
          TypeScript.getSourceLineColFromMap(this.lineCol, ast.minChar, this.checker.locationInfo.lineMap)
        }
      }
    };
    ErrorReporter.prototype.reportError = function(ast, message) {
      if(this.pushToErrorSink) {
        this.captureError(message);
        return
      }
      this.hasErrors = true;
      var len = ast.limChar - ast.minChar;
      if(this.parser.errorRecovery && this.parser.errorCallback) {
        this.parser.errorCallback(ast.minChar, len, message, this.checker.locationInfo.unitIndex)
      }else {
        this.writePrefix(ast);
        this.outfile.WriteLine(message)
      }
    };
    ErrorReporter.prototype.reportErrorFromSym = function(symbol, message) {
      if(this.pushToErrorSink) {
        this.captureError(message);
        return
      }
      this.hasErrors = true;
      if(this.parser.errorRecovery && this.parser.errorCallback) {
        this.parser.errorCallback(symbol.location, 1, message, this.checker.locationInfo.unitIndex)
      }else {
        this.writePrefixFromSym(symbol);
        this.outfile.WriteLine(message)
      }
    };
    ErrorReporter.prototype.emitterError = function(ast, message) {
      this.reportError(ast, message);
      throw Error("EmitError");
    };
    ErrorReporter.prototype.duplicateIdentifier = function(ast, name) {
      this.reportError(ast, "Duplicate identifier '" + name + "'")
    };
    ErrorReporter.prototype.showRef = function(ast, text, symbol) {
      var defLineCol = {line:-1, col:-1};
      this.parser.getSourceLineCol(defLineCol, symbol.location);
      this.reportError(ast, "symbol " + text + " defined at (" + defLineCol.line + "," + defLineCol.col + ")")
    };
    ErrorReporter.prototype.unresolvedSymbol = function(ast, name) {
      this.reportError(ast, "The name '" + name + "' does not exist in the current scope")
    };
    ErrorReporter.prototype.symbolDoesNotReferToAValue = function(ast, name) {
      this.reportError(ast, "The name '" + name + "' does not refer to a value")
    };
    ErrorReporter.prototype.styleError = function(ast, msg) {
      var bkThrow = this.pushToErrorSink;
      this.pushToErrorSink = false;
      this.reportError(ast, "STYLE: " + msg);
      this.pushToErrorSink = bkThrow
    };
    ErrorReporter.prototype.simpleError = function(ast, msg) {
      this.reportError(ast, msg)
    };
    ErrorReporter.prototype.simpleErrorFromSym = function(sym, msg) {
      this.reportErrorFromSym(sym, msg)
    };
    ErrorReporter.prototype.invalidSuperReference = function(ast) {
      this.simpleError(ast, "Keyword 'super' can only be used inside a class instance method")
    };
    ErrorReporter.prototype.valueCannotBeModified = function(ast) {
      this.simpleError(ast, "The left-hand side of an assignment expression must be a variable, property or indexer")
    };
    ErrorReporter.prototype.invalidCall = function(ast, nodeType, scope) {
      var targetType = ast.target.type;
      var typeName = targetType.getScopedTypeName(scope);
      if(targetType.construct && nodeType == TypeScript.NodeType.Call) {
        this.reportError(ast, "Value of type '" + typeName + "' is not callable.  Did you mean to include 'new'?")
      }else {
        var catString = nodeType == TypeScript.NodeType.Call ? "callable" : "newable";
        this.reportError(ast, "Value of type '" + typeName + "' is not " + catString)
      }
    };
    ErrorReporter.prototype.indexLHS = function(ast, scope) {
      var targetType = ast.operand1.type.getScopedTypeName(scope);
      var indexType = ast.operand2.type.getScopedTypeName(scope);
      this.simpleError(ast, "Value of type '" + targetType + "' is not indexable by type '" + indexType + "'")
    };
    ErrorReporter.prototype.incompatibleTypes = function(ast, t1, t2, op, scope, comparisonInfo) {
      if(!t1) {
        t1 = this.checker.anyType
      }
      if(!t2) {
        t2 = this.checker.anyType
      }
      var reason = comparisonInfo ? comparisonInfo.message : "";
      if(op) {
        this.reportError(ast, "Operator '" + op + "' cannot be applied to types '" + t1.getScopedTypeName(scope) + "' and '" + t2.getScopedTypeName(scope) + "'" + (reason ? ": " + reason : ""))
      }else {
        this.reportError(ast, "Cannot convert '" + t1.getScopedTypeName(scope) + "' to '" + t2.getScopedTypeName(scope) + "'" + (reason ? ": " + reason : ""))
      }
    };
    ErrorReporter.prototype.expectedClassOrInterface = function(ast) {
      this.simpleError(ast, "Expected var, class, interface, or module")
    };
    ErrorReporter.prototype.unaryOperatorTypeError = function(ast, op, type) {
      this.reportError(ast, "Operator '" + op + "' cannot be applied to type '" + type.getTypeName() + "'")
    };
    return ErrorReporter
  }();
  TypeScript.ErrorReporter = ErrorReporter
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  (function(TypeContext) {
    TypeContext._map = [];
    TypeContext.NoTypes = 0;
    TypeContext.ArraySuffix = 1;
    TypeContext.Primitive = 2;
    TypeContext.Named = 4;
    TypeContext.AllSimpleTypes = TypeContext.Primitive | TypeContext.Named;
    TypeContext.AllTypes = TypeContext.Primitive | TypeContext.Named | TypeContext.ArraySuffix
  })(TypeScript.TypeContext || (TypeScript.TypeContext = {}));
  var TypeContext = TypeScript.TypeContext;
  (function(ParseState) {
    ParseState._map = [];
    ParseState._map[0] = "None";
    ParseState.None = 0;
    ParseState._map[1] = "StartScript";
    ParseState.StartScript = 1;
    ParseState._map[2] = "StartStmtList";
    ParseState.StartStmtList = 2;
    ParseState._map[3] = "StartStatement";
    ParseState.StartStatement = 3;
    ParseState._map[4] = "StartFncDecl";
    ParseState.StartFncDecl = 4;
    ParseState._map[5] = "FncDeclName";
    ParseState.FncDeclName = 5;
    ParseState._map[6] = "FncDeclArgs";
    ParseState.FncDeclArgs = 6;
    ParseState._map[7] = "FncDeclReturnType";
    ParseState.FncDeclReturnType = 7;
    ParseState._map[8] = "ForInit";
    ParseState.ForInit = 8;
    ParseState._map[9] = "ForInitAfterVar";
    ParseState.ForInitAfterVar = 9;
    ParseState._map[10] = "ForCondStart";
    ParseState.ForCondStart = 10;
    ParseState._map[11] = "EndStmtList";
    ParseState.EndStmtList = 11;
    ParseState._map[12] = "EndScript";
    ParseState.EndScript = 12
  })(TypeScript.ParseState || (TypeScript.ParseState = {}));
  var ParseState = TypeScript.ParseState;
  var QuickParseResult = function() {
    function QuickParseResult(Script, endLexState) {
      this.Script = Script;
      this.endLexState = endLexState
    }
    return QuickParseResult
  }();
  TypeScript.QuickParseResult = QuickParseResult;
  var Parser = function() {
    function Parser() {
      this.varLists = [];
      this.scopeLists = [];
      this.staticsLists = [];
      this.scanner = new TypeScript.Scanner;
      this.tok = null;
      this.needTerminator = false;
      this.inFnc = false;
      this.inStaticFnc = false;
      this.inInterfaceDecl = false;
      this.currentClassDecl = null;
      this.inFncDecl = false;
      this.anonId = new TypeScript.Identifier("_anonymous");
      this.style_requireSemi = false;
      this.style_funcInLoop = true;
      this.incremental = false;
      this.errorRecovery = false;
      this.outfile = undefined;
      this.errorCallback = null;
      this.state = ParseState.StartStmtList;
      this.cursorLine = -1;
      this.cursorColumn = -1;
      this.cursorState = ParseState.None;
      this.errorMessage = "";
      this.ambientModule = false;
      this.ambientClass = false;
      this.topLevel = true;
      this.currentUnitIndex = -1;
      this.prevIDTok = null;
      this.stmtStack = new Array;
      this.hasTopLevelImportOrExport = false;
      this.strictMode = false;
      this.nestingLevel = 0;
      this.prevExpr = null;
      this.currentClassDefinition = null;
      this.parsingClassConstructorDefinition = false;
      this.parsingDeclareFile = false;
      this.amdDependencies = [];
      this.inferPropertiesFromThisAssignment = false;
      this.fname = "";
      this.parseError = false
    }
    Parser.prototype.resetStmtStack = function() {
      this.stmtStack = new Array
    };
    Parser.prototype.inLoop = function() {
      for(var j = this.stmtStack.length - 1;j >= 0;j--) {
        if(this.stmtStack[j].stmt.isLoop()) {
          return true
        }
      }
      return false
    };
    Parser.prototype.pushStmt = function(stmt, labels) {
      var info = {stmt:stmt, labels:labels};
      this.stmtStack.push(info)
    };
    Parser.prototype.popStmt = function() {
      return this.stmtStack.pop()
    };
    Parser.prototype.resolveJumpTarget = function(jump) {
      var len = this.stmtStack.length;
      for(var i = len - 1;i >= 0;i--) {
        var info = this.stmtStack[i];
        if(jump.target) {
          if(info.labels && info.labels.members.length > 0) {
            for(var j = 0, labLen = info.labels.members.length;j < labLen;j++) {
              var label = info.labels.members[j];
              if(label.id.text == jump.target) {
                jump.setResolvedTarget(this, info.stmt);
                return
              }
            }
          }
        }else {
          if(info.stmt.isLoop()) {
            jump.setResolvedTarget(this, info.stmt);
            return
          }else {
            if(info.stmt.nodeType == TypeScript.NodeType.Switch && jump.nodeType == TypeScript.NodeType.Break) {
              jump.setResolvedTarget(this, info.stmt);
              return
            }
          }
        }
      }
      if(jump.target) {
        this.reportParseError("could not find enclosing statement with label " + jump.target)
      }else {
        if(jump.nodeType == TypeScript.NodeType.Break) {
          this.reportParseError("break statement requires enclosing loop or switch")
        }else {
          this.reportParseError("continue statement requires enclosing loop")
        }
      }
    };
    Parser.prototype.setNonInteractive = function() {
      this.errorRecovery = false
    };
    Parser.prototype.setErrorRecovery = function(outf, l, c) {
      this.outfile = outf;
      this.cursorLine = l;
      this.cursorColumn = c;
      this.cursorState = ParseState.None;
      this.errorRecovery = true
    };
    Parser.prototype.posMatchesCursor = function(pos) {
      var lineCol = {line:-1, col:-1};
      this.getSourceLineCol(lineCol, pos);
      return lineCol.line == this.cursorLine && lineCol.col == this.cursorColumn
    };
    Parser.prototype.getSourceLineCol = function(lineCol, minChar) {
      TypeScript.getSourceLineColFromMap(lineCol, minChar, this.scanner.lineMap)
    };
    Parser.prototype.createRef = function(text, minChar) {
      var id = new TypeScript.Identifier(text);
      id.minChar = minChar;
      return id
    };
    Parser.prototype.reportParseStyleError = function(message) {
      this.reportParseError("STYLE: " + message)
    };
    Parser.prototype.reportParseError = function(message, startPos, pos) {
      if(typeof startPos === "undefined") {
        startPos = this.scanner.startPos
      }
      if(typeof pos === "undefined") {
        pos = this.scanner.pos
      }
      var len = Math.max(1, pos - startPos);
      if(this.errorCallback) {
        this.errorCallback(startPos, len, message, this.currentUnitIndex)
      }else {
        if(this.errorRecovery) {
          var lineCol = {line:-1, col:-1};
          this.getSourceLineCol(lineCol, startPos);
          if(this.outfile) {
            this.outfile.WriteLine("// " + this.fname + " (" + lineCol.line + "," + lineCol.col + "): " + message)
          }
        }else {
          throw new SyntaxError(this.fname + " (" + this.scanner.line + "," + this.scanner.col + "): " + message);
        }
      }
    };
    Parser.prototype.chkNxtTok = function(tokenId, errorText, errorRecoverySet) {
      this.tok = this.scanner.scan();
      this.chkCurTok(tokenId, errorText, errorRecoverySet)
    };
    Parser.prototype.skip = function(errorRecoverySet) {
      errorRecoverySet |= TypeScript.ErrorRecoverySet.EOF;
      var ersTok = TypeScript.ErrorRecoverySet.None;
      var tokenInfo = TypeScript.lookupToken(this.tok.tokenId);
      if(tokenInfo != undefined) {
        ersTok = tokenInfo.ers
      }
      var pendingRightCurlies = 0;
      while((ersTok & errorRecoverySet) == TypeScript.ErrorRecoverySet.None || this.tok.tokenId == TypeScript.TokenID.RCurly && pendingRightCurlies > 0) {
        if(this.tok.tokenId == TypeScript.TokenID.LCurly) {
          pendingRightCurlies++
        }else {
          if(this.tok.tokenId == TypeScript.TokenID.RCurly) {
            pendingRightCurlies--
          }
        }
        this.tok = this.scanner.scan();
        ersTok = TypeScript.ErrorRecoverySet.None;
        tokenInfo = TypeScript.lookupToken(this.tok.tokenId);
        if(tokenInfo != undefined) {
          ersTok = tokenInfo.ers
        }
      }
    };
    Parser.prototype.chkCurTok = function(tokenId, errorText, errorRecoverySet) {
      if(this.tok.tokenId != tokenId) {
        this.reportParseError(errorText);
        if(this.errorRecovery) {
          this.skip(errorRecoverySet)
        }
      }else {
        this.tok = this.scanner.scan()
      }
    };
    Parser.prototype.pushDeclLists = function() {
      this.staticsLists.push(new TypeScript.ASTList);
      this.varLists.push(new TypeScript.ASTList);
      this.scopeLists.push(new TypeScript.ASTList)
    };
    Parser.prototype.popDeclLists = function() {
      this.staticsLists.pop();
      this.varLists.pop();
      this.scopeLists.pop()
    };
    Parser.prototype.topVarList = function() {
      return this.varLists[this.varLists.length - 1]
    };
    Parser.prototype.topScopeList = function() {
      return this.scopeLists[this.scopeLists.length - 1]
    };
    Parser.prototype.topStaticsList = function() {
      return this.staticsLists[this.staticsLists.length - 1]
    };
    Parser.prototype.parseComment = function(comment) {
      if(comment) {
        var c = new TypeScript.Comment(comment.value, comment.isBlock, comment.endsLine);
        c.minChar = comment.startPos;
        c.limChar = comment.startPos + comment.value.length;
        if(!comment.isBlock && comment.value.length > 3 && comment.value.substring(0, 3) == "///") {
          var dependencyPath = TypeScript.getAdditionalDependencyPath(comment.value);
          if(dependencyPath) {
            this.amdDependencies.push(dependencyPath)
          }
        }
        return c
      }else {
        return null
      }
    };
    Parser.prototype.parseCommentsInner = function(comments) {
      if(comments) {
        var commentASTs = new Array;
        for(var i = 0;i < comments.length;i++) {
          commentASTs.push(this.parseComment(comments[i]))
        }
        return commentASTs
      }else {
        return null
      }
    };
    Parser.prototype.parseComments = function() {
      var comments = this.scanner.getComments();
      return this.parseCommentsInner(comments)
    };
    Parser.prototype.parseCommentsForLine = function(line) {
      var comments = this.scanner.getCommentsForLine(line);
      return this.parseCommentsInner(comments)
    };
    Parser.prototype.combineComments = function(comment1, comment2) {
      if(comment1 == null) {
        return comment2
      }else {
        if(comment2 == null) {
          return comment1
        }else {
          return comment1.concat(comment2)
        }
      }
    };
    Parser.prototype.parseEnumDecl = function(errorRecoverySet, modifiers) {
      var leftCurlyCount = this.scanner.leftCurlyCount;
      var rightCurlyCount = this.scanner.rightCurlyCount;
      var name = null;
      if(this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToID(this.tok, this.strictMode)) {
        name = new TypeScript.Identifier(this.tok.getText());
        name.minChar = this.scanner.startPos;
        name.limChar = this.scanner.pos;
        this.tok = this.scanner.scan()
      }else {
        this.reportParseError("Enum declaration requires identifier");
        if(this.errorRecovery) {
          name = new TypeScript.MissingIdentifier;
          name.minChar = this.scanner.startPos;
          name.limChar = this.scanner.startPos;
          name.flags |= TypeScript.ASTFlags.Error
        }
      }
      var membersMinChar = this.scanner.startPos;
      this.chkCurTok(TypeScript.TokenID.LCurly, "Expected '{'", errorRecoverySet | TypeScript.ErrorRecoverySet.ID);
      this.pushDeclLists();
      var members = new TypeScript.ASTList;
      members.minChar = membersMinChar;
      var mapDecl = new TypeScript.VarDecl(new TypeScript.Identifier("_map"), 0);
      mapDecl.varFlags |= TypeScript.VarFlags.Exported;
      mapDecl.varFlags |= TypeScript.VarFlags.Private;
      mapDecl.varFlags |= TypeScript.VarFlags.Property | TypeScript.VarFlags.Public;
      mapDecl.init = new TypeScript.UnaryExpression(TypeScript.NodeType.ArrayLit, null);
      members.append(mapDecl);
      var lastValue = null;
      for(;;) {
        var minChar = this.scanner.startPos;
        var limChar;
        var memberName = null;
        var memberValue = null;
        var preComments = null;
        var postComments = null;
        if(this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToIDName(this.tok)) {
          memberName = new TypeScript.Identifier(this.tok.getText());
          memberName.minChar = this.scanner.startPos;
          memberName.limChar = this.scanner.pos
        }else {
          if(this.tok.tokenId == TypeScript.TokenID.RCurly) {
            break
          }else {
            this.reportParseError("Expected identifer of enum member");
            if(this.errorRecovery) {
              memberName = new TypeScript.MissingIdentifier;
              memberName.minChar = this.scanner.startPos;
              memberName.limChar = this.scanner.startPos;
              memberName.flags |= TypeScript.ASTFlags.Error
            }
          }
        }
        limChar = this.scanner.pos;
        preComments = this.parseComments();
        this.tok = this.scanner.scan();
        postComments = this.parseComments();
        if(this.tok.tokenId == TypeScript.TokenID.Asg) {
          this.tok = this.scanner.scan();
          memberValue = this.parseExpr(errorRecoverySet, TypeScript.OperatorPrecedence.Cma, true, TypeContext.NoTypes);
          lastValue = memberValue;
          limChar = memberValue.limChar
        }else {
          if(lastValue == null) {
            memberValue = new TypeScript.NumberLiteral(0);
            lastValue = memberValue
          }else {
            memberValue = new TypeScript.NumberLiteral(lastValue.value + 1);
            lastValue = memberValue
          }
          var map = new TypeScript.BinaryExpression(TypeScript.NodeType.Asg, new TypeScript.BinaryExpression(TypeScript.NodeType.Index, new TypeScript.Identifier("_map"), memberValue), new TypeScript.StringLiteral('"' + memberName.text + '"'));
          members.append(map)
        }
        var member = new TypeScript.VarDecl(memberName, this.nestingLevel);
        member.minChar = minChar;
        member.limChar = limChar;
        member.init = memberValue;
        member.typeExpr = new TypeScript.TypeReference(this.createRef(name.text, -1), 0);
        member.varFlags |= TypeScript.VarFlags.Readonly | TypeScript.VarFlags.Property;
        if(memberValue.nodeType == TypeScript.NodeType.NumberLit) {
          member.varFlags |= TypeScript.VarFlags.Constant
        }
        member.preComments = preComments;
        members.append(member);
        member.postComments = postComments;
        member.varFlags |= TypeScript.VarFlags.Exported;
        if(this.tok.tokenId == TypeScript.TokenID.Comma) {
          this.tok = this.scanner.scan();
          member.postComments = this.combineComments(member.postComments, this.parseCommentsForLine(this.scanner.prevLine));
          if(this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToIDName(this.tok)) {
            continue
          }
        }
        break
      }
      this.chkCurTok(TypeScript.TokenID.RCurly, "Expected '}'", errorRecoverySet);
      members.limChar = this.scanner.lastTokenLimChar();
      var modDecl = new TypeScript.ModuleDecl(name, members, this.topVarList(), this.topScopeList());
      modDecl.modFlags |= TypeScript.ModuleFlags.IsEnum;
      this.popDeclLists();
      modDecl.leftCurlyCount = this.scanner.leftCurlyCount - leftCurlyCount;
      modDecl.rightCurlyCount = this.scanner.rightCurlyCount - rightCurlyCount;
      return modDecl
    };
    Parser.prototype.parseDottedName = function(enclosedList) {
      this.tok = this.scanner.scan();
      if(this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToID(this.tok, this.strictMode)) {
        var id = new TypeScript.Identifier(this.tok.getText());
        id.preComments = this.parseComments();
        enclosedList[enclosedList.length] = id;
        id.minChar = this.scanner.startPos;
        id.limChar = this.scanner.pos;
        this.tok = this.scanner.scan();
        if(this.tok.tokenId == TypeScript.TokenID.Dot) {
          this.parseDottedName(enclosedList)
        }
      }else {
        this.reportParseError("need identifier after '.'")
      }
    };
    Parser.prototype.isValidImportPath = function(importPath) {
      importPath = TypeScript.stripQuotes(importPath);
      if(!importPath || importPath.indexOf(":") != -1 || importPath.indexOf("\\") != -1 || importPath.charAt(0) == "/") {
        return false
      }
      return true
    };
    Parser.prototype.parseImportDecl = function(errorRecoverySet, modifiers) {
      var name = null;
      var alias = null;
      var importDecl = null;
      var minChar = this.scanner.startPos;
      var isDynamicImport = false;
      this.tok = this.scanner.scan();
      if(this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToID(this.tok, this.strictMode)) {
        name = new TypeScript.Identifier(this.tok.getText())
      }else {
        this.reportParseError("Expected identifer after 'import'");
        name = new TypeScript.MissingIdentifier
      }
      name.minChar = this.scanner.startPos;
      name.limChar = this.scanner.pos;
      this.tok = this.scanner.scan();
      this.chkCurTok(TypeScript.TokenID.Asg, "Expected =", errorRecoverySet | TypeScript.ErrorRecoverySet.ID);
      var aliasPreComments = this.parseComments();
      var limChar;
      if(this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToID(this.tok, this.strictMode)) {
        if(this.tok.tokenId == TypeScript.TokenID.MODULE) {
          limChar = this.scanner.pos;
          this.tok = this.scanner.scan();
          if(this.tok.tokenId == TypeScript.TokenID.LParen) {
            this.tok = this.scanner.scan();
            if(this.tok.tokenId == TypeScript.TokenID.QString || this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToID(this.tok, this.strictMode)) {
              if(this.tok.tokenId == TypeScript.TokenID.QString) {
                if(this.topLevel) {
                  this.hasTopLevelImportOrExport = true
                }
                var aliasText = this.tok.getText();
                if(!this.isValidImportPath(aliasText)) {
                  this.reportParseError("Invalid import path")
                }
                alias = new TypeScript.Identifier(aliasText);
                alias.minChar = this.scanner.startPos;
                alias.limChar = this.scanner.pos;
                isDynamicImport = true;
                this.tok = this.scanner.scan();
                alias.preComments = aliasPreComments
              }else {
                alias = this.parseExpr(errorRecoverySet | TypeScript.ErrorRecoverySet.SColon, TypeScript.OperatorPrecedence.Asg, true, TypeContext.NoTypes);
                alias.preComments = aliasPreComments
              }
            }
            limChar = this.scanner.pos;
            this.chkCurTok(TypeScript.TokenID.RParen, "Expected ')'", errorRecoverySet | TypeScript.ErrorRecoverySet.ID);
            if(alias) {
              alias.postComments = this.parseComments()
            }
            if(this.tok.tokenId == TypeScript.TokenID.SColon) {
              limChar = this.scanner.pos;
              this.tok = this.scanner.scan()
            }
          }
        }else {
          alias = this.parseExpr(errorRecoverySet | TypeScript.ErrorRecoverySet.SColon, TypeScript.OperatorPrecedence.Asg, true, TypeContext.NoTypes);
          limChar = this.scanner.pos
        }
      }else {
        this.reportParseError("Expected module name");
        alias = new TypeScript.MissingIdentifier;
        alias.minChar = this.scanner.startPos;
        alias.limChar = this.scanner.startPos;
        alias.flags |= TypeScript.ASTFlags.Error;
        limChar = alias.limChar
      }
      importDecl = new TypeScript.ImportDecl(name, alias);
      importDecl.isDynamicImport = isDynamicImport;
      if(TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Exported)) {
        importDecl.varFlags |= TypeScript.VarFlags.Exported
      }
      importDecl.minChar = minChar;
      importDecl.limChar = limChar;
      return importDecl
    };
    Parser.prototype.parseModuleDecl = function(errorRecoverySet, modifiers) {
      var leftCurlyCount = this.scanner.leftCurlyCount;
      var rightCurlyCount = this.scanner.rightCurlyCount;
      var svAmbient = this.ambientModule;
      var svTopLevel = this.topLevel;
      this.topLevel = false;
      if(this.parsingDeclareFile || TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Ambient)) {
        this.ambientModule = true
      }
      this.tok = this.scanner.scan();
      var name = null;
      var enclosedList = null;
      this.pushDeclLists();
      var modulePreComments = this.parseComments();
      var minChar = this.scanner.startPos;
      var isDynamicMod = false;
      if(this.tok.tokenId == TypeScript.TokenID.ID || this.tok.tokenId == TypeScript.TokenID.QString || TypeScript.convertTokToID(this.tok, this.strictMode)) {
        var nameText = this.tok.getText();
        if(this.tok.tokenId == TypeScript.TokenID.QString) {
          isDynamicMod = true;
          if(!this.ambientModule) {
            this.reportParseError("Only ambient dynamic modules may have string literal names")
          }
        }
        name = new TypeScript.Identifier(nameText);
        name.minChar = this.scanner.startPos;
        name.limChar = this.scanner.pos;
        this.tok = this.scanner.scan()
      }else {
        if(this.tok.tokenId == TypeScript.TokenID.LCurly) {
          this.reportParseError("Module name missing");
          name = new TypeScript.Identifier("");
          name.minChar = minChar;
          name.limChar = minChar
        }
      }
      if(this.tok.tokenId == TypeScript.TokenID.Dot) {
        enclosedList = new Array;
        this.parseDottedName(enclosedList)
      }
      if(name == null) {
        name = new TypeScript.MissingIdentifier
      }
      var moduleBody = new TypeScript.ASTList;
      var bodyMinChar = this.scanner.startPos;
      this.chkCurTok(TypeScript.TokenID.LCurly, "Expected '{'", errorRecoverySet | TypeScript.ErrorRecoverySet.ID);
      this.parseStmtList(errorRecoverySet | TypeScript.ErrorRecoverySet.RCurly, moduleBody, true, true, TypeScript.AllowedElements.ModuleMembers, modifiers);
      moduleBody.minChar = bodyMinChar;
      moduleBody.limChar = this.scanner.pos;
      this.chkCurTok(TypeScript.TokenID.RCurly, "Expected '}'", errorRecoverySet);
      var limChar = this.scanner.pos;
      var moduleDecl;
      if(enclosedList && enclosedList.length > 0) {
        var len = enclosedList.length;
        var innerName = enclosedList[len - 1];
        var innerDecl = new TypeScript.ModuleDecl(innerName, moduleBody, this.topVarList(), this.topScopeList());
        if(this.parsingDeclareFile || TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Ambient)) {
          innerDecl.modFlags |= TypeScript.ModuleFlags.Ambient
        }
        innerDecl.modFlags |= TypeScript.ModuleFlags.Exported;
        innerDecl.minChar = minChar;
        innerDecl.limChar = limChar;
        this.popDeclLists();
        var outerModBod;
        for(var i = len - 2;i >= 0;i--) {
          outerModBod = new TypeScript.ASTList;
          outerModBod.append(innerDecl);
          innerName = enclosedList[i];
          innerDecl = new TypeScript.ModuleDecl(innerName, outerModBod, new TypeScript.ASTList, new TypeScript.ASTList);
          outerModBod.minChar = innerDecl.minChar = minChar;
          outerModBod.limChar = innerDecl.limChar = limChar;
          if(this.parsingDeclareFile || TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Ambient)) {
            innerDecl.modFlags |= TypeScript.ModuleFlags.Ambient
          }
          innerDecl.modFlags |= TypeScript.ModuleFlags.Exported
        }
        outerModBod = new TypeScript.ASTList;
        outerModBod.append(innerDecl);
        outerModBod.minChar = minChar;
        outerModBod.limChar = limChar;
        moduleDecl = new TypeScript.ModuleDecl(name, outerModBod, new TypeScript.ASTList, new TypeScript.ASTList)
      }else {
        moduleDecl = new TypeScript.ModuleDecl(name, moduleBody, this.topVarList(), this.topScopeList());
        this.popDeclLists()
      }
      if(this.parsingDeclareFile || TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Ambient)) {
        moduleDecl.modFlags |= TypeScript.ModuleFlags.Ambient
      }
      if(TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Exported)) {
        moduleDecl.modFlags |= TypeScript.ModuleFlags.Exported
      }
      if(isDynamicMod) {
        moduleDecl.modFlags |= TypeScript.ModuleFlags.IsDynamic
      }
      moduleDecl.preComments = modulePreComments;
      moduleDecl.postComments = this.parseComments();
      this.ambientModule = svAmbient;
      this.topLevel = svTopLevel;
      moduleDecl.leftCurlyCount = this.scanner.leftCurlyCount - leftCurlyCount;
      moduleDecl.rightCurlyCount = this.scanner.rightCurlyCount - rightCurlyCount;
      return moduleDecl
    };
    Parser.prototype.parseTypeReferenceTail = function(errorRecoverySet, minChar, term) {
      var result = new TypeScript.TypeReference(term, 0);
      result.minChar = minChar;
      while(this.tok.tokenId == TypeScript.TokenID.LBrack) {
        this.tok = this.scanner.scan();
        result.arrayCount++;
        this.chkCurTok(TypeScript.TokenID.RBrack, "Expected ']'", errorRecoverySet | TypeScript.ErrorRecoverySet.LBrack)
      }
      result.limChar = this.scanner.lastTokenLimChar();
      return result
    };
    Parser.prototype.parseNamedType = function(errorRecoverySet, minChar, term, tail) {
      this.tok = this.scanner.scan();
      if(this.tok.tokenId == TypeScript.TokenID.Dot) {
        var curpos = this.scanner.pos;
        this.tok = this.scanner.scan();
        if(this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToID(this.tok, this.strictMode)) {
          var op2 = new TypeScript.Identifier(this.tok.getText());
          op2.minChar = this.scanner.startPos;
          op2.limChar = this.scanner.pos;
          var dotNode = new TypeScript.BinaryExpression(TypeScript.NodeType.Dot, term, op2);
          dotNode.minChar = term.minChar;
          dotNode.limChar = op2.limChar;
          return this.parseNamedType(errorRecoverySet, minChar, dotNode, tail)
        }else {
          this.reportParseError("need identifier after '.'");
          if(this.errorRecovery) {
            term.flags |= TypeScript.ASTFlags.DotLHS;
            term.limChar = this.scanner.lastTokenLimChar();
            return term
          }else {
            var eop2 = new TypeScript.MissingIdentifier;
            eop2.minChar = this.scanner.pos;
            eop2.limChar = this.scanner.pos;
            var edotNode = new TypeScript.BinaryExpression(TypeScript.NodeType.Dot, term, eop2);
            edotNode.flags |= TypeScript.ASTFlags.Error;
            edotNode.minChar = term.minChar;
            edotNode.limChar = eop2.limChar;
            return this.parseNamedType(errorRecoverySet, minChar, edotNode, tail)
          }
        }
      }else {
        if(tail) {
          return this.parseTypeReferenceTail(errorRecoverySet, minChar, term)
        }else {
          return term
        }
      }
    };
    Parser.prototype.parseTypeReference = function(errorRecoverySet, allowVoid) {
      var minChar = this.scanner.startPos;
      var isConstructorMember = false;
      switch(this.tok.tokenId) {
        case TypeScript.TokenID.VOID:
          if(!allowVoid) {
            this.reportParseError("void not a valid type in this context")
          }
        ;
        case TypeScript.TokenID.NUMBER:
        ;
        case TypeScript.TokenID.BOOL:
        ;
        case TypeScript.TokenID.ANY:
        ;
        case TypeScript.TokenID.STRING:
          var text = TypeScript.tokenTable[this.tok.tokenId].text;
          var primId = new TypeScript.Identifier(text);
          primId.minChar = minChar;
          primId.limChar = this.scanner.pos;
          this.tok = this.scanner.scan();
          return this.parseTypeReferenceTail(errorRecoverySet, minChar, primId);
        case TypeScript.TokenID.ID:
          var ident = this.createRef(this.tok.getText(), minChar);
          ident.limChar = this.scanner.pos;
          return this.parseNamedType(errorRecoverySet, minChar, ident, true);
        case TypeScript.TokenID.LCurly:
          this.tok = this.scanner.scan();
          var members = new TypeScript.ASTList;
          members.minChar = minChar;
          var prevInInterfaceDecl = this.inInterfaceDecl;
          this.inInterfaceDecl = true;
          this.parseInterfaceMembers(errorRecoverySet | TypeScript.ErrorRecoverySet.RCurly, members);
          this.inInterfaceDecl = prevInInterfaceDecl;
          this.chkCurTok(TypeScript.TokenID.RCurly, "Expected '}'", errorRecoverySet);
          var interfaceDecl = new TypeScript.TypeDecl(TypeScript.NodeType.Interface, this.anonId, members, null, null, null);
          interfaceDecl.minChar = minChar;
          interfaceDecl.limChar = members.limChar;
          return this.parseTypeReferenceTail(errorRecoverySet, minChar, interfaceDecl);
        case TypeScript.TokenID.NEW:
          this.tok = this.scanner.scan();
          if(this.tok.tokenId != TypeScript.TokenID.LParen) {
            this.reportParseError("Expected '('")
          }else {
            isConstructorMember = true
          }
        ;
        case TypeScript.TokenID.LParen:
          var formals = new TypeScript.ASTList;
          var variableArgList = this.parseFormalParameterList(errorRecoverySet | TypeScript.ErrorRecoverySet.RParen, formals, false, true, false, false, false, null);
          this.chkCurTok(TypeScript.TokenID.Arrow, "Expected '=>'", errorRecoverySet);
          var returnType = this.parseTypeReference(errorRecoverySet, true);
          var funcDecl = new TypeScript.FuncDecl(null, null, false, formals, null, null, null, TypeScript.NodeType.FuncDecl);
          funcDecl.returnTypeAnnotation = returnType;
          funcDecl.variableArgList = variableArgList;
          funcDecl.fncFlags |= TypeScript.FncFlags.Signature;
          if(isConstructorMember) {
            funcDecl.fncFlags |= TypeScript.FncFlags.ConstructMember;
            funcDecl.hint = "_construct";
            funcDecl.classDecl = null
          }
          funcDecl.minChar = minChar;
          return this.parseTypeReferenceTail(errorRecoverySet, minChar, funcDecl);
        default:
          this.reportParseError("Expected type name");
          var etr = new TypeScript.TypeReference(null, 0);
          etr.flags |= TypeScript.ASTFlags.Error;
          etr.minChar = this.scanner.pos;
          etr.limChar = this.scanner.pos;
          return etr
      }
    };
    Parser.prototype.parseFunctionStatements = function(errorRecoverySet, name, isConstructor, isMethod, args, allowedElements, minChar, requiresSignature, parentModifiers) {
      this.pushDeclLists();
      var svStmtStack = this.stmtStack;
      this.resetStmtStack();
      var bod = null;
      var wasShorthand = false;
      var isAnonLambda = false;
      if(!requiresSignature) {
        bod = new TypeScript.ASTList;
        var bodMinChar = this.scanner.startPos;
        if(this.tok.tokenId == TypeScript.TokenID.Arrow) {
          if(isMethod) {
            this.reportParseError("'=>' may not be used for class methods")
          }
          wasShorthand = true;
          this.tok = this.scanner.scan()
        }
        if(wasShorthand && this.tok.tokenId != TypeScript.TokenID.LCurly) {
          var retExpr = this.parseExpr(errorRecoverySet | TypeScript.ErrorRecoverySet.SColon, TypeScript.OperatorPrecedence.Asg, true, TypeContext.NoTypes);
          var retStmt = new TypeScript.ReturnStatement;
          retStmt.returnExpression = retExpr;
          bod.minChar = bodMinChar;
          bod.append(retStmt)
        }else {
          this.state = ParseState.StartStmtList;
          this.chkCurTok(TypeScript.TokenID.LCurly, "Expected '{'", errorRecoverySet | TypeScript.ErrorRecoverySet.StmtStart);
          var svInFnc = this.inFnc;
          isAnonLambda = wasShorthand;
          this.inFnc = true;
          this.parseStmtList(errorRecoverySet | TypeScript.ErrorRecoverySet.RCurly | TypeScript.ErrorRecoverySet.StmtStart, bod, true, false, allowedElements, parentModifiers);
          bod.minChar = bodMinChar;
          bod.limChar = this.scanner.pos;
          this.inFnc = svInFnc;
          var ec = new TypeScript.EndCode;
          ec.minChar = bod.limChar;
          ec.limChar = ec.minChar;
          bod.append(ec)
        }
      }
      var funcDecl = new TypeScript.FuncDecl(name, bod, isConstructor, args, this.topVarList(), this.topScopeList(), this.topStaticsList(), TypeScript.NodeType.FuncDecl);
      this.popDeclLists();
      var scopeList = this.topScopeList();
      scopeList.append(funcDecl);
      var staticFuncDecl = false;
      var limChar = this.scanner.pos;
      if(requiresSignature) {
        this.chkCurTok(TypeScript.TokenID.SColon, "Expected ';'", errorRecoverySet)
      }else {
        if(!wasShorthand || isAnonLambda) {
          this.chkCurTok(TypeScript.TokenID.RCurly, "Expected '}'", errorRecoverySet);
          if(isAnonLambda) {
            funcDecl.fncFlags |= TypeScript.FncFlags.IsFatArrowFunction
          }
        }else {
          funcDecl.fncFlags |= TypeScript.FncFlags.IsFatArrowFunction;
          if(this.tok.tokenId == TypeScript.TokenID.SColon) {
            this.tok = this.scanner.scan()
          }
        }
      }
      funcDecl.minChar = minChar;
      funcDecl.limChar = limChar;
      if(!requiresSignature) {
        funcDecl.fncFlags |= TypeScript.FncFlags.Definition
      }
      this.stmtStack = svStmtStack;
      return funcDecl
    };
    Parser.prototype.transformAnonymousArgsIntoFormals = function(formals, argList) {
      var _this = this;
      var translateBinExOperand = function(operand) {
        if(operand.nodeType == TypeScript.NodeType.Comma) {
          _this.transformAnonymousArgsIntoFormals(formals, operand)
        }else {
          if(operand.nodeType == TypeScript.NodeType.Name || operand.nodeType == TypeScript.NodeType.Asg) {
            var opArg = operand.nodeType == TypeScript.NodeType.Asg ? operand.operand1 : operand;
            var arg = new TypeScript.ArgDecl(opArg);
            arg.preComments = opArg.preComments;
            arg.postComments = opArg.postComments;
            arg.minChar = opArg.minChar;
            arg.limChar = opArg.limChar;
            if(TypeScript.hasFlag(opArg.flags, TypeScript.ASTFlags.PossibleOptionalParameter)) {
              arg.isOptional = true
            }
            if(operand.nodeType == TypeScript.NodeType.Asg) {
              arg.init = operand.operand2
            }
            formals.append(arg)
          }else {
            _this.reportParseError("Invalid lambda argument")
          }
        }
      };
      if(argList) {
        if(argList.nodeType == TypeScript.NodeType.Comma) {
          var commaList = argList;
          translateBinExOperand(commaList.operand1);
          translateBinExOperand(commaList.operand2)
        }else {
          translateBinExOperand(argList)
        }
      }
    };
    Parser.prototype.parseFormalParameterList = function(errorRecoverySet, formals, isClassConstr, isSig, isIndexer, isGetter, isSetter, preProcessedLambdaArgs) {
      formals.minChar = this.scanner.startPos;
      if(isIndexer) {
        this.tok = this.scanner.scan()
      }else {
        if(!preProcessedLambdaArgs) {
          this.chkCurTok(TypeScript.TokenID.LParen, "Expected '('", errorRecoverySet | TypeScript.ErrorRecoverySet.RParen)
        }
      }
      var sawEllipsis = false;
      var firstArg = true;
      var hasOptional = false;
      var haveFirstArgID = false;
      var hasPartialArgList = false;
      if(preProcessedLambdaArgs) {
        this.transformAnonymousArgsIntoFormals(formals, preProcessedLambdaArgs);
        haveFirstArgID = true
      }
      while(true) {
        var munchedArg = false;
        var argFlags = TypeScript.VarFlags.None;
        var argMinChar = this.scanner.startPos;
        if(this.inferPropertiesFromThisAssignment && this.tok.tokenId == TypeScript.TokenID.THIS) {
          if(!isClassConstr) {
            this.reportParseError("Instance property declarations using 'this' may only be used in class constructors")
          }
          this.tok = this.scanner.scan();
          argFlags |= TypeScript.VarFlags.Public | TypeScript.VarFlags.Property;
          if(this.currentClassDefinition) {
            this.currentClassDefinition.varFlags |= TypeScript.VarFlags.ClassSuperMustBeFirstCallInConstructor
          }
        }
        if(this.tok.tokenId == TypeScript.TokenID.PUBLIC) {
          argFlags |= TypeScript.VarFlags.Public | TypeScript.VarFlags.Property;
          if(this.currentClassDefinition) {
            this.currentClassDefinition.varFlags |= TypeScript.VarFlags.ClassSuperMustBeFirstCallInConstructor
          }
        }else {
          if(this.tok.tokenId == TypeScript.TokenID.PRIVATE) {
            argFlags |= TypeScript.VarFlags.Private | TypeScript.VarFlags.Property;
            if(this.currentClassDefinition) {
              this.currentClassDefinition.varFlags |= TypeScript.VarFlags.ClassSuperMustBeFirstCallInConstructor
            }
          }
        }
        if(argFlags != TypeScript.VarFlags.None) {
          if(!isClassConstr) {
            this.reportParseError("only constructor parameters can be properties")
          }
          this.tok = this.scanner.scan();
          if(this.inferPropertiesFromThisAssignment && this.tok.tokenId == TypeScript.TokenID.THIS) {
            if(!isClassConstr) {
              this.reportParseError("Instance property declarations using 'this' may only be used in class constructors")
            }
            this.tok = this.scanner.scan();
            this.tok = this.scanner.scan()
          }
        }else {
          if(this.tok.tokenId == TypeScript.TokenID.Ellipsis) {
            sawEllipsis = true;
            this.tok = this.scanner.scan()
          }
        }
        var argId = null;
        if(!haveFirstArgID && this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToID(this.tok, this.strictMode)) {
          argId = new TypeScript.Identifier(this.tok.getText());
          argId.minChar = this.scanner.startPos;
          argId.limChar = this.scanner.pos
        }
        if(haveFirstArgID || argId) {
          munchedArg = true;
          var type = null;
          var arg = null;
          if(haveFirstArgID && formals.members.length) {
            arg = formals.members[formals.members.length - 1];
            if(arg.isOptional) {
              hasOptional = true;
              hasPartialArgList = true
            }
          }else {
            arg = new TypeScript.ArgDecl(argId);
            if(isGetter) {
              this.reportParseError("Property getters may not take any arguments")
            }
            if(isSetter && !firstArg) {
              this.reportParseError("Property setters may only take one argument")
            }
            arg.minChar = argMinChar;
            arg.preComments = this.parseComments();
            this.tok = this.scanner.scan()
          }
          if(this.tok.tokenId == TypeScript.TokenID.QMark) {
            arg.isOptional = true;
            hasOptional = true;
            this.tok = this.scanner.scan()
          }
          if(this.tok.tokenId == TypeScript.TokenID.Colon) {
            this.tok = this.scanner.scan();
            type = this.parseTypeReference(errorRecoverySet, false);
            if(preProcessedLambdaArgs) {
              hasPartialArgList = true
            }
          }
          if(this.tok.tokenId == TypeScript.TokenID.Asg) {
            if(isSig) {
              this.reportParseError("Arguments in signatures may not have default values")
            }
            hasOptional = true;
            this.tok = this.scanner.scan();
            arg.init = this.parseExpr(TypeScript.ErrorRecoverySet.Comma | errorRecoverySet, TypeScript.OperatorPrecedence.Cma, false, TypeContext.NoTypes)
          }
          if(hasOptional && !arg.isOptionalArg() && !sawEllipsis) {
            this.reportParseError("Optional parameters may only be followed by other optional parameters")
          }
          if(sawEllipsis && arg.isOptionalArg()) {
            this.reportParseError("Varargs may not be optional or have default parameters")
          }
          arg.postComments = this.parseComments();
          arg.typeExpr = type;
          arg.limChar = this.scanner.lastTokenLimChar();
          arg.varFlags |= argFlags;
          if(!haveFirstArgID) {
            formals.append(arg)
          }else {
            haveFirstArgID = false
          }
        }
        firstArg = false;
        if(this.tok.tokenId == TypeScript.TokenID.Comma) {
          if(munchedArg && !sawEllipsis) {
            this.tok = this.scanner.scan();
            continue
          }else {
            this.reportParseError("Unexpected ',' in argument list");
            if(this.errorRecovery) {
              this.tok = this.scanner.scan();
              continue
            }
          }
        }else {
          break
        }
      }
      if(isIndexer) {
        this.chkCurTok(TypeScript.TokenID.RBrack, "Expected ']'", errorRecoverySet | TypeScript.ErrorRecoverySet.LCurly | TypeScript.ErrorRecoverySet.SColon)
      }else {
        if(!preProcessedLambdaArgs || hasPartialArgList) {
          this.chkCurTok(TypeScript.TokenID.RParen, "Expected ')'", errorRecoverySet | TypeScript.ErrorRecoverySet.LCurly | TypeScript.ErrorRecoverySet.SColon)
        }
      }
      formals.limChar = this.scanner.lastTokenLimChar();
      return sawEllipsis
    };
    Parser.prototype.parseFncDecl = function(errorRecoverySet, isDecl, requiresSignature, isMethod, methodName, indexer, isStatic, markedAsAmbient, modifiers, lambdaArgContext) {
      var leftCurlyCount = this.scanner.leftCurlyCount;
      var rightCurlyCount = this.scanner.rightCurlyCount;
      var prevInConstr = this.parsingClassConstructorDefinition;
      this.parsingClassConstructorDefinition = false;
      var name = null;
      var fnMin = this.scanner.startPos;
      var minChar = this.scanner.pos;
      var prevNestingLevel = this.nestingLevel;
      this.nestingLevel = 0;
      if(!this.style_funcInLoop && this.inLoop()) {
        this.reportParseStyleError("function declaration in loop")
      }
      if(!isMethod && !isStatic && !indexer && !lambdaArgContext) {
        this.tok = this.scanner.scan();
        this.state = ParseState.StartFncDecl;
        if(this.tok.tokenId != TypeScript.TokenID.ID && !TypeScript.convertTokToID(this.tok, this.strictMode)) {
          if(isDecl) {
            this.reportParseError("Function declaration must include identifier");
            this.nestingLevel = prevNestingLevel;
            return new TypeScript.IncompleteAST(fnMin, this.scanner.pos)
          }
        }else {
          name = new TypeScript.Identifier(this.tok.getText());
          name.minChar = this.scanner.startPos;
          name.limChar = this.scanner.pos;
          this.tok = this.scanner.scan()
        }
      }else {
        if(methodName) {
          name = methodName
        }
      }
      this.state = ParseState.FncDeclName;
      var args = new TypeScript.ASTList;
      var variableArgList = false;
      var isOverload = false;
      var isGetter = TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Getter);
      var isSetter = TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Setter);
      if(this.tok.tokenId == TypeScript.TokenID.LParen || indexer && this.tok.tokenId == TypeScript.TokenID.LBrack || lambdaArgContext && lambdaArgContext.preProcessedLambdaArgs) {
        variableArgList = this.parseFormalParameterList(errorRecoverySet, args, false, requiresSignature, indexer, isGetter, isSetter, lambdaArgContext ? lambdaArgContext.preProcessedLambdaArgs : null)
      }
      this.state = ParseState.FncDeclArgs;
      var returnType = null;
      if(this.tok.tokenId == TypeScript.TokenID.Colon) {
        this.tok = this.scanner.scan();
        if(TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Setter)) {
          this.reportParseError("Property setters may not declare a return type")
        }
        returnType = this.parseTypeReference(errorRecoverySet, true)
      }
      if(indexer && args.members.length == 0) {
        this.reportParseError("Index signatures require a parameter type to be specified")
      }
      this.state = ParseState.FncDeclReturnType;
      if(isDecl && !(this.parsingDeclareFile || markedAsAmbient) && (!isMethod || !(this.ambientModule || this.ambientClass || this.inInterfaceDecl)) && this.tok.tokenId == TypeScript.TokenID.SColon) {
        isOverload = true;
        isDecl = false;
        requiresSignature = true
      }
      var svInFncDecl = this.inFncDecl;
      this.inFncDecl = true;
      var funcDecl = this.parseFunctionStatements(errorRecoverySet | TypeScript.ErrorRecoverySet.RCurly, name, false, isMethod, args, TypeScript.AllowedElements.FunctionBody, minChar, requiresSignature, TypeScript.Modifiers.None);
      this.inFncDecl = svInFncDecl;
      funcDecl.variableArgList = variableArgList;
      funcDecl.isOverload = isOverload;
      if(!requiresSignature) {
        funcDecl.fncFlags |= TypeScript.FncFlags.Definition
      }
      if(isStatic) {
        funcDecl.fncFlags |= TypeScript.FncFlags.Static
      }
      if(requiresSignature) {
        funcDecl.fncFlags |= TypeScript.FncFlags.Signature
      }
      if(indexer) {
        funcDecl.fncFlags |= TypeScript.FncFlags.IndexerMember
      }
      funcDecl.returnTypeAnnotation = returnType;
      if(isMethod) {
        funcDecl.fncFlags |= TypeScript.FncFlags.Method;
        funcDecl.fncFlags |= TypeScript.FncFlags.ClassPropertyMethodExported
      }
      funcDecl.leftCurlyCount = this.scanner.leftCurlyCount - leftCurlyCount;
      funcDecl.rightCurlyCount = this.scanner.rightCurlyCount - rightCurlyCount;
      this.nestingLevel = prevNestingLevel;
      this.parsingClassConstructorDefinition = prevInConstr;
      return funcDecl
    };
    Parser.prototype.convertToTypeReference = function(ast) {
      var result;
      switch(ast.nodeType) {
        case TypeScript.NodeType.TypeRef:
          return ast;
        case TypeScript.NodeType.Name:
          result = new TypeScript.TypeReference(ast, 0);
          result.minChar = ast.minChar;
          result.limChar = ast.limChar;
          return result;
        case TypeScript.NodeType.Index:
          var expr = ast;
          result = this.convertToTypeReference(expr.operand1);
          if(result) {
            result.arrayCount++;
            result.minChar = expr.minChar;
            result.limChar = expr.limChar;
            return result
          }else {
            var etr = new TypeScript.AST(TypeScript.NodeType.Error);
            return etr
          }
      }
      return null
    };
    Parser.prototype.parseArgList = function(errorRecoverySet) {
      var args = new TypeScript.ASTList;
      args.minChar = this.scanner.startPos;
      this.tok = this.scanner.scan();
      if(this.tok.tokenId !== TypeScript.TokenID.RParen) {
        while(true) {
          if(args.members.length > 65535) {
            this.reportParseError("max number of args exceeded");
            break
          }
          var arg = this.parseExpr(TypeScript.ErrorRecoverySet.Comma | errorRecoverySet, TypeScript.OperatorPrecedence.Cma, false, TypeContext.NoTypes);
          args.append(arg);
          if(this.tok.tokenId != TypeScript.TokenID.Comma) {
            break
          }
          this.tok = this.scanner.scan()
        }
      }
      args.limChar = this.scanner.pos;
      return args
    };
    Parser.prototype.parseBaseList = function(extendsList, implementsList, errorRecoverySet, interfaceOnly, isClass) {
      var keyword = true;
      var currentList = extendsList;
      for(;;) {
        if(keyword) {
          if(this.tok.tokenId == TypeScript.TokenID.IMPLEMENTS) {
            if(interfaceOnly) {
              this.reportParseError("interfaces can not implement other types")
            }
            currentList = implementsList
          }
          this.tok = this.scanner.scan();
          keyword = false
        }
        var baseName = null;
        if(this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToID(this.tok, this.strictMode)) {
          var minChar = this.scanner.startPos;
          baseName = new TypeScript.Identifier(this.tok.getText());
          baseName.minChar = minChar;
          baseName.limChar = this.scanner.pos;
          baseName = this.parseNamedType(errorRecoverySet | TypeScript.ErrorRecoverySet.LCurly, minChar, baseName, false)
        }else {
          this.reportParseError("Expected base name");
          if(this.errorRecovery) {
            baseName = new TypeScript.MissingIdentifier;
            baseName.minChar = this.scanner.pos;
            baseName.limChar = this.scanner.pos;
            baseName.flags |= TypeScript.ASTFlags.Error
          }
        }
        if(this.tok.tokenId == TypeScript.TokenID.LParen) {
          if(isClass) {
            this.reportParseError("Base classes may only be initialized via a 'super' call within the constructor body")
          }
          var baseArgs = this.parseArgList(errorRecoverySet | TypeScript.ErrorRecoverySet.RParen);
          var callNode = new TypeScript.CallExpression(TypeScript.NodeType.Call, baseName, baseArgs);
          this.tok = this.scanner.scan();
          callNode.limChar = this.scanner.pos;
          currentList.append(callNode)
        }else {
          currentList.append(baseName)
        }
        if(!interfaceOnly && currentList == extendsList && extendsList.members.length > 1) {
          this.reportParseError("A class may only extend one other class")
        }
        if(this.tok.tokenId == TypeScript.TokenID.Comma) {
          this.tok = this.scanner.scan();
          continue
        }else {
          if(this.tok.tokenId == TypeScript.TokenID.EXTENDS || this.tok.tokenId == TypeScript.TokenID.IMPLEMENTS) {
            currentList = extendsList;
            keyword = true;
            continue
          }
        }
        break
      }
    };
    Parser.prototype.parseClassDecl = function(errorRecoverySet, minChar, modifiers) {
      var leftCurlyCount = this.scanner.leftCurlyCount;
      var rightCurlyCount = this.scanner.rightCurlyCount;
      if((modifiers & TypeScript.Modifiers.Readonly) != TypeScript.Modifiers.None) {
        this.reportParseError("const modifier is implicit for class")
      }
      if(this.parsingDeclareFile || this.ambientModule) {
        modifiers |= TypeScript.Modifiers.Ambient;
        modifiers |= TypeScript.Modifiers.Exported
      }
      var classIsMarkedAsAmbient = this.parsingDeclareFile || (modifiers & TypeScript.Modifiers.Ambient) != TypeScript.Modifiers.None;
      var svAmbientClass = this.ambientClass;
      this.ambientClass = classIsMarkedAsAmbient;
      this.tok = this.scanner.scan();
      var name = null;
      if(this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToID(this.tok, this.strictMode)) {
        name = new TypeScript.Identifier(this.tok.getText());
        name.minChar = this.scanner.startPos;
        name.limChar = this.scanner.pos;
        this.tok = this.scanner.scan()
      }else {
        this.reportParseError("class missing name");
        if(this.errorRecovery) {
          name = new TypeScript.MissingIdentifier;
          name.minChar = this.scanner.pos;
          name.limChar = this.scanner.pos;
          name.flags |= TypeScript.ASTFlags.Error
        }
      }
      var baseClass = null;
      var interfacesImplemented = null;
      var requiresSignature = false;
      if(this.tok.tokenId == TypeScript.TokenID.EXTENDS || this.tok.tokenId == TypeScript.TokenID.IMPLEMENTS) {
        baseClass = new TypeScript.ASTList;
        interfacesImplemented = new TypeScript.ASTList;
        this.parseBaseList(baseClass, interfacesImplemented, errorRecoverySet, false, true)
      }
      var classDecl = new TypeScript.ClassDecl(name, new TypeScript.ASTList, baseClass, interfacesImplemented);
      this.currentClassDefinition = classDecl;
      this.parseClassElements(classDecl, errorRecoverySet, modifiers);
      if(this.ambientModule || this.parsingDeclareFile || TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Exported)) {
        classDecl.varFlags |= TypeScript.VarFlags.Exported
      }
      if(this.ambientModule || TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Ambient)) {
        classDecl.varFlags |= TypeScript.VarFlags.Ambient
      }
      classDecl.varFlags |= TypeScript.VarFlags.Class;
      this.ambientClass = svAmbientClass;
      classDecl.leftCurlyCount = this.scanner.leftCurlyCount - leftCurlyCount;
      classDecl.rightCurlyCount = this.scanner.rightCurlyCount - rightCurlyCount;
      return classDecl
    };
    Parser.prototype.parseClassElements = function(classDecl, errorRecoverySet, parentModifiers) {
      var modifiers = parentModifiers;
      var resetModifiers = false;
      var membersMinChar = this.scanner.startPos;
      this.chkCurTok(TypeScript.TokenID.LCurly, "Expected '{'", errorRecoverySet);
      this.nestingLevel++;
      var currentMemberMinChar = this.scanner.startPos;
      var wasGetOrSetId = false;
      while(!(this.tok.tokenId == TypeScript.TokenID.RCurly || this.tok.tokenId == TypeScript.TokenID.EOF)) {
        var scanNext = true;
        var publicOrPrivateFlags = TypeScript.Modifiers.Public | TypeScript.Modifiers.Private;
        if(this.tok.tokenId == TypeScript.TokenID.GET) {
          if(modifiers & TypeScript.Modifiers.Getter) {
            this.reportParseError("Duplicate 'get' declaration in class body")
          }
          if(modifiers & TypeScript.Modifiers.Setter) {
            this.reportParseError("Getter already marked as a setter")
          }
          modifiers |= TypeScript.Modifiers.Getter
        }else {
          if(this.tok.tokenId == TypeScript.TokenID.SET) {
            if(modifiers & TypeScript.Modifiers.Setter) {
              this.reportParseError("Duplicate 'set' declaration in class body")
            }
            if(modifiers & TypeScript.Modifiers.Getter) {
              this.reportParseError("Setter already marked as a getter")
            }
            modifiers |= TypeScript.Modifiers.Setter
          }else {
            if(this.tok.tokenId == TypeScript.TokenID.PRIVATE) {
              if(modifiers & publicOrPrivateFlags) {
                this.reportParseError("Multiple modifiers may not be applied to class members")
              }
              modifiers |= TypeScript.Modifiers.Private
            }else {
              if(this.tok.tokenId == TypeScript.TokenID.PUBLIC) {
                if(modifiers & publicOrPrivateFlags) {
                  this.reportParseError("Multiple modifiers may not be applied to class members")
                }
                modifiers |= TypeScript.Modifiers.Public
              }else {
                if(this.tok.tokenId == TypeScript.TokenID.STATIC) {
                  if(modifiers & TypeScript.Modifiers.Static) {
                    this.reportParseError("Multiple modifiers may not be applied to class members")
                  }
                  modifiers |= TypeScript.Modifiers.Static
                }else {
                  if(this.tok.tokenId == TypeScript.TokenID.CONSTRUCTOR) {
                    if(modifiers != parentModifiers) {
                      this.reportParseError("Constructors may not have modifiers")
                    }
                    this.parseClassConstructorDeclaration(currentMemberMinChar, errorRecoverySet, modifiers);
                    scanNext = false;
                    resetModifiers = true
                  }else {
                    if(wasGetOrSetId || this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToIDName(this.tok)) {
                      var idText = wasGetOrSetId ? modifiers & TypeScript.Modifiers.Getter ? "get" : "set" : this.tok.getText();
                      var id = new TypeScript.Identifier(idText);
                      id.minChar = this.scanner.startPos;
                      id.limChar = this.scanner.pos;
                      if(wasGetOrSetId) {
                        modifiers = modifiers ^ (modifiers & TypeScript.Modifiers.Getter ? TypeScript.Modifiers.Getter : TypeScript.Modifiers.Setter);
                        wasGetOrSetId = false
                      }else {
                        this.tok = this.scanner.scan()
                      }
                      if(this.tok.tokenId == TypeScript.TokenID.LParen) {
                        this.parseClassMemberFunctionDeclaration(id, currentMemberMinChar, errorRecoverySet, modifiers);
                        scanNext = false
                      }else {
                        if(modifiers & TypeScript.Modifiers.Getter || modifiers & TypeScript.Modifiers.Setter) {
                          this.reportParseError("Property accessors must be functions")
                        }
                        var varDecl = this.parseClassMemberVariableDeclaration(id, currentMemberMinChar, false, errorRecoverySet, modifiers);
                        if(varDecl.init && varDecl.init.nodeType == TypeScript.NodeType.FuncDecl) {
                          if(this.tok.tokenId == TypeScript.TokenID.RCurly) {
                            scanNext = false
                          }
                        }else {
                          if(varDecl.init && varDecl.init.nodeType == TypeScript.NodeType.ObjectLit && this.tok.tokenId != TypeScript.TokenID.SColon) {
                            scanNext = false;
                            varDecl.init.flags |= TypeScript.ASTFlags.AutomaticSemicolon
                          }else {
                            if(this.tok.tokenId != TypeScript.TokenID.SColon) {
                              this.reportParseError("Expected ';'");
                              scanNext = false
                            }
                          }
                        }
                      }
                      resetModifiers = true
                    }else {
                      if(this.tok.tokenId == TypeScript.TokenID.SUPER) {
                        this.reportParseError("Base class initializers must be the first statement in a class definition")
                      }else {
                        if(!wasGetOrSetId && (modifiers & TypeScript.Modifiers.Getter || modifiers & TypeScript.Modifiers.Setter) && this.tok.tokenId == TypeScript.TokenID.LParen || this.tok.tokenId == TypeScript.TokenID.Asg) {
                          wasGetOrSetId = true;
                          scanNext = false
                        }else {
                          if(this.tok.tokenId != TypeScript.TokenID.SColon) {
                            this.reportParseError("Unexpected '" + this.tok.getText() + "' in class definition");
                            resetModifiers = true
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if(scanNext) {
          this.tok = this.scanner.scan()
        }
        if(resetModifiers) {
          modifiers = parentModifiers;
          currentMemberMinChar = this.scanner.startPos;
          resetModifiers = false
        }
      }
      var membersLimChar = this.scanner.pos;
      if(this.tok.tokenId == TypeScript.TokenID.RCurly) {
        if(!this.currentClassDefinition.definitionMembers.members.length) {
          this.currentClassDefinition.preComments = this.parseComments()
        }
        this.tok = this.scanner.scan()
      }
      this.nestingLevel--;
      this.currentClassDefinition.members.minChar = membersMinChar;
      this.currentClassDefinition.members.limChar = membersLimChar;
      this.currentClassDefinition.limChar = membersLimChar;
      this.currentClassDefinition = null
    };
    Parser.prototype.parseClassConstructorDeclaration = function(minChar, errorRecoverySet, modifiers) {
      this.parsingClassConstructorDefinition = true;
      var isAmbient = this.parsingDeclareFile || TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Ambient);
      var args = new TypeScript.ASTList;
      var variableArgList = false;
      var preComments = this.parseComments();
      this.tok = this.scanner.scan();
      if(this.tok.tokenId == TypeScript.TokenID.LParen) {
        variableArgList = this.parseFormalParameterList(errorRecoverySet, args, true, isAmbient, false, false, false, null);
        if(args.members.length > 0) {
          var lastArg = args.members[args.members.length - 1]
        }
      }
      var requiresSignature = isAmbient || this.tok.tokenId == TypeScript.TokenID.SColon;
      if(requiresSignature) {
        for(var i = 0;i < args.members.length;i++) {
          var arg = args.members[i];
          if(TypeScript.hasFlag(arg.varFlags, TypeScript.VarFlags.Property)) {
            this.reportParseError("Overload or ambient signatures may not specify parameter properties")
          }
        }
      }
      if(!requiresSignature) {
        this.currentClassDefinition.constructorNestingLevel = this.nestingLevel + 1
      }
      var constructorFuncDecl = this.parseFunctionStatements(errorRecoverySet | TypeScript.ErrorRecoverySet.RCurly, this.currentClassDefinition.name, true, false, args, TypeScript.AllowedElements.ClassMembers, minChar, requiresSignature, modifiers);
      constructorFuncDecl.preComments = preComments;
      if(requiresSignature && !isAmbient) {
        constructorFuncDecl.isOverload = true
      }
      constructorFuncDecl.variableArgList = variableArgList;
      this.currentClassDecl = null;
      constructorFuncDecl.returnTypeAnnotation = this.convertToTypeReference(this.currentClassDefinition.name);
      constructorFuncDecl.classDecl = this.currentClassDefinition;
      if(isAmbient) {
        constructorFuncDecl.fncFlags |= TypeScript.FncFlags.Ambient
      }
      if(requiresSignature) {
        constructorFuncDecl.fncFlags |= TypeScript.FncFlags.Signature
      }
      if(this.ambientModule || TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Exported)) {
        constructorFuncDecl.fncFlags |= TypeScript.FncFlags.Exported
      }
      if(this.currentClassDefinition.constructorDecl) {
        if(!isAmbient && !this.currentClassDefinition.constructorDecl.isSignature() && !constructorFuncDecl.isSignature()) {
          this.reportParseError("Duplicate constructor definition")
        }
      }
      if(isAmbient || !constructorFuncDecl.isSignature()) {
        this.currentClassDefinition.constructorDecl = constructorFuncDecl
      }
      constructorFuncDecl.fncFlags |= TypeScript.FncFlags.ClassMethod;
      this.currentClassDefinition.definitionMembers.members[this.currentClassDefinition.definitionMembers.members.length] = constructorFuncDecl;
      this.parsingClassConstructorDefinition = false;
      constructorFuncDecl.postComments = this.parseComments();
      return constructorFuncDecl
    };
    Parser.prototype.parseClassMemberVariableDeclaration = function(text, minChar, isDeclaredInConstructor, errorRecoverySet, modifiers) {
      var varDecl = new TypeScript.VarDecl(text, this.nestingLevel);
      varDecl.minChar = minChar;
      var isStatic = false;
      varDecl.preComments = this.parseComments();
      if(this.tok.tokenId == TypeScript.TokenID.Colon) {
        this.tok = this.scanner.scan();
        varDecl.typeExpr = this.parseTypeReference(errorRecoverySet | TypeScript.ErrorRecoverySet.Asg | TypeScript.ErrorRecoverySet.Comma, false)
      }
      if(this.tok.tokenId == TypeScript.TokenID.Asg) {
        if(this.parsingDeclareFile || TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Ambient)) {
          this.reportParseError("context does not permit variable initializer");
          if(this.errorRecovery) {
            this.skip(errorRecoverySet);
            varDecl.flags |= TypeScript.ASTFlags.Error;
            varDecl.limChar = this.scanner.lastTokenLimChar();
            return varDecl
          }
        }
        this.tok = this.scanner.scan();
        varDecl.init = this.parseExpr(TypeScript.ErrorRecoverySet.Comma | errorRecoverySet, TypeScript.OperatorPrecedence.Cma, true, TypeContext.NoTypes);
        varDecl.limChar = varDecl.init.limChar;
        this.currentClassDefinition.varFlags |= TypeScript.VarFlags.ClassSuperMustBeFirstCallInConstructor
      }else {
        varDecl.limChar = this.scanner.pos
      }
      if(modifiers & TypeScript.Modifiers.Static) {
        varDecl.varFlags |= TypeScript.VarFlags.Static;
        isStatic = true
      }
      if((modifiers & TypeScript.Modifiers.Private) != TypeScript.Modifiers.None) {
        varDecl.varFlags |= TypeScript.VarFlags.Private
      }else {
        varDecl.varFlags |= TypeScript.VarFlags.Public
      }
      varDecl.varFlags |= TypeScript.VarFlags.Property;
      if(isDeclaredInConstructor) {
        varDecl.varFlags |= TypeScript.VarFlags.ClassConstructorProperty
      }
      if(!isDeclaredInConstructor && !isStatic) {
        varDecl.varFlags |= TypeScript.VarFlags.ClassBodyProperty
      }
      this.currentClassDefinition.knownMemberNames[text.text] = true;
      if(!isDeclaredInConstructor) {
        this.currentClassDefinition.definitionMembers.members[this.currentClassDefinition.definitionMembers.members.length] = varDecl
      }
      this.currentClassDefinition.allMemberDefinitions.members[this.currentClassDefinition.allMemberDefinitions.members.length] = varDecl;
      varDecl.postComments = this.parseComments();
      return varDecl
    };
    Parser.prototype.parseClassMemberFunctionDeclaration = function(methodName, minChar, errorRecoverySet, modifiers) {
      var wasAccessorID = this.prevIDTok != null;
      var isAccessor = TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Getter) || TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Setter);
      var isStatic = TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Static);
      var isAmbient = this.ambientModule || TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Ambient);
      errorRecoverySet |= TypeScript.ErrorRecoverySet.RParen;
      var preComments = this.parseComments();
      if(isAccessor && modifiers & TypeScript.Modifiers.Ambient) {
        this.reportParseError("Property accessors may not be declared in ambient classes")
      }
      var ast = this.parseFncDecl(errorRecoverySet, true, isAmbient, true, methodName, false, isStatic, isAmbient, modifiers, null);
      if(ast.nodeType == TypeScript.NodeType.Error) {
        return ast
      }
      var funcDecl = ast;
      funcDecl.preComments = preComments;
      funcDecl.minChar = minChar;
      if(funcDecl.bod !== null) {
        funcDecl.limChar = funcDecl.bod.limChar
      }
      if(modifiers & TypeScript.Modifiers.Private) {
        funcDecl.fncFlags |= TypeScript.FncFlags.Private
      }else {
        funcDecl.fncFlags |= TypeScript.FncFlags.Public
      }
      if(isStatic) {
        funcDecl.fncFlags |= TypeScript.FncFlags.Static
      }
      if(isAccessor) {
        if(TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Getter)) {
          funcDecl.fncFlags |= TypeScript.FncFlags.GetAccessor;
          funcDecl.hint = "get" + funcDecl.name.text
        }else {
          funcDecl.fncFlags |= TypeScript.FncFlags.SetAccessor;
          funcDecl.hint = "set" + funcDecl.name.text
        }
        funcDecl.fncFlags |= TypeScript.FncFlags.IsFunctionExpression;
        if(TypeScript.codeGenTarget < TypeScript.CodeGenTarget.ES5) {
          this.reportParseError("Property accessors are only available when targeting ES5 or greater")
        }
      }
      funcDecl.fncFlags |= TypeScript.FncFlags.ClassMethod;
      this.currentClassDefinition.knownMemberNames[methodName.text] = true;
      this.currentClassDefinition.definitionMembers.members[this.currentClassDefinition.definitionMembers.members.length] = funcDecl;
      funcDecl.postComments = this.parseComments();
      return funcDecl
    };
    Parser.prototype.parseInterfaceMember = function(errorRecoverySet) {
      var minChar = this.scanner.startPos;
      var propertyDecl = this.parsePropertyDecl(errorRecoverySet, TypeScript.Modifiers.Public, true, false);
      if(propertyDecl.nodeType == TypeScript.NodeType.VarDecl) {
        this.chkCurTok(TypeScript.TokenID.SColon, "Expected ';'", errorRecoverySet)
      }
      if(propertyDecl) {
        propertyDecl.minChar = minChar
      }
      return propertyDecl
    };
    Parser.prototype.parseInterfaceMembers = function(errorRecoverySet, members) {
      for(;;) {
        switch(this.tok.tokenId) {
          case TypeScript.TokenID.RCurly:
          ;
          case TypeScript.TokenID.EOF:
            members.limChar = this.scanner.pos;
            return
        }
        var element = this.parseInterfaceMember(errorRecoverySet | TypeScript.ErrorRecoverySet.TypeScriptS);
        if(element) {
          members.append(element)
        }
      }
    };
    Parser.prototype.parseInterfaceDecl = function(errorRecoverySet, modifiers) {
      var leftCurlyCount = this.scanner.leftCurlyCount;
      var rightCurlyCount = this.scanner.rightCurlyCount;
      this.tok = this.scanner.scan();
      var minChar = this.scanner.pos;
      var name = null;
      if(this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToID(this.tok, this.strictMode)) {
        name = new TypeScript.Identifier(this.tok.getText());
        name.minChar = this.scanner.startPos;
        name.limChar = this.scanner.pos;
        this.tok = this.scanner.scan()
      }else {
        this.reportParseError("interface missing name");
        if(this.errorRecovery) {
          name = new TypeScript.MissingIdentifier;
          name.minChar = this.scanner.pos;
          name.limChar = this.scanner.pos;
          name.flags |= TypeScript.ASTFlags.Error
        }
      }
      var interfaces = null;
      if(this.tok.tokenId == TypeScript.TokenID.EXTENDS) {
        interfaces = new TypeScript.ASTList;
        interfaces.minChar = this.scanner.startPos;
        this.parseBaseList(interfaces, null, errorRecoverySet, true, false)
      }
      var membersMinChar = this.scanner.startPos;
      this.chkCurTok(TypeScript.TokenID.LCurly, "Expected '{'", errorRecoverySet | TypeScript.ErrorRecoverySet.TypeScriptS);
      var members = new TypeScript.ASTList;
      members.minChar = membersMinChar;
      var prevInInterfaceDecl = this.inInterfaceDecl;
      this.inInterfaceDecl = true;
      this.parseInterfaceMembers(errorRecoverySet | TypeScript.ErrorRecoverySet.RCurly, members);
      this.inInterfaceDecl = prevInInterfaceDecl;
      this.chkCurTok(TypeScript.TokenID.RCurly, "Expected '}'", errorRecoverySet);
      var interfaceDecl = new TypeScript.TypeDecl(TypeScript.NodeType.Interface, name, members, null, interfaces, null);
      if(TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Private)) {
        interfaceDecl.varFlags |= TypeScript.VarFlags.Private
      }
      if(TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Public)) {
        interfaceDecl.varFlags |= TypeScript.VarFlags.Public
      }
      if(this.parsingDeclareFile || TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Exported)) {
        interfaceDecl.varFlags |= TypeScript.VarFlags.Exported
      }
      interfaceDecl.leftCurlyCount = this.scanner.leftCurlyCount - leftCurlyCount;
      interfaceDecl.rightCurlyCount = this.scanner.rightCurlyCount - rightCurlyCount;
      return interfaceDecl
    };
    Parser.prototype.makeVarDecl = function(id, nest) {
      var varDecl = new TypeScript.VarDecl(id, nest);
      var currentVarList = this.topVarList();
      if(currentVarList) {
        currentVarList.append(varDecl)
      }
      return varDecl
    };
    Parser.prototype.parsePropertyDecl = function(errorRecoverySet, modifiers, requireSignature, isStatic) {
      var text = null;
      var minChar = this.scanner.startPos;
      var nameLimChar = minChar;
      var isNew = false;
      var isIndexer = false;
      var wasAccessorID = this.prevIDTok != null;
      var isAccessor = TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Getter) || TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Setter);
      if(this.parsingDeclareFile || this.ambientModule || TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Ambient)) {
        requireSignature = true
      }
      if(this.tok.tokenId == TypeScript.TokenID.LParen && !wasAccessorID) {
        if(!requireSignature && !isStatic) {
          this.reportParseError("Expected identifier in property declaration");
          if(this.errorRecovery) {
            this.skip(errorRecoverySet);
            text = new TypeScript.MissingIdentifier
          }
        }
      }else {
        if(this.tok.tokenId == TypeScript.TokenID.NEW) {
          if(requireSignature) {
            this.tok = this.scanner.scan();
            if(this.tok.tokenId == TypeScript.TokenID.LParen) {
              isNew = true
            }
          }
          if(!isNew) {
            if(!requireSignature) {
              this.tok = this.scanner.scan()
            }
            text = new TypeScript.Identifier("new");
            text.minChar = this.scanner.pos - 3;
            text.limChar = this.scanner.pos;
            nameLimChar = this.scanner.pos
          }
        }else {
          if(this.tok.tokenId == TypeScript.TokenID.LBrack && requireSignature) {
            isIndexer = true;
            text = new TypeScript.Identifier("__item")
          }else {
            if(this.tok.tokenId != TypeScript.TokenID.ID && !TypeScript.convertTokToIDName(this.tok) && !wasAccessorID) {
              this.reportParseError("Expected identifier in property declaration");
              if(this.errorRecovery) {
                var eminChar = this.scanner.startPos;
                var curpos = this.scanner.pos;
                this.skip(errorRecoverySet & ~TypeScript.ErrorRecoverySet.Comma);
                if(this.scanner.pos == curpos) {
                  this.tok = this.scanner.scan()
                }
                var epd = new TypeScript.VarDecl(new TypeScript.MissingIdentifier, this.nestingLevel);
                epd.flags |= TypeScript.ASTFlags.Error;
                epd.minChar = eminChar;
                epd.limChar = this.scanner.lastTokenLimChar();
                return epd
              }
            }else {
              if(wasAccessorID) {
                text = new TypeScript.Identifier(this.prevIDTok.getText());
                text.minChar = this.scanner.lastTokenLimChar() - 3;
                text.limChar = this.scanner.lastTokenLimChar();
                nameLimChar = text.limChar;
                if(TypeScript.codeGenTarget < TypeScript.CodeGenTarget.ES5) {
                  this.reportParseError("Property accessors are only available when targeting ES5 or greater")
                }
                if(this.tok.getText() == text.text && this.tok != this.prevIDTok) {
                  this.tok = this.scanner.scan()
                }
                this.prevIDTok = null
              }else {
                text = new TypeScript.Identifier(this.tok.getText());
                text.minChar = this.scanner.startPos;
                text.limChar = this.scanner.pos;
                nameLimChar = this.scanner.pos;
                this.tok = this.scanner.scan()
              }
            }
          }
        }
      }
      if(this.tok.tokenId == TypeScript.TokenID.QMark) {
        if(this.inInterfaceDecl && text) {
          text.flags |= TypeScript.ASTFlags.OptionalName
        }else {
          this.reportParseError("Optional properties may only be declared on interface or object types")
        }
        this.tok = this.scanner.scan()
      }
      if(this.tok.tokenId == TypeScript.TokenID.LParen || isIndexer && this.tok.tokenId == TypeScript.TokenID.LBrack) {
        var ers = errorRecoverySet | TypeScript.ErrorRecoverySet.RParen;
        if(isIndexer) {
          ers = errorRecoverySet | TypeScript.ErrorRecoverySet.RBrack
        }
        var ast = this.parseFncDecl(ers, true, requireSignature, !this.inFncDecl, text, isIndexer, isStatic, this.parsingDeclareFile || TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Ambient), modifiers, null);
        var funcDecl;
        if(ast.nodeType == TypeScript.NodeType.Error) {
          return ast
        }else {
          funcDecl = ast
        }
        if(funcDecl.name) {
          funcDecl.name.minChar = minChar;
          funcDecl.name.limChar = nameLimChar
        }
        if((modifiers & TypeScript.Modifiers.Public) != TypeScript.Modifiers.None) {
          funcDecl.fncFlags |= TypeScript.FncFlags.Public
        }
        if((modifiers & TypeScript.Modifiers.Private) != TypeScript.Modifiers.None) {
          funcDecl.fncFlags |= TypeScript.FncFlags.Private
        }
        if(isStatic) {
          funcDecl.fncFlags |= TypeScript.FncFlags.Static
        }
        if(this.parsingDeclareFile || TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Ambient)) {
          funcDecl.fncFlags |= TypeScript.FncFlags.Ambient
        }
        if(isAccessor) {
          if(TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Getter)) {
            funcDecl.fncFlags |= TypeScript.FncFlags.GetAccessor;
            funcDecl.hint = "get" + funcDecl.name.text
          }else {
            funcDecl.fncFlags |= TypeScript.FncFlags.SetAccessor;
            funcDecl.hint = "set" + funcDecl.name.text
          }
          funcDecl.fncFlags |= TypeScript.FncFlags.IsFunctionExpression;
          if(modifiers & TypeScript.Modifiers.Ambient) {
            this.reportParseError("Property accessors may not be declared in ambient types")
          }
        }
        if(text == null) {
          if(isNew) {
            funcDecl.fncFlags |= TypeScript.FncFlags.ConstructMember;
            funcDecl.hint = "_construct";
            funcDecl.classDecl = this.currentClassDecl
          }else {
            funcDecl.hint = "_call";
            funcDecl.fncFlags |= TypeScript.FncFlags.CallMember
          }
        }
        return funcDecl
      }else {
        var varDecl = new TypeScript.VarDecl(text, this.nestingLevel);
        varDecl.minChar = minChar;
        if(this.tok.tokenId == TypeScript.TokenID.Colon) {
          this.tok = this.scanner.scan();
          varDecl.typeExpr = this.parseTypeReference(errorRecoverySet | TypeScript.ErrorRecoverySet.Asg | TypeScript.ErrorRecoverySet.Comma, false)
        }
        if(this.tok.tokenId == TypeScript.TokenID.Asg) {
          if(requireSignature) {
            this.reportParseError("context does not permit variable initializer");
            if(this.errorRecovery) {
              this.skip(errorRecoverySet);
              varDecl.flags |= TypeScript.ASTFlags.Error;
              varDecl.limChar = this.scanner.lastTokenLimChar();
              return varDecl
            }
          }
          this.tok = this.scanner.scan();
          varDecl.init = this.parseExpr(TypeScript.ErrorRecoverySet.Comma | errorRecoverySet, TypeScript.OperatorPrecedence.Cma, true, TypeContext.NoTypes);
          varDecl.limChar = varDecl.init.limChar;
          if(varDecl.init.nodeType == TypeScript.NodeType.FuncDecl) {
            var funcDecl = varDecl.init;
            funcDecl.hint = varDecl.id.text;
            funcDecl.boundToProperty = varDecl
          }else {
            if(isAccessor) {
              this.reportParseError("Accessors may only be functions")
            }
          }
        }else {
          varDecl.limChar = this.scanner.pos
        }
        if((modifiers & TypeScript.Modifiers.Readonly) != TypeScript.Modifiers.None) {
          varDecl.varFlags |= TypeScript.VarFlags.Readonly
        }
        if(isStatic) {
          varDecl.varFlags |= TypeScript.VarFlags.Static
        }
        if((modifiers & TypeScript.Modifiers.Public) != TypeScript.Modifiers.None) {
          varDecl.varFlags |= TypeScript.VarFlags.Public
        }
        if((modifiers & TypeScript.Modifiers.Private) != TypeScript.Modifiers.None) {
          varDecl.varFlags |= TypeScript.VarFlags.Private
        }
        varDecl.varFlags |= TypeScript.VarFlags.Property;
        return varDecl
      }
    };
    Parser.prototype.parseVarDecl = function(errorRecoverySet, modifiers, allowIn, requireSignature, isStatic) {
      var isConst = TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Readonly);
      var minChar = this.scanner.startPos;
      this.tok = this.scanner.scan();
      var varDecl = null;
      var declList = null;
      var multivar = false;
      var varDeclPreComments = this.parseComments();
      for(;;) {
        if(this.tok.tokenId != TypeScript.TokenID.ID && !TypeScript.convertTokToID(this.tok, this.strictMode)) {
          this.reportParseError("Expected identifier in variable declaration");
          if(this.errorRecovery) {
            varDecl = new TypeScript.VarDecl(new TypeScript.MissingIdentifier, this.nestingLevel);
            varDecl.minChar = minChar;
            this.skip(errorRecoverySet);
            varDecl.flags |= TypeScript.ASTFlags.Error;
            varDecl.limChar = this.scanner.lastTokenLimChar();
            return varDecl
          }
        }
        var text = this.tok.getText();
        if(this.strictMode && text == "eval") {
          this.reportParseError("can not name a variable eval in strict mode")
        }
        varDecl = this.makeVarDecl(new TypeScript.Identifier(text), this.nestingLevel);
        varDecl.id.minChar = this.scanner.startPos;
        varDecl.id.limChar = this.scanner.pos;
        varDecl.preComments = varDeclPreComments;
        if(isStatic) {
          varDecl.varFlags |= TypeScript.VarFlags.Static
        }
        if(TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Readonly)) {
          varDecl.varFlags |= TypeScript.VarFlags.Readonly
        }
        if(this.parsingDeclareFile || TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Ambient)) {
          varDecl.varFlags |= TypeScript.VarFlags.Ambient
        }
        if(this.parsingDeclareFile || TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Exported)) {
          varDecl.varFlags |= TypeScript.VarFlags.Exported
        }
        varDecl.minChar = minChar;
        if(declList) {
          declList.append(varDecl)
        }
        this.tok = this.scanner.scan();
        if(this.tok.tokenId == TypeScript.TokenID.Colon) {
          this.tok = this.scanner.scan();
          var prevInFncDecl = this.inFncDecl;
          this.inFncDecl = false;
          varDecl.typeExpr = this.parseTypeReference(errorRecoverySet | TypeScript.ErrorRecoverySet.Asg | TypeScript.ErrorRecoverySet.Comma, false);
          this.inFncDecl = prevInFncDecl
        }
        if(this.tok.tokenId == TypeScript.TokenID.Asg) {
          if(requireSignature) {
            this.reportParseError("context does not permit variable initializer");
            if(this.errorRecovery) {
              this.skip(errorRecoverySet);
              varDecl.flags |= TypeScript.ASTFlags.Error;
              return varDecl
            }
          }
          this.tok = this.scanner.scan();
          varDecl.init = this.parseExpr(TypeScript.ErrorRecoverySet.Comma | errorRecoverySet, TypeScript.OperatorPrecedence.Cma, allowIn, TypeContext.NoTypes);
          varDecl.limChar = varDecl.init.limChar;
          if(varDecl.init.nodeType == TypeScript.NodeType.FuncDecl) {
            var funcDecl = varDecl.init;
            funcDecl.hint = varDecl.id.text
          }
        }else {
          if(isConst) {
            this.reportParseError("const declaration requires initializer")
          }
          varDecl.limChar = this.scanner.pos
        }
        varDecl.postComments = this.parseCommentsForLine(this.scanner.line);
        if(this.tok.tokenId != TypeScript.TokenID.Comma) {
          if(declList) {
            declList.limChar = varDecl.limChar;
            return declList
          }else {
            return varDecl
          }
        }
        if(!multivar) {
          declList = new TypeScript.ASTList;
          declList.minChar = varDecl.minChar;
          declList.append(varDecl);
          multivar = true
        }
        this.tok = this.scanner.scan();
        minChar = this.scanner.startPos
      }
    };
    Parser.prototype.parseMemberList = function(errorRecoverySet) {
      var elements = new TypeScript.ASTList;
      if(this.tok.tokenId == TypeScript.TokenID.RCurly) {
        return elements
      }
      var idHint = null;
      var memberName = null;
      var memberExpr = null;
      var member = null;
      var minChar = this.scanner.startPos;
      var isSet = false;
      var skippedTokenForGetSetId = false;
      var getSetTok = null;
      var getSetStartPos = 0;
      var getSetPos = 0;
      for(;;) {
        var accessorPattern = false;
        if(this.tok.tokenId == TypeScript.TokenID.GET || this.tok.tokenId == TypeScript.TokenID.SET) {
          isSet = this.tok.tokenId == TypeScript.TokenID.SET;
          getSetTok = this.tok;
          getSetStartPos = this.scanner.startPos;
          getSetPos = this.scanner.pos;
          this.tok = this.scanner.scan();
          if(this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToIDName(this.tok)) {
            idHint = isSet ? "set" : "get";
            idHint = idHint + this.tok.getText();
            memberName = new TypeScript.Identifier(this.tok.getText());
            memberName.minChar = this.scanner.startPos;
            accessorPattern = true;
            if(TypeScript.codeGenTarget < TypeScript.CodeGenTarget.ES5) {
              this.reportParseError("Property accessors are only available when targeting ES5 or greater")
            }
          }else {
            if(this.tok.tokenId != TypeScript.TokenID.Colon) {
              this.reportParseError("Expected identifier, string or number as accessor name")
            }else {
              skippedTokenForGetSetId = true;
              memberName = new TypeScript.Identifier(getSetTok.getText());
              memberName.minChar = getSetStartPos;
              memberName.limChar = getSetPos
            }
          }
        }else {
          if(this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToIDName(this.tok)) {
            idHint = this.tok.getText();
            memberName = new TypeScript.Identifier(idHint);
            memberName.minChar = this.scanner.startPos;
            memberName.limChar = this.scanner.pos
          }else {
            if(this.tok.tokenId == TypeScript.TokenID.QString) {
              idHint = this.tok.getText();
              memberName = new TypeScript.StringLiteral(idHint);
              memberName.minChar = this.scanner.startPos;
              memberName.limChar = this.scanner.pos
            }else {
              if(this.tok.tokenId == TypeScript.TokenID.NumberLit) {
                var ntok = this.tok;
                idHint = ntok.value.toString();
                memberName = new TypeScript.StringLiteral(idHint);
                memberName.minChar = this.scanner.startPos;
                memberName.limChar = this.scanner.pos
              }else {
                this.reportParseError("Expected identifier, string or number as member name");
                if(this.errorRecovery) {
                  memberName = new TypeScript.MissingIdentifier;
                  memberName.minChar = this.scanner.startPos;
                  memberName.flags |= TypeScript.ASTFlags.Error;
                  this.skip(errorRecoverySet | TypeScript.ErrorRecoverySet.Comma);
                  memberName.limChar = this.scanner.lastTokenLimChar()
                }
              }
            }
          }
        }
        if(!skippedTokenForGetSetId) {
          this.tok = this.scanner.scan()
        }else {
          skippedTokenForGetSetId = false
        }
        if(this.tok.tokenId == TypeScript.TokenID.QMark) {
          memberName.flags |= TypeScript.ASTFlags.OptionalName;
          this.tok = this.scanner.scan()
        }
        if(accessorPattern) {
          var args = new TypeScript.ASTList;
          this.parseFormalParameterList(errorRecoverySet | TypeScript.ErrorRecoverySet.RParen, args, false, true, false, !isSet, isSet, null);
          var funcDecl = this.parseFunctionStatements(errorRecoverySet | TypeScript.ErrorRecoverySet.RCurly, memberName, false, true, args, TypeScript.AllowedElements.FunctionDecls, this.scanner.startPos, false, TypeScript.Modifiers.None);
          if(isSet && funcDecl.returnTypeAnnotation) {
            this.reportParseError("Property setters may not declare a return type")
          }
          funcDecl.fncFlags |= isSet ? TypeScript.FncFlags.SetAccessor : TypeScript.FncFlags.GetAccessor;
          funcDecl.fncFlags |= TypeScript.FncFlags.IsFunctionExpression;
          funcDecl.hint = idHint;
          memberExpr = funcDecl;
          member = new TypeScript.BinaryExpression(TypeScript.NodeType.Member, memberName, memberExpr);
          member.minChar = memberName.minChar;
          if(memberExpr.nodeType == TypeScript.NodeType.FuncDecl) {
            var funcDecl = memberExpr;
            funcDecl.hint = idHint
          }
        }else {
          if(this.tok.tokenId == TypeScript.TokenID.Colon) {
            this.tok = this.scanner.scan();
            memberExpr = this.parseExpr(TypeScript.ErrorRecoverySet.Comma | errorRecoverySet, TypeScript.OperatorPrecedence.Cma, true, TypeContext.NoTypes);
            if(memberExpr.nodeType == TypeScript.NodeType.TypeRef) {
              this.reportParseError("Expected 'new' on array declaration in member definition")
            }
            member = new TypeScript.BinaryExpression(TypeScript.NodeType.Member, memberName, memberExpr);
            member.minChar = memberName.minChar;
            if(memberExpr.nodeType == TypeScript.NodeType.FuncDecl) {
              var funcDecl = memberExpr;
              funcDecl.hint = idHint
            }
          }else {
            this.reportParseError("Expected ':' in member definition");
            if(this.errorRecovery) {
              this.skip(errorRecoverySet);
              elements.flags |= TypeScript.ASTFlags.Error;
              elements.minChar = minChar;
              elements.limChar = this.scanner.lastTokenLimChar();
              return elements
            }
          }
        }
        idHint = null;
        elements.append(member);
        member.limChar = this.scanner.lastTokenLimChar();
        if(this.tok.tokenId != TypeScript.TokenID.Comma) {
          break
        }else {
          this.tok = this.scanner.scan()
        }
        if(this.tok.tokenId == TypeScript.TokenID.RCurly) {
          break
        }
      }
      if(member) {
        elements.limChar = member.limChar
      }
      elements.minChar = minChar;
      return elements
    };
    Parser.prototype.parseArrayList = function(errorRecoverySet) {
      var elements = null;
      if(this.tok.tokenId == TypeScript.TokenID.RBrack) {
        return elements
      }else {
        elements = new TypeScript.ASTList;
        elements.minChar = this.scanner.startPos
      }
      var arg;
      for(;;) {
        if(this.tok.tokenId == TypeScript.TokenID.Comma || this.tok.tokenId == TypeScript.TokenID.RBrack) {
          arg = new TypeScript.AST(TypeScript.NodeType.EmptyExpr)
        }else {
          arg = this.parseExpr(TypeScript.ErrorRecoverySet.Comma | errorRecoverySet, TypeScript.OperatorPrecedence.Cma, true, TypeContext.NoTypes)
        }
        elements.append(arg);
        if(this.tok.tokenId != TypeScript.TokenID.Comma) {
          break
        }
        this.tok = this.scanner.scan()
      }
      elements.limChar = this.scanner.lastTokenLimChar();
      return elements
    };
    Parser.prototype.parseArrayLiteral = function(errorRecoverySet) {
      var arrayLiteral = null;
      arrayLiteral = new TypeScript.UnaryExpression(TypeScript.NodeType.ArrayLit, this.parseArrayList(errorRecoverySet));
      return arrayLiteral
    };
    Parser.prototype.parseTerm = function(errorRecoverySet, allowCall, typeContext, inCast) {
      var ast = null;
      var sawId = false;
      var inNew = false;
      var minChar = this.scanner.startPos;
      var limChar = this.scanner.pos;
      var parseAsLambda = false;
      switch(this.tok.tokenId) {
        case TypeScript.TokenID.NUMBER:
        ;
        case TypeScript.TokenID.BOOL:
        ;
        case TypeScript.TokenID.ANY:
        ;
        case TypeScript.TokenID.STRING:
          var tid = new TypeScript.Identifier(TypeScript.tokenTable[this.tok.tokenId].text);
          if(TypeScript.hasFlag(typeContext, TypeContext.Primitive)) {
            ast = new TypeScript.TypeReference(tid, 0);
            sawId = true
          }else {
            ast = tid;
            sawId = true
          }
          ast.minChar = minChar;
          this.tok = this.scanner.scan();
          limChar = this.scanner.lastTokenLimChar();
          break;
        case TypeScript.TokenID.THIS:
          ast = new TypeScript.AST(TypeScript.NodeType.This);
          ast.minChar = minChar;
          this.tok = this.scanner.scan();
          limChar = this.scanner.lastTokenLimChar();
          break;
        case TypeScript.TokenID.SUPER:
          ast = new TypeScript.AST(TypeScript.NodeType.Super);
          ast.minChar = minChar;
          this.tok = this.scanner.scan();
          limChar = this.scanner.lastTokenLimChar();
          break;
        case TypeScript.TokenID.TRUE:
          ast = new TypeScript.AST(TypeScript.NodeType.True);
          this.tok = this.scanner.scan();
          ast.minChar = minChar;
          break;
        case TypeScript.TokenID.FALSE:
          ast = new TypeScript.AST(TypeScript.NodeType.False);
          this.tok = this.scanner.scan();
          ast.minChar = minChar;
          break;
        case TypeScript.TokenID.NULL:
          ast = new TypeScript.AST(TypeScript.NodeType.Null);
          this.tok = this.scanner.scan();
          ast.minChar = minChar;
          break;
        case TypeScript.TokenID.NEW:
          minChar = this.scanner.pos;
          this.tok = this.scanner.scan();
          ast = new TypeScript.CallExpression(TypeScript.NodeType.New, this.parseTerm(errorRecoverySet, false, TypeContext.AllSimpleTypes, inCast), null);
          ast.minChar = minChar;
          limChar = this.scanner.lastTokenLimChar();
          inNew = true;
          break;
        case TypeScript.TokenID.FUNCTION:
          minChar = this.scanner.pos;
          ast = this.parseFncDecl(errorRecoverySet, false, false, false, null, false, false, false, TypeScript.Modifiers.None, null);
          ast.fncFlags |= TypeScript.FncFlags.IsFunctionExpression;
          ast.minChar = minChar;
          limChar = this.scanner.lastTokenLimChar();
          ast.limChar = limChar;
          break
      }
      if(ast == null) {
        if(this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToID(this.tok, this.strictMode)) {
          var idText = this.tok.getText();
          ast = this.createRef(idText, minChar);
          sawId = true;
          ast.minChar = minChar;
          this.tok = this.scanner.scan();
          if(this.tok.tokenId == TypeScript.TokenID.QMark) {
            ast.flags |= TypeScript.ASTFlags.PossibleOptionalParameter
          }else {
            if(this.tok.tokenId == TypeScript.TokenID.Arrow) {
              parseAsLambda = true
            }
          }
          limChar = this.scanner.lastTokenLimChar()
        }
      }
      if(inCast) {
        this.chkCurTok(TypeScript.TokenID.GT, "Expected '>'", errorRecoverySet)
      }
      if(ast == null) {
        switch(this.tok.tokenId) {
          case TypeScript.TokenID.LParen:
            minChar = this.scanner.pos;
            var prevTokId = this.scanner.previousToken().tokenId;
            this.tok = this.scanner.scan();
            var couldBeLambda = prevTokId == TypeScript.TokenID.LParen || prevTokId == TypeScript.TokenID.Comma || prevTokId == TypeScript.TokenID.EQ || prevTokId == TypeScript.TokenID.Colon;
            if(couldBeLambda && this.tok.tokenId == TypeScript.TokenID.RParen) {
              parseAsLambda = true;
              this.tok = this.scanner.scan()
            }else {
              ast = this.parseExpr(errorRecoverySet | TypeScript.ErrorRecoverySet.RParen, TypeScript.OperatorPrecedence.No, true, TypeContext.NoTypes);
              limChar = this.scanner.lastTokenLimChar();
              parseAsLambda = couldBeLambda && (ast.nodeType == TypeScript.NodeType.Name || ast.nodeType == TypeScript.NodeType.Comma) && (this.tok.tokenId == TypeScript.TokenID.Colon || this.tok.tokenId == TypeScript.TokenID.QMark)
            }
            if(ast && !parseAsLambda) {
              this.chkCurTok(TypeScript.TokenID.RParen, "Expected ')'", errorRecoverySet);
              ast.isParenthesized = true
            }
            break;
          case TypeScript.TokenID.NumberLit:
            var numTok = this.tok;
            this.tok = this.scanner.scan();
            ast = new TypeScript.NumberLiteral(numTok.value);
            ast.minChar = minChar;
            limChar = this.scanner.lastTokenLimChar();
            break;
          case TypeScript.TokenID.QString:
            ast = new TypeScript.StringLiteral(this.tok.getText());
            this.tok = this.scanner.scan();
            ast.minChar = minChar;
            limChar = this.scanner.lastTokenLimChar();
            break;
          case TypeScript.TokenID.Regex:
            var rtok = this.tok;
            ast = new TypeScript.RegexLiteral(rtok.regex);
            this.tok = this.scanner.scan();
            ast.minChar = minChar;
            limChar = this.scanner.lastTokenLimChar();
            break;
          case TypeScript.TokenID.LBrack:
            minChar = this.scanner.startPos;
            this.tok = this.scanner.scan();
            ast = this.parseArrayLiteral(TypeScript.ErrorRecoverySet.RBrack | errorRecoverySet);
            ast.minChar = minChar;
            limChar = this.scanner.pos;
            this.chkCurTok(TypeScript.TokenID.RBrack, "Expected ']'", errorRecoverySet);
            break;
          case TypeScript.TokenID.LCurly:
            minChar = this.scanner.startPos;
            this.tok = this.scanner.scan();
            var members = this.parseMemberList(TypeScript.ErrorRecoverySet.RCurly | errorRecoverySet);
            this.chkCurTok(TypeScript.TokenID.RCurly, "Expected '}'", errorRecoverySet);
            ast = new TypeScript.UnaryExpression(TypeScript.NodeType.ObjectLit, members);
            ast.minChar = minChar;
            limChar = this.scanner.lastTokenLimChar();
            members.minChar = minChar;
            members.limChar = limChar;
            break;
          case TypeScript.TokenID.LT:
            minChar = this.scanner.startPos;
            this.tok = this.scanner.scan();
            var term = this.parseTypeReference(TypeScript.ErrorRecoverySet.BinOp, false);
            this.chkCurTok(TypeScript.TokenID.GT, "Expected '>'", errorRecoverySet);
            ast = new TypeScript.UnaryExpression(TypeScript.NodeType.TypeAssertion, this.parseExpr(errorRecoverySet, TypeScript.OperatorPrecedence.Uni, false, TypeContext.NoTypes));
            ast.castTerm = term;
            break;
          default:
            if(this.prevExpr && TypeScript.hasFlag(this.prevExpr.flags, TypeScript.ASTFlags.PossibleOptionalParameter)) {
              parseAsLambda = true;
              ast = this.prevExpr
            }else {
              this.reportParseError("Check format of expression term");
              if(this.errorRecovery) {
                var ident = new TypeScript.MissingIdentifier;
                ident.minChar = minChar;
                ident.flags |= TypeScript.ASTFlags.Error;
                this.skip(errorRecoverySet | TypeScript.ErrorRecoverySet.Postfix);
                if(this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToID(this.tok, this.strictMode)) {
                  ident.text = this.tok.getText();
                  this.tok = this.scanner.scan();
                  limChar = this.scanner.lastTokenLimChar()
                }else {
                  limChar = this.scanner.lastTokenLimChar()
                }
                ast = ident
              }
            }
        }
      }
      if(parseAsLambda) {
        if(this.tok.tokenId == TypeScript.TokenID.Arrow || this.tok.tokenId == TypeScript.TokenID.Colon || this.tok.tokenId == TypeScript.TokenID.Comma || this.tok.tokenId == TypeScript.TokenID.RParen) {
          ast = this.parseFncDecl(errorRecoverySet, false, false, false, null, false, false, false, TypeScript.Modifiers.None, {preProcessedLambdaArgs:ast});
          ast.fncFlags |= TypeScript.FncFlags.IsFunctionExpression;
          ast.fncFlags |= TypeScript.FncFlags.IsFatArrowFunction;
          ast.minChar = minChar;
          limChar = this.scanner.lastTokenLimChar();
          ast.limChar = limChar
        }else {
          if(ast) {
            ast.isParenthesized = true
          }
        }
      }
      if(sawId && typeContext != TypeContext.NoTypes) {
        typeContext |= TypeContext.ArraySuffix
      }
      var postFix = this.parsePostfixOperators(errorRecoverySet, ast, allowCall, inNew, typeContext, minChar, limChar);
      if(postFix) {
        if(sawId && postFix.nodeType == TypeScript.NodeType.Index) {
          var binExpr = postFix;
          if(binExpr.operand2 == null) {
            postFix = this.convertToTypeReference(postFix)
          }
        }
        postFix.minChar = minChar;
        postFix.limChar = TypeScript.max(postFix.limChar, this.scanner.lastTokenLimChar());
        return postFix
      }else {
        return new TypeScript.AST(TypeScript.NodeType.Error)
      }
    };
    Parser.prototype.parseExpr = function(errorRecoverySet, minPrecedence, allowIn, typeContext) {
      var ast = null;
      var tokenInfo = TypeScript.lookupToken(this.tok.tokenId);
      var canAssign = true;
      var idHint = null;
      var minChar = this.scanner.startPos;
      var preComments = this.parseComments();
      var exprIsAnonLambda = false;
      if(tokenInfo != undefined && tokenInfo.unopNodeType != TypeScript.NodeType.None) {
        canAssign = false;
        this.tok = this.scanner.scan();
        var tempExpr = this.parseExpr(TypeScript.ErrorRecoverySet.BinOp | errorRecoverySet, tokenInfo.unopPrecedence, allowIn, TypeContext.NoTypes);
        if(tokenInfo.unopNodeType == TypeScript.NodeType.Pos && tempExpr.nodeType == TypeScript.NodeType.NumberLit) {
          ast = tempExpr
        }else {
          if(tokenInfo.unopNodeType == TypeScript.NodeType.Neg && tempExpr.nodeType == TypeScript.NodeType.NumberLit) {
            var numLit = tempExpr;
            numLit.value = -numLit.value;
            if(numLit.value == 0) {
              numLit.isNegativeZero = true
            }
            ast = tempExpr
          }else {
            ast = new TypeScript.UnaryExpression(tokenInfo.unopNodeType, tempExpr);
            ast.limChar = tempExpr.limChar
          }
        }
        ast.minChar = minChar
      }else {
        ast = this.parseTerm(TypeScript.ErrorRecoverySet.BinOp | TypeScript.ErrorRecoverySet.AddOp | errorRecoverySet, true, typeContext, false);
        var id;
        var temp;
        if(ast.nodeType == TypeScript.NodeType.Name) {
          id = ast;
          idHint = id.text
        }else {
          if(ast.nodeType == TypeScript.NodeType.Dot) {
            var subsumedExpr = false;
            if(this.inferPropertiesFromThisAssignment && (this.tok.tokenId == TypeScript.TokenID.Colon || this.tok.tokenId == TypeScript.TokenID.Asg) && this.parsingClassConstructorDefinition && this.nestingLevel == this.currentClassDefinition.constructorNestingLevel && ast.operand1.nodeType == TypeScript.NodeType.This) {
              if(ast.operand2.nodeType == TypeScript.NodeType.Name) {
                var op2ID = ast.operand2;
                if(!this.currentClassDefinition.knownMemberNames[op2ID.text]) {
                  ast = this.parseClassMemberVariableDeclaration(op2ID, ast.minChar, true, errorRecoverySet, TypeScript.Modifiers.Public);
                  subsumedExpr = true
                }
              }
            }
            if(!subsumedExpr) {
              temp = ast;
              while(temp.nodeType == TypeScript.NodeType.Dot) {
                var binExpr = temp;
                temp = binExpr.operand2
              }
              if(temp.nodeType == TypeScript.NodeType.Name) {
                id = temp;
                idHint = id.text
              }
            }
          }
        }
        if(!this.scanner.lastTokenHadNewline() && (this.tok.tokenId == TypeScript.TokenID.Inc || this.tok.tokenId == TypeScript.TokenID.Dec)) {
          canAssign = false;
          var operand = ast;
          ast = new TypeScript.UnaryExpression(this.tok.tokenId == TypeScript.TokenID.Inc ? TypeScript.NodeType.IncPost : TypeScript.NodeType.DecPost, operand);
          ast.limChar = this.scanner.pos;
          ast.minChar = operand.minChar;
          this.tok = this.scanner.scan()
        }
      }
      for(;;) {
        tokenInfo = TypeScript.lookupToken(this.tok.tokenId);
        if(tokenInfo == undefined || tokenInfo.binopNodeType == TypeScript.NodeType.None) {
          break
        }
        if(!allowIn && tokenInfo.binopNodeType == TypeScript.NodeType.In) {
          break
        }
        if(tokenInfo.binopPrecedence == TypeScript.OperatorPrecedence.Asg) {
          if(tokenInfo.binopPrecedence < minPrecedence) {
            break
          }
          if(!canAssign) {
            this.reportParseError("illegal assignment")
          }
        }else {
          if(tokenInfo.binopPrecedence <= minPrecedence) {
            break
          }
        }
        this.tok = this.scanner.scan();
        canAssign = false;
        if(tokenInfo.binopNodeType == TypeScript.NodeType.QMark) {
          this.prevExpr = ast;
          var qmarkNode = this.parseExpr(errorRecoverySet | TypeScript.ErrorRecoverySet.Colon, TypeScript.OperatorPrecedence.Asg, allowIn, TypeContext.NoTypes);
          this.prevExpr = null;
          if(!(qmarkNode.nodeType == TypeScript.NodeType.FuncDecl && TypeScript.hasFlag(qmarkNode.fncFlags, TypeScript.FncFlags.IsFatArrowFunction))) {
            this.chkCurTok(TypeScript.TokenID.Colon, "Expected :", errorRecoverySet | TypeScript.ErrorRecoverySet.ExprStart);
            ast = new TypeScript.TrinaryExpression(TypeScript.NodeType.QMark, ast, qmarkNode, this.parseExpr(errorRecoverySet | TypeScript.ErrorRecoverySet.BinOp, TypeScript.OperatorPrecedence.Asg, allowIn, TypeContext.NoTypes))
          }else {
            ast = qmarkNode;
            exprIsAnonLambda = true
          }
        }else {
          var tc = TypeContext.NoTypes;
          var binExpr2;
          binExpr2 = new TypeScript.BinaryExpression(tokenInfo.binopNodeType, ast, this.parseExpr(errorRecoverySet | TypeScript.ErrorRecoverySet.BinOp, tokenInfo.binopPrecedence, allowIn, TypeContext.NoTypes));
          if(binExpr2.operand2.nodeType == TypeScript.NodeType.FuncDecl) {
            var funcDecl = binExpr2.operand2;
            funcDecl.hint = idHint
          }
          binExpr2.minChar = ast.minChar;
          binExpr2.limChar = this.scanner.lastTokenLimChar();
          idHint = null;
          ast = binExpr2
        }
      }
      if(canAssign) {
        ast.flags |= TypeScript.ASTFlags.Writeable
      }
      if(!exprIsAnonLambda) {
        ast.minChar = minChar;
        ast.limChar = TypeScript.max(ast.limChar, this.scanner.lastTokenLimChar());
        ast.preComments = preComments;
        ast.postComments = this.parseCommentsForLine(this.scanner.line)
      }
      return ast
    };
    Parser.prototype.parsePostfixOperators = function(errorRecoverySet, ast, allowCall, inNew, typeContext, lhsMinChar, lhsLimChar) {
      var count = 0;
      if(!ast) {
        ast = new TypeScript.AST(TypeScript.NodeType.EmptyExpr);
        ast.isParenthesized = true
      }
      ast.minChar = lhsMinChar;
      ast.limChar = lhsLimChar;
      for(;;) {
        switch(this.tok.tokenId) {
          case TypeScript.TokenID.LParen:
            if(inNew) {
              var callExpr = ast;
              callExpr.args = this.parseArgList(errorRecoverySet);
              inNew = false
            }else {
              if(!allowCall) {
                return ast
              }
              ast = new TypeScript.CallExpression(TypeScript.NodeType.Call, ast, this.parseArgList(errorRecoverySet));
              ast.minChar = lhsMinChar
            }
            ast.limChar = this.scanner.pos;
            this.chkCurTok(TypeScript.TokenID.RParen, "Expected ')'", errorRecoverySet);
            break;
          case TypeScript.TokenID.LBrack:
            this.tok = this.scanner.scan();
            if(this.tok.tokenId == TypeScript.TokenID.RBrack) {
              if(TypeScript.hasFlag(typeContext, TypeContext.ArraySuffix)) {
                this.tok = this.scanner.scan();
                if(ast.nodeType == TypeScript.NodeType.TypeRef) {
                  var typeRef = ast;
                  typeRef.arrayCount++
                }else {
                  ast = new TypeScript.BinaryExpression(TypeScript.NodeType.Index, ast, null)
                }
                ast.limChar = this.scanner.pos;
                break
              }
            }
            ast = new TypeScript.BinaryExpression(TypeScript.NodeType.Index, ast, this.parseExpr(errorRecoverySet | TypeScript.ErrorRecoverySet.RBrack, TypeScript.OperatorPrecedence.No, true, TypeContext.NoTypes));
            ast.minChar = lhsMinChar;
            ast.limChar = this.scanner.pos;
            this.chkCurTok(TypeScript.TokenID.RBrack, "Expected ']'", errorRecoverySet);
            break;
          case TypeScript.TokenID.Dot:
            var name = null;
            var curpos = this.scanner.pos;
            this.tok = this.scanner.scan();
            if(this.tok.tokenId == TypeScript.TokenID.ID || !this.scanner.lastTokenHadNewline() && TypeScript.convertTokToIDName(this.tok)) {
              ast.flags |= TypeScript.ASTFlags.DotLHS;
              name = this.createRef(this.tok.getText(), this.scanner.startPos);
              name.limChar = this.scanner.pos;
              this.tok = this.scanner.scan()
            }else {
              this.reportParseError("Expected identifier following dot");
              if(this.errorRecovery) {
                this.skip(errorRecoverySet);
                ast.flags |= TypeScript.ASTFlags.Error | TypeScript.ASTFlags.DotLHS;
                return ast
              }else {
                name = new TypeScript.MissingIdentifier
              }
            }
            ast = new TypeScript.BinaryExpression(TypeScript.NodeType.Dot, ast, name);
            ast.minChar = lhsMinChar;
            ast.limChar = this.scanner.lastTokenLimChar();
            break;
          case TypeScript.TokenID.Arrow:
            ast = this.parseFncDecl(errorRecoverySet, false, false, false, null, false, false, false, TypeScript.Modifiers.None, {preProcessedLambdaArgs:ast});
            ast.fncFlags |= TypeScript.FncFlags.IsFunctionExpression;
            ast.minChar = lhsMinChar;
            ast.limChar = this.scanner.lastTokenLimChar();
            break;
          default:
            return ast
        }
      }
    };
    Parser.prototype.parseTry = function(tryNode, errorRecoverySet, allowedElements, parentModifiers) {
      var minChar = this.scanner.startPos;
      var preComments = this.parseComments();
      this.tok = this.scanner.scan();
      if(this.tok.tokenId != TypeScript.TokenID.LCurly) {
        this.reportParseError("Expected '{'");
        if(this.errorRecovery) {
          var etryNode = tryNode;
          etryNode.minChar = minChar;
          etryNode.limChar = this.scanner.lastTokenLimChar();
          etryNode.flags |= TypeScript.ASTFlags.Error;
          return etryNode
        }
      }
      tryNode.body = this.parseStatement(errorRecoverySet, allowedElements, parentModifiers);
      tryNode.minChar = minChar;
      tryNode.limChar = tryNode.body.limChar;
      tryNode.preComments = preComments;
      tryNode.postComments = this.parseComments();
      return tryNode
    };
    Parser.prototype.parseCatch = function(errorRecoverySet, allowedElements, parentModifiers) {
      var catchMinChar = this.scanner.startPos;
      var preComments = this.parseComments();
      this.tok = this.scanner.scan();
      this.chkCurTok(TypeScript.TokenID.LParen, "Expected '('", errorRecoverySet | TypeScript.ErrorRecoverySet.ExprStart);
      if(this.tok.tokenId != TypeScript.TokenID.ID || TypeScript.convertTokToID(this.tok, this.strictMode)) {
        this.reportParseError("Expected identifier in catch header");
        if(this.errorRecovery) {
          this.skip(errorRecoverySet);
          var ecatch = new TypeScript.Catch(new TypeScript.VarDecl(new TypeScript.MissingIdentifier, this.nestingLevel), new TypeScript.Statement(TypeScript.NodeType.Empty));
          ecatch.minChar = this.scanner.startPos;
          ecatch.limChar = this.scanner.pos;
          ecatch.flags |= TypeScript.ASTFlags.Error;
          return ecatch
        }
      }
      var param = new TypeScript.VarDecl(new TypeScript.Identifier(this.tok.getText()), this.nestingLevel);
      param.id.minChar = this.scanner.startPos;
      param.id.limChar = this.scanner.pos;
      param.minChar = param.id.minChar;
      param.limChar = param.id.limChar;
      this.tok = this.scanner.scan();
      this.chkCurTok(TypeScript.TokenID.RParen, "Expected ')'", errorRecoverySet | TypeScript.ErrorRecoverySet.StmtStart);
      if(this.tok.tokenId != TypeScript.TokenID.LCurly) {
        this.reportParseError("Expected '{' to start catch body");
        if(this.errorRecovery) {
          this.skip(errorRecoverySet);
          var ecatch = new TypeScript.Catch(new TypeScript.VarDecl(new TypeScript.MissingIdentifier, this.nestingLevel), new TypeScript.Statement(TypeScript.NodeType.Empty));
          ecatch.minChar = this.scanner.startPos;
          ecatch.limChar = this.scanner.pos;
          ecatch.flags |= TypeScript.ASTFlags.Error;
          return ecatch
        }
      }
      var catchStmt = this.parseStatement(errorRecoverySet, allowedElements, parentModifiers);
      var catchNode = new TypeScript.Catch(param, catchStmt);
      catchNode.minChar = catchMinChar;
      catchNode.limChar = catchStmt.limChar;
      catchNode.preComments = preComments;
      catchNode.postComments = this.parseComments();
      return catchNode
    };
    Parser.prototype.parseFinally = function(errorRecoverySet, allowedElements, parentModifiers) {
      var finMinChar = this.scanner.startPos;
      var preComments = this.parseComments();
      this.tok = this.scanner.scan();
      if(this.tok.tokenId != TypeScript.TokenID.LCurly) {
        this.reportParseError("Expected '{' to start body of finally statement");
        if(this.errorRecovery) {
          this.skip(errorRecoverySet);
          var efin = new TypeScript.Finally(new TypeScript.Statement(TypeScript.NodeType.Empty));
          efin.flags |= TypeScript.ASTFlags.Error;
          efin.minChar = this.scanner.startPos;
          efin.limChar = this.scanner.pos;
          return efin
        }
      }
      var finBody = this.parseStatement(errorRecoverySet, allowedElements, parentModifiers);
      var fin = new TypeScript.Finally(finBody);
      fin.minChar = finMinChar;
      fin.limChar = fin.body.limChar;
      fin.preComments = preComments;
      fin.postComments = this.parseComments();
      return fin
    };
    Parser.prototype.parseTryCatchFinally = function(errorRecoverySet, allowedElements, parentModifiers, labelList) {
      var tryPart = new TypeScript.Try(null);
      var tryMinChar = this.scanner.startPos;
      this.pushStmt(tryPart, labelList);
      this.parseTry(tryPart, errorRecoverySet | TypeScript.ErrorRecoverySet.Catch, allowedElements, parentModifiers);
      this.popStmt();
      var tc = null;
      var tf = null;
      if(this.tok.tokenId == TypeScript.TokenID.CATCH) {
        var catchPart = this.parseCatch(errorRecoverySet | TypeScript.ErrorRecoverySet.Catch, allowedElements, parentModifiers);
        tc = new TypeScript.TryCatch(tryPart, catchPart);
        tc.minChar = tryPart.minChar;
        tc.limChar = catchPart.limChar
      }
      if(this.tok.tokenId != TypeScript.TokenID.FINALLY) {
        if(tc == null) {
          this.reportParseError("try with neither catch nor finally");
          if(this.errorRecovery) {
            var etf = new TypeScript.TryFinally(tryPart, new TypeScript.Finally(new TypeScript.AST(TypeScript.NodeType.Empty)));
            etf.flags |= TypeScript.ASTFlags.Error;
            etf.minChar = this.scanner.startPos;
            etf.limChar = this.scanner.pos;
            return etf
          }
          return new TypeScript.TryFinally(tryPart, new TypeScript.Finally(new TypeScript.AST(TypeScript.NodeType.Empty)))
        }else {
          return tc
        }
      }else {
        if(tc) {
          tryPart = tc
        }
        var finallyPart = this.parseFinally(errorRecoverySet, allowedElements, parentModifiers);
        tf = new TypeScript.TryFinally(tryPart, finallyPart);
        tf.minChar = tryMinChar;
        tf.limChar = finallyPart.limChar;
        return tf
      }
    };
    Parser.prototype.parseStatement = function(errorRecoverySet, allowedElements, parentModifiers) {
      var ast = null;
      var labelList = null;
      var astList = null;
      var temp;
      var modifiers = TypeScript.Modifiers.None;
      var minChar = this.scanner.startPos;
      var forInOk = false;
      var needTerminator = false;
      var fnOrVar = null;
      var preComments = this.parseComments();
      this.state = ParseState.StartStatement;
      function isAmbient() {
        return TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Ambient) || TypeScript.hasFlag(parentModifiers, TypeScript.Modifiers.Ambient)
      }
      function mayNotBeExported() {
        if(TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Exported)) {
          this.reportError("Statement may not be exported")
        }
      }
      for(;;) {
        switch(this.tok.tokenId) {
          case TypeScript.TokenID.EOF:
            ast = new TypeScript.AST(TypeScript.NodeType.Error);
            ast.minChar = minChar;
            ast.limChar = this.scanner.pos;
            break;
          case TypeScript.TokenID.FUNCTION:
            if(this.inStaticFnc) {
              this.reportParseError("Ambient static function delarations may only contain other ambient static function declarations")
            }
            if(this.parsingDeclareFile || isAmbient() || this.ambientModule) {
              this.tok = this.scanner.scan();
              fnOrVar = this.parsePropertyDecl(errorRecoverySet | TypeScript.ErrorRecoverySet.SColon, modifiers, true, false);
              if(fnOrVar.nodeType == TypeScript.NodeType.VarDecl) {
                this.reportParseError("function keyword can only introduce function declaration")
              }else {
                if(fnOrVar.nodeType == TypeScript.NodeType.FuncDecl && (fnOrVar.fncFlags, TypeScript.FncFlags.IsFatArrowFunction)) {
                  needTerminator = true
                }
              }
              ast = fnOrVar
            }else {
              ast = this.parseFncDecl(errorRecoverySet, true, false, false, null, false, false, isAmbient(), modifiers, null);
              if(TypeScript.hasFlag(ast.fncFlags, TypeScript.FncFlags.IsFatArrowFunction)) {
                needTerminator = true
              }
              if(this.ambientModule) {
                this.reportParseError("function declaration not permitted within ambient module")
              }
              if(TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Exported)) {
                ast.fncFlags |= TypeScript.FncFlags.Exported
              }
            }
            break;
          case TypeScript.TokenID.MODULE:
            if((allowedElements & TypeScript.AllowedElements.ModuleDecls) == TypeScript.AllowedElements.None) {
              this.reportParseError("module not allowed in this context");
              this.tok = this.scanner.scan();
              ast = new TypeScript.AST(TypeScript.NodeType.Error);
              ast.minChar = minChar;
              ast.limChar = this.scanner.lastTokenLimChar()
            }else {
              ast = this.parseModuleDecl(errorRecoverySet, modifiers)
            }
            break;
          case TypeScript.TokenID.IMPORT:
            if((allowedElements & TypeScript.AllowedElements.ModuleDecls) == TypeScript.AllowedElements.None) {
              this.reportParseError("module not allowed in this context");
              this.tok = this.scanner.scan();
              ast = new TypeScript.AST(TypeScript.NodeType.Error);
              ast.minChar = minChar;
              ast.limChar = this.scanner.lastTokenLimChar()
            }else {
              ast = this.parseImportDecl(errorRecoverySet, modifiers)
            }
            break;
          case TypeScript.TokenID.EXPORT:
            if((allowedElements & TypeScript.AllowedElements.ModuleDecls) == TypeScript.AllowedElements.None) {
              this.reportParseError("'export' statements are only allowed at the global and module levels");
              this.tok = this.scanner.scan();
              ast = new TypeScript.AST(TypeScript.NodeType.Error);
              ast.minChar = minChar;
              ast.limChar = this.scanner.lastTokenLimChar()
            }
            if(this.topLevel) {
              this.hasTopLevelImportOrExport = true
            }
            modifiers |= TypeScript.Modifiers.Exported;
            this.tok = this.scanner.scan();
            break;
          case TypeScript.TokenID.PRIVATE:
            modifiers |= TypeScript.Modifiers.Private;
            this.tok = this.scanner.scan();
            if(this.parsingClassConstructorDefinition) {
              if(!this.inferPropertiesFromThisAssignment) {
                this.reportParseError("Property declarations are not permitted within constructor bodies")
              }
              minChar = this.scanner.pos;
              if(this.inferPropertiesFromThisAssignment && (this.tok.tokenId != TypeScript.TokenID.THIS || (this.tok = this.scanner.scan()).tokenId != TypeScript.TokenID.Dot)) {
                this.reportParseError("Expected 'this.' for property declaration");
                this.tok = this.scanner.scan();
                ast = new TypeScript.AST(TypeScript.NodeType.Error);
                ast.minChar = minChar;
                ast.limChar = this.scanner.lastTokenLimChar()
              }else {
                this.tok = this.scanner.scan();
                var id = new TypeScript.Identifier(this.tok.getText());
                id.minChar = this.scanner.startPos;
                id.limChar = this.scanner.pos;
                this.tok = this.scanner.scan();
                ast = this.parseClassMemberVariableDeclaration(id, minChar, this.parsingClassConstructorDefinition, errorRecoverySet, modifiers)
              }
            }else {
              if(this.tok.tokenId != TypeScript.TokenID.INTERFACE) {
                if(this.tok.tokenId == TypeScript.TokenID.GET) {
                  this.prevIDTok = this.tok;
                  this.tok = this.scanner.scan();
                  if(TypeScript.codeGenTarget < TypeScript.CodeGenTarget.ES5) {
                    this.reportParseError("Property accessors are only available when targeting ES5 or greater")
                  }
                  if(this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToID(this.tok, this.strictMode)) {
                    modifiers |= TypeScript.Modifiers.Getter;
                    this.prevIDTok = null
                  }
                }else {
                  if(this.tok.tokenId == TypeScript.TokenID.SET) {
                    this.prevIDTok = this.tok;
                    this.tok = this.scanner.scan();
                    if(TypeScript.codeGenTarget < TypeScript.CodeGenTarget.ES5) {
                      this.reportParseError("Property accessors are only available when targeting ES5 or greater")
                    }
                    if(this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToID(this.tok, this.strictMode)) {
                      modifiers |= TypeScript.Modifiers.Setter;
                      this.prevIDTok = null
                    }
                  }
                }
                fnOrVar = this.parsePropertyDecl(errorRecoverySet | TypeScript.ErrorRecoverySet.SColon, modifiers, isAmbient(), false);
                if(fnOrVar.nodeType == TypeScript.NodeType.VarDecl || fnOrVar.nodeType == TypeScript.NodeType.FuncDecl && TypeScript.hasFlag(fnOrVar.fncFlags, TypeScript.FncFlags.IsFatArrowFunction)) {
                  needTerminator = true
                }
                ast = fnOrVar
              }
            }
            break;
          case TypeScript.TokenID.PUBLIC:
            if(this.parsingClassConstructorDefinition) {
              if(!this.inferPropertiesFromThisAssignment) {
                this.reportParseError("Property declarations are not permitted within constructor bodies")
              }
              this.tok = this.scanner.scan();
              minChar = this.scanner.pos;
              modifiers |= TypeScript.Modifiers.Public;
              if(this.inferPropertiesFromThisAssignment && (this.tok.tokenId != TypeScript.TokenID.THIS || (this.tok = this.scanner.scan()).tokenId != TypeScript.TokenID.Dot)) {
                this.reportParseError("Expected 'this.' for property declaration");
                this.tok = this.scanner.scan();
                ast = new TypeScript.AST(TypeScript.NodeType.Error);
                ast.minChar = minChar;
                ast.limChar = this.scanner.lastTokenLimChar()
              }else {
                this.tok = this.scanner.scan();
                var id = new TypeScript.Identifier(this.tok.getText());
                id.minChar = this.scanner.startPos;
                id.limChar = this.scanner.pos;
                this.tok = this.scanner.scan();
                ast = this.parseClassMemberVariableDeclaration(id, minChar, this.parsingClassConstructorDefinition, errorRecoverySet, modifiers)
              }
            }else {
              if((allowedElements & TypeScript.AllowedElements.Properties) == TypeScript.AllowedElements.None) {
                this.reportParseError("'property' statements are only allowed within classes");
                this.tok = this.scanner.scan();
                ast = new TypeScript.AST(TypeScript.NodeType.Error);
                ast.minChar = minChar;
                ast.limChar = this.scanner.lastTokenLimChar()
              }else {
                modifiers |= TypeScript.Modifiers.Public;
                this.tok = this.scanner.scan();
                if(this.tok.tokenId == TypeScript.TokenID.GET) {
                  this.prevIDTok = this.tok;
                  this.tok = this.scanner.scan();
                  if(TypeScript.codeGenTarget < TypeScript.CodeGenTarget.ES5) {
                    this.reportParseError("Property accessors are only available when targeting ES5 or greater")
                  }
                  if(this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToID(this.tok, this.strictMode)) {
                    modifiers |= TypeScript.Modifiers.Getter;
                    this.prevIDTok = null
                  }
                }else {
                  if(this.tok.tokenId == TypeScript.TokenID.SET) {
                    this.prevIDTok = this.tok;
                    this.tok = this.scanner.scan();
                    if(TypeScript.codeGenTarget < TypeScript.CodeGenTarget.ES5) {
                      this.reportParseError("Property accessors are only available when targeting ES5 or greater")
                    }
                    if(this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToID(this.tok, this.strictMode)) {
                      modifiers |= TypeScript.Modifiers.Setter;
                      this.prevIDTok = null
                    }
                  }
                }
                fnOrVar = this.parsePropertyDecl(errorRecoverySet | TypeScript.ErrorRecoverySet.SColon, modifiers, isAmbient(), false);
                if(fnOrVar.nodeType == TypeScript.NodeType.VarDecl || fnOrVar.nodeType == TypeScript.NodeType.FuncDecl && TypeScript.hasFlag(fnOrVar.fncFlags, TypeScript.FncFlags.IsFatArrowFunction)) {
                  needTerminator = true
                }
                ast = fnOrVar
              }
            }
            break;
          case TypeScript.TokenID.DECLARE:
            if(!(allowedElements & TypeScript.AllowedElements.AmbientDecls)) {
              this.reportParseError("Ambient declarations are only allowed at the top-level or module scopes")
            }
            if(!this.parsingDeclareFile && TypeScript.hasFlag(parentModifiers, TypeScript.Modifiers.Ambient)) {
              this.reportParseError("Duplicate ambient declaration in this context. (Is the enclosing module or class already ambient?)")
            }
            modifiers |= TypeScript.Modifiers.Ambient;
            this.tok = this.scanner.scan();
            break;
          case TypeScript.TokenID.CLASS:
            if((allowedElements & TypeScript.AllowedElements.ClassDecls) == TypeScript.AllowedElements.None) {
              this.reportParseError("class not allowed in this context");
              this.tok = this.scanner.scan();
              ast = new TypeScript.AST(TypeScript.NodeType.Error);
              ast.minChar = minChar;
              ast.limChar = this.scanner.lastTokenLimChar()
            }else {
              ast = this.parseClassDecl(errorRecoverySet, minChar, modifiers)
            }
            break;
          case TypeScript.TokenID.INTERFACE:
            if((allowedElements & TypeScript.AllowedElements.InterfaceDecls) == TypeScript.AllowedElements.None) {
              this.reportParseError("interface not allowed in this context");
              this.tok = this.scanner.scan();
              ast = new TypeScript.AST(TypeScript.NodeType.Error);
              ast.minChar = minChar;
              ast.limChar = this.scanner.lastTokenLimChar()
            }else {
              ast = this.parseInterfaceDecl(errorRecoverySet, modifiers)
            }
            break;
          case TypeScript.TokenID.VAR:
            var declAst = this.parseVarDecl(errorRecoverySet | TypeScript.ErrorRecoverySet.StmtStart, modifiers, true, false, false);
            if(declAst.nodeType == TypeScript.NodeType.VarDecl) {
              ast = declAst
            }else {
              ast = new TypeScript.Block(declAst, false)
            }
            needTerminator = true;
            if(this.parsingDeclareFile || this.ambientModule && ast.nodeType == TypeScript.NodeType.VarDecl) {
              ast.varFlags |= TypeScript.VarFlags.Exported
            }
            break;
          case TypeScript.TokenID.STATIC:
            if(this.currentClassDecl == null) {
              this.reportParseError("Statics may only be class members")
            }
            mayNotBeExported();
            modifiers |= TypeScript.Modifiers.Public;
            this.tok = this.scanner.scan();
            if(this.tok.tokenId == TypeScript.TokenID.GET) {
              this.prevIDTok = this.tok;
              this.tok = this.scanner.scan();
              if(TypeScript.codeGenTarget < TypeScript.CodeGenTarget.ES5) {
                this.reportParseError("Property accessors are only available when targeting ES5 or greater")
              }
              if(this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToID(this.tok, this.strictMode)) {
                modifiers |= TypeScript.Modifiers.Getter;
                this.prevIDTok = null
              }
            }else {
              if(this.tok.tokenId == TypeScript.TokenID.SET) {
                this.tok = this.scanner.scan();
                if(TypeScript.codeGenTarget < TypeScript.CodeGenTarget.ES5) {
                  this.reportParseError("Property accessors are only available when targeting ES5 or greater")
                }
                if(this.tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToID(this.tok, this.strictMode)) {
                  modifiers |= TypeScript.Modifiers.Setter
                }
              }
            }
            if(isAmbient()) {
              modifiers |= TypeScript.Modifiers.Ambient
            }
            fnOrVar = this.parsePropertyDecl(errorRecoverySet | TypeScript.ErrorRecoverySet.SColon, modifiers, this.parsingDeclareFile || (modifiers & TypeScript.Modifiers.Ambient) != TypeScript.Modifiers.None, true);
            var staticsList = this.topStaticsList();
            if(staticsList && fnOrVar.nodeType == TypeScript.NodeType.VarDecl) {
              staticsList.append(fnOrVar)
            }
            if(fnOrVar.nodeType == TypeScript.NodeType.VarDecl || fnOrVar.nodeType == TypeScript.NodeType.FuncDecl && TypeScript.hasFlag(fnOrVar.fncFlags, TypeScript.FncFlags.IsFatArrowFunction)) {
              needTerminator = true
            }
            ast = fnOrVar;
            break;
          case TypeScript.TokenID.FOR:
            mayNotBeExported();
            if(modifiers != TypeScript.Modifiers.None) {
              this.reportParseError("syntax error: for statement does not take modifiers")
            }
            minChar = this.scanner.startPos;
            this.chkNxtTok(TypeScript.TokenID.LParen, "Expected '('", errorRecoverySet | TypeScript.ErrorRecoverySet.ExprStart | TypeScript.ErrorRecoverySet.Var);
            this.state = ParseState.ForInit;
            forInOk = true;
            switch(this.tok.tokenId) {
              case TypeScript.TokenID.VAR:
                temp = this.parseVarDecl(errorRecoverySet | TypeScript.ErrorRecoverySet.SColon | TypeScript.ErrorRecoverySet.In, TypeScript.Modifiers.None, false, false, false);
                break;
              case TypeScript.TokenID.SColon:
                temp = null;
                this.state = ParseState.ForCondStart;
                break;
              default:
                temp = this.parseExpr(errorRecoverySet | TypeScript.ErrorRecoverySet.SColon | TypeScript.ErrorRecoverySet.In, TypeScript.OperatorPrecedence.No, false, TypeContext.NoTypes);
                break
            }
            this.state = ParseState.ForInitAfterVar;
            if(this.tok.tokenId == TypeScript.TokenID.IN) {
              if(temp == null || !forInOk) {
                this.reportParseError("malformed for statement");
                if(this.errorRecovery) {
                  this.skip(errorRecoverySet | TypeScript.ErrorRecoverySet.StmtStart);
                  ast = new TypeScript.AST(TypeScript.NodeType.Empty);
                  ast.flags |= TypeScript.ASTFlags.Error
                }
              }else {
                this.tok = this.scanner.scan();
                var forInStmt = new TypeScript.ForInStatement(temp, this.parseExpr(TypeScript.ErrorRecoverySet.RParen | errorRecoverySet, TypeScript.OperatorPrecedence.Cma, false, TypeContext.NoTypes));
                forInStmt.limChar = this.scanner.pos;
                this.chkCurTok(TypeScript.TokenID.RParen, "Expected ')'", TypeScript.ErrorRecoverySet.StmtStart | errorRecoverySet);
                this.pushStmt(forInStmt, labelList);
                forInStmt.body = this.parseStatement(errorRecoverySet, allowedElements, parentModifiers);
                this.popStmt();
                forInStmt.minChar = minChar;
                ast = forInStmt
              }
            }else {
              var forStmt = new TypeScript.ForStatement(temp);
              forStmt.minChar = minChar;
              this.chkCurTok(TypeScript.TokenID.SColon, "Expected ';'", errorRecoverySet);
              if(this.tok.tokenId == TypeScript.TokenID.SColon) {
                forStmt.cond = null
              }else {
                forStmt.cond = this.parseExpr(errorRecoverySet | TypeScript.ErrorRecoverySet.SColon | TypeScript.ErrorRecoverySet.RParen, TypeScript.OperatorPrecedence.No, true, TypeContext.NoTypes);
                if(this.tok.tokenId != TypeScript.TokenID.SColon) {
                  this.skip(errorRecoverySet | TypeScript.ErrorRecoverySet.StmtStart);
                  ast = forStmt;
                  ast.flags |= TypeScript.ASTFlags.Error
                }
              }
              this.tok = this.scanner.scan();
              if(this.tok.tokenId == TypeScript.TokenID.RParen) {
                forStmt.incr = null
              }else {
                forStmt.incr = this.parseExpr(errorRecoverySet | TypeScript.ErrorRecoverySet.SColon | TypeScript.ErrorRecoverySet.RParen, TypeScript.OperatorPrecedence.No, true, TypeContext.NoTypes)
              }
              this.chkCurTok(TypeScript.TokenID.RParen, "Expected ')'", errorRecoverySet | TypeScript.ErrorRecoverySet.LCurly);
              this.pushStmt(forStmt, labelList);
              forStmt.body = this.parseStatement(errorRecoverySet, allowedElements, parentModifiers);
              this.popStmt();
              forStmt.limChar = forStmt.body.limChar;
              ast = forStmt
            }
            break;
          case TypeScript.TokenID.WITH:
            if(TypeScript.codeGenTarget < TypeScript.CodeGenTarget.ES5) {
              this.reportParseError("'with' statements are only available in ES5 codegen mode or better")
            }
            if(this.strictMode) {
              this.reportParseError("'with' statements are not available in strict mode")
            }
            mayNotBeExported();
            if(modifiers != TypeScript.Modifiers.None) {
              this.reportParseError("'with' statement does not take modifiers")
            }
            minChar = this.scanner.startPos;
            this.chkNxtTok(TypeScript.TokenID.LParen, "Expected '('", errorRecoverySet | TypeScript.ErrorRecoverySet.ExprStart | TypeScript.ErrorRecoverySet.Var);
            var expr = this.parseExpr(errorRecoverySet | TypeScript.ErrorRecoverySet.Colon, TypeScript.OperatorPrecedence.No, true, TypeContext.NoTypes);
            this.chkCurTok(TypeScript.TokenID.RParen, "Expected ')'", errorRecoverySet | TypeScript.ErrorRecoverySet.LCurly);
            var withStmt = new TypeScript.WithStatement(expr);
            withStmt.body = this.parseStatement(errorRecoverySet, allowedElements, parentModifiers);
            withStmt.minChar = minChar;
            withStmt.limChar = withStmt.body.limChar;
            ast = withStmt;
            break;
          case TypeScript.TokenID.SWITCH:
            mayNotBeExported();
            if(modifiers != TypeScript.Modifiers.None) {
              this.reportParseError("'switch' statement does not take modifiers")
            }
            this.chkNxtTok(TypeScript.TokenID.LParen, "Expected '('", errorRecoverySet | TypeScript.ErrorRecoverySet.ExprStart);
            var switchStmt = new TypeScript.SwitchStatement(this.parseExpr(errorRecoverySet | TypeScript.ErrorRecoverySet.RParen, TypeScript.OperatorPrecedence.No, true, TypeContext.NoTypes));
            this.chkCurTok(TypeScript.TokenID.RParen, "Expected ')'", errorRecoverySet | TypeScript.ErrorRecoverySet.LCurly);
            var caseListMinChar = this.scanner.startPos;
            this.chkCurTok(TypeScript.TokenID.LCurly, "Expected '{'", errorRecoverySet | TypeScript.ErrorRecoverySet.SCase);
            switchStmt.defaultCase = null;
            switchStmt.caseList = new TypeScript.ASTList;
            var caseStmt = null;
            this.pushStmt(switchStmt, labelList);
            for(;;) {
              if(this.tok.tokenId == TypeScript.TokenID.CASE || this.tok.tokenId == TypeScript.TokenID.DEFAULT) {
                var isDefault = this.tok.tokenId == TypeScript.TokenID.DEFAULT;
                caseStmt = new TypeScript.CaseStatement;
                caseStmt.minChar = this.scanner.startPos;
                this.tok = this.scanner.scan();
                if(isDefault) {
                  switchStmt.defaultCase = caseStmt
                }else {
                  caseStmt.expr = this.parseExpr(errorRecoverySet | TypeScript.ErrorRecoverySet.Colon, TypeScript.OperatorPrecedence.No, true, TypeContext.NoTypes)
                }
                this.chkCurTok(TypeScript.TokenID.Colon, "Expected ':'", errorRecoverySet | TypeScript.ErrorRecoverySet.StmtStart);
                caseStmt.body = new TypeScript.ASTList;
                this.parseStmtList(errorRecoverySet | TypeScript.ErrorRecoverySet.RCurly, caseStmt.body, false, true, allowedElements, modifiers);
                caseStmt.limChar = caseStmt.body.limChar;
                switchStmt.caseList.append(caseStmt)
              }else {
                break
              }
            }
            switchStmt.caseList.minChar = caseListMinChar;
            switchStmt.caseList.limChar = this.scanner.pos;
            switchStmt.limChar = switchStmt.caseList.limChar;
            this.chkCurTok(TypeScript.TokenID.RCurly, "Expected '}'", errorRecoverySet);
            this.popStmt();
            ast = switchStmt;
            break;
          case TypeScript.TokenID.WHILE:
            mayNotBeExported();
            if(modifiers != TypeScript.Modifiers.None) {
              this.reportParseError("'while' statement does not take modifiers")
            }
            minChar = this.scanner.startPos;
            this.chkNxtTok(TypeScript.TokenID.LParen, "Expected '('", TypeScript.ErrorRecoverySet.ExprStart | errorRecoverySet);
            var whileStmt = new TypeScript.WhileStatement(this.parseExpr(errorRecoverySet | TypeScript.ErrorRecoverySet.RParen, TypeScript.OperatorPrecedence.No, true, TypeContext.NoTypes));
            whileStmt.minChar = minChar;
            this.chkCurTok(TypeScript.TokenID.RParen, "Expected ')'", errorRecoverySet | TypeScript.ErrorRecoverySet.StmtStart);
            this.pushStmt(whileStmt, labelList);
            whileStmt.body = this.parseStatement(errorRecoverySet, allowedElements, parentModifiers);
            whileStmt.limChar = whileStmt.body.limChar;
            this.popStmt();
            ast = whileStmt;
            break;
          case TypeScript.TokenID.DO:
            mayNotBeExported();
            if(modifiers != TypeScript.Modifiers.None) {
              this.reportParseError("'do' statement does not take modifiers")
            }
            minChar = this.scanner.startPos;
            this.tok = this.scanner.scan();
            var doStmt = new TypeScript.DoWhileStatement;
            doStmt.minChar = minChar;
            this.pushStmt(doStmt, labelList);
            doStmt.body = this.parseStatement(errorRecoverySet | TypeScript.ErrorRecoverySet.While, allowedElements, parentModifiers);
            this.popStmt();
            doStmt.whileAST = new TypeScript.Identifier("while");
            doStmt.whileAST.minChar = this.scanner.startPos;
            this.chkCurTok(TypeScript.TokenID.WHILE, "Expected 'while'", errorRecoverySet | TypeScript.ErrorRecoverySet.LParen);
            doStmt.whileAST.limChar = doStmt.whileAST.minChar + 5;
            this.chkCurTok(TypeScript.TokenID.LParen, "Expected '('", errorRecoverySet | TypeScript.ErrorRecoverySet.ExprStart);
            doStmt.cond = this.parseExpr(errorRecoverySet | TypeScript.ErrorRecoverySet.RParen, TypeScript.OperatorPrecedence.No, true, TypeContext.NoTypes);
            doStmt.limChar = this.scanner.pos;
            this.chkCurTok(TypeScript.TokenID.RParen, "Expected ')'", errorRecoverySet);
            ast = doStmt;
            if(this.tok.tokenId == TypeScript.TokenID.SColon) {
              this.tok = this.scanner.scan()
            }
            break;
          case TypeScript.TokenID.IF:
            mayNotBeExported();
            if(modifiers != TypeScript.Modifiers.None) {
              this.reportParseError("if statement does not take modifiers")
            }
            minChar = this.scanner.startPos;
            this.chkNxtTok(TypeScript.TokenID.LParen, "Expected '('", errorRecoverySet | TypeScript.ErrorRecoverySet.ExprStart);
            var ifStmt = new TypeScript.IfStatement(this.parseExpr(errorRecoverySet | TypeScript.ErrorRecoverySet.LParen, TypeScript.OperatorPrecedence.No, true, TypeContext.NoTypes));
            ifStmt.minChar = minChar;
            this.chkCurTok(TypeScript.TokenID.RParen, "Expected ')'", errorRecoverySet | TypeScript.ErrorRecoverySet.StmtStart);
            this.pushStmt(ifStmt, labelList);
            ifStmt.thenBod = this.parseStatement(TypeScript.ErrorRecoverySet.Else | errorRecoverySet, allowedElements, parentModifiers);
            ifStmt.limChar = ifStmt.thenBod.limChar;
            if(this.tok.tokenId == TypeScript.TokenID.ELSE) {
              this.tok = this.scanner.scan();
              ifStmt.elseBod = this.parseStatement(errorRecoverySet, allowedElements, parentModifiers);
              ifStmt.limChar = ifStmt.elseBod.limChar
            }
            this.popStmt();
            ast = ifStmt;
            break;
          case TypeScript.TokenID.TRY:
            mayNotBeExported();
            if(modifiers != TypeScript.Modifiers.None) {
              this.reportParseError("try statement does not take modifiers")
            }
            minChar = this.scanner.startPos;
            ast = this.parseTryCatchFinally(errorRecoverySet, TypeScript.AllowedElements.FunctionBody, parentModifiers, labelList);
            break;
          case TypeScript.TokenID.LCurly:
            mayNotBeExported();
            if(modifiers != TypeScript.Modifiers.None) {
              this.reportParseError("block does not take modifiers")
            }
            minChar = this.scanner.startPos;
            this.tok = this.scanner.scan();
            var block = new TypeScript.Block(new TypeScript.ASTList, true);
            this.pushStmt(block, labelList);
            this.parseStmtList(errorRecoverySet | TypeScript.ErrorRecoverySet.RCurly, block.stmts, false, false, TypeScript.AllowedElements.Block, modifiers);
            this.popStmt();
            block.stmts.minChar = minChar;
            block.stmts.limChar = this.scanner.pos;
            block.minChar = block.stmts.minChar;
            block.limChar = block.stmts.limChar;
            this.chkCurTok(TypeScript.TokenID.RCurly, "Expected '}'", errorRecoverySet);
            ast = block;
            break;
          case TypeScript.TokenID.SColon:
            mayNotBeExported();
            if(modifiers != TypeScript.Modifiers.None) {
              this.reportParseError("modifier can not appear here")
            }
            ast = new TypeScript.AST(TypeScript.NodeType.Empty);
            this.tok = this.scanner.scan();
            break;
          case TypeScript.TokenID.BREAK:
          ;
          case TypeScript.TokenID.CONTINUE:
            mayNotBeExported();
            if(modifiers != TypeScript.Modifiers.None) {
              this.reportParseError("modifiers can not appear before jump statement")
            }
            var jump = new TypeScript.Jump(this.tok.tokenId == TypeScript.TokenID.BREAK ? TypeScript.NodeType.Break : TypeScript.NodeType.Continue);
            this.tok = this.scanner.scan();
            if(this.tok.tokenId == TypeScript.TokenID.ID && !this.scanner.lastTokenHadNewline()) {
              jump.target = this.tok.getText();
              this.tok = this.scanner.scan()
            }
            this.resolveJumpTarget(jump);
            ast = jump;
            needTerminator = true;
            break;
          case TypeScript.TokenID.RETURN:
            mayNotBeExported();
            if(modifiers != TypeScript.Modifiers.None) {
              this.reportParseError("modifiers can not appear before return statement")
            }
            if(!this.inFnc) {
              this.reportParseError("return statement outside of function body")
            }
            minChar = this.scanner.startPos;
            this.tok = this.scanner.scan();
            var retStmt = new TypeScript.ReturnStatement;
            retStmt.minChar = minChar;
            if(this.tok.tokenId != TypeScript.TokenID.SColon && this.tok.tokenId != TypeScript.TokenID.RCurly && !this.scanner.lastTokenHadNewline()) {
              retStmt.returnExpression = this.parseExpr(errorRecoverySet | TypeScript.ErrorRecoverySet.SColon, TypeScript.OperatorPrecedence.No, true, TypeContext.NoTypes)
            }
            needTerminator = true;
            retStmt.limChar = this.scanner.lastTokenLimChar();
            ast = retStmt;
            break;
          case TypeScript.TokenID.THROW:
            mayNotBeExported();
            if(modifiers != TypeScript.Modifiers.None) {
              this.reportParseError("modifiers can not appear before a throw statement")
            }
            minChar = this.scanner.startPos;
            this.tok = this.scanner.scan();
            if(this.tok.tokenId != TypeScript.TokenID.SColon && this.tok.tokenId != TypeScript.TokenID.RCurly && !this.scanner.lastTokenHadNewline()) {
              temp = this.parseExpr(errorRecoverySet | TypeScript.ErrorRecoverySet.SColon, TypeScript.OperatorPrecedence.No, true, TypeContext.NoTypes)
            }else {
              this.reportParseError("throw with no target");
              temp = null
            }
            ast = new TypeScript.UnaryExpression(TypeScript.NodeType.Throw, temp);
            ast.limChar = this.scanner.lastTokenLimChar();
            needTerminator = true;
            break;
          case TypeScript.TokenID.ENUM:
            this.tok = this.scanner.scan();
            ast = this.parseEnumDecl(errorRecoverySet, modifiers);
            ast.minChar = minChar;
            ast.limChar = this.scanner.lastTokenLimChar();
            if(this.parsingDeclareFile || TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Ambient)) {
              ast.modFlags |= TypeScript.ModuleFlags.Ambient
            }
            if(TypeScript.hasFlag(modifiers, TypeScript.Modifiers.Exported)) {
              ast.modFlags |= TypeScript.ModuleFlags.Exported
            }
            break;
          case TypeScript.TokenID.DEBUGGER:
            mayNotBeExported();
            if(modifiers != TypeScript.Modifiers.None) {
              this.reportParseError("modifiers can not appear before debugger statement")
            }
            minChar = this.scanner.startPos;
            this.tok = this.scanner.scan();
            var debuggerStmt = new TypeScript.DebuggerStatement;
            debuggerStmt.minChar = minChar;
            needTerminator = true;
            debuggerStmt.limChar = this.scanner.lastTokenLimChar();
            ast = debuggerStmt;
            break;
          default:
            if(modifiers != TypeScript.Modifiers.None) {
              this.reportParseError("modifiers can not appear before an expression statement or label")
            }
            minChar = this.scanner.startPos;
            var svPos = this.scanner.pos;
            temp = this.parseExpr(TypeScript.ErrorRecoverySet.Colon | TypeScript.ErrorRecoverySet.StmtStart | errorRecoverySet, TypeScript.OperatorPrecedence.No, true, TypeContext.NoTypes);
            if(this.scanner.pos == svPos) {
              this.tok = this.scanner.scan();
              ast = temp
            }else {
              if(this.tok.tokenId == TypeScript.TokenID.Colon && !this.scanner.lastTokenHadNewline() && temp && temp.nodeType == TypeScript.NodeType.Name) {
                if(labelList == null) {
                  labelList = new TypeScript.ASTList
                }
                labelList.append(new TypeScript.Label(temp));
                this.tok = this.scanner.scan()
              }else {
                ast = temp;
                needTerminator = true
              }
            }
        }
        if(ast) {
          break
        }
      }
      if(needTerminator) {
        switch(this.tok.tokenId) {
          case TypeScript.TokenID.SColon:
            this.tok = this.scanner.scan();
            ast.flags |= TypeScript.ASTFlags.ExplicitSemicolon;
            break;
          case TypeScript.TokenID.EOF:
          ;
          case TypeScript.TokenID.RCurly:
            ast.flags |= TypeScript.ASTFlags.AutomaticSemicolon;
            if(this.style_requireSemi) {
              this.reportParseStyleError("no automatic semicolon")
            }
            break;
          default:
            if(!this.scanner.lastTokenHadNewline()) {
              this.reportParseError("Expected ';'")
            }else {
              ast.flags |= TypeScript.ASTFlags.AutomaticSemicolon;
              if(this.style_requireSemi) {
                this.reportParseStyleError("no automatic semicolon")
              }
            }
            break
        }
      }
      if(labelList) {
        ast = new TypeScript.LabeledStatement(labelList, ast)
      }
      ast.minChar = minChar;
      ast.limChar = TypeScript.max(ast.limChar, this.scanner.lastTokenLimChar());
      ast.preComments = preComments;
      if(this.ambientModule && !this.okAmbientModuleMember(ast)) {
        this.reportParseError("statement not permitted within ambient module")
      }
      ast.flags |= TypeScript.ASTFlags.IsStatement;
      return ast
    };
    Parser.prototype.okAmbientModuleMember = function(ast) {
      var nt = ast.nodeType;
      return nt == TypeScript.NodeType.Class || nt == TypeScript.NodeType.Import || nt == TypeScript.NodeType.Interface || nt == TypeScript.NodeType.Module || nt == TypeScript.NodeType.Empty || nt == TypeScript.NodeType.VarDecl && (TypeScript.hasFlag(ast.varFlags, TypeScript.VarFlags.Property) || TypeScript.hasFlag(ast.varFlags, TypeScript.VarFlags.Exported)) || nt == TypeScript.NodeType.FuncDecl && ast.isMethod()
    };
    Parser.prototype.parseStmtList = function(errorRecoverySet, stmts, sourceElms, noLeadingCase, allowedElements, parentModifiers) {
      var directivePrologue = sourceElms;
      stmts.minChar = this.scanner.startPos;
      var limChar = this.scanner.pos;
      var innerStmts = (allowedElements & TypeScript.AllowedElements.ModuleDecls) == TypeScript.AllowedElements.None;
      var classNope = (allowedElements & TypeScript.AllowedElements.ClassDecls) == TypeScript.AllowedElements.None;
      errorRecoverySet |= TypeScript.ErrorRecoverySet.TypeScriptS | TypeScript.ErrorRecoverySet.RCurly;
      this.state = ParseState.StartStmtList;
      var oldStrictMode = this.strictMode;
      this.nestingLevel++;
      for(;;) {
        if(this.tok.tokenId == TypeScript.TokenID.RCurly || noLeadingCase && (this.tok.tokenId == TypeScript.TokenID.CASE || this.tok.tokenId == TypeScript.TokenID.DEFAULT) || innerStmts && this.tok.tokenId == TypeScript.TokenID.EXPORT || classNope && this.tok.tokenId == TypeScript.TokenID.CLASS || this.tok.tokenId == TypeScript.TokenID.EOF) {
          this.state = ParseState.EndStmtList;
          stmts.limChar = limChar;
          if(stmts.members.length == 0) {
            stmts.preComments = this.parseComments()
          }else {
            stmts.postComments = this.parseComments()
          }
          this.strictMode = oldStrictMode;
          this.nestingLevel--;
          return
        }
        var stmt = this.parseStatement(errorRecoverySet & ~(TypeScript.ErrorRecoverySet.Else | TypeScript.ErrorRecoverySet.RParen | TypeScript.ErrorRecoverySet.Catch | TypeScript.ErrorRecoverySet.Colon), allowedElements, parentModifiers);
        if(stmt) {
          stmt.postComments = this.combineComments(stmt.postComments, this.parseCommentsForLine(this.scanner.prevLine));
          stmts.append(stmt);
          limChar = stmt.limChar;
          if(directivePrologue) {
            if(stmt.nodeType == TypeScript.NodeType.QString) {
              var qstring = stmt;
              if(qstring.text == "use strict") {
                stmts.flags |= TypeScript.ASTFlags.StrictMode;
                this.strictMode = true
              }else {
                directivePrologue = false
              }
            }else {
              directivePrologue = false
            }
          }
        }
      }
    };
    Parser.prototype.quickParse = function(sourceText, filename, unitIndex) {
      var svGenTarget = TypeScript.moduleGenTarget;
      try {
        TypeScript.moduleGenTarget = TypeScript.ModuleGenTarget.Local;
        var script = this.parse(sourceText, filename, unitIndex, TypeScript.AllowedElements.QuickParse);
        return new QuickParseResult(script, this.scanner.lexState)
      }finally {
        TypeScript.moduleGenTarget = svGenTarget
      }
    };
    Parser.prototype.parse = function(sourceText, filename, unitIndex, allowedElements) {
      if(typeof allowedElements === "undefined") {
        allowedElements = TypeScript.AllowedElements.Global
      }
      this.ambientModule = false;
      this.topLevel = true;
      this.parseError = false;
      this.hasTopLevelImportOrExport = false;
      this.fname = filename;
      this.currentUnitIndex = unitIndex;
      this.amdDependencies = [];
      this.scanner.resetComments();
      this.scanner.setSourceText(sourceText, TypeScript.LexMode.File);
      var leftCurlyCount = this.scanner.leftCurlyCount;
      var rightCurlyCount = this.scanner.rightCurlyCount;
      var minChar = this.scanner.pos;
      this.tok = this.scanner.scan();
      this.pushDeclLists();
      var bod = new TypeScript.ASTList;
      bod.minChar = minChar;
      this.state = ParseState.StartScript;
      this.parsingDeclareFile = TypeScript.isDSTRFile(filename) || TypeScript.isDTSFile(filename);
      this.parseStmtList(TypeScript.ErrorRecoverySet.EOF | TypeScript.ErrorRecoverySet.Func, bod, true, false, allowedElements, TypeScript.Modifiers.None);
      if(this.tok.tokenId != TypeScript.TokenID.EOF) {
        var badToken = TypeScript.tokenTable[this.tok.tokenId];
        this.reportParseError("Unexpected statement block terminator '" + badToken.text + "'")
      }
      this.state = ParseState.EndScript;
      bod.limChar = this.scanner.pos;
      var topLevelMod = null;
      if(TypeScript.moduleGenTarget != TypeScript.ModuleGenTarget.Local && this.hasTopLevelImportOrExport) {
        var correctedFileName = TypeScript.switchToForwardSlashes(filename);
        var id = new TypeScript.Identifier(correctedFileName);
        topLevelMod = new TypeScript.ModuleDecl(id, bod, this.topVarList(), this.topScopeList());
        topLevelMod.modFlags |= TypeScript.ModuleFlags.IsDynamic;
        topLevelMod.modFlags |= TypeScript.ModuleFlags.IsWholeFile;
        topLevelMod.modFlags |= TypeScript.ModuleFlags.Exported;
        if(this.parsingDeclareFile) {
          topLevelMod.modFlags |= TypeScript.ModuleFlags.Ambient
        }
        topLevelMod.minChar = minChar;
        topLevelMod.limChar = this.scanner.pos;
        topLevelMod.prettyName = TypeScript.getPrettyName(correctedFileName);
        topLevelMod.amdDependencies = this.amdDependencies;
        bod = new TypeScript.ASTList;
        bod.minChar = topLevelMod.minChar;
        bod.limChar = topLevelMod.limChar;
        bod.append(topLevelMod)
      }
      var script = new TypeScript.Script(this.topVarList(), this.topScopeList());
      script.bod = bod;
      this.popDeclLists();
      script.minChar = minChar;
      script.limChar = this.scanner.pos;
      script.locationInfo = new TypeScript.LocationInfo(filename, this.scanner.lineMap, unitIndex);
      script.leftCurlyCount = this.scanner.leftCurlyCount - leftCurlyCount;
      script.rightCurlyCount = this.scanner.rightCurlyCount - rightCurlyCount;
      script.isDeclareFile = this.parsingDeclareFile;
      script.topLevelMod = topLevelMod;
      return script
    };
    return Parser
  }();
  TypeScript.Parser = Parser;
  function quickParse(logger, scopeStartAST, sourceText, minChar, limChar, errorCapture) {
    var fragment = sourceText.getText(minChar, limChar);
    logger.log("Quick parse range (" + minChar + "," + limChar + '): "' + TypeScript.stringToLiteral(fragment, 100) + '"');
    var quickParser = new Parser;
    quickParser.setErrorRecovery(null, -1, -1);
    quickParser.errorCallback = errorCapture;
    var quickClassDecl = new TypeScript.TypeDecl(TypeScript.NodeType.Class, null, null, null, null, null);
    quickParser.currentClassDecl = quickClassDecl;
    var result = quickParser.quickParse(new TypeScript.StringSourceText(fragment), "", 0);
    return result
  }
  TypeScript.quickParse = quickParse
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  var PrintContext = function() {
    function PrintContext(outfile, parser) {
      this.outfile = outfile;
      this.parser = parser;
      this.builder = "";
      this.indent1 = "  ";
      this.indentStrings = [];
      this.indentAmt = 0
    }
    PrintContext.prototype.increaseIndent = function() {
      this.indentAmt++
    };
    PrintContext.prototype.decreaseIndent = function() {
      this.indentAmt--
    };
    PrintContext.prototype.startLine = function() {
      if(this.builder.length > 0) {
        TypeScript.CompilerDiagnostics.Alert(this.builder)
      }
      var indentString = this.indentStrings[this.indentAmt];
      if(indentString === undefined) {
        indentString = "";
        for(var i = 0;i < this.indentAmt;i++) {
          indentString += this.indent1
        }
        this.indentStrings[this.indentAmt] = indentString
      }
      this.builder += indentString
    };
    PrintContext.prototype.write = function(s) {
      this.builder += s
    };
    PrintContext.prototype.writeLine = function(s) {
      this.builder += s;
      this.outfile.WriteLine(this.builder);
      this.builder = ""
    };
    return PrintContext
  }();
  TypeScript.PrintContext = PrintContext;
  function prePrintAST(ast, parent, walker) {
    var pc = walker.state;
    ast.print(pc);
    pc.increaseIndent();
    return ast
  }
  TypeScript.prePrintAST = prePrintAST;
  function postPrintAST(ast, parent, walker) {
    var pc = walker.state;
    pc.decreaseIndent();
    return ast
  }
  TypeScript.postPrintAST = postPrintAST
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  TypeScript.LexEOF = -1;
  TypeScript.LexCodeNWL = 10;
  TypeScript.LexCodeRET = 13;
  TypeScript.LexCodeTAB = 9;
  TypeScript.LexCodeVTAB = 11;
  TypeScript.LexCode_e = "e".charCodeAt(0);
  TypeScript.LexCode_E = "E".charCodeAt(0);
  TypeScript.LexCode_x = "x".charCodeAt(0);
  TypeScript.LexCode_X = "X".charCodeAt(0);
  TypeScript.LexCode_a = "a".charCodeAt(0);
  TypeScript.LexCode_A = "A".charCodeAt(0);
  TypeScript.LexCode_f = "f".charCodeAt(0);
  TypeScript.LexCode_F = "F".charCodeAt(0);
  TypeScript.LexCode_g = "g".charCodeAt(0);
  TypeScript.LexCode_m = "m".charCodeAt(0);
  TypeScript.LexCode_i = "i".charCodeAt(0);
  TypeScript.LexCode_0 = "0".charCodeAt(0);
  TypeScript.LexCode_9 = "9".charCodeAt(0);
  TypeScript.LexCode_8 = "8".charCodeAt(0);
  TypeScript.LexCode_7 = "7".charCodeAt(0);
  TypeScript.LexCodeBSL = "\\".charCodeAt(0);
  TypeScript.LexCodeSHP = "#".charCodeAt(0);
  TypeScript.LexCodeBNG = "!".charCodeAt(0);
  TypeScript.LexCodeQUO = '"'.charCodeAt(0);
  TypeScript.LexCodeAPO = "'".charCodeAt(0);
  TypeScript.LexCodePCT = "%".charCodeAt(0);
  TypeScript.LexCodeAMP = "&".charCodeAt(0);
  TypeScript.LexCodeLPR = "(".charCodeAt(0);
  TypeScript.LexCodeRPR = ")".charCodeAt(0);
  TypeScript.LexCodePLS = "+".charCodeAt(0);
  TypeScript.LexCodeMIN = "-".charCodeAt(0);
  TypeScript.LexCodeMUL = "*".charCodeAt(0);
  TypeScript.LexCodeSLH = "/".charCodeAt(0);
  TypeScript.LexCodeXOR = "^".charCodeAt(0);
  TypeScript.LexCodeCMA = ",".charCodeAt(0);
  TypeScript.LexCodeDOT = ".".charCodeAt(0);
  TypeScript.LexCodeLT = "<".charCodeAt(0);
  TypeScript.LexCodeEQ = "=".charCodeAt(0);
  TypeScript.LexCodeGT = ">".charCodeAt(0);
  TypeScript.LexCodeQUE = "?".charCodeAt(0);
  TypeScript.LexCodeLBR = "[".charCodeAt(0);
  TypeScript.LexCodeRBR = "]".charCodeAt(0);
  TypeScript.LexCodeUSC = "_".charCodeAt(0);
  TypeScript.LexCodeLC = "{".charCodeAt(0);
  TypeScript.LexCodeRC = "}".charCodeAt(0);
  TypeScript.LexCodeBAR = "|".charCodeAt(0);
  TypeScript.LexCodeTIL = "~".charCodeAt(0);
  TypeScript.LexCodeCOL = ":".charCodeAt(0);
  TypeScript.LexCodeSMC = ";".charCodeAt(0);
  TypeScript.LexCodeUnderscore = "_".charCodeAt(0);
  TypeScript.LexCodeDollar = "$".charCodeAt(0);
  TypeScript.LexCodeSpace = 32;
  TypeScript.LexKeywordTable = undefined;
  var autoToken = new Array(128);
  var lexIdStartTable = new Array(128);
  function LexInitialize() {
    TypeScript.initializeStaticTokens();
    autoToken[TypeScript.LexCodeLPR] = TypeScript.staticTokens[TypeScript.TokenID.LParen];
    autoToken[TypeScript.LexCodeRPR] = TypeScript.staticTokens[TypeScript.TokenID.RParen];
    autoToken[TypeScript.LexCodeCMA] = TypeScript.staticTokens[TypeScript.TokenID.Comma];
    autoToken[TypeScript.LexCodeSMC] = TypeScript.staticTokens[TypeScript.TokenID.SColon];
    autoToken[TypeScript.LexCodeLBR] = TypeScript.staticTokens[TypeScript.TokenID.LBrack];
    autoToken[TypeScript.LexCodeRBR] = TypeScript.staticTokens[TypeScript.TokenID.RBrack];
    autoToken[TypeScript.LexCodeTIL] = TypeScript.staticTokens[TypeScript.TokenID.Tilde];
    autoToken[TypeScript.LexCodeQUE] = TypeScript.staticTokens[TypeScript.TokenID.QMark];
    autoToken[TypeScript.LexCodeLC] = TypeScript.staticTokens[TypeScript.TokenID.LCurly];
    autoToken[TypeScript.LexCodeRC] = TypeScript.staticTokens[TypeScript.TokenID.RCurly];
    autoToken[TypeScript.LexCodeCOL] = TypeScript.staticTokens[TypeScript.TokenID.Colon];
    TypeScript.LexKeywordTable = new TypeScript.StringHashTable;
    for(var i in TypeScript.TokenID._map) {
      if(i <= TypeScript.TokenID.LimKeyword) {
        TypeScript.LexKeywordTable.add(TypeScript.TokenID._map[i].toLowerCase(), i)
      }
    }
    for(var j = 0;j < 128;j++) {
      if(LexIsIdentifierStartChar(j)) {
        lexIdStartTable[j] = true
      }else {
        lexIdStartTable[j] = false
      }
    }
  }
  TypeScript.LexInitialize = LexInitialize;
  function LexAdjustIndent(code, indentAmt) {
    if(code == TypeScript.LexCodeLBR || code == TypeScript.LexCodeLC || code == TypeScript.LexCodeLPR) {
      return indentAmt + 1
    }else {
      if(code == TypeScript.LexCodeRBR || code == TypeScript.LexCodeRC || code == TypeScript.LexCodeRPR) {
        return indentAmt - 1
      }else {
        return indentAmt
      }
    }
  }
  TypeScript.LexAdjustIndent = LexAdjustIndent;
  function LexIsIdentifierStartChar(code) {
    return code >= 97 && code <= 122 || code >= 65 && code <= 90 || code == TypeScript.LexCodeDollar || code == TypeScript.LexCodeUnderscore
  }
  TypeScript.LexIsIdentifierStartChar = LexIsIdentifierStartChar;
  function LexIsDigit(code) {
    return code >= 48 && code <= 57
  }
  TypeScript.LexIsDigit = LexIsDigit;
  function LexIsIdentifierChar(code) {
    return lexIdStartTable[code] || LexIsDigit(code)
  }
  TypeScript.LexIsIdentifierChar = LexIsIdentifierChar;
  function LexMatchingOpen(code) {
    if(code == TypeScript.LexCodeRBR) {
      return TypeScript.LexCodeLBR
    }else {
      if(code == TypeScript.LexCodeRC) {
        return TypeScript.LexCodeLC
      }else {
        if(code == TypeScript.LexCodeRPR) {
          return TypeScript.LexCodeLPR
        }else {
          return 0
        }
      }
    }
  }
  TypeScript.LexMatchingOpen = LexMatchingOpen;
  (function(NumberScanState) {
    NumberScanState._map = [];
    NumberScanState._map[0] = "Start";
    NumberScanState.Start = 0;
    NumberScanState._map[1] = "InFraction";
    NumberScanState.InFraction = 1;
    NumberScanState._map[2] = "InExponent";
    NumberScanState.InExponent = 2
  })(TypeScript.NumberScanState || (TypeScript.NumberScanState = {}));
  var NumberScanState = TypeScript.NumberScanState;
  (function(LexState) {
    LexState._map = [];
    LexState._map[0] = "Start";
    LexState.Start = 0;
    LexState._map[1] = "InMultilineComment";
    LexState.InMultilineComment = 1
  })(TypeScript.LexState || (TypeScript.LexState = {}));
  var LexState = TypeScript.LexState;
  (function(LexMode) {
    LexMode._map = [];
    LexMode._map[0] = "Line";
    LexMode.Line = 0;
    LexMode._map[1] = "File";
    LexMode.File = 1
  })(TypeScript.LexMode || (TypeScript.LexMode = {}));
  var LexMode = TypeScript.LexMode;
  (function(CommentStyle) {
    CommentStyle._map = [];
    CommentStyle._map[0] = "Line";
    CommentStyle.Line = 0;
    CommentStyle._map[1] = "Block";
    CommentStyle.Block = 1
  })(TypeScript.CommentStyle || (TypeScript.CommentStyle = {}));
  var CommentStyle = TypeScript.CommentStyle;
  var StringSourceText = function() {
    function StringSourceText(text) {
      this.text = text
    }
    StringSourceText.prototype.getText = function(start, end) {
      return this.text.substring(start, end)
    };
    StringSourceText.prototype.getLength = function() {
      return this.text.length
    };
    return StringSourceText
  }();
  TypeScript.StringSourceText = StringSourceText;
  var SourceTextSegment = function() {
    function SourceTextSegment(segmentStart, segmentEnd, segment) {
      this.segmentStart = segmentStart;
      this.segmentEnd = segmentEnd;
      this.segment = segment
    }
    SourceTextSegment.prototype.charCodeAt = function(index) {
      return this.segment.charCodeAt(index - this.segmentStart)
    };
    SourceTextSegment.prototype.substring = function(start, end) {
      return this.segment.substring(start - this.segmentStart, end - this.segmentStart)
    };
    return SourceTextSegment
  }();
  TypeScript.SourceTextSegment = SourceTextSegment;
  var AggerateSourceTextSegment = function() {
    function AggerateSourceTextSegment(seg1, seg2) {
      this.seg1 = seg1;
      this.seg2 = seg2
    }
    AggerateSourceTextSegment.prototype.charCodeAt = function(index) {
      if(this.seg1.segmentStart <= index && index < this.seg1.segmentEnd) {
        return this.seg1.segment.charCodeAt(index - this.seg1.segmentStart)
      }
      return this.seg2.segment.charCodeAt(index - this.seg2.segmentStart)
    };
    AggerateSourceTextSegment.prototype.substring = function(start, end) {
      if(this.seg1.segmentStart <= start && end <= this.seg1.segmentEnd) {
        return this.seg1.segment.substring(start - this.seg1.segmentStart, end - this.seg1.segmentStart)
      }
      return this.seg2.segment.substring(start - this.seg2.segmentStart) + this.seg1.segment.substring(0, end - this.seg1.segmentStart)
    };
    return AggerateSourceTextSegment
  }();
  TypeScript.AggerateSourceTextSegment = AggerateSourceTextSegment;
  var ScannerTextStream = function() {
    function ScannerTextStream(sourceText) {
      this.sourceText = sourceText;
      this.agg = new AggerateSourceTextSegment(ScannerTextStream.emptySegment, ScannerTextStream.emptySegment);
      this.len = this.sourceText.getLength()
    }
    ScannerTextStream.emptySegment = new SourceTextSegment(0, 0, "");
    ScannerTextStream.prototype.max = function(a, b) {
      return a >= b ? a : b
    };
    ScannerTextStream.prototype.min = function(a, b) {
      return a <= b ? a : b
    };
    ScannerTextStream.prototype.fetchSegment = function(start, end) {
      if(this.agg.seg1.segmentStart <= start && end <= this.agg.seg1.segmentEnd) {
        return this.agg.seg1
      }
      if(this.agg.seg2.segmentStart <= start && end <= this.agg.seg1.segmentEnd) {
        return this.agg
      }
      var prev = this.agg.seg1;
      var s = prev.segmentEnd;
      var e = TypeScript.max(s + 512, end);
      e = TypeScript.min(e, this.len);
      var src = this.sourceText.getText(s, e);
      var newSeg = new SourceTextSegment(s, e, src);
      this.agg.seg2 = prev;
      this.agg.seg1 = newSeg;
      return this.agg
    };
    ScannerTextStream.prototype.charCodeAt = function(index) {
      return this.fetchSegment(index, index + 1).charCodeAt(index)
    };
    ScannerTextStream.prototype.substring = function(start, end) {
      return this.fetchSegment(start, end).substring(start, end)
    };
    return ScannerTextStream
  }();
  TypeScript.ScannerTextStream = ScannerTextStream;
  var SavedTokens = function() {
    function SavedTokens() {
      this.prevToken = null;
      this.curSavedToken = null;
      this.prevSavedToken = null;
      this.prevToken = null;
      this.currentToken = 0;
      this.tokens = new Array;
      this.prevLine = 1;
      this.line = 1;
      this.col = 0;
      this.lexState = LexState.Start;
      this.commentStack = new Array
    }
    SavedTokens.prototype.previousToken = function() {
      return this.prevToken
    };
    SavedTokens.prototype.close = function() {
      this.currentToken = 0
    };
    SavedTokens.prototype.addToken = function(tok, scanner) {
      this.tokens[this.currentToken++] = new TypeScript.SavedToken(tok, scanner.startPos, scanner.pos)
    };
    SavedTokens.prototype.scan = function() {
      this.startLine = this.line;
      this.startPos = this.col;
      if(this.currentTokenIndex == this.currentTokens.length) {
        if(this.line < this.lineMap.length) {
          this.line++;
          this.col = 0;
          this.currentTokenIndex = 0;
          this.currentTokens = this.tokensByLine[this.line]
        }else {
          return TypeScript.staticTokens[TypeScript.TokenID.EOF]
        }
      }
      if(this.currentTokenIndex < this.currentTokens.length) {
        this.prevToken = this.curSavedToken.tok;
        this.prevSavedToken = this.curSavedToken;
        this.curSavedToken = this.currentTokens[this.currentTokenIndex++];
        var curToken = this.curSavedToken.tok;
        this.pos = this.curSavedToken.limChar;
        this.col += this.curSavedToken.limChar - this.curSavedToken.minChar;
        this.startPos = this.curSavedToken.minChar;
        this.prevLine = this.line;
        return curToken
      }else {
        return TypeScript.staticTokens[TypeScript.TokenID.EOF]
      }
    };
    SavedTokens.prototype.syncToTok = function(offset) {
      this.line = getLineNumberFromPosition(this.lineMap, offset);
      this.currentTokenIndex = 0;
      var tmpCol = offset - this.lineMap[this.line];
      while(this.lexStateByLine[this.line] == LexState.InMultilineComment && this.line > 0) {
        this.line--;
        tmpCol = 0
      }
      var lenMin1 = this.lineMap.length - 1;
      this.currentTokens = this.tokensByLine[this.line];
      while(this.currentTokens.length == 0 && this.line < lenMin1) {
        this.line++;
        this.currentTokens = this.tokensByLine[this.line];
        tmpCol = 0
      }
      if(this.line <= lenMin1) {
        while(this.currentTokenIndex < this.currentTokens.length && tmpCol > this.currentTokens[this.currentTokenIndex].limChar) {
          this.currentTokenIndex++
        }
        if(this.currentTokenIndex < this.currentTokens.length) {
          this.col = this.currentTokens[this.currentTokenIndex].minChar;
          return this.col + this.lineMap[this.line]
        }
      }
      return-1
    };
    SavedTokens.prototype.lastTokenLimChar = function() {
      if(this.prevSavedToken !== null) {
        return this.prevSavedToken.limChar
      }else {
        return 0
      }
    };
    SavedTokens.prototype.lastTokenHadNewline = function() {
      return this.prevLine != this.startLine
    };
    SavedTokens.prototype.pushComment = function(comment) {
      this.commentStack.push(comment)
    };
    SavedTokens.prototype.getComments = function() {
      var stack = this.commentStack;
      this.commentStack = [];
      return stack
    };
    SavedTokens.prototype.getCommentsForLine = function(line) {
      var comments = null;
      while(this.commentStack.length > 0 && this.commentStack[0].line == line) {
        if(comments == null) {
          comments = [this.commentStack.shift()]
        }else {
          comments = comments.concat([this.commentStack.shift()])
        }
      }
      return comments
    };
    SavedTokens.prototype.resetComments = function() {
      this.commentStack = []
    };
    SavedTokens.prototype.setSourceText = function(newSrc, textMode) {
    };
    return SavedTokens
  }();
  TypeScript.SavedTokens = SavedTokens;
  var Scanner = function() {
    function Scanner() {
      this.prevLine = 1;
      this.line = 1;
      this.col = 0;
      this.pos = 0;
      this.startPos = 0;
      this.len = 0;
      this.lineMap = [];
      this.ch = TypeScript.LexEOF;
      this.lexState = LexState.Start;
      this.mode = LexMode.File;
      this.scanComments = true;
      this.interveningWhitespace = false;
      this.interveningWhitespacePos = 0;
      this.leftCurlyCount = 0;
      this.rightCurlyCount = 0;
      this.commentStack = new Array;
      this.saveScan = null;
      this.prevTok = TypeScript.staticTokens[TypeScript.TokenID.EOF];
      this.startCol = this.col;
      this.startLine = this.line;
      this.lineMap[1] = 0;
      if(!TypeScript.LexKeywordTable) {
        LexInitialize()
      }
    }
    Scanner.prototype.previousToken = function() {
      return this.prevTok
    };
    Scanner.prototype.setSourceText = function(newSrc, textMode) {
      this.mode = textMode;
      this.scanComments = this.mode === LexMode.Line;
      this.pos = 0;
      this.interveningWhitespacePos = 0;
      this.startPos = 0;
      this.line = 1;
      this.col = 0;
      this.startCol = this.col;
      this.startLine = this.line;
      this.len = 0;
      this.src = newSrc.getText(0, newSrc.getLength());
      this.len = this.src.length;
      this.lineMap = [];
      this.lineMap[1] = 0;
      this.commentStack = [];
      this.leftCurlyCount = 0;
      this.rightCurlyCount = 0
    };
    Scanner.prototype.setSaveScan = function(savedTokens) {
      this.saveScan = savedTokens
    };
    Scanner.prototype.setText = function(newSrc, textMode) {
      this.setSourceText(new StringSourceText(newSrc), textMode)
    };
    Scanner.prototype.setScanComments = function(value) {
      this.scanComments = value
    };
    Scanner.prototype.getLexState = function() {
      return this.lexState
    };
    Scanner.prototype.scanLine = function(line, initialState) {
      this.lexState = initialState;
      var result = new Array;
      this.setText(line, LexMode.Line);
      var t = this.scan();
      while(t.tokenId != TypeScript.TokenID.EOF) {
        result[result.length] = t;
        t = this.scan()
      }
      return result
    };
    Scanner.prototype.tokenStart = function() {
      this.startPos = this.pos;
      this.startLine = this.line;
      this.startCol = this.col;
      this.interveningWhitespace = false
    };
    Scanner.prototype.peekChar = function() {
      if(this.pos < this.len) {
        return this.src.charCodeAt(this.pos)
      }else {
        return TypeScript.LexEOF
      }
    };
    Scanner.prototype.peekCharAt = function(index) {
      if(index < this.len) {
        return this.src.charCodeAt(index)
      }else {
        return TypeScript.LexEOF
      }
    };
    Scanner.prototype.IsHexDigit = function(c) {
      return c >= TypeScript.LexCode_0 && c <= TypeScript.LexCode_9 || c >= TypeScript.LexCode_A && c <= TypeScript.LexCode_F || c >= TypeScript.LexCode_a && c <= TypeScript.LexCode_f
    };
    Scanner.prototype.IsOctalDigit = function(c) {
      return c >= TypeScript.LexCode_0 && c <= TypeScript.LexCode_7 || c >= TypeScript.LexCode_a && c <= TypeScript.LexCode_f
    };
    Scanner.prototype.scanHexDigits = function() {
      var atLeastOneDigit = false;
      for(;;) {
        if(this.IsHexDigit(this.ch)) {
          this.nextChar();
          atLeastOneDigit = true
        }else {
          if(atLeastOneDigit) {
            return new TypeScript.NumberToken(parseInt(this.src.substring(this.startPos, this.pos)))
          }else {
            return null
          }
        }
      }
    };
    Scanner.prototype.scanOctalDigits = function() {
      var atLeastOneDigit = false;
      for(;;) {
        if(this.IsOctalDigit(this.ch)) {
          this.nextChar();
          atLeastOneDigit = true
        }else {
          if(atLeastOneDigit) {
            return new TypeScript.NumberToken(parseInt(this.src.substring(this.startPos, this.pos)))
          }else {
            return null
          }
        }
      }
    };
    Scanner.prototype.scanDecimalNumber = function(state) {
      var atLeastOneDigit = false;
      var svPos = this.pos;
      var svCol = this.col;
      for(;;) {
        if(LexIsDigit(this.ch)) {
          atLeastOneDigit = true;
          this.nextChar()
        }else {
          if(this.ch == TypeScript.LexCodeDOT) {
            if(state == NumberScanState.Start) {
              this.nextChar();
              state = NumberScanState.InFraction
            }else {
              if(atLeastOneDigit) {
                return new TypeScript.NumberToken(parseFloat(this.src.substring(this.startPos, this.pos)))
              }else {
                this.pos = svPos;
                this.col = svCol;
                return null
              }
            }
          }else {
            if(this.ch == TypeScript.LexCode_e || this.ch == TypeScript.LexCode_E) {
              if(state == NumberScanState.Start) {
                if(atLeastOneDigit) {
                  atLeastOneDigit = false;
                  this.nextChar();
                  state = NumberScanState.InExponent
                }else {
                  this.pos = svPos;
                  this.col = svCol;
                  return null
                }
              }else {
                if(state == NumberScanState.InFraction) {
                  this.nextChar();
                  state = NumberScanState.InExponent;
                  atLeastOneDigit = false
                }else {
                  if(atLeastOneDigit) {
                    return new TypeScript.NumberToken(parseFloat(this.src.substring(this.startPos, this.pos)))
                  }else {
                    this.pos = svPos;
                    this.col = svCol;
                    return null
                  }
                }
              }
            }else {
              if(this.ch == TypeScript.LexCodePLS || this.ch == TypeScript.LexCodeMIN) {
                if(state == NumberScanState.InExponent) {
                  if(!atLeastOneDigit) {
                    this.nextChar()
                  }else {
                    this.pos = svPos;
                    this.col = svCol;
                    return null
                  }
                }else {
                  if(state == NumberScanState.InFraction) {
                    return new TypeScript.NumberToken(parseFloat(this.src.substring(this.startPos, this.pos)))
                  }else {
                    if(!atLeastOneDigit) {
                      this.pos = svPos;
                      this.col = svCol;
                      return null
                    }else {
                      return new TypeScript.NumberToken(parseFloat(this.src.substring(this.startPos, this.pos)))
                    }
                  }
                }
              }else {
                if(!atLeastOneDigit) {
                  this.pos = svPos;
                  this.col = svCol;
                  return null
                }else {
                  return new TypeScript.NumberToken(parseFloat(this.src.substring(this.startPos, this.pos)))
                }
              }
            }
          }
        }
      }
    };
    Scanner.prototype.scanNumber = function() {
      if(this.peekChar() == TypeScript.LexCode_0) {
        switch(this.peekCharAt(this.pos + 1)) {
          case TypeScript.LexCode_x:
          ;
          case TypeScript.LexCode_X:
            this.advanceChar(2);
            return this.scanHexDigits();
          case TypeScript.LexCode_8:
          ;
          case TypeScript.LexCode_9:
          ;
          case TypeScript.LexCodeDOT:
            return this.scanDecimalNumber(NumberScanState.Start);
          default:
            return this.scanOctalDigits()
        }
      }else {
        return this.scanDecimalNumber(NumberScanState.Start)
      }
    };
    Scanner.prototype.scanFraction = function() {
      return this.scanDecimalNumber(NumberScanState.InFraction)
    };
    Scanner.prototype.newLine = function() {
      this.col = 0;
      if(this.mode == LexMode.File) {
        this.line++;
        this.lineMap[this.line] = this.pos + 1
      }
    };
    Scanner.prototype.finishMultilineComment = function() {
      var ch2;
      this.lexState = LexState.InMultilineComment;
      while(this.pos < this.len) {
        if(this.ch == TypeScript.LexCodeMUL) {
          ch2 = this.peekCharAt(this.pos + 1);
          if(ch2 == TypeScript.LexCodeSLH) {
            this.advanceChar(2);
            if(this.mode == LexMode.File) {
              this.tokenStart()
            }
            this.lexState = LexState.Start;
            return true
          }
        }else {
          if(this.ch == TypeScript.LexCodeNWL) {
            this.newLine();
            if(this.mode == LexMode.Line) {
              this.nextChar();
              return false
            }
          }
        }
        this.nextChar()
      }
      return false
    };
    Scanner.prototype.pushComment = function(comment) {
      this.commentStack.push(comment)
    };
    Scanner.prototype.getComments = function() {
      var stack = this.commentStack;
      this.commentStack = [];
      return stack
    };
    Scanner.prototype.getCommentsForLine = function(line) {
      var comments = null;
      while(this.commentStack.length > 0 && this.commentStack[0].line == line) {
        if(comments == null) {
          comments = [this.commentStack.shift()]
        }else {
          comments = comments.concat([this.commentStack.shift()])
        }
      }
      return comments
    };
    Scanner.prototype.resetComments = function() {
      this.commentStack = []
    };
    Scanner.prototype.endsLine = function(c) {
      return c == TypeScript.LexCodeNWL || c == TypeScript.LexCodeRET || c == 8232 || c == 8233
    };
    Scanner.prototype.finishSinglelineComment = function() {
      while(this.pos < this.len) {
        if(this.endsLine(this.ch)) {
          break
        }
        this.nextChar()
      }
      if(this.mode == LexMode.File) {
        this.tokenStart()
      }
    };
    Scanner.prototype.tokenText = function() {
      return this.src.substring(this.startPos, this.pos)
    };
    Scanner.prototype.findClosingSLH = function() {
      var index = this.pos;
      var ch2 = this.src.charCodeAt(index);
      var prevCh = 0;
      var liveEsc = false;
      while(!this.endsLine(ch2) && index < this.len) {
        if(ch2 == TypeScript.LexCodeSLH && !liveEsc) {
          return index
        }
        prevCh = ch2;
        index++;
        if(liveEsc) {
          liveEsc = false
        }else {
          liveEsc = prevCh == TypeScript.LexCodeBSL
        }
        ch2 = this.src.charCodeAt(index)
      }
      return-1
    };
    Scanner.prototype.speculateRegex = function() {
      if(TypeScript.noRegexTable[this.prevTok.tokenId] != undefined) {
        return null
      }
      var svPos = this.pos;
      var svCol = this.col;
      var index = this.findClosingSLH();
      if(index > 0) {
        var pattern = this.src.substring(svPos, index);
        var flags = "";
        this.pos = index + 1;
        this.ch = this.peekChar();
        var flagsStart = this.pos;
        while(this.ch == TypeScript.LexCode_i || this.ch == TypeScript.LexCode_g || this.ch == TypeScript.LexCode_m) {
          this.nextChar()
        }
        if(this.pos - flagsStart > 3) {
          return null
        }else {
          flags = this.src.substring(flagsStart, this.pos)
        }
        var regex = undefined;
        try {
          regex = new RegExp(pattern, flags)
        }catch(regexException) {
        }
        if(regex) {
          this.col = svCol + (this.pos - this.startPos);
          return new TypeScript.RegexToken(regex)
        }
      }
      this.pos = svPos;
      this.col = svCol;
      return null
    };
    Scanner.prototype.lastTokenHadNewline = function() {
      return this.prevLine != this.startLine
    };
    Scanner.prototype.lastTokenLimChar = function() {
      return this.interveningWhitespace ? this.interveningWhitespacePos : this.startPos
    };
    Scanner.prototype.advanceChar = function(amt) {
      this.pos += amt;
      this.col += amt;
      this.ch = this.peekChar()
    };
    Scanner.prototype.nextChar = function() {
      this.pos++;
      this.col++;
      this.ch = this.peekChar()
    };
    Scanner.prototype.scan = function() {
      if(this.lexState == LexState.InMultilineComment && this.scanComments) {
        this.ch = this.peekChar();
        var commentLine = this.line;
        this.finishMultilineComment();
        if(this.startPos < this.pos) {
          var commentText = this.src.substring(this.startPos, this.pos);
          this.tokenStart();
          return new TypeScript.CommentToken(TypeScript.TokenID.Comment, commentText, true, this.startPos, commentLine, true)
        }else {
          return TypeScript.staticTokens[TypeScript.TokenID.EOF]
        }
      }
      this.prevLine = this.line;
      this.prevTok = this.innerScan();
      if(this.saveScan) {
        this.saveScan.addToken(this.prevTok, this)
      }
      return this.prevTok
    };
    Scanner.prototype.innerScan = function() {
      var rtok;
      this.tokenStart();
      this.ch = this.peekChar();
      while(this.pos < this.len) {
        if(lexIdStartTable[this.ch]) {
          do {
            this.nextChar()
          }while(lexIdStartTable[this.ch] || LexIsDigit(this.ch));
          var idText = this.src.substring(this.startPos, this.pos);
          var id;
          if((id = TypeScript.LexKeywordTable.lookup(idText)) != null) {
            return TypeScript.staticTokens[id]
          }else {
            return new TypeScript.StringToken(TypeScript.TokenID.ID, idText)
          }
        }else {
          if(this.ch == TypeScript.LexCodeSpace) {
            if(!this.interveningWhitespace) {
              this.interveningWhitespacePos = this.pos
            }
            do {
              this.nextChar()
            }while(this.ch == TypeScript.LexCodeSpace);
            if(this.mode == LexMode.Line) {
              var whitespaceText = this.src.substring(this.startPos, this.pos);
              return new TypeScript.WhitespaceToken(TypeScript.TokenID.Whitespace, whitespaceText)
            }else {
              this.tokenStart();
              this.interveningWhitespace = true
            }
          }else {
            if(this.ch == TypeScript.LexCodeSLH) {
              this.nextChar();
              var commentText;
              if(this.ch == TypeScript.LexCodeSLH) {
                if(!this.interveningWhitespace) {
                  this.interveningWhitespacePos = this.pos - 1
                }
                var commentStartPos = this.pos - 1;
                var commentStartLine = this.line;
                this.finishSinglelineComment();
                var commentText = this.src.substring(commentStartPos, this.pos);
                var commentToken = new TypeScript.CommentToken(TypeScript.TokenID.Comment, commentText, false, commentStartPos, commentStartLine, false);
                if(this.scanComments) {
                  this.startPos = commentStartPos;
                  return commentToken
                }else {
                  this.pushComment(commentToken)
                }
                this.interveningWhitespace = true
              }else {
                if(this.ch == TypeScript.LexCodeMUL) {
                  if(!this.interveningWhitespace) {
                    this.interveningWhitespacePos = this.pos - 1
                  }
                  var commentStartPos = this.pos - 1;
                  var commentStartLine = this.line;
                  this.nextChar();
                  this.finishMultilineComment();
                  var commentText = this.src.substring(commentStartPos, this.pos);
                  var endsLine = this.peekChar() == TypeScript.LexCodeNWL || this.peekChar() == TypeScript.LexCodeRET;
                  var commentToken = new TypeScript.CommentToken(TypeScript.TokenID.Comment, commentText, true, commentStartPos, commentStartLine, endsLine);
                  if(this.scanComments) {
                    this.startPos = commentStartPos;
                    return commentToken
                  }else {
                    this.pushComment(commentToken)
                  }
                  this.interveningWhitespace = true
                }else {
                  var regexTok = this.speculateRegex();
                  if(regexTok) {
                    return regexTok
                  }else {
                    if(this.peekCharAt(this.pos) == TypeScript.LexCodeEQ) {
                      this.nextChar();
                      return TypeScript.staticTokens[TypeScript.TokenID.AsgDiv]
                    }else {
                      return TypeScript.staticTokens[TypeScript.TokenID.Div]
                    }
                  }
                }
              }
            }else {
              if(this.ch == TypeScript.LexCodeSMC) {
                this.nextChar();
                return TypeScript.staticTokens[TypeScript.TokenID.SColon]
              }else {
                if(this.ch == TypeScript.LexCodeAPO || this.ch == TypeScript.LexCodeQUO) {
                  var endCode = this.ch;
                  var prevCh = 0;
                  var liveEsc = false;
                  do {
                    prevCh = this.ch;
                    if(liveEsc) {
                      liveEsc = false
                    }else {
                      liveEsc = prevCh == TypeScript.LexCodeBSL
                    }
                    this.nextChar()
                  }while(this.ch != TypeScript.LexEOF && (liveEsc || this.ch != endCode));
                  if(this.ch != TypeScript.LexEOF) {
                    this.nextChar()
                  }
                  return new TypeScript.StringToken(TypeScript.TokenID.QString, this.src.substring(this.startPos, this.pos))
                }else {
                  if(autoToken[this.ch]) {
                    var atok = autoToken[this.ch];
                    if(atok.tokenId == TypeScript.TokenID.LCurly) {
                      this.leftCurlyCount++
                    }else {
                      if(atok.tokenId == TypeScript.TokenID.RCurly) {
                        this.rightCurlyCount++
                      }
                    }
                    this.nextChar();
                    return atok
                  }else {
                    if(this.ch >= TypeScript.LexCode_0 && this.ch <= TypeScript.LexCode_9) {
                      rtok = this.scanNumber();
                      if(rtok) {
                        return rtok
                      }else {
                        this.nextChar();
                        return TypeScript.staticTokens[TypeScript.TokenID.Error]
                      }
                    }else {
                      switch(this.ch) {
                        case TypeScript.LexCodeTAB:
                        ;
                        case TypeScript.LexCodeVTAB:
                          if(!this.interveningWhitespace) {
                            this.interveningWhitespacePos = this.pos
                          }
                          if(this.mode == LexMode.Line) {
                            do {
                              this.nextChar()
                            }while(this.ch == TypeScript.LexCodeSpace || this.ch == 9);
                            var wsText = this.src.substring(this.startPos, this.pos);
                            return new TypeScript.WhitespaceToken(TypeScript.TokenID.Whitespace, wsText)
                          }else {
                            this.interveningWhitespace = true
                          }
                        ;
                        case 255:
                        ;
                        case 254:
                        ;
                        case 239:
                        ;
                        case 187:
                        ;
                        case 191:
                        ;
                        case 8232:
                        ;
                        case 8233:
                        ;
                        case TypeScript.LexCodeNWL:
                        ;
                        case TypeScript.LexCodeRET:
                          if(this.ch == TypeScript.LexCodeNWL) {
                            this.newLine();
                            if(this.mode == LexMode.Line) {
                              return TypeScript.staticTokens[TypeScript.TokenID.EOF]
                            }
                          }
                          if(!this.interveningWhitespace) {
                            this.interveningWhitespacePos = this.pos
                          }
                          this.nextChar();
                          this.tokenStart();
                          this.interveningWhitespace = true;
                          break;
                        case TypeScript.LexCodeDOT:
                          if(this.peekCharAt(this.pos + 1) == TypeScript.LexCodeDOT) {
                            if(this.peekCharAt(this.pos + 2) == TypeScript.LexCodeDOT) {
                              this.advanceChar(3);
                              return TypeScript.staticTokens[TypeScript.TokenID.Ellipsis]
                            }else {
                              this.nextChar();
                              return TypeScript.staticTokens[TypeScript.TokenID.Dot]
                            }
                          }else {
                            this.nextChar();
                            rtok = this.scanFraction();
                            if(rtok) {
                              return rtok
                            }else {
                              return TypeScript.staticTokens[TypeScript.TokenID.Dot]
                            }
                          }
                        ;
                        case TypeScript.LexCodeEQ:
                          if(this.peekCharAt(this.pos + 1) == TypeScript.LexCodeEQ) {
                            if(this.peekCharAt(this.pos + 2) == TypeScript.LexCodeEQ) {
                              this.advanceChar(3);
                              return TypeScript.staticTokens[TypeScript.TokenID.Eqv]
                            }else {
                              this.advanceChar(2);
                              return TypeScript.staticTokens[TypeScript.TokenID.EQ]
                            }
                          }else {
                            if(this.peekCharAt(this.pos + 1) == TypeScript.LexCodeGT) {
                              this.advanceChar(2);
                              return TypeScript.staticTokens[TypeScript.TokenID.Arrow]
                            }else {
                              this.nextChar();
                              return TypeScript.staticTokens[TypeScript.TokenID.Asg]
                            }
                          }
                        ;
                        case TypeScript.LexCodeBNG:
                          if(this.peekCharAt(this.pos + 1) == TypeScript.LexCodeEQ) {
                            if(this.peekCharAt(this.pos + 2) == TypeScript.LexCodeEQ) {
                              this.advanceChar(3);
                              return TypeScript.staticTokens[TypeScript.TokenID.NEqv]
                            }else {
                              this.advanceChar(2);
                              return TypeScript.staticTokens[TypeScript.TokenID.NE]
                            }
                          }else {
                            this.nextChar();
                            return TypeScript.staticTokens[TypeScript.TokenID.Bang]
                          }
                        ;
                        case TypeScript.LexCodePLS:
                          if(this.peekCharAt(this.pos + 1) == TypeScript.LexCodeEQ) {
                            this.advanceChar(2);
                            return TypeScript.staticTokens[TypeScript.TokenID.AsgAdd]
                          }else {
                            if(this.peekCharAt(this.pos + 1) == TypeScript.LexCodePLS) {
                              this.advanceChar(2);
                              return TypeScript.staticTokens[TypeScript.TokenID.Inc]
                            }else {
                              this.nextChar();
                              return TypeScript.staticTokens[TypeScript.TokenID.Add]
                            }
                          }
                        ;
                        case TypeScript.LexCodeMIN:
                          if(this.peekCharAt(this.pos + 1) == TypeScript.LexCodeEQ) {
                            this.advanceChar(2);
                            return TypeScript.staticTokens[TypeScript.TokenID.AsgSub]
                          }else {
                            if(this.peekCharAt(this.pos + 1) == TypeScript.LexCodeMIN) {
                              this.advanceChar(2);
                              return TypeScript.staticTokens[TypeScript.TokenID.Dec]
                            }else {
                              this.nextChar();
                              return TypeScript.staticTokens[TypeScript.TokenID.Sub]
                            }
                          }
                        ;
                        case TypeScript.LexCodeMUL:
                          if(this.peekCharAt(this.pos + 1) == TypeScript.LexCodeEQ) {
                            this.advanceChar(2);
                            return TypeScript.staticTokens[TypeScript.TokenID.AsgMul]
                          }else {
                            this.nextChar();
                            return TypeScript.staticTokens[TypeScript.TokenID.Mult]
                          }
                        ;
                        case TypeScript.LexCodePCT:
                          if(this.peekCharAt(this.pos + 1) == TypeScript.LexCodeEQ) {
                            this.advanceChar(2);
                            return TypeScript.staticTokens[TypeScript.TokenID.AsgMod]
                          }else {
                            this.nextChar();
                            return TypeScript.staticTokens[TypeScript.TokenID.Pct]
                          }
                        ;
                        case TypeScript.LexCodeLT:
                          if(this.peekCharAt(this.pos + 1) == TypeScript.LexCodeLT) {
                            if(this.peekCharAt(this.pos + 2) == TypeScript.LexCodeEQ) {
                              this.advanceChar(3);
                              return TypeScript.staticTokens[TypeScript.TokenID.AsgLsh]
                            }else {
                              this.advanceChar(2);
                              return TypeScript.staticTokens[TypeScript.TokenID.Lsh]
                            }
                          }else {
                            if(this.peekCharAt(this.pos + 1) == TypeScript.LexCodeEQ) {
                              this.advanceChar(2);
                              return TypeScript.staticTokens[TypeScript.TokenID.LE]
                            }else {
                              this.nextChar();
                              return TypeScript.staticTokens[TypeScript.TokenID.LT]
                            }
                          }
                        ;
                        case TypeScript.LexCodeGT:
                          if(this.peekCharAt(this.pos + 1) == TypeScript.LexCodeGT) {
                            if(this.peekCharAt(this.pos + 2) == TypeScript.LexCodeEQ) {
                              this.advanceChar(3);
                              return TypeScript.staticTokens[TypeScript.TokenID.AsgRsh]
                            }else {
                              if(this.peekCharAt(this.pos + 2) == TypeScript.LexCodeGT) {
                                if(this.peekCharAt(this.pos + 3) == TypeScript.LexCodeEQ) {
                                  this.advanceChar(4);
                                  return TypeScript.staticTokens[TypeScript.TokenID.AsgRs2]
                                }else {
                                  this.advanceChar(3);
                                  return TypeScript.staticTokens[TypeScript.TokenID.Rs2]
                                }
                              }else {
                                this.advanceChar(2);
                                return TypeScript.staticTokens[TypeScript.TokenID.Rsh]
                              }
                            }
                          }else {
                            if(this.peekCharAt(this.pos + 1) == TypeScript.LexCodeEQ) {
                              this.advanceChar(2);
                              return TypeScript.staticTokens[TypeScript.TokenID.GE]
                            }else {
                              this.nextChar();
                              return TypeScript.staticTokens[TypeScript.TokenID.GT]
                            }
                          }
                        ;
                        case TypeScript.LexCodeXOR:
                          if(this.peekCharAt(this.pos + 1) == TypeScript.LexCodeEQ) {
                            this.advanceChar(2);
                            return TypeScript.staticTokens[TypeScript.TokenID.AsgXor]
                          }else {
                            this.nextChar();
                            return TypeScript.staticTokens[TypeScript.TokenID.Xor]
                          }
                        ;
                        case TypeScript.LexCodeBAR:
                          if(this.peekCharAt(this.pos + 1) == TypeScript.LexCodeEQ) {
                            this.advanceChar(2);
                            return TypeScript.staticTokens[TypeScript.TokenID.AsgOr]
                          }else {
                            if(this.peekCharAt(this.pos + 1) == TypeScript.LexCodeBAR) {
                              this.advanceChar(2);
                              return TypeScript.staticTokens[TypeScript.TokenID.LogOr]
                            }else {
                              this.nextChar();
                              return TypeScript.staticTokens[TypeScript.TokenID.Or]
                            }
                          }
                        ;
                        case TypeScript.LexCodeAMP:
                          if(this.peekCharAt(this.pos + 1) == TypeScript.LexCodeEQ) {
                            this.advanceChar(2);
                            return TypeScript.staticTokens[TypeScript.TokenID.AsgAnd]
                          }else {
                            if(this.peekCharAt(this.pos + 1) == TypeScript.LexCodeAMP) {
                              this.advanceChar(2);
                              return TypeScript.staticTokens[TypeScript.TokenID.LogAnd]
                            }else {
                              this.nextChar();
                              return TypeScript.staticTokens[TypeScript.TokenID.And]
                            }
                          }
                        ;
                        default:
                          return TypeScript.staticTokens[TypeScript.TokenID.EOF]
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      return TypeScript.staticTokens[TypeScript.TokenID.EOF]
    };
    return Scanner
  }();
  TypeScript.Scanner = Scanner;
  function convertTokToIDName(tok) {
    return convertTokToIDBase(tok, true, false)
  }
  TypeScript.convertTokToIDName = convertTokToIDName;
  function convertTokToID(tok, strictMode) {
    return convertTokToIDBase(tok, false, strictMode)
  }
  TypeScript.convertTokToID = convertTokToID;
  function convertTokToIDBase(tok, identifierName, strictMode) {
    if(tok.tokenId <= TypeScript.TokenID.LimKeyword) {
      var tokInfo = TypeScript.lookupToken(tok.tokenId);
      if(tokInfo != undefined) {
        var resFlags = TypeScript.Reservation.Javascript | TypeScript.Reservation.JavascriptFuture;
        if(strictMode) {
          resFlags |= TypeScript.Reservation.JavascriptFutureStrict
        }
        if(identifierName || !TypeScript.hasFlag(tokInfo.reservation, resFlags)) {
          return true
        }
      }else {
        return false
      }
    }else {
      return false
    }
  }
  function getLineNumberFromPosition(lineMap, position) {
    if(position === -1) {
      return 0
    }
    var min = 0;
    var max = lineMap.length - 1;
    while(min < max) {
      var med = min + max >> 1;
      if(position < lineMap[med]) {
        max = med - 1
      }else {
        if(position < lineMap[med + 1]) {
          min = max = med
        }else {
          min = med + 1
        }
      }
    }
    return min
  }
  TypeScript.getLineNumberFromPosition = getLineNumberFromPosition;
  function getSourceLineColFromMap(lineCol, minChar, lineMap) {
    var line = getLineNumberFromPosition(lineMap, minChar);
    if(line > 0) {
      lineCol.line = line;
      lineCol.col = minChar - lineMap[line]
    }
  }
  TypeScript.getSourceLineColFromMap = getSourceLineColFromMap;
  function getLineColumnFromPosition(script, position) {
    var result = {line:-1, col:-1};
    getSourceLineColFromMap(result, position, script.locationInfo.lineMap);
    if(result.col >= 0) {
      result.col++
    }
    return result
  }
  TypeScript.getLineColumnFromPosition = getLineColumnFromPosition;
  function getPositionFromLineColumn(script, line, column) {
    return script.locationInfo.lineMap[line] + (column - 1)
  }
  TypeScript.getPositionFromLineColumn = getPositionFromLineColumn
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  var AssignScopeContext = function() {
    function AssignScopeContext(scopeChain, typeFlow, modDeclChain) {
      this.scopeChain = scopeChain;
      this.typeFlow = typeFlow;
      this.modDeclChain = modDeclChain
    }
    return AssignScopeContext
  }();
  TypeScript.AssignScopeContext = AssignScopeContext;
  function pushAssignScope(scope, context, type, classType, fnc) {
    var chain = new TypeScript.ScopeChain(null, context.scopeChain, scope);
    chain.thisType = type;
    chain.classType = classType;
    chain.fnc = fnc;
    context.scopeChain = chain
  }
  TypeScript.pushAssignScope = pushAssignScope;
  function popAssignScope(context) {
    context.scopeChain = context.scopeChain.previous
  }
  TypeScript.popAssignScope = popAssignScope;
  function instanceCompare(a, b) {
    if(a == null || !a.isInstanceProperty()) {
      return b
    }else {
      return a
    }
  }
  TypeScript.instanceCompare = instanceCompare;
  function instanceFilterStop(s) {
    return s.isInstanceProperty()
  }
  TypeScript.instanceFilterStop = instanceFilterStop;
  var ScopeSearchFilter = function() {
    function ScopeSearchFilter(select, stop) {
      this.select = select;
      this.stop = stop;
      this.result = null
    }
    ScopeSearchFilter.prototype.reset = function() {
      this.result = null
    };
    ScopeSearchFilter.prototype.update = function(b) {
      this.result = this.select(this.result, b);
      if(this.result) {
        return this.stop(this.result)
      }else {
        return false
      }
    };
    return ScopeSearchFilter
  }();
  TypeScript.ScopeSearchFilter = ScopeSearchFilter;
  TypeScript.instanceFilter = new ScopeSearchFilter(instanceCompare, instanceFilterStop);
  function preAssignModuleScopes(ast, context) {
    var moduleDecl = ast;
    var memberScope = null;
    var aggScope = null;
    if(moduleDecl.name && moduleDecl.mod) {
      moduleDecl.name.sym = moduleDecl.mod.symbol
    }
    var mod = moduleDecl.mod;
    if(!mod) {
      return
    }
    memberScope = new TypeScript.SymbolTableScope(mod.members, mod.ambientMembers, mod.enclosedTypes, mod.ambientEnclosedTypes, mod.symbol);
    mod.memberScope = memberScope;
    context.modDeclChain.push(moduleDecl);
    context.typeFlow.checker.currentModDecl = moduleDecl;
    aggScope = new TypeScript.SymbolAggregateScope(mod.symbol);
    aggScope.addParentScope(memberScope);
    aggScope.addParentScope(context.scopeChain.scope);
    pushAssignScope(aggScope, context, null, null, null);
    mod.containedScope = aggScope;
    if(mod.symbol) {
      context.typeFlow.addLocalsFromScope(mod.containedScope, mod.symbol, moduleDecl.vars, mod.members.privateMembers, true)
    }
  }
  TypeScript.preAssignModuleScopes = preAssignModuleScopes;
  function preAssignClassScopes(ast, context) {
    var classDecl = ast;
    var memberScope = null;
    var aggScope = null;
    if(classDecl.name && classDecl.type) {
      classDecl.name.sym = classDecl.type.symbol
    }
    var classType = ast.type;
    if(classType) {
      var classSym = classType.symbol;
      memberScope = context.typeFlow.checker.scopeOf(classType);
      aggScope = new TypeScript.SymbolAggregateScope(classType.symbol);
      aggScope.addParentScope(memberScope);
      aggScope.addParentScope(context.scopeChain.scope);
      classType.containedScope = aggScope;
      classType.memberScope = memberScope;
      var instanceType = classType.instanceType;
      memberScope = context.typeFlow.checker.scopeOf(instanceType);
      instanceType.memberScope = memberScope;
      aggScope = new TypeScript.SymbolAggregateScope(instanceType.symbol);
      aggScope.addParentScope(context.scopeChain.scope);
      pushAssignScope(aggScope, context, instanceType, classType, null);
      instanceType.containedScope = aggScope
    }else {
      ast.type = context.typeFlow.anyType
    }
  }
  TypeScript.preAssignClassScopes = preAssignClassScopes;
  function preAssignInterfaceScopes(ast, context) {
    var interfaceDecl = ast;
    var memberScope = null;
    var aggScope = null;
    if(interfaceDecl.name && interfaceDecl.type) {
      interfaceDecl.name.sym = interfaceDecl.type.symbol
    }
    var interfaceType = ast.type;
    memberScope = context.typeFlow.checker.scopeOf(interfaceType);
    interfaceType.memberScope = memberScope;
    aggScope = new TypeScript.SymbolAggregateScope(interfaceType.symbol);
    aggScope.addParentScope(memberScope);
    aggScope.addParentScope(context.scopeChain.scope);
    pushAssignScope(aggScope, context, null, null, null);
    interfaceType.containedScope = aggScope
  }
  TypeScript.preAssignInterfaceScopes = preAssignInterfaceScopes;
  function preAssignWithScopes(ast, context) {
    var withStmt = ast;
    var withType = withStmt.type;
    var members = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
    var ambientMembers = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
    var withType = new TypeScript.Type;
    var withSymbol = new TypeScript.WithSymbol(withStmt.minChar, context.typeFlow.checker.locationInfo.unitIndex, withType);
    withType.members = members;
    withType.ambientMembers = ambientMembers;
    withType.symbol = withSymbol;
    withType.setHasImplementation();
    withStmt.type = withType;
    var withScope = new TypeScript.SymbolScopeBuilder(withType.members, withType.ambientMembers, null, null, context.scopeChain.scope, withType.symbol);
    pushAssignScope(withScope, context, null, null, null);
    withType.containedScope = withScope
  }
  TypeScript.preAssignWithScopes = preAssignWithScopes;
  function preAssignFuncDeclScopes(ast, context) {
    var funcDecl = ast;
    var container = null;
    var localContainer = null;
    if(funcDecl.type) {
      localContainer = ast.type.symbol
    }
    var isStatic = TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.Static);
    var isInnerStatic = isStatic && context.scopeChain.fnc != null;
    var parentScope = isInnerStatic ? context.scopeChain.fnc.type.memberScope : context.scopeChain.scope;
    if(context.scopeChain.thisType && (!funcDecl.isConstructor || TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.ClassMethod))) {
      var instType = context.scopeChain.thisType;
      if(!(instType.typeFlags & TypeScript.TypeFlags.IsClass) && !TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.ClassMethod)) {
        if(!funcDecl.isMethod() || isStatic) {
          parentScope = instType.constructorScope
        }else {
          parentScope = instType.containedScope
        }
      }else {
        if(context.scopeChain.previous.scope.container && context.scopeChain.previous.scope.container.declAST && context.scopeChain.previous.scope.container.declAST.nodeType == TypeScript.NodeType.FuncDecl && context.scopeChain.previous.scope.container.declAST.isConstructor) {
          parentScope = instType.constructorScope
        }else {
          if(isStatic && context.scopeChain.classType) {
            parentScope = context.scopeChain.classType.containedScope
          }else {
            parentScope = instType.containedScope
          }
        }
      }
      container = instType.symbol
    }else {
      if(funcDecl.isConstructor && context.scopeChain.thisType) {
        container = context.scopeChain.thisType.symbol
      }
    }
    if(funcDecl.type == null || TypeScript.hasFlag(funcDecl.type.symbol.flags, TypeScript.SymbolFlags.TypeSetDuringScopeAssignment)) {
      if(context.scopeChain.fnc && context.scopeChain.fnc.type) {
        container = context.scopeChain.fnc.type.symbol
      }
      var funcScope = null;
      var outerFnc = context.scopeChain.fnc;
      var nameText = funcDecl.name ? funcDecl.name.text : null;
      var fgSym = null;
      if(isStatic) {
        if(outerFnc.type.members == null && container.getType().memberScope) {
          outerFnc.type.members = container.type.memberScope.valueMembers
        }
        funcScope = context.scopeChain.fnc.type.memberScope;
        outerFnc.innerStaticFuncs[outerFnc.innerStaticFuncs.length] = funcDecl
      }else {
        if(!funcDecl.isConstructor && container && container.declAST && container.declAST.nodeType == TypeScript.NodeType.FuncDecl && container.declAST.isConstructor && !funcDecl.isMethod()) {
          funcScope = context.scopeChain.thisType.constructorScope
        }else {
          funcScope = context.scopeChain.scope
        }
      }
      if(nameText && nameText != "__missing" && !funcDecl.isAccessor()) {
        if(isStatic) {
          fgSym = funcScope.findLocal(nameText, false, false)
        }else {
          fgSym = funcScope.findLocal(nameText, false, false)
        }
      }
      context.typeFlow.checker.createFunctionSignature(funcDecl, container, funcScope, fgSym, fgSym == null);
      if(!funcDecl.accessorSymbol && funcDecl.fncFlags & TypeScript.FncFlags.ClassMethod && container && (!fgSym || fgSym.declAST.nodeType != TypeScript.NodeType.FuncDecl) && funcDecl.isAccessor() || fgSym && fgSym.isAccessor()) {
        funcDecl.accessorSymbol = context.typeFlow.checker.createAccessorSymbol(funcDecl, fgSym, container.getType(), funcDecl.isMethod() && isStatic, true, funcScope, container)
      }
      funcDecl.type.symbol.flags |= TypeScript.SymbolFlags.TypeSetDuringScopeAssignment
    }
    if(funcDecl.name && funcDecl.type) {
      funcDecl.name.sym = funcDecl.type.symbol
    }
    funcDecl.scopeType = funcDecl.type;
    if(funcDecl.isOverload) {
      return
    }
    var funcTable = new TypeScript.StringHashTable;
    var funcMembers = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(funcTable, new TypeScript.StringHashTable));
    var ambientFuncTable = new TypeScript.StringHashTable;
    var ambientFuncMembers = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(ambientFuncTable, new TypeScript.StringHashTable));
    var funcStaticTable = new TypeScript.StringHashTable;
    var funcStaticMembers = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(funcStaticTable, new TypeScript.StringHashTable));
    var ambientFuncStaticTable = new TypeScript.StringHashTable;
    var ambientFuncStaticMembers = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(ambientFuncStaticTable, new TypeScript.StringHashTable));
    funcDecl.unitIndex = context.typeFlow.checker.locationInfo.unitIndex;
    var locals = new TypeScript.SymbolScopeBuilder(funcMembers, ambientFuncMembers, null, null, parentScope, localContainer);
    var statics = new TypeScript.SymbolScopeBuilder(funcStaticMembers, ambientFuncStaticMembers, null, null, parentScope, null);
    if(funcDecl.isConstructor && context.scopeChain.thisType) {
      context.scopeChain.thisType.constructorScope = locals
    }
    funcDecl.symbols = funcTable;
    if(!funcDecl.isSpecialFn()) {
      var group = funcDecl.type;
      var signature = funcDecl.signature;
      if(!funcDecl.isConstructor) {
        group.containedScope = locals;
        locals.container = group.symbol;
        group.memberScope = statics;
        statics.container = group.symbol
      }
      funcDecl.enclosingFnc = context.scopeChain.fnc;
      group.enclosingType = isStatic ? context.scopeChain.classType : context.scopeChain.thisType;
      var fgSym = ast.type.symbol;
      if((funcDecl.fncFlags & TypeScript.FncFlags.Signature) == TypeScript.FncFlags.None && funcDecl.vars) {
        context.typeFlow.addLocalsFromScope(locals, fgSym, funcDecl.vars, funcTable, false);
        context.typeFlow.addLocalsFromScope(statics, fgSym, funcDecl.statics, funcStaticTable, false)
      }
      if(signature.parameters) {
        var len = signature.parameters.length;
        for(var i = 0;i < len;i++) {
          var paramSym = signature.parameters[i];
          context.typeFlow.checker.resolveTypeLink(locals, paramSym.parameter.typeLink, true)
        }
      }
      context.typeFlow.checker.resolveTypeLink(locals, signature.returnType, funcDecl.isSignature())
    }
    if(!funcDecl.isConstructor || TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.ClassMethod)) {
      var thisType = funcDecl.isConstructor && TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.ClassMethod) ? context.scopeChain.thisType : null;
      pushAssignScope(locals, context, thisType, null, funcDecl)
    }
  }
  TypeScript.preAssignFuncDeclScopes = preAssignFuncDeclScopes;
  function preAssignCatchScopes(ast, context) {
    var catchBlock = ast;
    if(catchBlock.param) {
      var catchTable = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
      var catchLocals = new TypeScript.SymbolScopeBuilder(catchTable, null, null, null, context.scopeChain.scope, context.scopeChain.scope.container);
      catchBlock.containedScope = catchLocals;
      pushAssignScope(catchLocals, context, context.scopeChain.thisType, context.scopeChain.classType, context.scopeChain.fnc)
    }
  }
  TypeScript.preAssignCatchScopes = preAssignCatchScopes;
  function preAssignScopes(ast, parent, walker) {
    var context = walker.state;
    var go = true;
    if(ast) {
      if(ast.nodeType == TypeScript.NodeType.List) {
        var list = ast;
        list.enclosingScope = context.scopeChain.scope
      }else {
        if(ast.nodeType == TypeScript.NodeType.Module) {
          preAssignModuleScopes(ast, context)
        }else {
          if(ast.nodeType == TypeScript.NodeType.Class) {
            preAssignClassScopes(ast, context)
          }else {
            if(ast.nodeType == TypeScript.NodeType.Interface) {
              preAssignInterfaceScopes(ast, context)
            }else {
              if(ast.nodeType == TypeScript.NodeType.With) {
                preAssignWithScopes(ast, context)
              }else {
                if(ast.nodeType == TypeScript.NodeType.FuncDecl) {
                  preAssignFuncDeclScopes(ast, context)
                }else {
                  if(ast.nodeType == TypeScript.NodeType.Catch) {
                    preAssignCatchScopes(ast, context)
                  }else {
                    if(ast.nodeType == TypeScript.NodeType.TypeRef) {
                      go = false
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    walker.options.goChildren = go;
    return ast
  }
  TypeScript.preAssignScopes = preAssignScopes;
  function postAssignScopes(ast, parent, walker) {
    var context = walker.state;
    var go = true;
    if(ast) {
      if(ast.nodeType == TypeScript.NodeType.Module) {
        var prevModDecl = ast;
        popAssignScope(context);
        context.modDeclChain.pop();
        if(context.modDeclChain.length >= 1) {
          context.typeFlow.checker.currentModDecl = context.modDeclChain[context.modDeclChain.length - 1]
        }
      }else {
        if(ast.nodeType == TypeScript.NodeType.Class) {
          popAssignScope(context)
        }else {
          if(ast.nodeType == TypeScript.NodeType.Interface) {
            popAssignScope(context)
          }else {
            if(ast.nodeType == TypeScript.NodeType.With) {
              popAssignScope(context)
            }else {
              if(ast.nodeType == TypeScript.NodeType.FuncDecl) {
                var funcDecl = ast;
                if((!funcDecl.isConstructor || TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.ClassMethod)) && !funcDecl.isOverload) {
                  popAssignScope(context)
                }
              }else {
                if(ast.nodeType == TypeScript.NodeType.Catch) {
                  var catchBlock = ast;
                  if(catchBlock.param) {
                    popAssignScope(context)
                  }
                }else {
                  go = false
                }
              }
            }
          }
        }
      }
    }
    walker.options.goChildren = go;
    return ast
  }
  TypeScript.postAssignScopes = postAssignScopes
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  var TypeCollectionContext = function() {
    function TypeCollectionContext(scopeChain, checker) {
      this.scopeChain = scopeChain;
      this.checker = checker;
      this.script = null
    }
    return TypeCollectionContext
  }();
  TypeScript.TypeCollectionContext = TypeCollectionContext;
  var MemberScopeContext = function() {
    function MemberScopeContext(flow, pos, matchFlag) {
      this.flow = flow;
      this.pos = pos;
      this.matchFlag = matchFlag;
      this.type = null;
      this.ast = null;
      this.options = new TypeScript.AstWalkOptions
    }
    return MemberScopeContext
  }();
  TypeScript.MemberScopeContext = MemberScopeContext;
  var EnclosingScopeContext = function() {
    function EnclosingScopeContext(logger, script, text, pos, isMemberCompletion) {
      this.logger = logger;
      this.script = script;
      this.text = text;
      this.pos = pos;
      this.isMemberCompletion = isMemberCompletion;
      this.scopeGetter = null;
      this.objectLiteralScopeGetter = null;
      this.scopeStartAST = null;
      this.skipNextFuncDeclForClass = false;
      this.deepestModuleDecl = null;
      this.enclosingClassDecl = null;
      this.enclosingObjectLit = null;
      this.publicsOnly = true;
      this.useFullAst = false
    }
    EnclosingScopeContext.prototype.getScope = function() {
      return this.scopeGetter()
    };
    EnclosingScopeContext.prototype.getObjectLiteralScope = function() {
      return this.objectLiteralScopeGetter()
    };
    EnclosingScopeContext.prototype.getScopeAST = function() {
      return this.scopeStartAST
    };
    EnclosingScopeContext.prototype.getScopePosition = function() {
      return this.scopeStartAST.minChar
    };
    EnclosingScopeContext.prototype.getScriptFragmentStartAST = function() {
      return this.scopeStartAST
    };
    EnclosingScopeContext.prototype.getScriptFragmentPosition = function() {
      return this.getScriptFragmentStartAST().minChar
    };
    EnclosingScopeContext.prototype.getScriptFragment = function() {
      if(this.scriptFragment == null) {
        var ast = this.getScriptFragmentStartAST();
        var minChar = ast.minChar;
        var limChar = this.isMemberCompletion ? this.pos : this.pos + 1;
        this.scriptFragment = TypeScript.quickParse(this.logger, ast, this.text, minChar, limChar, null).Script
      }
      return this.scriptFragment
    };
    return EnclosingScopeContext
  }();
  TypeScript.EnclosingScopeContext = EnclosingScopeContext;
  function preFindMemberScope(ast, parent, walker) {
    var memScope = walker.state;
    if(TypeScript.hasFlag(ast.flags, memScope.matchFlag) && (memScope.pos < 0 || memScope.pos == ast.limChar)) {
      memScope.ast = ast;
      if(ast.type == null && memScope.pos >= 0) {
        memScope.flow.inScopeTypeCheck(ast, memScope.scope)
      }
      memScope.type = ast.type;
      memScope.options.stopWalk()
    }
    return ast
  }
  TypeScript.preFindMemberScope = preFindMemberScope;
  function pushTypeCollectionScope(container, valueMembers, ambientValueMembers, enclosedTypes, ambientEnclosedTypes, context, thisType, classType, moduleDecl) {
    var builder = new TypeScript.SymbolScopeBuilder(valueMembers, ambientValueMembers, enclosedTypes, ambientEnclosedTypes, null, container);
    var chain = new TypeScript.ScopeChain(container, context.scopeChain, builder);
    chain.thisType = thisType;
    chain.classType = classType;
    chain.moduleDecl = moduleDecl;
    context.scopeChain = chain
  }
  TypeScript.pushTypeCollectionScope = pushTypeCollectionScope;
  function popTypeCollectionScope(context) {
    context.scopeChain = context.scopeChain.previous
  }
  TypeScript.popTypeCollectionScope = popTypeCollectionScope;
  function preFindEnclosingScope(ast, parent, walker) {
    var context = walker.state;
    var minChar = ast.minChar;
    var limChar = ast.limChar;
    if(ast.nodeType == TypeScript.NodeType.Script && context.pos > limChar) {
      limChar = context.pos
    }
    if(minChar <= context.pos && limChar >= context.pos) {
      switch(ast.nodeType) {
        case TypeScript.NodeType.Script:
          var script = ast;
          context.scopeGetter = function() {
            return script.bod === null ? null : script.bod.enclosingScope
          };
          context.scopeStartAST = script;
          break;
        case TypeScript.NodeType.Class:
          context.scopeGetter = function() {
            return ast.type === null || ast.type.instanceType.containedScope === null ? null : ast.type.instanceType.containedScope
          };
          context.scopeStartAST = ast;
          context.enclosingClassDecl = ast;
          break;
        case TypeScript.NodeType.ObjectLit:
          var objectLit = ast;
          if(objectLit.targetType) {
            context.scopeGetter = function() {
              return objectLit.targetType.containedScope
            };
            context.objectLiteralScopeGetter = function() {
              return objectLit.targetType.memberScope
            };
            context.enclosingObjectLit = objectLit
          }
          break;
        case TypeScript.NodeType.Module:
          context.deepestModuleDecl = ast;
          context.scopeGetter = function() {
            return ast.type === null ? null : ast.type.containedScope
          };
          context.scopeStartAST = ast;
          break;
        case TypeScript.NodeType.Interface:
          context.scopeGetter = function() {
            return ast.type === null ? null : ast.type.containedScope
          };
          context.scopeStartAST = ast;
          break;
        case TypeScript.NodeType.FuncDecl:
          var funcDecl = ast;
          if(context.skipNextFuncDeclForClass) {
            context.skipNextFuncDeclForClass = false
          }else {
            context.scopeGetter = function() {
              if(funcDecl.isConstructor && TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.ClassMethod)) {
                if(ast.type && ast.type.enclosingType) {
                  return ast.type.enclosingType.constructorScope
                }
              }
              if(funcDecl.scopeType) {
                return funcDecl.scopeType.containedScope
              }
              if(funcDecl.type) {
                return funcDecl.type.containedScope
              }
              return null
            };
            context.scopeStartAST = ast
          }
          break
      }
      walker.options.goChildren = true
    }else {
      walker.options.goChildren = false
    }
    return ast
  }
  TypeScript.preFindEnclosingScope = preFindEnclosingScope;
  function findEnclosingScopeAt(logger, script, text, pos, isMemberCompletion) {
    var context = new EnclosingScopeContext(logger, script, text, pos, isMemberCompletion);
    TypeScript.getAstWalkerFactory().walk(script, preFindEnclosingScope, null, null, context);
    if(context.scopeStartAST === null) {
      return null
    }
    return context
  }
  TypeScript.findEnclosingScopeAt = findEnclosingScopeAt
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  var Signature = function() {
    function Signature() {
      this.hasVariableArgList = false;
      this.parameters = null;
      this.declAST = null;
      this.typeCheckStatus = TypeScript.TypeCheckStatus.NotStarted;
      this.nonOptionalParameterCount = 0
    }
    Signature.prototype.specializeType = function(pattern, replacement, checker) {
      var result = new Signature;
      if(this.hasVariableArgList) {
        result.hasVariableArgList = true
      }
      result.returnType = new TypeScript.TypeLink;
      if(this.returnType.type) {
        result.returnType.type = this.returnType.type.specializeType(pattern, replacement, checker, false)
      }else {
        result.returnType.type = checker.anyType
      }
      if(this.parameters) {
        result.parameters = [];
        for(var i = 0, len = this.parameters.length;i < len;i++) {
          var oldSym = this.parameters[i];
          var paramDef = new TypeScript.ValueLocation;
          var paramSym = new TypeScript.ParameterSymbol(oldSym.name, oldSym.location, checker.locationInfo.unitIndex, paramDef);
          paramSym.declAST = this.declAST;
          paramDef.symbol = paramSym;
          paramDef.typeLink = new TypeScript.TypeLink;
          result.parameters[i] = paramSym;
          var oldType = oldSym.getType();
          if(oldType) {
            paramDef.typeLink.type = oldType.specializeType(pattern, replacement, checker, false);
            paramSym.declAST.type = paramDef.typeLink.type
          }else {
            paramDef.typeLink.type = checker.anyType
          }
        }
      }
      result.nonOptionalParameterCount = this.nonOptionalParameterCount;
      result.declAST = this.declAST;
      return result
    };
    Signature.prototype.toString = function() {
      return this.toStringHelper(false, false, null)
    };
    Signature.prototype.toStringHelper = function(shortform, brackets, scope) {
      var builder;
      if(brackets) {
        builder = "["
      }else {
        builder = "("
      }
      var len = this.parameters.length;
      for(var i = 0;i < len;i++) {
        builder += this.parameters[i].name + (this.parameters[i].isOptional() ? "?" : "") + ": ";
        builder += this.parameters[i].getType().getScopedTypeName(scope);
        if(i < len - 1) {
          builder += ","
        }
      }
      if(shortform) {
        if(brackets) {
          builder += "] => "
        }else {
          builder += ") => "
        }
      }else {
        if(brackets) {
          builder += "]: "
        }else {
          builder += "): "
        }
      }
      if(this.returnType.type) {
        builder += this.returnType.type.getScopedTypeName(scope)
      }else {
        builder += "any"
      }
      return builder
    };
    return Signature
  }();
  TypeScript.Signature = Signature;
  var SignatureGroup = function() {
    function SignatureGroup() {
      this.signatures = [];
      this.hasImplementation = true;
      this.definitionSignature = null;
      this.hasBeenTypechecked = false;
      this.flags = TypeScript.SignatureFlags.None
    }
    SignatureGroup.prototype.addSignature = function(signature) {
      if(this.signatures == null) {
        this.signatures = new Array
      }
      this.signatures[this.signatures.length] = signature;
      if(signature.declAST && !signature.declAST.isOverload && !signature.declAST.isSignature() && !TypeScript.hasFlag(signature.declAST.fncFlags, TypeScript.FncFlags.Ambient) && TypeScript.hasFlag(signature.declAST.fncFlags, TypeScript.FncFlags.Definition)) {
        this.definitionSignature = signature
      }
    };
    SignatureGroup.prototype.toString = function() {
      return this.signatures.toString()
    };
    SignatureGroup.prototype.toStrings = function(prefix, shortform, scope) {
      var result = [];
      var len = this.signatures.length;
      if(len > 1) {
        shortform = false
      }
      for(var i = 0;i < len;i++) {
        if(len > 1 && this.signatures[i] == this.definitionSignature) {
          continue
        }
        if(this.flags & TypeScript.SignatureFlags.IsIndexer) {
          result[i] = this.signatures[i].toStringHelper(shortform, true, scope)
        }else {
          result[i] = prefix + this.signatures[i].toStringHelper(shortform, false, scope)
        }
      }
      return result
    };
    SignatureGroup.prototype.specializeType = function(pattern, replacement, checker) {
      var result = new SignatureGroup;
      if(this.signatures) {
        for(var i = 0, len = this.signatures.length;i < len;i++) {
          result.addSignature(this.signatures[i].specializeType(pattern, replacement, checker))
        }
      }
      return result
    };
    SignatureGroup.prototype.verifySignatures = function(checker) {
      var len = 0;
      if(this.signatures && (len = this.signatures.length) > 0) {
        for(var i = 0;i < len;i++) {
          for(var j = i + 1;j < len;j++) {
            if(this.signatures[i].declAST && this.signatures[j].declAST && !TypeScript.hasFlag(this.signatures[i].declAST.fncFlags, TypeScript.FncFlags.Definition) && !TypeScript.hasFlag(this.signatures[j].declAST.fncFlags, TypeScript.FncFlags.Definition) && checker.signaturesAreIdentical(this.signatures[i], this.signatures[j])) {
              checker.errorReporter.simpleError(this.signatures[i].declAST, this.signatures[i].declAST && this.signatures[i].declAST.name ? "Signature for '" + this.signatures[i].declAST.name.text + "' is duplicated" : "Signature is duplicated")
            }
          }
          if(this.definitionSignature) {
            if(!checker.signatureIsAssignableToTarget(this.definitionSignature, this.signatures[i])) {
              checker.errorReporter.simpleError(this.signatures[i].declAST, "Overload signature is not compatible with function definition")
            }
          }
        }
      }
    };
    SignatureGroup.prototype.typeCheck = function(checker, ast, hasConstruct) {
      if(this.hasBeenTypechecked) {
        return
      }
      this.hasBeenTypechecked = true;
      var len = 0;
      if(this.signatures && (len = this.signatures.length) > 0) {
        for(var i = 0;i < len;i++) {
          if(!hasConstruct && !this.definitionSignature && this.signatures[i].declAST && this.signatures[i].declAST.isOverload && !TypeScript.hasFlag(this.signatures[i].declAST.fncFlags, TypeScript.FncFlags.Ambient)) {
            checker.errorReporter.simpleError(this.signatures[i].declAST, "Overload declaration lacks definition")
          }
          if(this.signatures[i].declAST && this.signatures[i].declAST.isConstructor && this.signatures[i].declAST.classDecl && this.signatures[i].declAST.classDecl.type.symbol.typeCheckStatus == TypeScript.TypeCheckStatus.NotStarted) {
            checker.typeFlow.typeCheck(this.signatures[i].declAST.classDecl)
          }
          checker.typeFlow.typeCheck(this.signatures[i].declAST)
        }
        this.verifySignatures(checker)
      }
    };
    return SignatureGroup
  }();
  TypeScript.SignatureGroup = SignatureGroup
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  (function(TypeCheckStatus) {
    TypeCheckStatus._map = [];
    TypeCheckStatus._map[0] = "NotStarted";
    TypeCheckStatus.NotStarted = 0;
    TypeCheckStatus._map[1] = "Started";
    TypeCheckStatus.Started = 1;
    TypeCheckStatus._map[2] = "Finished";
    TypeCheckStatus.Finished = 2
  })(TypeScript.TypeCheckStatus || (TypeScript.TypeCheckStatus = {}));
  var TypeCheckStatus = TypeScript.TypeCheckStatus;
  function aLexicallyEnclosesB(a, b) {
    if(a.declAST && b && b.declAST && a.declAST.nodeType == TypeScript.NodeType.FuncDecl) {
      return a.declAST.minChar <= b.declAST.minChar && a.declAST.limChar >= b.declAST.limChar
    }else {
      return false
    }
  }
  TypeScript.aLexicallyEnclosesB = aLexicallyEnclosesB;
  function aEnclosesB(a, b) {
    while(a.container) {
      if(a == b || aLexicallyEnclosesB(a.container, b)) {
        return true
      }
      a = a.container
    }
    return false
  }
  TypeScript.aEnclosesB = aEnclosesB;
  var Symbol = function() {
    function Symbol(name, location, unitIndex) {
      this.name = name;
      this.location = location;
      this.unitIndex = unitIndex;
      this.bound = false;
      this.flags = TypeScript.SymbolFlags.None;
      this.isObjectLitField = false;
      this.declAST = null;
      this.declModule = null;
      this.passSymbolCreated = TypeScript.CompilerDiagnostics.analysisPass
    }
    Symbol.prototype.instanceScope = function() {
      return null
    };
    Symbol.prototype.isVariable = function() {
      return false
    };
    Symbol.prototype.isMember = function() {
      return false
    };
    Symbol.prototype.isInferenceSymbol = function() {
      return false
    };
    Symbol.prototype.isWith = function() {
      return false
    };
    Symbol.prototype.writeable = function() {
      return false
    };
    Symbol.prototype.isType = function() {
      return false
    };
    Symbol.prototype.getType = function() {
      return null
    };
    Symbol.prototype.isAccessor = function() {
      return false
    };
    Symbol.prototype.isInstanceProperty = function() {
      return TypeScript.hasFlag(this.flags, TypeScript.SymbolFlags.Property) && !TypeScript.hasFlag(this.flags, TypeScript.SymbolFlags.ModuleMember)
    };
    Symbol.prototype.getTypeName = function(scope) {
      return this.toString()
    };
    Symbol.prototype.getOptionalNameString = function() {
      return TypeScript.hasFlag(this.flags, TypeScript.SymbolFlags.Optional) ? "?" : ""
    };
    Symbol.prototype.pathToRoot = function() {
      var path = new Array;
      var node = this;
      while(node && node.name != TypeScript.globalId) {
        path[path.length] = node;
        node = node.container
      }
      return path
    };
    Symbol.prototype.findCommonAncestorPath = function(b) {
      if(this.container == null) {
        return new Array
      }
      var aPath = this.container.pathToRoot();
      var bPath;
      if(b) {
        bPath = b.pathToRoot()
      }else {
        bPath = new Array
      }
      var commonNodeIndex = -1;
      for(var i = 0, aLen = aPath.length;i < aLen;i++) {
        var aNode = aPath[i];
        for(var j = 0, bLen = bPath.length;j < bLen;j++) {
          var bNode = bPath[j];
          if(aNode == bNode) {
            commonNodeIndex = i;
            break
          }
        }
        if(commonNodeIndex >= 0) {
          break
        }
      }
      if(commonNodeIndex >= 0) {
        return aPath.slice(0, commonNodeIndex)
      }else {
        return aPath
      }
    };
    Symbol.prototype.scopeRelativeName = function(scope) {
      if(scope == null) {
        return this.name
      }
      var lca = this.findCommonAncestorPath(scope.container);
      var builder = "";
      for(var i = 0, len = lca.length;i < len;i++) {
        builder = lca[i].name + "." + builder
      }
      builder += this.name;
      return builder
    };
    Symbol.prototype.fullName = function() {
      var builder = this.name;
      var ancestor = this.container;
      while(ancestor && ancestor.name != TypeScript.globalId) {
        builder = ancestor.name + "." + builder;
        ancestor = ancestor.container
      }
      return builder
    };
    Symbol.prototype.visible = function(scope, checker) {
      if(checker == null || this.container == checker.gloMod) {
        return true
      }
      if(TypeScript.hasFlag(this.flags, TypeScript.SymbolFlags.ModuleMember)) {
        if(TypeScript.hasFlag(this.flags, TypeScript.SymbolFlags.Exported)) {
          if(!TypeScript.hasFlag(this.flags, TypeScript.SymbolFlags.Private)) {
            return true
          }else {
            return aEnclosesB(this, scope.container)
          }
        }else {
          return checker && checker.currentModDecl == this.declModule || checker.currentModDecl && checker.currentModDecl.mod && checker.currentModDecl.mod.symbol && this.declModule && this.declModule.mod && this.declModule.mod.symbol && aEnclosesB(checker.currentModDecl.mod.symbol, this.declModule.mod.symbol)
        }
      }else {
        var isFunction = this.declAST && this.declAST.nodeType == TypeScript.NodeType.FuncDecl;
        var isMethod = isFunction && this.declAST.isMethod();
        var isStaticFunction = isFunction && TypeScript.hasFlag(this.declAST.fncFlags, TypeScript.FncFlags.Static);
        var isPrivateMethod = isMethod && TypeScript.hasFlag(this.declAST.fncFlags, TypeScript.FncFlags.Private);
        var isAlias = this.isType() && this.aliasLink;
        if(this.isMember() || isMethod || isStaticFunction || isAlias) {
          if(TypeScript.hasFlag(this.flags, TypeScript.SymbolFlags.Private) || isPrivateMethod) {
            if(scope.container == null && this.container != scope.container) {
              return false
            }else {
              return this.container == null ? true : aEnclosesB(scope.container, this.container)
            }
          }else {
            return true
          }
        }else {
          if(this.container) {
            return aEnclosesB(this, scope.container)
          }else {
            return true
          }
        }
      }
    };
    Symbol.prototype.addRef = function(identifier) {
      if(!this.refs) {
        this.refs = []
      }
      this.refs[this.refs.length] = identifier
    };
    Symbol.prototype.toString = function() {
      if(this.name) {
        return this.name
      }else {
        return"_anonymous"
      }
    };
    Symbol.prototype.print = function(outfile) {
      outfile.Write(this.toString())
    };
    Symbol.prototype.specializeType = function(pattern, replacement, checker) {
      throw new Error("please implement in derived class");
    };
    Symbol.prototype.setType = function(type) {
      throw new Error("please implement in derived class");
    };
    Symbol.prototype.kind = function() {
      throw new Error("please implement in derived class");
    };
    return Symbol
  }();
  TypeScript.Symbol = Symbol;
  var ValueLocation = function() {
    function ValueLocation() {
    }
    return ValueLocation
  }();
  TypeScript.ValueLocation = ValueLocation;
  var InferenceSymbol = function(_super) {
    __extends(InferenceSymbol, _super);
    function InferenceSymbol(name, location, unitIndex) {
      _super.call(this, name, location, unitIndex);
      this.typeCheckStatus = TypeCheckStatus.NotStarted
    }
    InferenceSymbol.prototype.isInferenceSymbol = function() {
      return true
    };
    InferenceSymbol.prototype.transferVarFlags = function(varFlags) {
      if(TypeScript.hasFlag(varFlags, TypeScript.VarFlags.Ambient)) {
        this.flags |= TypeScript.SymbolFlags.Ambient
      }
      if(TypeScript.hasFlag(varFlags, TypeScript.VarFlags.Constant)) {
        this.flags |= TypeScript.SymbolFlags.Constant
      }
      if(TypeScript.hasFlag(varFlags, TypeScript.VarFlags.Static)) {
        this.flags |= TypeScript.SymbolFlags.Static
      }
      if(TypeScript.hasFlag(varFlags, TypeScript.VarFlags.Property)) {
        this.flags |= TypeScript.SymbolFlags.Property
      }
      if(TypeScript.hasFlag(varFlags, TypeScript.VarFlags.Private)) {
        this.flags |= TypeScript.SymbolFlags.Private
      }
      if(TypeScript.hasFlag(varFlags, TypeScript.VarFlags.Public)) {
        this.flags |= TypeScript.SymbolFlags.Public
      }
      if(TypeScript.hasFlag(varFlags, TypeScript.VarFlags.Readonly)) {
        this.flags |= TypeScript.SymbolFlags.Readonly
      }
      if(TypeScript.hasFlag(varFlags, TypeScript.VarFlags.Exported)) {
        this.flags |= TypeScript.SymbolFlags.Exported
      }
    };
    return InferenceSymbol
  }(Symbol);
  TypeScript.InferenceSymbol = InferenceSymbol;
  var TypeSymbol = function(_super) {
    __extends(TypeSymbol, _super);
    function TypeSymbol(locName, location, unitIndex, type) {
      _super.call(this, locName, location, unitIndex);
      this.type = type;
      this.expansions = [];
      this.isMethod = false;
      this.aliasLink = null;
      this.onlyReferencedAsTypeRef = TypeScript.optimizeModuleCodeGen;
      this.prettyName = this.name
    }
    TypeSymbol.prototype.addLocation = function(loc) {
      if(this.additionalLocations == null) {
        this.additionalLocations = []
      }
      this.additionalLocations[this.additionalLocations.length] = loc
    };
    TypeSymbol.prototype.kind = function() {
      return TypeScript.SymbolKind.Type
    };
    TypeSymbol.prototype.isType = function() {
      return true
    };
    TypeSymbol.prototype.getType = function() {
      return this.type
    };
    TypeSymbol.prototype.getTypeName = function(scope) {
      return this.type.getMemberTypeName(this.name ? this.name + this.getOptionalNameString() : "", false, false, scope)
    };
    TypeSymbol.prototype.instanceScope = function() {
      if(!(this.type.typeFlags & TypeScript.TypeFlags.IsClass) && this.type.isClass()) {
        return this.type.instanceType.constructorScope
      }else {
        return this.type.containedScope
      }
    };
    TypeSymbol.prototype.toString = function() {
      var result = this.type.getTypeName();
      if(this.name) {
        result = this.name + ":" + result
      }
      return result
    };
    TypeSymbol.prototype.isClass = function() {
      return this.instanceType != null
    };
    TypeSymbol.prototype.isFunction = function() {
      return this.declAST != null && this.declAST.nodeType == TypeScript.NodeType.FuncDecl
    };
    TypeSymbol.prototype.specializeType = function(pattern, replacement, checker) {
      if(this.type == pattern) {
        return replacement.symbol
      }else {
        var replType = this.type.specializeType(pattern, replacement, checker, false);
        if(replType != this.type) {
          var result = new TypeSymbol(this.name, 0, -1, replType);
          return result
        }else {
          return this
        }
      }
    };
    TypeSymbol.prototype.scopeRelativeName = function(scope) {
      if(scope == null) {
        return this.prettyName + this.getOptionalNameString()
      }
      var lca = this.findCommonAncestorPath(scope.container);
      var builder = "";
      for(var i = 0, len = lca.length;i < len;i++) {
        var prettyName = lca[i].kind() == TypeScript.SymbolKind.Type ? lca[i].prettyName : lca[i].name;
        builder = prettyName + "." + builder
      }
      builder += this.prettyName + this.getOptionalNameString();
      return builder
    };
    return TypeSymbol
  }(InferenceSymbol);
  TypeScript.TypeSymbol = TypeSymbol;
  var WithSymbol = function(_super) {
    __extends(WithSymbol, _super);
    function WithSymbol(location, unitIndex, withType) {
      _super.call(this, "with", location, unitIndex, withType)
    }
    WithSymbol.prototype.isWith = function() {
      return true
    };
    return WithSymbol
  }(TypeSymbol);
  TypeScript.WithSymbol = WithSymbol;
  var FieldSymbol = function(_super) {
    __extends(FieldSymbol, _super);
    function FieldSymbol(name, location, unitIndex, canWrite, field) {
      _super.call(this, name, location, unitIndex);
      this.canWrite = canWrite;
      this.field = field;
      this.getter = null;
      this.setter = null;
      this.hasBeenEmitted = false;
      this.name = name;
      this.location = location
    }
    FieldSymbol.prototype.kind = function() {
      return TypeScript.SymbolKind.Field
    };
    FieldSymbol.prototype.writeable = function() {
      return this.isAccessor() ? this.setter != null : this.canWrite
    };
    FieldSymbol.prototype.getType = function() {
      return this.field.typeLink.type
    };
    FieldSymbol.prototype.getTypeName = function(scope) {
      return this.name + this.getOptionalNameString() + ": " + this.field.typeLink.type.getMemberTypeName("", true, false, scope)
    };
    FieldSymbol.prototype.isMember = function() {
      return true
    };
    FieldSymbol.prototype.setType = function(type) {
      this.field.typeLink.type = type
    };
    FieldSymbol.prototype.isAccessor = function() {
      return this.getter != null || this.setter != null
    };
    FieldSymbol.prototype.isVariable = function() {
      return true
    };
    FieldSymbol.prototype.toString = function() {
      return this.name + this.getOptionalNameString() + ":" + this.field.typeLink.type.getTypeName()
    };
    FieldSymbol.prototype.specializeType = function(pattern, replacement, checker) {
      var rType = this.field.typeLink.type.specializeType(pattern, replacement, checker, false);
      if(rType != this.field.typeLink.type) {
        var fieldDef = new ValueLocation;
        var result = new FieldSymbol(this.name, 0, checker.locationInfo.unitIndex, this.canWrite, fieldDef);
        result.flags = this.flags;
        fieldDef.symbol = result;
        fieldDef.typeLink = new TypeScript.TypeLink;
        result.setType(rType);
        result.typeCheckStatus = TypeCheckStatus.Finished;
        return result
      }else {
        return this
      }
    };
    return FieldSymbol
  }(InferenceSymbol);
  TypeScript.FieldSymbol = FieldSymbol;
  var ParameterSymbol = function(_super) {
    __extends(ParameterSymbol, _super);
    function ParameterSymbol(name, location, unitIndex, parameter) {
      _super.call(this, name, location, unitIndex);
      this.parameter = parameter;
      this.argsOffset = -1;
      this.name = name;
      this.location = location
    }
    ParameterSymbol.prototype.kind = function() {
      return TypeScript.SymbolKind.Parameter
    };
    ParameterSymbol.prototype.writeable = function() {
      return true
    };
    ParameterSymbol.prototype.getType = function() {
      return this.parameter.typeLink.type
    };
    ParameterSymbol.prototype.setType = function(type) {
      this.parameter.typeLink.type = type
    };
    ParameterSymbol.prototype.isVariable = function() {
      return true
    };
    ParameterSymbol.prototype.isOptional = function() {
      if(this.parameter && this.parameter.symbol && this.parameter.symbol.declAST) {
        return this.parameter.symbol.declAST.isOptional
      }else {
        return false
      }
    };
    ParameterSymbol.prototype.getTypeName = function(scope) {
      return this.name + (this.isOptional() ? "?" : "") + ":" + this.getType().getMemberTypeName("", false, false, scope)
    };
    ParameterSymbol.prototype.toString = function() {
      return this.name + (this.isOptional() ? "?" : "") + ":" + this.getType().getTypeName()
    };
    ParameterSymbol.prototype.specializeType = function(pattern, replacement, checker) {
      var rType = this.parameter.typeLink.type.specializeType(pattern, replacement, checker, false);
      if(this.parameter.typeLink.type != rType) {
        var paramDef = new ValueLocation;
        var result = new ParameterSymbol(this.name, 0, checker.locationInfo.unitIndex, paramDef);
        paramDef.symbol = result;
        result.setType(rType);
        return result
      }else {
        return this
      }
    };
    return ParameterSymbol
  }(InferenceSymbol);
  TypeScript.ParameterSymbol = ParameterSymbol;
  var VariableSymbol = function(_super) {
    __extends(VariableSymbol, _super);
    function VariableSymbol(name, location, unitIndex, variable) {
      _super.call(this, name, location, unitIndex);
      this.variable = variable
    }
    VariableSymbol.prototype.kind = function() {
      return TypeScript.SymbolKind.Variable
    };
    VariableSymbol.prototype.writeable = function() {
      return true
    };
    VariableSymbol.prototype.getType = function() {
      return this.variable.typeLink.type
    };
    VariableSymbol.prototype.getTypeName = function(scope) {
      return this.name + ":" + this.getType().getMemberTypeName("", false, false, scope)
    };
    VariableSymbol.prototype.setType = function(type) {
      this.variable.typeLink.type = type
    };
    VariableSymbol.prototype.isVariable = function() {
      return true
    };
    return VariableSymbol
  }(InferenceSymbol);
  TypeScript.VariableSymbol = VariableSymbol
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  var ScopedMembers = function() {
    function ScopedMembers(dualMembers) {
      this.dualMembers = dualMembers;
      this.allMembers = this.dualMembers;
      this.publicMembers = this.dualMembers.primaryTable;
      this.privateMembers = this.dualMembers.secondaryTable
    }
    ScopedMembers.prototype.addPublicMember = function(key, data) {
      return this.dualMembers.primaryTable.add(key, data)
    };
    ScopedMembers.prototype.addPrivateMember = function(key, data) {
      return this.dualMembers.secondaryTable.add(key, data)
    };
    return ScopedMembers
  }();
  TypeScript.ScopedMembers = ScopedMembers;
  (function(SymbolKind) {
    SymbolKind._map = [];
    SymbolKind._map[0] = "None";
    SymbolKind.None = 0;
    SymbolKind._map[1] = "Type";
    SymbolKind.Type = 1;
    SymbolKind._map[2] = "Field";
    SymbolKind.Field = 2;
    SymbolKind._map[3] = "Parameter";
    SymbolKind.Parameter = 3;
    SymbolKind._map[4] = "Variable";
    SymbolKind.Variable = 4
  })(TypeScript.SymbolKind || (TypeScript.SymbolKind = {}));
  var SymbolKind = TypeScript.SymbolKind;
  var SymbolScope = function() {
    function SymbolScope(container) {
      this.container = container
    }
    SymbolScope.prototype.printLabel = function() {
      return"base"
    };
    SymbolScope.prototype.getAllSymbolNames = function(members) {
      return["please", "implement", "in", "derived", "classes"]
    };
    SymbolScope.prototype.getAllTypeSymbolNames = function(members) {
      return["please", "implement", "in", "derived", "classes"]
    };
    SymbolScope.prototype.getAllValueSymbolNames = function(members) {
      return["please", "implement", "in", "derived", "classes"]
    };
    SymbolScope.prototype.search = function(filter, name, publicOnly, typespace) {
      return null
    };
    SymbolScope.prototype.findLocal = function(name, publicOnly, typespace) {
      return null
    };
    SymbolScope.prototype.find = function(name, publicOnly, typespace) {
      return null
    };
    SymbolScope.prototype.findImplementation = function(name, publicOnly, typespace) {
      return null
    };
    SymbolScope.prototype.findAmbient = function(name, publicOnly, typespace) {
      return null
    };
    SymbolScope.prototype.print = function(outfile) {
      if(this.container) {
        outfile.WriteLine(this.printLabel() + " scope with container: " + this.container.name + "...")
      }else {
        outfile.WriteLine(this.printLabel() + " scope...")
      }
    };
    SymbolScope.prototype.enter = function(container, ast, symbol, errorReporter, publicOnly, typespace, ambient) {
      throw new Error("please implement in derived class");
    };
    SymbolScope.prototype.getTable = function() {
      throw new Error("please implement in derived class");
    };
    return SymbolScope
  }();
  TypeScript.SymbolScope = SymbolScope;
  function symbolCanBeUsed(sym, publicOnly) {
    return publicOnly ? !(TypeScript.hasFlag(sym.flags, TypeScript.SymbolFlags.Private) || sym.declAST && sym.declAST.nodeType == TypeScript.NodeType.FuncDecl && TypeScript.hasFlag(sym.declAST.fncFlags, TypeScript.FncFlags.Private)) : true
  }
  var SymbolAggregateScope = function(_super) {
    __extends(SymbolAggregateScope, _super);
    function SymbolAggregateScope(container) {
      _super.call(this, container);
      this.valueCache = null;
      this.valueImplCache = null;
      this.valueAmbientCache = null;
      this.typeCache = null;
      this.typeImplCache = null;
      this.typeAmbientCache = null;
      this.parents = null;
      this.container = container
    }
    SymbolAggregateScope.prototype.printLabel = function() {
      return"agg"
    };
    SymbolAggregateScope.prototype.search = function(filter, name, publicOnly, typespace) {
      if(this.parents) {
        for(var i = 0;i < this.parents.length;i++) {
          var sym = this.parents[i].search(filter, name, publicOnly, typespace);
          if(sym) {
            if(filter.update(sym)) {
              return sym
            }
          }
        }
      }
      return filter.result
    };
    SymbolAggregateScope.prototype.getAllSymbolNames = function(members) {
      var result = [];
      if(this.parents) {
        for(var i = 0;i < this.parents.length;i++) {
          var parentResult = this.parents[i].getAllSymbolNames(members);
          if(parentResult) {
            result = result.concat(parentResult)
          }
        }
      }
      return result
    };
    SymbolAggregateScope.prototype.getAllTypeSymbolNames = function(members) {
      var result = [];
      if(this.parents) {
        for(var i = 0;i < this.parents.length;i++) {
          var parentResult = this.parents[i].getAllTypeSymbolNames(members);
          if(parentResult) {
            result = result.concat(parentResult)
          }
        }
      }
      return result
    };
    SymbolAggregateScope.prototype.getAllValueSymbolNames = function(members) {
      var result = [];
      if(this.parents) {
        for(var i = 0;i < this.parents.length;i++) {
          var parentResult = this.parents[i].getAllValueSymbolNames(members);
          if(parentResult) {
            result = result.concat(parentResult)
          }
        }
      }
      return result
    };
    SymbolAggregateScope.prototype.print = function(outfile) {
      _super.prototype.print.call(this, outfile);
      if(this.parents) {
        for(var i = 0;i < this.parents.length;i++) {
          this.parents[i].print(outfile)
        }
      }
    };
    SymbolAggregateScope.prototype.findImplementation = function(name, publicOnly, typespace) {
      var sym = null;
      var i = 0;
      var implCache = this.valueImplCache;
      if(typespace) {
        implCache = this.typeImplCache
      }
      if(implCache && (sym = implCache.lookup(name)) != null && (publicOnly ? !(TypeScript.hasFlag(sym.flags, TypeScript.SymbolFlags.Private) || sym.declAST && sym.declAST.nodeType == TypeScript.NodeType.FuncDecl && TypeScript.hasFlag(sym.declAST.fncFlags, TypeScript.FncFlags.Private)) : true)) {
        return sym
      }
      if(this.parents) {
        for(i = 0;i < this.parents.length;i++) {
          sym = this.parents[i].findImplementation(name, publicOnly, typespace);
          if(sym) {
            break
          }
        }
      }
      if(implCache) {
        if(typespace) {
          this.typeImplCache = new TypeScript.StringHashTable;
          implCache = this.typeImplCache
        }else {
          this.valueImplCache = new TypeScript.StringHashTable;
          implCache = this.valueImplCache
        }
      }
      implCache.add(name, sym);
      return sym
    };
    SymbolAggregateScope.prototype.find = function(name, publicOnly, typespace) {
      var sym = null;
      var i = 0;
      var cache = this.valueCache;
      if(typespace) {
        cache = this.typeCache
      }
      if(cache && (sym = cache.lookup(name)) != null && (publicOnly ? !(TypeScript.hasFlag(sym.flags, TypeScript.SymbolFlags.Private) || sym.declAST && sym.declAST.nodeType == TypeScript.NodeType.FuncDecl && TypeScript.hasFlag(sym.declAST.fncFlags, TypeScript.FncFlags.Private)) : true)) {
        return sym
      }
      if(this.parents) {
        for(i = 0;i < this.parents.length;i++) {
          sym = this.parents[i].find(name, publicOnly, typespace);
          if(sym) {
            break
          }
        }
      }
      if(cache == null) {
        if(typespace) {
          this.typeCache = new TypeScript.StringHashTable;
          cache = this.typeCache
        }else {
          this.valueCache = new TypeScript.StringHashTable;
          cache = this.valueCache
        }
      }
      cache.add(name, sym);
      return sym
    };
    SymbolAggregateScope.prototype.findAmbient = function(name, publicOnly, typespace) {
      var sym = null;
      var i = 0;
      var cache = this.valueAmbientCache;
      if(typespace) {
        cache = this.typeAmbientCache
      }
      if(cache && (sym = cache.lookup(name)) != null) {
        return sym
      }
      if(this.parents) {
        for(i = 0;i < this.parents.length;i++) {
          sym = this.parents[i].findAmbient(name, publicOnly, typespace);
          if(sym) {
            break
          }
        }
      }
      if(cache == null) {
        if(typespace) {
          this.typeAmbientCache = new TypeScript.StringHashTable;
          cache = this.typeAmbientCache
        }else {
          this.valueAmbientCache = new TypeScript.StringHashTable;
          cache = this.valueAmbientCache
        }
      }
      cache.add(name, sym);
      return sym
    };
    SymbolAggregateScope.prototype.addParentScope = function(parent) {
      if(this.parents == null) {
        this.parents = new Array
      }
      this.parents[this.parents.length] = parent
    };
    return SymbolAggregateScope
  }(SymbolScope);
  TypeScript.SymbolAggregateScope = SymbolAggregateScope;
  var SymbolTableScope = function(_super) {
    __extends(SymbolTableScope, _super);
    function SymbolTableScope(valueMembers, ambientValueMembers, enclosedTypes, ambientEnclosedTypes, container) {
      _super.call(this, container);
      this.valueMembers = valueMembers;
      this.ambientValueMembers = ambientValueMembers;
      this.enclosedTypes = enclosedTypes;
      this.ambientEnclosedTypes = ambientEnclosedTypes;
      this.container = container
    }
    SymbolTableScope.prototype.printLabel = function() {
      return"table"
    };
    SymbolTableScope.prototype.getAllSymbolNames = function(members) {
      var result = this.getAllTypeSymbolNames(members);
      return result.concat(this.getAllValueSymbolNames(members))
    };
    SymbolTableScope.prototype.getAllTypeSymbolNames = function(members) {
      var result = [];
      if(this.ambientEnclosedTypes) {
        result = result.concat(this.ambientEnclosedTypes.allMembers.getAllKeys())
      }
      if(this.enclosedTypes) {
        result = result.concat(this.enclosedTypes.allMembers.getAllKeys())
      }
      return result
    };
    SymbolTableScope.prototype.getAllValueSymbolNames = function(members) {
      var result = [];
      if(this.ambientValueMembers) {
        result = result.concat(this.ambientValueMembers.allMembers.getAllKeys())
      }
      if(this.valueMembers) {
        result = result.concat(this.valueMembers.allMembers.getAllKeys())
      }
      return result
    };
    SymbolTableScope.prototype.search = function(filter, name, publicOnly, typespace) {
      var sym = this.find(name, publicOnly, typespace);
      filter.update(sym);
      return filter.result
    };
    SymbolTableScope.prototype.find = function(name, publicOnly, typespace) {
      var table = null;
      var ambientTable = null;
      if(typespace) {
        table = this.enclosedTypes == null ? null : publicOnly ? this.enclosedTypes.publicMembers : this.enclosedTypes.allMembers;
        ambientTable = this.ambientEnclosedTypes == null ? null : publicOnly ? this.ambientEnclosedTypes.publicMembers : this.ambientEnclosedTypes.allMembers
      }else {
        table = this.valueMembers == null ? null : publicOnly ? this.valueMembers.publicMembers : this.valueMembers.allMembers;
        ambientTable = this.ambientValueMembers == null ? null : publicOnly ? this.ambientValueMembers.publicMembers : this.ambientValueMembers.allMembers
      }
      if(ambientTable) {
        var s = ambientTable.lookup(name);
        if(s) {
          return s
        }
      }
      if(table) {
        var s = table.lookup(name);
        if(s) {
          return s
        }
      }
      return null
    };
    SymbolTableScope.prototype.findAmbient = function(name, publicOnly, typespace) {
      var ambientTable = this.ambientValueMembers == null ? null : publicOnly ? this.ambientValueMembers.publicMembers : this.ambientValueMembers.allMembers;
      if(typespace) {
        ambientTable = this.ambientEnclosedTypes == null ? null : publicOnly ? this.ambientEnclosedTypes.publicMembers : this.ambientEnclosedTypes.allMembers
      }
      if(ambientTable) {
        var s = ambientTable.lookup(name);
        if(s) {
          return s
        }
      }
      return null
    };
    SymbolTableScope.prototype.print = function(outfile) {
      _super.prototype.print.call(this, outfile);
      if(this.ambientValueMembers) {
        this.ambientValueMembers.allMembers.map(function(key, sym, context) {
          outfile.WriteLine("  " + key)
        }, null)
      }
      if(this.valueMembers) {
        this.valueMembers.allMembers.map(function(key, sym, context) {
          outfile.WriteLine("  " + key)
        }, null)
      }
      if(this.ambientEnclosedTypes) {
        this.ambientEnclosedTypes.allMembers.map(function(key, sym, context) {
          outfile.WriteLine("  " + key)
        }, null)
      }
      if(this.enclosedTypes) {
        this.enclosedTypes.allMembers.map(function(key, sym, context) {
          outfile.WriteLine("  " + key)
        }, null)
      }
    };
    SymbolTableScope.prototype.findImplementation = function(name, publicOnly, typespace) {
      var sym = this.find(name, publicOnly, typespace);
      if(sym) {
        if(sym.kind() == SymbolKind.Type) {
          var typeSym = sym;
          if(!typeSym.type.hasImplementation()) {
            sym = null
          }
        }else {
          if(sym.container) {
            if(sym.container.kind() == SymbolKind.Type) {
              var ctypeSym = sym.container;
              if(!ctypeSym.type.hasImplementation()) {
                sym = null
              }
            }
          }
        }
      }
      return sym
    };
    SymbolTableScope.prototype.getTable = function() {
      return this.valueMembers.publicMembers
    };
    return SymbolTableScope
  }(SymbolScope);
  TypeScript.SymbolTableScope = SymbolTableScope;
  var SymbolScopeBuilder = function(_super) {
    __extends(SymbolScopeBuilder, _super);
    function SymbolScopeBuilder(valueMembers, ambientValueMembers, enclosedTypes, ambientEnclosedTypes, parent, container) {
      _super.call(this, container);
      this.valueMembers = valueMembers;
      this.ambientValueMembers = ambientValueMembers;
      this.enclosedTypes = enclosedTypes;
      this.ambientEnclosedTypes = ambientEnclosedTypes;
      this.parent = parent;
      this.container = container
    }
    SymbolScopeBuilder.prototype.printLabel = function() {
      return"builder"
    };
    SymbolScopeBuilder.prototype.getAllSymbolNames = function(members) {
      var result = this.getAllTypeSymbolNames(members);
      return result.concat(this.getAllValueSymbolNames(members))
    };
    SymbolScopeBuilder.prototype.getAllTypeSymbolNames = function(members) {
      var result = [];
      if(this.ambientEnclosedTypes) {
        result = result.concat(this.ambientEnclosedTypes.allMembers.getAllKeys())
      }
      if(this.enclosedTypes) {
        result = result.concat(this.enclosedTypes.allMembers.getAllKeys())
      }
      if(!members && this.parent) {
        var parentResult = this.parent.getAllTypeSymbolNames(members);
        if(parentResult) {
          result = result.concat(parentResult)
        }
      }
      return result
    };
    SymbolScopeBuilder.prototype.getAllValueSymbolNames = function(members) {
      var result = [];
      if(this.ambientValueMembers) {
        result = result.concat(this.ambientValueMembers.allMembers.getAllKeys())
      }
      if(this.valueMembers) {
        result = result.concat(this.valueMembers.allMembers.getAllKeys())
      }
      if(!members && this.parent) {
        var parentResult = this.parent.getAllValueSymbolNames(members);
        if(parentResult) {
          result = result.concat(parentResult)
        }
      }
      return result
    };
    SymbolScopeBuilder.prototype.search = function(filter, name, publicOnly, typespace) {
      var sym = null;
      var table = this.valueMembers == null ? null : publicOnly ? this.valueMembers.publicMembers : this.valueMembers.allMembers;
      var ambientTable = this.ambientValueMembers == null ? null : publicOnly ? this.ambientValueMembers.publicMembers : this.ambientValueMembers.allMembers;
      if(typespace) {
        table = this.enclosedTypes == null ? null : publicOnly ? this.enclosedTypes.publicMembers : this.enclosedTypes.allMembers;
        ambientTable = this.ambientEnclosedTypes == null ? null : publicOnly ? this.ambientEnclosedTypes.publicMembers : this.ambientEnclosedTypes.allMembers
      }
      if(ambientTable) {
        if((sym = ambientTable.lookup(name)) != null) {
          if(filter.update(sym)) {
            return sym
          }
        }
      }
      if(table) {
        if((sym = table.lookup(name)) != null) {
          if(filter.update(sym)) {
            return sym
          }
        }
      }
      if(this.parent) {
        sym = this.parent.search(filter, name, publicOnly, typespace);
        if(sym) {
          if(filter.update(sym)) {
            return sym
          }
        }
      }
      return filter.result
    };
    SymbolScopeBuilder.prototype.print = function(outfile) {
      _super.prototype.print.call(this, outfile);
      if(this.ambientValueMembers) {
        this.ambientValueMembers.allMembers.map(function(key, s, context) {
          var sym = s;
          outfile.WriteLine("  " + key)
        }, null)
      }
      if(this.valueMembers) {
        this.valueMembers.allMembers.map(function(key, s, context) {
          var sym = s;
          outfile.WriteLine("  " + key)
        }, null)
      }
      if(this.ambientEnclosedTypes) {
        this.ambientEnclosedTypes.allMembers.map(function(key, s, context) {
          var sym = s;
          outfile.WriteLine("  " + key)
        }, null)
      }
      if(this.enclosedTypes) {
        this.enclosedTypes.allMembers.map(function(key, s, context) {
          var sym = s;
          outfile.WriteLine("  " + key)
        }, null)
      }
      if(this.parent) {
        this.parent.print(outfile)
      }
    };
    SymbolScopeBuilder.prototype.find = function(name, publicOnly, typespace) {
      var sym = null;
      var table = this.valueMembers == null ? null : publicOnly ? this.valueMembers.publicMembers : this.valueMembers.allMembers;
      var ambientTable = this.ambientValueMembers == null ? null : publicOnly ? this.ambientValueMembers.publicMembers : this.ambientValueMembers.allMembers;
      if(typespace) {
        table = this.enclosedTypes == null ? null : publicOnly ? this.enclosedTypes.publicMembers : this.enclosedTypes.allMembers;
        ambientTable = this.ambientEnclosedTypes == null ? null : publicOnly ? this.ambientEnclosedTypes.publicMembers : this.ambientEnclosedTypes.allMembers
      }
      if(ambientTable && (sym = ambientTable.lookup(name)) != null) {
        return sym
      }
      if(table && (sym = table.lookup(name)) != null) {
        return sym
      }
      if(this.parent) {
        return this.parent.find(name, publicOnly, typespace)
      }
      return null
    };
    SymbolScopeBuilder.prototype.findAmbient = function(name, publicOnly, typespace) {
      var sym = null;
      var ambientTable = this.ambientValueMembers == null ? null : publicOnly ? this.ambientValueMembers.publicMembers : this.ambientValueMembers.allMembers;
      if(typespace) {
        ambientTable = this.ambientEnclosedTypes == null ? null : publicOnly ? this.ambientEnclosedTypes.publicMembers : this.ambientEnclosedTypes.allMembers
      }
      if(ambientTable && (sym = ambientTable.lookup(name)) != null) {
        return sym
      }
      if(this.parent) {
        return this.parent.findAmbient(name, publicOnly, typespace)
      }
      return null
    };
    SymbolScopeBuilder.prototype.findLocal = function(name, publicOnly, typespace) {
      var sym = null;
      var table = this.valueMembers == null ? null : publicOnly ? this.valueMembers.publicMembers : this.valueMembers.allMembers;
      var ambientTable = this.ambientValueMembers == null ? null : publicOnly ? this.ambientValueMembers.publicMembers : this.ambientValueMembers.allMembers;
      if(typespace) {
        table = this.enclosedTypes == null ? null : publicOnly ? this.enclosedTypes.publicMembers : this.enclosedTypes.allMembers;
        ambientTable = this.ambientEnclosedTypes == null ? null : publicOnly ? this.ambientEnclosedTypes.publicMembers : this.ambientEnclosedTypes.allMembers
      }
      if(table) {
        if((sym = table.lookup(name)) != null) {
          if(sym) {
            return sym
          }
        }
      }
      if(ambientTable) {
        if((sym = ambientTable.lookup(name)) != null) {
          if(sym) {
            return sym
          }
        }
      }
      return null
    };
    SymbolScopeBuilder.prototype.enter = function(container, ast, symbol, errorReporter, insertAsPublic, typespace, ambient) {
      var table = null;
      if(ambient) {
        if(typespace) {
          table = this.ambientEnclosedTypes == null ? null : insertAsPublic ? this.ambientEnclosedTypes.publicMembers : this.ambientEnclosedTypes.privateMembers
        }else {
          table = this.ambientValueMembers == null ? null : insertAsPublic ? this.ambientValueMembers.publicMembers : this.ambientValueMembers.privateMembers
        }
      }else {
        if(typespace) {
          table = this.enclosedTypes == null ? null : insertAsPublic ? this.enclosedTypes.publicMembers : this.enclosedTypes.privateMembers
        }else {
          table = this.valueMembers == null ? null : insertAsPublic ? this.valueMembers.publicMembers : this.valueMembers.privateMembers
        }
      }
      if(table) {
        if(!table.add(symbol.name, symbol)) {
          errorReporter.duplicateIdentifier(ast, symbol.name)
        }
      }else {
        TypeScript.CompilerDiagnostics.Alert("YYYYY")
      }
      symbol.container = container
    };
    SymbolScopeBuilder.prototype.getTable = function() {
      return this.valueMembers.allMembers
    };
    return SymbolScopeBuilder
  }(SymbolScope);
  TypeScript.SymbolScopeBuilder = SymbolScopeBuilder;
  var FilteredSymbolScope = function(_super) {
    __extends(FilteredSymbolScope, _super);
    function FilteredSymbolScope(scope, container, filter) {
      _super.call(this, container);
      this.scope = scope;
      this.filter = filter
    }
    FilteredSymbolScope.prototype.print = function(outfile) {
      this.scope.print(outfile)
    };
    FilteredSymbolScope.prototype.find = function(name, publicOnly, typespace) {
      this.filter.reset();
      return this.scope.search(this.filter, name, publicOnly, typespace)
    };
    FilteredSymbolScope.prototype.findLocal = function(name, publicOnly, typespace) {
      return this.scope.findLocal(name, publicOnly, typespace)
    };
    return FilteredSymbolScope
  }(SymbolScope);
  TypeScript.FilteredSymbolScope = FilteredSymbolScope;
  var FilteredSymbolScopeBuilder = function(_super) {
    __extends(FilteredSymbolScopeBuilder, _super);
    function FilteredSymbolScopeBuilder(valueMembers, parent, container, filter) {
      _super.call(this, valueMembers, null, null, null, parent, container);
      this.filter = filter
    }
    FilteredSymbolScopeBuilder.prototype.findLocal = function(name, publicOnly, typespace) {
      var sym = _super.prototype.findLocal.call(this, name, publicOnly, typespace);
      if(sym) {
        if(!this.filter(sym)) {
          return null
        }
      }
      return sym
    };
    FilteredSymbolScopeBuilder.prototype.search = function(filter, name, publicOnly, typespace) {
      throw new Error("please implement");
    };
    FilteredSymbolScopeBuilder.prototype.find = function(name, publicOnly, typespace) {
      var sym = _super.prototype.findLocal.call(this, name, publicOnly, typespace);
      if(sym) {
        if(!this.filter(sym)) {
          return null
        }
      }
      return _super.prototype.find.call(this, name, publicOnly, typespace)
    };
    return FilteredSymbolScopeBuilder
  }(SymbolScopeBuilder);
  TypeScript.FilteredSymbolScopeBuilder = FilteredSymbolScopeBuilder
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  (function(TokenID) {
    TokenID._map = [];
    TokenID._map[0] = "ANY";
    TokenID.ANY = 0;
    TokenID._map[1] = "BOOL";
    TokenID.BOOL = 1;
    TokenID._map[2] = "BREAK";
    TokenID.BREAK = 2;
    TokenID._map[3] = "CASE";
    TokenID.CASE = 3;
    TokenID._map[4] = "CATCH";
    TokenID.CATCH = 4;
    TokenID._map[5] = "CLASS";
    TokenID.CLASS = 5;
    TokenID._map[6] = "CONST";
    TokenID.CONST = 6;
    TokenID._map[7] = "CONTINUE";
    TokenID.CONTINUE = 7;
    TokenID._map[8] = "DEBUGGER";
    TokenID.DEBUGGER = 8;
    TokenID._map[9] = "DEFAULT";
    TokenID.DEFAULT = 9;
    TokenID._map[10] = "DELETE";
    TokenID.DELETE = 10;
    TokenID._map[11] = "DO";
    TokenID.DO = 11;
    TokenID._map[12] = "ELSE";
    TokenID.ELSE = 12;
    TokenID._map[13] = "ENUM";
    TokenID.ENUM = 13;
    TokenID._map[14] = "EXPORT";
    TokenID.EXPORT = 14;
    TokenID._map[15] = "EXTENDS";
    TokenID.EXTENDS = 15;
    TokenID._map[16] = "DECLARE";
    TokenID.DECLARE = 16;
    TokenID._map[17] = "FALSE";
    TokenID.FALSE = 17;
    TokenID._map[18] = "FINALLY";
    TokenID.FINALLY = 18;
    TokenID._map[19] = "FOR";
    TokenID.FOR = 19;
    TokenID._map[20] = "FUNCTION";
    TokenID.FUNCTION = 20;
    TokenID._map[21] = "CONSTRUCTOR";
    TokenID.CONSTRUCTOR = 21;
    TokenID._map[22] = "GET";
    TokenID.GET = 22;
    TokenID._map[23] = "IF";
    TokenID.IF = 23;
    TokenID._map[24] = "IMPLEMENTS";
    TokenID.IMPLEMENTS = 24;
    TokenID._map[25] = "IMPORT";
    TokenID.IMPORT = 25;
    TokenID._map[26] = "IN";
    TokenID.IN = 26;
    TokenID._map[27] = "INSTANCEOF";
    TokenID.INSTANCEOF = 27;
    TokenID._map[28] = "INTERFACE";
    TokenID.INTERFACE = 28;
    TokenID._map[29] = "LET";
    TokenID.LET = 29;
    TokenID._map[30] = "MODULE";
    TokenID.MODULE = 30;
    TokenID._map[31] = "NEW";
    TokenID.NEW = 31;
    TokenID._map[32] = "NUMBER";
    TokenID.NUMBER = 32;
    TokenID._map[33] = "NULL";
    TokenID.NULL = 33;
    TokenID._map[34] = "PACKAGE";
    TokenID.PACKAGE = 34;
    TokenID._map[35] = "PRIVATE";
    TokenID.PRIVATE = 35;
    TokenID._map[36] = "PROTECTED";
    TokenID.PROTECTED = 36;
    TokenID._map[37] = "PUBLIC";
    TokenID.PUBLIC = 37;
    TokenID._map[38] = "RETURN";
    TokenID.RETURN = 38;
    TokenID._map[39] = "SET";
    TokenID.SET = 39;
    TokenID._map[40] = "STATIC";
    TokenID.STATIC = 40;
    TokenID._map[41] = "STRING";
    TokenID.STRING = 41;
    TokenID._map[42] = "SUPER";
    TokenID.SUPER = 42;
    TokenID._map[43] = "SWITCH";
    TokenID.SWITCH = 43;
    TokenID._map[44] = "THIS";
    TokenID.THIS = 44;
    TokenID._map[45] = "THROW";
    TokenID.THROW = 45;
    TokenID._map[46] = "TRUE";
    TokenID.TRUE = 46;
    TokenID._map[47] = "TRY";
    TokenID.TRY = 47;
    TokenID._map[48] = "TYPEOF";
    TokenID.TYPEOF = 48;
    TokenID._map[49] = "VAR";
    TokenID.VAR = 49;
    TokenID._map[50] = "VOID";
    TokenID.VOID = 50;
    TokenID._map[51] = "WITH";
    TokenID.WITH = 51;
    TokenID._map[52] = "WHILE";
    TokenID.WHILE = 52;
    TokenID._map[53] = "YIELD";
    TokenID.YIELD = 53;
    TokenID._map[54] = "SColon";
    TokenID.SColon = 54;
    TokenID._map[55] = "LParen";
    TokenID.LParen = 55;
    TokenID._map[56] = "RParen";
    TokenID.RParen = 56;
    TokenID._map[57] = "LBrack";
    TokenID.LBrack = 57;
    TokenID._map[58] = "RBrack";
    TokenID.RBrack = 58;
    TokenID._map[59] = "LCurly";
    TokenID.LCurly = 59;
    TokenID._map[60] = "RCurly";
    TokenID.RCurly = 60;
    TokenID._map[61] = "Comma";
    TokenID.Comma = 61;
    TokenID._map[62] = "Asg";
    TokenID.Asg = 62;
    TokenID._map[63] = "AsgAdd";
    TokenID.AsgAdd = 63;
    TokenID._map[64] = "AsgSub";
    TokenID.AsgSub = 64;
    TokenID._map[65] = "AsgMul";
    TokenID.AsgMul = 65;
    TokenID._map[66] = "AsgDiv";
    TokenID.AsgDiv = 66;
    TokenID._map[67] = "AsgMod";
    TokenID.AsgMod = 67;
    TokenID._map[68] = "AsgAnd";
    TokenID.AsgAnd = 68;
    TokenID._map[69] = "AsgXor";
    TokenID.AsgXor = 69;
    TokenID._map[70] = "AsgOr";
    TokenID.AsgOr = 70;
    TokenID._map[71] = "AsgLsh";
    TokenID.AsgLsh = 71;
    TokenID._map[72] = "AsgRsh";
    TokenID.AsgRsh = 72;
    TokenID._map[73] = "AsgRs2";
    TokenID.AsgRs2 = 73;
    TokenID._map[74] = "QMark";
    TokenID.QMark = 74;
    TokenID._map[75] = "Colon";
    TokenID.Colon = 75;
    TokenID._map[76] = "LogOr";
    TokenID.LogOr = 76;
    TokenID._map[77] = "LogAnd";
    TokenID.LogAnd = 77;
    TokenID._map[78] = "Or";
    TokenID.Or = 78;
    TokenID._map[79] = "Xor";
    TokenID.Xor = 79;
    TokenID._map[80] = "And";
    TokenID.And = 80;
    TokenID._map[81] = "EQ";
    TokenID.EQ = 81;
    TokenID._map[82] = "NE";
    TokenID.NE = 82;
    TokenID._map[83] = "Eqv";
    TokenID.Eqv = 83;
    TokenID._map[84] = "NEqv";
    TokenID.NEqv = 84;
    TokenID._map[85] = "LT";
    TokenID.LT = 85;
    TokenID._map[86] = "LE";
    TokenID.LE = 86;
    TokenID._map[87] = "GT";
    TokenID.GT = 87;
    TokenID._map[88] = "GE";
    TokenID.GE = 88;
    TokenID._map[89] = "Lsh";
    TokenID.Lsh = 89;
    TokenID._map[90] = "Rsh";
    TokenID.Rsh = 90;
    TokenID._map[91] = "Rs2";
    TokenID.Rs2 = 91;
    TokenID._map[92] = "Add";
    TokenID.Add = 92;
    TokenID._map[93] = "Sub";
    TokenID.Sub = 93;
    TokenID._map[94] = "Mult";
    TokenID.Mult = 94;
    TokenID._map[95] = "Div";
    TokenID.Div = 95;
    TokenID._map[96] = "Pct";
    TokenID.Pct = 96;
    TokenID._map[97] = "Tilde";
    TokenID.Tilde = 97;
    TokenID._map[98] = "Bang";
    TokenID.Bang = 98;
    TokenID._map[99] = "Inc";
    TokenID.Inc = 99;
    TokenID._map[100] = "Dec";
    TokenID.Dec = 100;
    TokenID._map[101] = "Dot";
    TokenID.Dot = 101;
    TokenID._map[102] = "Ellipsis";
    TokenID.Ellipsis = 102;
    TokenID._map[103] = "Error";
    TokenID.Error = 103;
    TokenID._map[104] = "EOF";
    TokenID.EOF = 104;
    TokenID._map[105] = "Arrow";
    TokenID.Arrow = 105;
    TokenID._map[106] = "ID";
    TokenID.ID = 106;
    TokenID._map[107] = "QString";
    TokenID.QString = 107;
    TokenID._map[108] = "Regex";
    TokenID.Regex = 108;
    TokenID._map[109] = "NumberLit";
    TokenID.NumberLit = 109;
    TokenID._map[110] = "Whitespace";
    TokenID.Whitespace = 110;
    TokenID._map[111] = "Comment";
    TokenID.Comment = 111;
    TokenID._map[112] = "Lim";
    TokenID.Lim = 112;
    TokenID.LimFixed = TokenID.Arrow;
    TokenID.LimKeyword = TokenID.YIELD
  })(TypeScript.TokenID || (TypeScript.TokenID = {}));
  var TokenID = TypeScript.TokenID;
  TypeScript.tokenTable = new Array;
  TypeScript.nodeTypeTable = new Array;
  TypeScript.nodeTypeToTokTable = new Array;
  TypeScript.noRegexTable = new Array;
  TypeScript.noRegexTable[TokenID.ID] = true;
  TypeScript.noRegexTable[TokenID.QString] = true;
  TypeScript.noRegexTable[TokenID.NumberLit] = true;
  TypeScript.noRegexTable[TokenID.Regex] = true;
  TypeScript.noRegexTable[TokenID.THIS] = true;
  TypeScript.noRegexTable[TokenID.Inc] = true;
  TypeScript.noRegexTable[TokenID.Dec] = true;
  TypeScript.noRegexTable[TokenID.RParen] = true;
  TypeScript.noRegexTable[TokenID.RBrack] = true;
  TypeScript.noRegexTable[TokenID.RCurly] = true;
  TypeScript.noRegexTable[TokenID.TRUE] = true;
  TypeScript.noRegexTable[TokenID.FALSE] = true;
  (function(OperatorPrecedence) {
    OperatorPrecedence._map = [];
    OperatorPrecedence._map[0] = "No";
    OperatorPrecedence.No = 0;
    OperatorPrecedence._map[1] = "Cma";
    OperatorPrecedence.Cma = 1;
    OperatorPrecedence._map[2] = "Asg";
    OperatorPrecedence.Asg = 2;
    OperatorPrecedence._map[3] = "Que";
    OperatorPrecedence.Que = 3;
    OperatorPrecedence._map[4] = "Lor";
    OperatorPrecedence.Lor = 4;
    OperatorPrecedence._map[5] = "Lan";
    OperatorPrecedence.Lan = 5;
    OperatorPrecedence._map[6] = "Bor";
    OperatorPrecedence.Bor = 6;
    OperatorPrecedence._map[7] = "Xor";
    OperatorPrecedence.Xor = 7;
    OperatorPrecedence._map[8] = "Ban";
    OperatorPrecedence.Ban = 8;
    OperatorPrecedence._map[9] = "Equ";
    OperatorPrecedence.Equ = 9;
    OperatorPrecedence._map[10] = "Cmp";
    OperatorPrecedence.Cmp = 10;
    OperatorPrecedence._map[11] = "Shf";
    OperatorPrecedence.Shf = 11;
    OperatorPrecedence._map[12] = "Add";
    OperatorPrecedence.Add = 12;
    OperatorPrecedence._map[13] = "Mul";
    OperatorPrecedence.Mul = 13;
    OperatorPrecedence._map[14] = "Uni";
    OperatorPrecedence.Uni = 14;
    OperatorPrecedence._map[15] = "Lim";
    OperatorPrecedence.Lim = 15
  })(TypeScript.OperatorPrecedence || (TypeScript.OperatorPrecedence = {}));
  var OperatorPrecedence = TypeScript.OperatorPrecedence;
  (function(Reservation) {
    Reservation._map = [];
    Reservation.None = 0;
    Reservation.Javascript = 1;
    Reservation.JavascriptFuture = 2;
    Reservation.TypeScript = 4;
    Reservation.JavascriptFutureStrict = 8;
    Reservation.TypeScriptAndJS = Reservation.Javascript | Reservation.TypeScript;
    Reservation.TypeScriptAndJSFuture = Reservation.JavascriptFuture | Reservation.TypeScript;
    Reservation.TypeScriptAndJSFutureStrict = Reservation.JavascriptFutureStrict | Reservation.TypeScript
  })(TypeScript.Reservation || (TypeScript.Reservation = {}));
  var Reservation = TypeScript.Reservation;
  var TokenInfo = function() {
    function TokenInfo(tokenId, reservation, binopPrecedence, binopNodeType, unopPrecedence, unopNodeType, text, ers) {
      this.tokenId = tokenId;
      this.reservation = reservation;
      this.binopPrecedence = binopPrecedence;
      this.binopNodeType = binopNodeType;
      this.unopPrecedence = unopPrecedence;
      this.unopNodeType = unopNodeType;
      this.text = text;
      this.ers = ers
    }
    return TokenInfo
  }();
  TypeScript.TokenInfo = TokenInfo;
  function setTokenInfo(tokenId, reservation, binopPrecedence, binopNodeType, unopPrecedence, unopNodeType, text, ers) {
    if(tokenId !== undefined) {
      TypeScript.tokenTable[tokenId] = new TokenInfo(tokenId, reservation, binopPrecedence, binopNodeType, unopPrecedence, unopNodeType, text, ers);
      if(binopNodeType != TypeScript.NodeType.None) {
        TypeScript.nodeTypeTable[binopNodeType] = text;
        TypeScript.nodeTypeToTokTable[binopNodeType] = tokenId
      }
      if(unopNodeType != TypeScript.NodeType.None) {
        TypeScript.nodeTypeTable[unopNodeType] = text
      }
    }
  }
  setTokenInfo(TokenID.ANY, Reservation.TypeScript, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "any", TypeScript.ErrorRecoverySet.PrimType);
  setTokenInfo(TokenID.BOOL, Reservation.TypeScript, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "bool", TypeScript.ErrorRecoverySet.PrimType);
  setTokenInfo(TokenID.BREAK, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "break", TypeScript.ErrorRecoverySet.Stmt);
  setTokenInfo(TokenID.CASE, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "case", TypeScript.ErrorRecoverySet.SCase);
  setTokenInfo(TokenID.CATCH, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "catch", TypeScript.ErrorRecoverySet.Catch);
  setTokenInfo(TokenID.CLASS, Reservation.TypeScriptAndJSFuture, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "class", TypeScript.ErrorRecoverySet.TypeScriptS);
  setTokenInfo(TokenID.CONST, Reservation.TypeScriptAndJSFuture, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "const", TypeScript.ErrorRecoverySet.Var);
  setTokenInfo(TokenID.CONTINUE, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "continue", TypeScript.ErrorRecoverySet.Stmt);
  setTokenInfo(TokenID.DEBUGGER, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.Debugger, "debugger", TypeScript.ErrorRecoverySet.Stmt);
  setTokenInfo(TokenID.DEFAULT, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "default", TypeScript.ErrorRecoverySet.SCase);
  setTokenInfo(TokenID.DELETE, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.Uni, TypeScript.NodeType.Delete, "delete", TypeScript.ErrorRecoverySet.Prefix);
  setTokenInfo(TokenID.DO, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "do", TypeScript.ErrorRecoverySet.Stmt);
  setTokenInfo(TokenID.ELSE, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "else", TypeScript.ErrorRecoverySet.Else);
  setTokenInfo(TokenID.ENUM, Reservation.TypeScriptAndJSFuture, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "enum", TypeScript.ErrorRecoverySet.TypeScriptS);
  setTokenInfo(TokenID.EXPORT, Reservation.TypeScriptAndJSFuture, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "export", TypeScript.ErrorRecoverySet.TypeScriptS);
  setTokenInfo(TokenID.EXTENDS, Reservation.TypeScriptAndJSFuture, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "extends", TypeScript.ErrorRecoverySet.None);
  setTokenInfo(TokenID.DECLARE, Reservation.TypeScript, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "declare", TypeScript.ErrorRecoverySet.Stmt);
  setTokenInfo(TokenID.FALSE, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "false", TypeScript.ErrorRecoverySet.RLit);
  setTokenInfo(TokenID.FINALLY, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "finally", TypeScript.ErrorRecoverySet.Catch);
  setTokenInfo(TokenID.FOR, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "for", TypeScript.ErrorRecoverySet.Stmt);
  setTokenInfo(TokenID.FUNCTION, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "function", TypeScript.ErrorRecoverySet.Func);
  setTokenInfo(TokenID.CONSTRUCTOR, Reservation.TypeScriptAndJSFutureStrict, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "constructor", TypeScript.ErrorRecoverySet.Func);
  setTokenInfo(TokenID.GET, Reservation.TypeScript, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "get", TypeScript.ErrorRecoverySet.Func);
  setTokenInfo(TokenID.SET, Reservation.TypeScript, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "set", TypeScript.ErrorRecoverySet.Func);
  setTokenInfo(TokenID.IF, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "if", TypeScript.ErrorRecoverySet.Stmt);
  setTokenInfo(TokenID.IMPLEMENTS, Reservation.TypeScriptAndJSFutureStrict, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "implements", TypeScript.ErrorRecoverySet.None);
  setTokenInfo(TokenID.IMPORT, Reservation.TypeScriptAndJSFuture, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "import", TypeScript.ErrorRecoverySet.TypeScriptS);
  setTokenInfo(TokenID.IN, Reservation.TypeScriptAndJS, OperatorPrecedence.Cmp, TypeScript.NodeType.In, OperatorPrecedence.No, TypeScript.NodeType.None, "in", TypeScript.ErrorRecoverySet.None);
  setTokenInfo(TokenID.INSTANCEOF, Reservation.TypeScriptAndJS, OperatorPrecedence.Cmp, TypeScript.NodeType.InstOf, OperatorPrecedence.No, TypeScript.NodeType.None, "instanceof", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.INTERFACE, Reservation.TypeScriptAndJSFutureStrict, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "interface", TypeScript.ErrorRecoverySet.TypeScriptS);
  setTokenInfo(TokenID.LET, Reservation.JavascriptFutureStrict, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "let", TypeScript.ErrorRecoverySet.None);
  setTokenInfo(TokenID.MODULE, Reservation.TypeScript, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "module", TypeScript.ErrorRecoverySet.TypeScriptS);
  setTokenInfo(TokenID.NEW, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "new", TypeScript.ErrorRecoverySet.PreOp);
  setTokenInfo(TokenID.NUMBER, Reservation.TypeScript, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "number", TypeScript.ErrorRecoverySet.PrimType);
  setTokenInfo(TokenID.NULL, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "null", TypeScript.ErrorRecoverySet.RLit);
  setTokenInfo(TokenID.PACKAGE, Reservation.JavascriptFutureStrict, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "package", TypeScript.ErrorRecoverySet.None);
  setTokenInfo(TokenID.PRIVATE, Reservation.TypeScriptAndJSFutureStrict, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "private", TypeScript.ErrorRecoverySet.TypeScriptS);
  setTokenInfo(TokenID.PROTECTED, Reservation.JavascriptFutureStrict, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "protected", TypeScript.ErrorRecoverySet.None);
  setTokenInfo(TokenID.PUBLIC, Reservation.TypeScriptAndJSFutureStrict, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "public", TypeScript.ErrorRecoverySet.TypeScriptS);
  setTokenInfo(TokenID.RETURN, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "return", TypeScript.ErrorRecoverySet.Stmt);
  setTokenInfo(TokenID.STATIC, Reservation.TypeScriptAndJSFutureStrict, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "static", TypeScript.ErrorRecoverySet.None);
  setTokenInfo(TokenID.STRING, Reservation.TypeScript, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "string", TypeScript.ErrorRecoverySet.PrimType);
  setTokenInfo(TokenID.SUPER, Reservation.TypeScriptAndJSFuture, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "super", TypeScript.ErrorRecoverySet.RLit);
  setTokenInfo(TokenID.SWITCH, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "switch", TypeScript.ErrorRecoverySet.Stmt);
  setTokenInfo(TokenID.THIS, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "this", TypeScript.ErrorRecoverySet.RLit);
  setTokenInfo(TokenID.THROW, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "throw", TypeScript.ErrorRecoverySet.Stmt);
  setTokenInfo(TokenID.TRUE, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "true", TypeScript.ErrorRecoverySet.RLit);
  setTokenInfo(TokenID.TRY, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "try", TypeScript.ErrorRecoverySet.Stmt);
  setTokenInfo(TokenID.TYPEOF, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.Uni, TypeScript.NodeType.Typeof, "typeof", TypeScript.ErrorRecoverySet.Prefix);
  setTokenInfo(TokenID.VAR, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "var", TypeScript.ErrorRecoverySet.Var);
  setTokenInfo(TokenID.VOID, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.Uni, TypeScript.NodeType.Void, "void", TypeScript.ErrorRecoverySet.Prefix);
  setTokenInfo(TokenID.WITH, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.With, "with", TypeScript.ErrorRecoverySet.Stmt);
  setTokenInfo(TokenID.WHILE, Reservation.TypeScriptAndJS, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "while", TypeScript.ErrorRecoverySet.While);
  setTokenInfo(TokenID.YIELD, Reservation.JavascriptFutureStrict, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "yield", TypeScript.ErrorRecoverySet.None);
  setTokenInfo(TokenID.ID, Reservation.None, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "identifier", TypeScript.ErrorRecoverySet.ID);
  setTokenInfo(TokenID.NumberLit, Reservation.None, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "numberLiteral", TypeScript.ErrorRecoverySet.Literal);
  setTokenInfo(TokenID.Regex, Reservation.None, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "regex", TypeScript.ErrorRecoverySet.RegExp);
  setTokenInfo(TokenID.QString, Reservation.None, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "qstring", TypeScript.ErrorRecoverySet.Literal);
  setTokenInfo(TokenID.SColon, Reservation.None, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, ";", TypeScript.ErrorRecoverySet.SColon);
  setTokenInfo(TokenID.RParen, Reservation.None, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, ")", TypeScript.ErrorRecoverySet.RParen);
  setTokenInfo(TokenID.RBrack, Reservation.None, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "]", TypeScript.ErrorRecoverySet.RBrack);
  setTokenInfo(TokenID.LCurly, Reservation.None, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "{", TypeScript.ErrorRecoverySet.LCurly);
  setTokenInfo(TokenID.RCurly, Reservation.None, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "}", TypeScript.ErrorRecoverySet.RCurly);
  setTokenInfo(TokenID.Ellipsis, Reservation.None, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "...", TypeScript.ErrorRecoverySet.None);
  setTokenInfo(TokenID.Comma, Reservation.None, OperatorPrecedence.Cma, TypeScript.NodeType.Comma, OperatorPrecedence.No, TypeScript.NodeType.None, ",", TypeScript.ErrorRecoverySet.Comma);
  setTokenInfo(TokenID.Asg, Reservation.None, OperatorPrecedence.Asg, TypeScript.NodeType.Asg, OperatorPrecedence.No, TypeScript.NodeType.None, "=", TypeScript.ErrorRecoverySet.Asg);
  setTokenInfo(TokenID.AsgAdd, Reservation.None, OperatorPrecedence.Asg, TypeScript.NodeType.AsgAdd, OperatorPrecedence.No, TypeScript.NodeType.None, "+=", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.AsgSub, Reservation.None, OperatorPrecedence.Asg, TypeScript.NodeType.AsgSub, OperatorPrecedence.No, TypeScript.NodeType.None, "-=", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.AsgMul, Reservation.None, OperatorPrecedence.Asg, TypeScript.NodeType.AsgMul, OperatorPrecedence.No, TypeScript.NodeType.None, "*=", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.AsgDiv, Reservation.None, OperatorPrecedence.Asg, TypeScript.NodeType.AsgDiv, OperatorPrecedence.No, TypeScript.NodeType.None, "/=", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.AsgMod, Reservation.None, OperatorPrecedence.Asg, TypeScript.NodeType.AsgMod, OperatorPrecedence.No, TypeScript.NodeType.None, "%=", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.AsgAnd, Reservation.None, OperatorPrecedence.Asg, TypeScript.NodeType.AsgAnd, OperatorPrecedence.No, TypeScript.NodeType.None, "&=", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.AsgXor, Reservation.None, OperatorPrecedence.Asg, TypeScript.NodeType.AsgXor, OperatorPrecedence.No, TypeScript.NodeType.None, "^=", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.AsgOr, Reservation.None, OperatorPrecedence.Asg, TypeScript.NodeType.AsgOr, OperatorPrecedence.No, TypeScript.NodeType.None, "|=", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.AsgLsh, Reservation.None, OperatorPrecedence.Asg, TypeScript.NodeType.AsgLsh, OperatorPrecedence.No, TypeScript.NodeType.None, "<<=", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.AsgRsh, Reservation.None, OperatorPrecedence.Asg, TypeScript.NodeType.AsgRsh, OperatorPrecedence.No, TypeScript.NodeType.None, ">>=", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.AsgRs2, Reservation.None, OperatorPrecedence.Asg, TypeScript.NodeType.AsgRs2, OperatorPrecedence.No, TypeScript.NodeType.None, ">>>=", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.QMark, Reservation.None, OperatorPrecedence.Que, TypeScript.NodeType.QMark, OperatorPrecedence.No, TypeScript.NodeType.None, "?", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.Colon, Reservation.None, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, ":", TypeScript.ErrorRecoverySet.Colon);
  setTokenInfo(TokenID.LogOr, Reservation.None, OperatorPrecedence.Lor, TypeScript.NodeType.LogOr, OperatorPrecedence.No, TypeScript.NodeType.None, "||", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.LogAnd, Reservation.None, OperatorPrecedence.Lan, TypeScript.NodeType.LogAnd, OperatorPrecedence.No, TypeScript.NodeType.None, "&&", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.Or, Reservation.None, OperatorPrecedence.Bor, TypeScript.NodeType.Or, OperatorPrecedence.No, TypeScript.NodeType.None, "|", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.Xor, Reservation.None, OperatorPrecedence.Xor, TypeScript.NodeType.Xor, OperatorPrecedence.No, TypeScript.NodeType.None, "^", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.And, Reservation.None, OperatorPrecedence.Ban, TypeScript.NodeType.And, OperatorPrecedence.No, TypeScript.NodeType.None, "&", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.EQ, Reservation.None, OperatorPrecedence.Equ, TypeScript.NodeType.Eq, OperatorPrecedence.No, TypeScript.NodeType.None, "==", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.NE, Reservation.None, OperatorPrecedence.Equ, TypeScript.NodeType.Ne, OperatorPrecedence.No, TypeScript.NodeType.None, "!=", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.Eqv, Reservation.None, OperatorPrecedence.Equ, TypeScript.NodeType.Eqv, OperatorPrecedence.No, TypeScript.NodeType.None, "===", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.NEqv, Reservation.None, OperatorPrecedence.Equ, TypeScript.NodeType.NEqv, OperatorPrecedence.No, TypeScript.NodeType.None, "!==", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.LT, Reservation.None, OperatorPrecedence.Cmp, TypeScript.NodeType.Lt, OperatorPrecedence.No, TypeScript.NodeType.None, "<", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.LE, Reservation.None, OperatorPrecedence.Cmp, TypeScript.NodeType.Le, OperatorPrecedence.No, TypeScript.NodeType.None, "<=", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.GT, Reservation.None, OperatorPrecedence.Cmp, TypeScript.NodeType.Gt, OperatorPrecedence.No, TypeScript.NodeType.None, ">", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.GE, Reservation.None, OperatorPrecedence.Cmp, TypeScript.NodeType.Ge, OperatorPrecedence.No, TypeScript.NodeType.None, ">=", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.Lsh, Reservation.None, OperatorPrecedence.Shf, TypeScript.NodeType.Lsh, OperatorPrecedence.No, TypeScript.NodeType.None, "<<", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.Rsh, Reservation.None, OperatorPrecedence.Shf, TypeScript.NodeType.Rsh, OperatorPrecedence.No, TypeScript.NodeType.None, ">>", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.Rs2, Reservation.None, OperatorPrecedence.Shf, TypeScript.NodeType.Rs2, OperatorPrecedence.No, TypeScript.NodeType.None, ">>>", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.Add, Reservation.None, OperatorPrecedence.Add, TypeScript.NodeType.Add, OperatorPrecedence.Uni, TypeScript.NodeType.Pos, "+", TypeScript.ErrorRecoverySet.AddOp);
  setTokenInfo(TokenID.Sub, Reservation.None, OperatorPrecedence.Add, TypeScript.NodeType.Sub, OperatorPrecedence.Uni, TypeScript.NodeType.Neg, "-", TypeScript.ErrorRecoverySet.AddOp);
  setTokenInfo(TokenID.Mult, Reservation.None, OperatorPrecedence.Mul, TypeScript.NodeType.Mul, OperatorPrecedence.No, TypeScript.NodeType.None, "*", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.Div, Reservation.None, OperatorPrecedence.Mul, TypeScript.NodeType.Div, OperatorPrecedence.No, TypeScript.NodeType.None, "/", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.Pct, Reservation.None, OperatorPrecedence.Mul, TypeScript.NodeType.Mod, OperatorPrecedence.No, TypeScript.NodeType.None, "%", TypeScript.ErrorRecoverySet.BinOp);
  setTokenInfo(TokenID.Tilde, Reservation.None, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.Uni, TypeScript.NodeType.Not, "~", TypeScript.ErrorRecoverySet.PreOp);
  setTokenInfo(TokenID.Bang, Reservation.None, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.Uni, TypeScript.NodeType.LogNot, "!", TypeScript.ErrorRecoverySet.PreOp);
  setTokenInfo(TokenID.Inc, Reservation.None, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.Uni, TypeScript.NodeType.IncPre, "++", TypeScript.ErrorRecoverySet.PreOp);
  setTokenInfo(TokenID.Dec, Reservation.None, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.Uni, TypeScript.NodeType.DecPre, "--", TypeScript.ErrorRecoverySet.PreOp);
  setTokenInfo(TokenID.LParen, Reservation.None, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "(", TypeScript.ErrorRecoverySet.LParen);
  setTokenInfo(TokenID.LBrack, Reservation.None, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "[", TypeScript.ErrorRecoverySet.LBrack);
  setTokenInfo(TokenID.Dot, Reservation.None, OperatorPrecedence.Uni, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, ".", TypeScript.ErrorRecoverySet.Dot);
  setTokenInfo(TokenID.EOF, Reservation.None, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "<EOF>", TypeScript.ErrorRecoverySet.EOF);
  setTokenInfo(TokenID.Arrow, Reservation.None, OperatorPrecedence.No, TypeScript.NodeType.None, OperatorPrecedence.No, TypeScript.NodeType.None, "=>", TypeScript.ErrorRecoverySet.None);
  function lookupToken(tokenId) {
    return TypeScript.tokenTable[tokenId]
  }
  TypeScript.lookupToken = lookupToken;
  (function(TokenClass) {
    TokenClass._map = [];
    TokenClass._map[0] = "Punctuation";
    TokenClass.Punctuation = 0;
    TokenClass._map[1] = "Keyword";
    TokenClass.Keyword = 1;
    TokenClass._map[2] = "Operator";
    TokenClass.Operator = 2;
    TokenClass._map[3] = "Comment";
    TokenClass.Comment = 3;
    TokenClass._map[4] = "Whitespace";
    TokenClass.Whitespace = 4;
    TokenClass._map[5] = "Identifier";
    TokenClass.Identifier = 5;
    TokenClass._map[6] = "Literal";
    TokenClass.Literal = 6
  })(TypeScript.TokenClass || (TypeScript.TokenClass = {}));
  var TokenClass = TypeScript.TokenClass;
  var SavedToken = function() {
    function SavedToken(tok, minChar, limChar) {
      this.tok = tok;
      this.minChar = minChar;
      this.limChar = limChar
    }
    return SavedToken
  }();
  TypeScript.SavedToken = SavedToken;
  var Token = function() {
    function Token(tokenId) {
      this.tokenId = tokenId
    }
    Token.prototype.toString = function() {
      return"token: " + this.tokenId + " " + this.getText() + " (" + TokenID._map[this.tokenId] + ")"
    };
    Token.prototype.print = function(line, outfile) {
      outfile.WriteLine(this.toString() + ",on line" + line)
    };
    Token.prototype.getText = function() {
      return TypeScript.tokenTable[this.tokenId].text
    };
    Token.prototype.classification = function() {
      if(this.tokenId <= TokenID.LimKeyword) {
        return TokenClass.Keyword
      }else {
        var tokenInfo = lookupToken(this.tokenId);
        if(tokenInfo != undefined) {
          if(tokenInfo.unopNodeType != TypeScript.NodeType.None || tokenInfo.binopNodeType != TypeScript.NodeType.None) {
            return TokenClass.Operator
          }
        }
      }
      return TokenClass.Punctuation
    };
    return Token
  }();
  TypeScript.Token = Token;
  var NumberToken = function(_super) {
    __extends(NumberToken, _super);
    function NumberToken(value) {
      _super.call(this, TokenID.NumberLit);
      this.value = value
    }
    NumberToken.prototype.getText = function() {
      return this.value.toString()
    };
    NumberToken.prototype.classification = function() {
      return TokenClass.Literal
    };
    return NumberToken
  }(Token);
  TypeScript.NumberToken = NumberToken;
  var StringToken = function(_super) {
    __extends(StringToken, _super);
    function StringToken(tokenId, value) {
      _super.call(this, tokenId);
      this.value = value;
      this.tokenId = tokenId
    }
    StringToken.prototype.getText = function() {
      return this.value
    };
    StringToken.prototype.classification = function() {
      if(this.tokenId == TokenID.ID) {
        return TokenClass.Identifier
      }else {
        return TokenClass.Literal
      }
    };
    return StringToken
  }(Token);
  TypeScript.StringToken = StringToken;
  var WhitespaceToken = function(_super) {
    __extends(WhitespaceToken, _super);
    function WhitespaceToken(tokenId, value) {
      _super.call(this, tokenId);
      this.value = value;
      this.tokenId = tokenId
    }
    WhitespaceToken.prototype.getText = function() {
      return this.value
    };
    WhitespaceToken.prototype.classification = function() {
      return TokenClass.Whitespace
    };
    return WhitespaceToken
  }(Token);
  TypeScript.WhitespaceToken = WhitespaceToken;
  var CommentToken = function(_super) {
    __extends(CommentToken, _super);
    function CommentToken(tokenID, value, isBlock, startPos, line, endsLine) {
      _super.call(this, tokenID);
      this.value = value;
      this.isBlock = isBlock;
      this.startPos = startPos;
      this.line = line;
      this.endsLine = endsLine;
      this.tokenID = tokenID
    }
    CommentToken.prototype.getText = function() {
      return this.value
    };
    CommentToken.prototype.classification = function() {
      return TokenClass.Comment
    };
    return CommentToken
  }(Token);
  TypeScript.CommentToken = CommentToken;
  var RegexToken = function(_super) {
    __extends(RegexToken, _super);
    function RegexToken(regex) {
      _super.call(this, TokenID.Regex);
      this.regex = regex
    }
    RegexToken.prototype.getText = function() {
      return this.regex.toString()
    };
    RegexToken.prototype.classification = function() {
      return TokenClass.Literal
    };
    return RegexToken
  }(Token);
  TypeScript.RegexToken = RegexToken;
  TypeScript.staticTokens = new Array;
  function initializeStaticTokens() {
    for(var i = 0;i <= TokenID.LimFixed;i++) {
      TypeScript.staticTokens[i] = new Token(i)
    }
  }
  TypeScript.initializeStaticTokens = initializeStaticTokens
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  var ArrayCache = function() {
    function ArrayCache() {
      this.arrayBase = null
    }
    ArrayCache.prototype.specialize = function(arrInstType, checker) {
      if(this.arrayBase == null) {
        this.arrayBase = arrInstType.specializeType(checker.wildElm.type, this.arrayType.elementType, checker, true)
      }
      return this.arrayBase
    };
    return ArrayCache
  }();
  TypeScript.ArrayCache = ArrayCache;
  var TypeComparisonInfo = function() {
    function TypeComparisonInfo() {
      this.onlyCaptureFirstError = false;
      this.flags = TypeScript.TypeRelationshipFlags.SuccessfulComparison;
      this.message = ""
    }
    TypeComparisonInfo.prototype.addMessageToFront = function(message) {
      if(!this.onlyCaptureFirstError) {
        this.message = this.message ? message + ":\n\t" + this.message : message
      }else {
        this.setMessage(message)
      }
    };
    TypeComparisonInfo.prototype.setMessage = function(message) {
      this.message = message
    };
    return TypeComparisonInfo
  }();
  TypeScript.TypeComparisonInfo = TypeComparisonInfo;
  (function(TypeCheckCollectionMode) {
    TypeCheckCollectionMode._map = [];
    TypeCheckCollectionMode._map[0] = "Resident";
    TypeCheckCollectionMode.Resident = 0;
    TypeCheckCollectionMode._map[1] = "Transient";
    TypeCheckCollectionMode.Transient = 1
  })(TypeScript.TypeCheckCollectionMode || (TypeScript.TypeCheckCollectionMode = {}));
  var TypeCheckCollectionMode = TypeScript.TypeCheckCollectionMode;
  var PersistentGlobalTypeState = function() {
    function PersistentGlobalTypeState(errorReporter) {
      this.errorReporter = errorReporter;
      this.importedGlobalsTable = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
      this.importedGlobalsTypeTable = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
      this.globals = null;
      this.globalTypes = null;
      this.ambientGlobals = null;
      this.ambientGlobalTypes = null;
      this.residentGlobalValues = new TypeScript.StringHashTable;
      this.residentGlobalTypes = new TypeScript.StringHashTable;
      this.residentGlobalAmbientValues = new TypeScript.StringHashTable;
      this.residentGlobalAmbientTypes = new TypeScript.StringHashTable;
      this.residentTypeCheck = true;
      this.mod = null;
      this.gloMod = null;
      this.wildElm = null;
      this.importedGlobals = new TypeScript.SymbolScopeBuilder(null, this.importedGlobalsTable, null, this.importedGlobalsTypeTable, null, null);
      this.dualGlobalValues = new TypeScript.DualStringHashTable(this.residentGlobalValues, new TypeScript.StringHashTable);
      this.dualGlobalTypes = new TypeScript.DualStringHashTable(this.residentGlobalTypes, new TypeScript.StringHashTable);
      this.dualAmbientGlobalValues = new TypeScript.DualStringHashTable(this.residentGlobalAmbientValues, new TypeScript.StringHashTable);
      this.dualAmbientGlobalTypes = new TypeScript.DualStringHashTable(this.residentGlobalAmbientTypes, new TypeScript.StringHashTable);
      var dualGlobalScopedMembers = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(this.dualGlobalValues, new TypeScript.StringHashTable));
      var dualGlobalScopedAmbientMembers = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(this.dualAmbientGlobalValues, new TypeScript.StringHashTable));
      var dualGlobalScopedEnclosedTypes = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(this.dualGlobalTypes, new TypeScript.StringHashTable));
      var dualGlobalScopedAmbientEnclosedTypes = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(this.dualAmbientGlobalTypes, new TypeScript.StringHashTable));
      this.globalScope = new TypeScript.SymbolScopeBuilder(dualGlobalScopedMembers, dualGlobalScopedAmbientMembers, dualGlobalScopedEnclosedTypes, dualGlobalScopedAmbientEnclosedTypes, this.importedGlobals, null);
      this.voidType = this.enterPrimitive(TypeScript.Primitive.Void, "void");
      this.booleanType = this.enterPrimitive(TypeScript.Primitive.Boolean, "bool");
      this.doubleType = this.enterPrimitive(TypeScript.Primitive.Double, "number");
      this.importedGlobals.ambientEnclosedTypes.addPublicMember("number", this.doubleType.symbol);
      this.stringType = this.enterPrimitive(TypeScript.Primitive.String, "string");
      this.anyType = this.enterPrimitive(TypeScript.Primitive.Any, "any");
      this.nullType = this.enterPrimitive(TypeScript.Primitive.Null, "null");
      this.undefinedType = this.enterPrimitive(TypeScript.Primitive.Undefined, "undefined");
      this.setCollectionMode(TypeCheckCollectionMode.Resident);
      this.wildElm = new TypeScript.TypeSymbol("_element", 0, -1, new TypeScript.Type);
      this.importedGlobalsTypeTable.addPublicMember(this.wildElm.name, this.wildElm);
      this.mod = new TypeScript.ModuleType(dualGlobalScopedEnclosedTypes, dualGlobalScopedAmbientEnclosedTypes);
      this.mod.members = dualGlobalScopedMembers;
      this.mod.ambientMembers = dualGlobalScopedAmbientMembers;
      this.mod.containedScope = this.globalScope;
      this.gloMod = new TypeScript.TypeSymbol(TypeScript.globalId, 0, -1, this.mod);
      this.mod.members.addPublicMember(this.gloMod.name, this.gloMod);
      this.defineGlobalValue("undefined", this.undefinedType)
    }
    PersistentGlobalTypeState.prototype.enterPrimitive = function(flags, name) {
      var primitive = new TypeScript.Type;
      primitive.primitiveTypeClass = flags;
      var symbol = new TypeScript.TypeSymbol(name, 0, -1, primitive);
      symbol.typeCheckStatus = TypeScript.TypeCheckStatus.Finished;
      primitive.symbol = symbol;
      this.importedGlobals.enter(null, null, symbol, this.errorReporter, true, true, true);
      return primitive
    };
    PersistentGlobalTypeState.prototype.setCollectionMode = function(mode) {
      this.residentTypeCheck = this.dualGlobalValues.insertPrimary = this.dualGlobalTypes.insertPrimary = this.dualAmbientGlobalValues.insertPrimary = this.dualAmbientGlobalTypes.insertPrimary = mode == TypeCheckCollectionMode.Resident
    };
    PersistentGlobalTypeState.prototype.refreshPersistentState = function() {
      this.globals = new TypeScript.StringHashTable;
      this.globalTypes = new TypeScript.StringHashTable;
      this.ambientGlobals = new TypeScript.StringHashTable;
      this.ambientGlobalTypes = new TypeScript.StringHashTable;
      this.dualGlobalValues.secondaryTable = this.globals;
      this.dualGlobalTypes.secondaryTable = this.globalTypes;
      this.dualAmbientGlobalValues.secondaryTable = this.ambientGlobals;
      this.dualAmbientGlobalTypes.secondaryTable = this.ambientGlobalTypes
    };
    PersistentGlobalTypeState.prototype.defineGlobalValue = function(name, type) {
      var valueLocation = new TypeScript.ValueLocation;
      valueLocation.typeLink = new TypeScript.TypeLink;
      var sym = new TypeScript.VariableSymbol(name, 0, -1, valueLocation);
      sym.setType(type);
      sym.typeCheckStatus = TypeScript.TypeCheckStatus.Finished;
      sym.container = this.gloMod;
      this.importedGlobalsTable.addPublicMember(name, sym)
    };
    return PersistentGlobalTypeState
  }();
  TypeScript.PersistentGlobalTypeState = PersistentGlobalTypeState;
  var ContextualTypeContext = function() {
    function ContextualTypeContext(contextualType, provisional, contextID) {
      this.contextualType = contextualType;
      this.provisional = provisional;
      this.contextID = contextID;
      this.targetSig = null;
      this.targetThis = null;
      this.targetAccessorType = null
    }
    return ContextualTypeContext
  }();
  TypeScript.ContextualTypeContext = ContextualTypeContext;
  var ContextualTypingContextStack = function() {
    function ContextualTypingContextStack(checker) {
      this.checker = checker;
      this.contextStack = [];
      this.hadProvisionalErrors = false
    }
    ContextualTypingContextStack.contextID = TypeScript.TypeCheckStatus.Finished + 1;
    ContextualTypingContextStack.prototype.pushContextualType = function(type, provisional) {
      this.contextStack.push(new ContextualTypeContext(type, provisional, ContextualTypingContextStack.contextID++));
      this.checker.errorReporter.pushToErrorSink = provisional
    };
    ContextualTypingContextStack.prototype.popContextualType = function() {
      var tc = this.contextStack.pop();
      this.checker.errorReporter.pushToErrorSink = this.isProvisional();
      this.hadProvisionalErrors = this.hadProvisionalErrors || tc.provisional && this.checker.errorReporter.getCapturedErrors().length;
      this.checker.errorReporter.freeCapturedErrors();
      return tc
    };
    ContextualTypingContextStack.prototype.getContextualType = function() {
      return!this.contextStack.length ? null : this.contextStack[this.contextStack.length - 1]
    };
    ContextualTypingContextStack.prototype.getContextID = function() {
      return!this.contextStack.length ? TypeScript.TypeCheckStatus.Finished : this.contextStack[this.contextStack.length - 1].contextID
    };
    ContextualTypingContextStack.prototype.isProvisional = function() {
      return!this.contextStack.length ? false : this.contextStack[this.contextStack.length - 1].provisional
    };
    return ContextualTypingContextStack
  }();
  TypeScript.ContextualTypingContextStack = ContextualTypingContextStack;
  var TypeChecker = function() {
    function TypeChecker(persistentState) {
      this.persistentState = persistentState;
      this.errorReporter = null;
      this.checkControlFlow = false;
      this.printControlFlowGraph = false;
      this.checkControlFlowUseDef = false;
      this.styleSettings = null;
      this.units = null;
      this.anon = "_anonymous";
      this.locationInfo = null;
      this.typeFlow = null;
      this.currentCompareA = null;
      this.currentCompareB = null;
      this.currentModDecl = null;
      this.inBind = false;
      this.inWith = false;
      this.errorsOnWith = true;
      this.currentContextualTypeContext = null;
      this.resolvingBases = false;
      this.canCallDefinitionSignature = false;
      this.assignableCache = {};
      this.subtypeCache = {};
      this.identicalCache = {};
      this.provisionalStartedTypecheckObjects = [];
      this.voidType = this.persistentState.voidType;
      this.booleanType = this.persistentState.booleanType;
      this.numberType = this.persistentState.doubleType;
      this.stringType = this.persistentState.stringType;
      this.anyType = this.persistentState.anyType;
      this.nullType = this.persistentState.nullType;
      this.undefinedType = this.persistentState.undefinedType;
      this.globals = this.persistentState.dualGlobalValues;
      this.globalTypes = this.persistentState.dualGlobalTypes;
      this.ambientGlobals = this.persistentState.dualAmbientGlobalValues;
      this.ambientGlobalTypes = this.persistentState.dualAmbientGlobalTypes;
      this.gloModType = this.persistentState.mod;
      this.gloMod = this.persistentState.gloMod;
      this.wildElm = this.persistentState.wildElm;
      this.globalScope = this.persistentState.globalScope;
      this.typingContextStack = new ContextualTypingContextStack(this)
    }
    TypeChecker.prototype.setStyleOptions = function(style) {
      this.styleSettings = style
    };
    TypeChecker.prototype.setContextualType = function(type, provisional) {
      this.typingContextStack.pushContextualType(type, provisional);
      this.currentContextualTypeContext = this.typingContextStack.getContextualType()
    };
    TypeChecker.prototype.unsetContextualType = function() {
      var lastTC = this.typingContextStack.popContextualType();
      this.currentContextualTypeContext = this.typingContextStack.getContextualType();
      return lastTC
    };
    TypeChecker.prototype.hadProvisionalErrors = function() {
      return this.typingContextStack.hadProvisionalErrors
    };
    TypeChecker.prototype.resetProvisionalErrors = function() {
      if(!this.typingContextStack.getContextualType()) {
        this.typingContextStack.hadProvisionalErrors = false
      }
    };
    TypeChecker.prototype.typeCheckWithContextualType = function(contextType, provisional, condition, ast) {
      if(condition) {
        this.setContextualType(contextType, this.typingContextStack.isProvisional() || provisional)
      }
      this.typeFlow.typeCheck(ast);
      if(condition) {
        this.unsetContextualType()
      }
    };
    TypeChecker.prototype.resetTargetType = function() {
      this.currentContextualTypeContext = this.typingContextStack.getContextualType()
    };
    TypeChecker.prototype.killTargetType = function() {
      this.currentContextualTypeContext = null;
      this.errorReporter.pushToErrorSink = false
    };
    TypeChecker.prototype.hasTargetType = function() {
      return this.currentContextualTypeContext && this.currentContextualTypeContext.contextualType
    };
    TypeChecker.prototype.getTargetTypeContext = function() {
      return this.currentContextualTypeContext
    };
    TypeChecker.prototype.inProvisionalTypecheckMode = function() {
      return this.typingContextStack.isProvisional()
    };
    TypeChecker.prototype.getTypeCheckFinishedStatus = function() {
      if(this.inProvisionalTypecheckMode()) {
        return this.typingContextStack.getContextID()
      }
      return TypeScript.TypeCheckStatus.Finished
    };
    TypeChecker.prototype.typeStatusIsFinished = function(status) {
      return status == TypeScript.TypeCheckStatus.Finished || this.inProvisionalTypecheckMode() && status == this.typingContextStack.getContextID()
    };
    TypeChecker.prototype.addStartedPTO = function(pto) {
      if(this.inProvisionalTypecheckMode()) {
        this.provisionalStartedTypecheckObjects[this.provisionalStartedTypecheckObjects.length] = pto
      }
    };
    TypeChecker.prototype.cleanStartedPTO = function() {
      for(var i = 0;i < this.provisionalStartedTypecheckObjects.length;i++) {
        this.provisionalStartedTypecheckObjects[i].typeCheckStatus = TypeScript.TypeCheckStatus.NotStarted
      }
      this.provisionalStartedTypecheckObjects = []
    };
    TypeChecker.prototype.collectTypes = function(ast) {
      if(ast.nodeType == TypeScript.NodeType.Script) {
        var script = ast;
        this.locationInfo = script.locationInfo
      }
      var globalChain = new TypeScript.ScopeChain(this.gloMod, null, this.globalScope);
      var context = new TypeScript.TypeCollectionContext(globalChain, this);
      TypeScript.getAstWalkerFactory().walk(ast, TypeScript.preCollectTypes, TypeScript.postCollectTypes, null, context)
    };
    TypeChecker.prototype.makeArrayType = function(type) {
      if(type.arrayCache == null) {
        type.arrayCache = new ArrayCache;
        type.arrayCache.arrayType = new TypeScript.Type;
        type.arrayCache.arrayType.elementType = type;
        type.arrayCache.arrayType.symbol = type.symbol
      }
      return type.arrayCache.arrayType
    };
    TypeChecker.prototype.getParameterList = function(args, container) {
      var parameterTable = null;
      var parameterBuilder = null;
      var len = args.members.length;
      var nonOptionalParams = 0;
      var result = [];
      if(len > 0) {
        parameterTable = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
        parameterBuilder = new TypeScript.SymbolScopeBuilder(parameterTable, null, null, null, null, container);
        for(var i = 0;i < len;i++) {
          var parameter = args.members[i];
          var paramDef = new TypeScript.ValueLocation;
          var parameterSymbol = new TypeScript.ParameterSymbol(parameter.id.text, parameter.minChar, this.locationInfo.unitIndex, paramDef);
          parameterSymbol.declAST = parameter;
          parameter.id.sym = parameterSymbol;
          parameter.sym = parameterSymbol;
          paramDef.symbol = parameterSymbol;
          paramDef.typeLink = TypeScript.getTypeLink(parameter.typeExpr, this, false);
          parameterBuilder.enter(null, parameter, parameterSymbol, this.errorReporter, true, false, false);
          result[result.length] = parameterSymbol;
          if(!parameter.isOptionalArg()) {
            nonOptionalParams++
          }
        }
      }
      return{parameters:result, nonOptionalParameterCount:nonOptionalParams}
    };
    TypeChecker.prototype.createFunctionSignature = function(funcDecl, container, scope, overloadGroupSym, addToScope) {
      var isExported = TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.Exported | TypeScript.FncFlags.ClassPropertyMethodExported) || container == this.gloMod;
      var isStatic = TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.Static);
      var isPrivate = TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.Private);
      var isDefinition = TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.Definition);
      var isAmbient = TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.Ambient);
      var isConstructor = funcDecl.isConstructMember() || funcDecl.isConstructor;
      var isGlobal = container == this.gloMod;
      var signature = new TypeScript.Signature;
      var isLambda = funcDecl.fncFlags & TypeScript.FncFlags.IsFunctionExpression;
      if(funcDecl.returnTypeAnnotation || isDefinition) {
        signature.returnType = TypeScript.getTypeLink(funcDecl.returnTypeAnnotation, this, false)
      }else {
        signature.returnType = new TypeScript.TypeLink;
        signature.returnType.type = this.anyType
      }
      signature.hasVariableArgList = funcDecl.variableArgList;
      var sigData = this.getParameterList(funcDecl.args, container);
      signature.parameters = sigData.parameters;
      signature.nonOptionalParameterCount = sigData.nonOptionalParameterCount;
      funcDecl.signature = signature;
      signature.declAST = funcDecl;
      var useOverloadGroupSym = overloadGroupSym && overloadGroupSym.getType() && !overloadGroupSym.isAccessor() && (funcDecl.isSignature() || isAmbient == TypeScript.hasFlag(overloadGroupSym.flags, TypeScript.SymbolFlags.Ambient));
      if(useOverloadGroupSym && isPrivate != TypeScript.hasFlag(overloadGroupSym.flags, TypeScript.SymbolFlags.Private)) {
        this.errorReporter.simpleError(funcDecl, "Public/Private visibility of overloads does not agree")
      }
      var groupType = useOverloadGroupSym ? overloadGroupSym.getType() : new TypeScript.Type;
      if(isConstructor) {
        if(groupType.construct == null) {
          groupType.construct = new TypeScript.SignatureGroup
        }
        groupType.construct.addSignature(signature);
        groupType.construct.hasImplementation = !funcDecl.isSignature();
        if(groupType.construct.hasImplementation) {
          groupType.setHasImplementation()
        }
      }else {
        if(funcDecl.isIndexerMember()) {
          if(groupType.index == null) {
            groupType.index = new TypeScript.SignatureGroup;
            groupType.index.flags |= TypeScript.SignatureFlags.IsIndexer
          }
          groupType.index.addSignature(signature);
          groupType.index.hasImplementation = !funcDecl.isSignature();
          if(groupType.index.hasImplementation) {
            groupType.setHasImplementation()
          }
        }else {
          if(groupType.call == null) {
            groupType.call = new TypeScript.SignatureGroup
          }
          groupType.call.addSignature(signature);
          groupType.call.hasImplementation = !funcDecl.isSignature();
          if(groupType.call.hasImplementation) {
            groupType.setHasImplementation()
          }
        }
      }
      var instanceType = groupType.instanceType;
      if(instanceType && !isStatic) {
        if(instanceType.call == null) {
          instanceType.call = groupType.call
        }else {
          if(groupType.call) {
            instanceType.call.signatures.concat(groupType.call.signatures)
          }
        }
      }
      var funcName = null;
      var usedHint = false;
      if(funcDecl.name && !funcDecl.name.isMissing()) {
        funcName = funcDecl.name.text
      }else {
        if(funcDecl.hint) {
          funcName = funcDecl.hint;
          usedHint = true
        }
      }
      if(groupType.symbol == null) {
        groupType.symbol = new TypeScript.TypeSymbol(funcName ? funcName : this.anon, funcDecl.minChar, this.locationInfo.unitIndex, groupType);
        if(!useOverloadGroupSym) {
          groupType.symbol.declAST = funcDecl
        }
      }
      if(isStatic) {
        groupType.symbol.flags |= TypeScript.SymbolFlags.Static
      }
      if(isAmbient) {
        groupType.symbol.flags |= TypeScript.SymbolFlags.Ambient
      }
      if(isPrivate) {
        groupType.symbol.flags |= TypeScript.SymbolFlags.Private
      }
      groupType.symbol.isMethod = funcDecl.isMethod();
      if(groupType.symbol.isMethod) {
        groupType.symbol.flags |= TypeScript.SymbolFlags.Property
      }
      funcDecl.type = groupType;
      if(!isConstructor) {
        if(funcName && !isLambda && !funcDecl.isAccessor() && !usedHint) {
          if(addToScope) {
            if(funcDecl.isMethod() && isStatic) {
              if(!container.type.members.publicMembers.add(funcName, groupType.symbol)) {
                this.errorReporter.duplicateIdentifier(funcDecl, funcName)
              }
              groupType.symbol.container = container
            }else {
              if(overloadGroupSym == null || overloadGroupSym.declAST && !overloadGroupSym.declAST.isOverload && container.isType()) {
                scope.enter(container, funcDecl, groupType.symbol, this.errorReporter, !isPrivate && (isExported || isStatic || isGlobal), false, isAmbient)
              }
            }
          }else {
            if(!funcDecl.isSpecialFn()) {
              groupType.symbol.container = container
            }
          }
        }else {
          if(!funcDecl.isSpecialFn()) {
            groupType.symbol.container = container
          }
        }
      }
      if(useOverloadGroupSym) {
        var overloadGroupType = overloadGroupSym ? overloadGroupSym.getType() : null;
        var classType = groupType;
        if(classType != overloadGroupType) {
          if(classType.construct == null) {
            if(overloadGroupType && overloadGroupType.construct) {
              classType.construct = overloadGroupType.construct
            }else {
              classType.construct = new TypeScript.SignatureGroup
            }
          }else {
            if(overloadGroupType) {
              if(overloadGroupType.construct) {
                classType.construct.signatures.concat(overloadGroupType.construct.signatures)
              }
            }
          }
          if(overloadGroupType) {
            if(classType.call == null) {
              classType.call = overloadGroupType.call
            }else {
              if(overloadGroupType.call) {
                classType.call.signatures.concat(overloadGroupType.call.signatures)
              }
            }
            if(!isStatic) {
              if(classType.instanceType == null) {
                classType.instanceType = overloadGroupType.instanceType
              }
              var instanceType = classType.instanceType;
              if(instanceType) {
                if(instanceType.call == null) {
                  instanceType.call = overloadGroupType.call
                }else {
                  if(overloadGroupType.call) {
                    instanceType.call.signatures.concat(overloadGroupType.call.signatures)
                  }
                }
              }
            }
            if(classType.index == null) {
              classType.index = overloadGroupType.index
            }else {
              if(overloadGroupType.index) {
                classType.index.signatures.concat(overloadGroupType.index.signatures)
              }
            }
          }
        }
      }
      return signature
    };
    TypeChecker.prototype.createAccessorSymbol = function(funcDecl, fgSym, enclosingClass, addToMembers, isClassProperty, scope, container) {
      var accessorSym = null;
      var sig = funcDecl.signature;
      var nameText = funcDecl.name.text;
      var isStatic = TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.Static);
      var isPrivate = TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.Private);
      if(fgSym == null) {
        var field = new TypeScript.ValueLocation;
        accessorSym = new TypeScript.FieldSymbol(nameText, funcDecl.minChar, this.locationInfo.unitIndex, false, field);
        field.symbol = accessorSym;
        accessorSym.declAST = funcDecl;
        if(TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.GetAccessor)) {
          if(accessorSym.getter) {
            this.errorReporter.simpleError(funcDecl, "Redeclaration of property getter")
          }
          accessorSym.getter = sig.declAST.type.symbol
        }else {
          if(accessorSym.setter) {
            this.errorReporter.simpleError(funcDecl, "Redeclaration of property setter")
          }
          accessorSym.setter = sig.declAST.type.symbol
        }
        field.typeLink = TypeScript.getTypeLink(null, this, false);
        if(addToMembers) {
          if(enclosingClass) {
            if(!enclosingClass.members.publicMembers.add(nameText, accessorSym)) {
              this.errorReporter.duplicateIdentifier(funcDecl, accessorSym.name)
            }
            accessorSym.container = enclosingClass.symbol
          }else {
            this.errorReporter.simpleError(funcDecl, "Accessor property may not be added in this context")
          }
        }else {
          scope.enter(container, funcDecl, accessorSym, this.errorReporter, !isPrivate || isStatic, false, false)
        }
        if(isClassProperty) {
          accessorSym.flags |= TypeScript.SymbolFlags.Property
        }
        if(isStatic) {
          accessorSym.flags |= TypeScript.SymbolFlags.Static
        }
        if(isPrivate) {
          accessorSym.flags |= TypeScript.SymbolFlags.Private
        }else {
          accessorSym.flags |= TypeScript.SymbolFlags.Public
        }
      }else {
        accessorSym = fgSym;
        if(isPrivate != TypeScript.hasFlag(accessorSym.flags, TypeScript.SymbolFlags.Private)) {
          this.errorReporter.simpleError(funcDecl, "Getter and setter accessors do not agree in visibility")
        }
        if(TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.GetAccessor)) {
          if(accessorSym.getter) {
            this.errorReporter.simpleError(funcDecl, "Redeclaration of property getter")
          }
          accessorSym.getter = funcDecl.type.symbol
        }else {
          if(accessorSym.setter) {
            this.errorReporter.simpleError(funcDecl, "Redeclaration of property setter")
          }
          accessorSym.setter = funcDecl.type.symbol
        }
      }
      return accessorSym
    };
    TypeChecker.prototype.addBases = function(resultScope, type, baseContext) {
      resultScope.addParentScope(new TypeScript.SymbolTableScope(type.members, type.ambientMembers, type.getAllEnclosedTypes(), type.getAllAmbientEnclosedTypes(), type.symbol));
      var i = 0;
      var parent;
      if(type.extendsList) {
        for(var len = type.extendsList.length;i < len;i++) {
          parent = type.extendsList[i];
          if(baseContext.baseId == parent.typeID) {
            this.errorReporter.reportErrorFromSym(parent.symbol, "Type '" + baseContext.base + "' is recursively referenced as a base class of itself");
            parent.symbol.flags |= TypeScript.SymbolFlags.RecursivelyReferenced;
            break
          }
          this.addBases(resultScope, parent, baseContext)
        }
      }
    };
    TypeChecker.prototype.scopeOf = function(type) {
      var resultScope = new TypeScript.SymbolAggregateScope(type.symbol);
      var baseContext = {base:type.symbol && type.symbol.name ? type.symbol.name : "{}", baseId:type.typeID};
      this.addBases(resultScope, type, baseContext);
      return resultScope
    };
    TypeChecker.prototype.lookupMemberType = function(containingType, name) {
      var symbol = null;
      if(containingType.containedScope) {
        symbol = containingType.containedScope.find(name, false, true)
      }else {
        if(containingType.members) {
          symbol = containingType.members.allMembers.lookup(name);
          if(symbol == null && containingType.ambientMembers) {
            symbol = containingType.ambientMembers.allMembers.lookup(name)
          }
        }
      }
      if(symbol == null) {
        var typeMembers = containingType.getAllEnclosedTypes();
        var ambientTypeMembers = containingType.getAllAmbientEnclosedTypes();
        if(typeMembers) {
          symbol = typeMembers.allMembers.lookup(name);
          if(symbol == null && ambientTypeMembers) {
            symbol = ambientTypeMembers.allMembers.lookup(name)
          }
        }
      }
      if(symbol && symbol.isType()) {
        return symbol.getType()
      }else {
        return null
      }
    };
    TypeChecker.prototype.findSymbolForDynamicModule = function(idText, currentFileName, search) {
      var originalIdText = idText;
      var symbol = search(idText);
      if(symbol == null) {
        if(!symbol) {
          idText = TypeScript.swapQuotes(originalIdText);
          symbol = search(idText)
        }
        if(!symbol) {
          idText = TypeScript.stripQuotes(originalIdText) + ".ts";
          symbol = search(idText)
        }
        if(!symbol) {
          idText = TypeScript.stripQuotes(originalIdText) + ".str";
          symbol = search(idText)
        }
        if(!symbol) {
          idText = TypeScript.stripQuotes(originalIdText) + ".d.ts";
          symbol = search(idText)
        }
        if(!symbol) {
          idText = TypeScript.stripQuotes(originalIdText) + ".d.str";
          symbol = search(idText)
        }
        if(!symbol && !TypeScript.isRelative(originalIdText)) {
          idText = originalIdText;
          var strippedIdText = TypeScript.stripQuotes(idText);
          var path = TypeScript.getRootFilePath(TypeScript.switchToForwardSlashes(currentFileName));
          while(symbol == null && path != "" && path != "/") {
            idText = TypeScript.normalizePath(path + strippedIdText + ".ts");
            symbol = search(idText);
            if(symbol == null) {
              idText = TypeScript.changePathToSTR(idText);
              symbol = search(idText)
            }
            if(symbol == null) {
              idText = TypeScript.changePathToDTS(idText);
              symbol = search(idText)
            }
            if(symbol == null) {
              idText = TypeScript.changePathToDSTR(idText);
              symbol = search(idText)
            }
            if(symbol == null) {
              path = TypeScript.normalizePath(path + "..");
              path = path && path != "/" ? path + "/" : path
            }
          }
        }
      }
      return symbol
    };
    TypeChecker.prototype.resolveTypeMember = function(scope, dotNode) {
      var lhs = dotNode.operand1;
      var rhs = dotNode.operand2;
      var resultType = this.anyType;
      var lhsType = this.anyType;
      if(lhs && rhs && rhs.nodeType == TypeScript.NodeType.Name) {
        if(lhs.nodeType == TypeScript.NodeType.Dot) {
          lhsType = this.resolveTypeMember(scope, lhs)
        }else {
          if(lhs.nodeType == TypeScript.NodeType.Name) {
            var identifier = lhs;
            var symbol = scope.find(identifier.text, false, true);
            if(symbol == null) {
              this.errorReporter.unresolvedSymbol(identifier, identifier.text)
            }else {
              if(symbol.isType()) {
                var typeSymbol = symbol;
                if(typeSymbol.aliasLink && !typeSymbol.type && typeSymbol.aliasLink.alias.nodeType == TypeScript.NodeType.Name) {
                  var modPath = typeSymbol.aliasLink.alias.text;
                  var modSym = this.findSymbolForDynamicModule(modPath, this.locationInfo.filename, function(id) {
                    return scope.find(id, false, true)
                  });
                  if(modSym) {
                    typeSymbol.type = modSym.getType()
                  }
                }
                if(TypeScript.optimizeModuleCodeGen && symbol) {
                  var symType = symbol.getType();
                  if(symType && typeSymbol.aliasLink && typeSymbol.onlyReferencedAsTypeRef) {
                    var modDecl = symType.symbol.declAST;
                    if(modDecl && TypeScript.hasFlag(modDecl.modFlags, TypeScript.ModuleFlags.IsDynamic)) {
                      typeSymbol.onlyReferencedAsTypeRef = !this.resolvingBases
                    }
                  }
                }
                if(!symbol.visible(scope, this)) {
                  this.errorReporter.simpleError(lhs, "The symbol '" + identifier.text + "' is not visible at this point")
                }
                lhsType = symbol.getType();
                identifier.sym = symbol
              }else {
                this.errorReporter.simpleError(lhs, "Expected type")
              }
            }
          }
        }
        if(!lhsType) {
          lhsType = this.anyType
        }
        if(lhsType != this.anyType) {
          var rhsIdentifier = rhs;
          resultType = this.lookupMemberType(lhsType, rhsIdentifier.text);
          if(resultType == null) {
            resultType = this.anyType;
            this.errorReporter.simpleError(dotNode, "Expected type")
          }else {
            if(!resultType.symbol.visible(scope, this)) {
              this.errorReporter.simpleError(lhs, "The symbol '" + rhs.text + "' is not visible at this point")
            }
          }
          rhsIdentifier.sym = resultType.symbol
        }
      }
      if(resultType.isClass()) {
        resultType = resultType.instanceType
      }
      return resultType
    };
    TypeChecker.prototype.resolveFuncDecl = function(funcDecl, scope, fgSym) {
      var functionGroupSymbol = this.createFunctionSignature(funcDecl, scope.container, scope, fgSym, false).declAST.type.symbol;
      var signatures;
      if(funcDecl.isConstructMember()) {
        signatures = functionGroupSymbol.type.construct.signatures
      }else {
        if(funcDecl.isIndexerMember()) {
          signatures = functionGroupSymbol.type.getInstanceType().index.signatures
        }else {
          signatures = functionGroupSymbol.type.call.signatures
        }
      }
      var signature = signatures[signatures.length - 1];
      var len = signature.parameters.length;
      for(var i = 0;i < len;i++) {
        var paramSym = signature.parameters[i];
        this.resolveTypeLink(scope, paramSym.parameter.typeLink, true)
      }
      if(len && funcDecl.variableArgList) {
        if(!signature.parameters[len - 1].parameter.typeLink.type.elementType) {
          this.errorReporter.simpleErrorFromSym(signature.parameters[len - 1].parameter.symbol, "... parameter must have array type");
          signature.parameters[len - 1].parameter.typeLink.type.elementType = this.makeArrayType(signature.parameters[len - 1].parameter.typeLink.type)
        }
      }
      this.resolveTypeLink(scope, signature.returnType, funcDecl.isSignature());
      return functionGroupSymbol
    };
    TypeChecker.prototype.resolveVarDecl = function(varDecl, scope) {
      var field = new TypeScript.ValueLocation;
      var fieldSymbol = new TypeScript.FieldSymbol(varDecl.id.text, varDecl.minChar, this.locationInfo.unitIndex, (varDecl.varFlags & TypeScript.VarFlags.Readonly) == TypeScript.VarFlags.None, field);
      fieldSymbol.transferVarFlags(varDecl.varFlags);
      field.symbol = fieldSymbol;
      fieldSymbol.declAST = varDecl;
      field.typeLink = TypeScript.getTypeLink(varDecl.typeExpr, this, varDecl.init == null);
      this.resolveTypeLink(scope, field.typeLink, true);
      varDecl.sym = fieldSymbol;
      varDecl.type = field.typeLink.type;
      return fieldSymbol
    };
    TypeChecker.prototype.resolveTypeLink = function(scope, typeLink, supplyVar) {
      var arrayCount = 0;
      if(typeLink.type == null) {
        var ast = typeLink.ast;
        if(ast) {
          while(typeLink.type == null) {
            switch(ast.nodeType) {
              case TypeScript.NodeType.Name:
                var identifier = ast;
                var symbol = scope.find(identifier.text, false, true);
                if(symbol == null) {
                  typeLink.type = this.anyType;
                  this.errorReporter.unresolvedSymbol(identifier, identifier.text)
                }else {
                  if(symbol.isType()) {
                    if(!symbol.visible(scope, this)) {
                      this.errorReporter.simpleError(ast, "The symbol '" + identifier.text + "' is not visible at this point")
                    }
                    identifier.sym = symbol;
                    typeLink.type = symbol.getType();
                    if(typeLink.type) {
                      if(typeLink.type.isClass()) {
                        typeLink.type = typeLink.type.instanceType
                      }
                    }else {
                      typeLink.type = this.anyType
                    }
                  }else {
                    typeLink.type = this.anyType;
                    this.errorReporter.simpleError(ast, "Expected type")
                  }
                }
                break;
              case TypeScript.NodeType.Dot:
                typeLink.type = this.resolveTypeMember(scope, ast);
                break;
              case TypeScript.NodeType.TypeRef:
                var typeRef = ast;
                arrayCount = typeRef.arrayCount;
                ast = typeRef.term;
                if(ast == null) {
                  typeLink.type = this.anyType
                }
                break;
              case TypeScript.NodeType.Interface:
                var interfaceDecl = ast;
                var interfaceType = new TypeScript.Type;
                var interfaceSymbol = new TypeScript.TypeSymbol(interfaceDecl.name.text, ast.minChar, this.locationInfo.unitIndex, interfaceType);
                interfaceType.symbol = interfaceSymbol;
                interfaceType.members = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
                interfaceType.containedScope = new TypeScript.SymbolTableScope(interfaceType.members, null, null, null, interfaceSymbol);
                interfaceType.containedScope.container = interfaceSymbol;
                interfaceType.memberScope = interfaceType.containedScope;
                var memberList = interfaceDecl.members;
                var props = memberList.members;
                var propsLen = props.length;
                for(var j = 0;j < propsLen;j++) {
                  var propDecl = props[j];
                  var propSym = null;
                  var addMember = true;
                  var id = null;
                  if(propDecl.nodeType == TypeScript.NodeType.FuncDecl) {
                    var funcDecl = propDecl;
                    id = funcDecl.name;
                    propSym = interfaceType.members.allMembers.lookup(funcDecl.getNameText());
                    addMember = propSym == null;
                    if(funcDecl.isSpecialFn()) {
                      addMember = false;
                      propSym = this.resolveFuncDecl(funcDecl, scope, interfaceSymbol)
                    }else {
                      propSym = this.resolveFuncDecl(funcDecl, scope, propSym)
                    }
                    funcDecl.type = propSym.type
                  }else {
                    id = propDecl.id;
                    propSym = this.resolveVarDecl(propDecl, scope)
                  }
                  if(addMember) {
                    if(id && TypeScript.hasFlag(id.flags, TypeScript.ASTFlags.OptionalName)) {
                      propSym.flags |= TypeScript.SymbolFlags.Optional
                    }
                    if(!interfaceType.members.allMembers.add(propSym.name, propSym)) {
                      this.errorReporter.duplicateIdentifier(ast, propSym.name)
                    }
                  }
                }
                ast.type = interfaceType;
                typeLink.type = interfaceType;
                break;
              case TypeScript.NodeType.FuncDecl:
                var tsym = this.resolveFuncDecl(ast, scope, null);
                typeLink.type = tsym.type;
                break;
              default:
                typeLink.type = this.anyType;
                this.errorReporter.simpleError(ast, "Expected type");
                break
            }
          }
        }
        for(var count = arrayCount;count > 0;count--) {
          typeLink.type = this.makeArrayType(typeLink.type)
        }
        if(supplyVar && typeLink.type == null) {
          typeLink.type = this.anyType
        }
        if(typeLink.ast) {
          typeLink.ast.type = typeLink.type
        }
      }
    };
    TypeChecker.prototype.findMostApplicableSignature = function(signatures, args) {
      if(signatures.length == 1) {
        return{sig:signatures[0].signature, ambiguous:false}
      }
      var best = signatures[0];
      var Q = null;
      var AType = null;
      var PType = null;
      var QType = null;
      var ambiguous = false;
      for(var qSig = 1;qSig < signatures.length;qSig++) {
        Q = signatures[qSig];
        var i = 0;
        for(i = 0;args && i < args.members.length;i++) {
          AType = args.members[i].type;
          PType = i < best.signature.parameters.length ? best.signature.parameters[i].getType() : best.signature.parameters[best.signature.parameters.length - 1].getType().elementType;
          QType = i < Q.signature.parameters.length ? Q.signature.parameters[i].getType() : Q.signature.parameters[Q.signature.parameters.length - 1].getType().elementType;
          if(this.typesAreIdentical(PType, QType)) {
            continue
          }else {
            if(this.typesAreIdentical(AType, PType)) {
              break
            }else {
              if(this.typesAreIdentical(AType, QType)) {
                best = Q;
                break
              }else {
                if(this.sourceIsSubtypeOfTarget(PType, QType)) {
                  break
                }else {
                  if(this.sourceIsSubtypeOfTarget(QType, PType)) {
                    best = Q;
                    break
                  }else {
                    if(Q.hadProvisionalErrors) {
                      break
                    }else {
                      if(best.hadProvisionalErrors) {
                        best = Q;
                        break
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if(!args || i == args.members.length) {
          var collection = {getLength:function() {
            return 2
          }, setTypeAtIndex:function(index, type) {
          }, getTypeAtIndex:function(index) {
            return index ? Q.signature.returnType.type : best.signature.returnType.type
          }};
          var bct = this.findBestCommonType(best.signature.returnType.type, null, collection);
          ambiguous = !bct
        }else {
          ambiguous = false
        }
      }
      return{sig:best.signature, ambiguous:ambiguous}
    };
    TypeChecker.prototype.getApplicableSignatures = function(signatures, args, comparisonInfo) {
      var applicableSigs = [];
      var memberType = null;
      var miss = false;
      var cxt = null;
      var hadProvisionalErrors = false;
      for(var i = 0;i < signatures.length;i++) {
        miss = false;
        for(var j = 0;j < args.members.length;j++) {
          if(j >= signatures[i].parameters.length) {
            continue
          }
          memberType = signatures[i].parameters[j].getType();
          if(signatures[i].declAST.variableArgList && j >= signatures[i].nonOptionalParameterCount - 1 && memberType.isArray()) {
            memberType = memberType.elementType
          }
          if(memberType == this.anyType) {
            continue
          }else {
            if(args.members[j].nodeType == TypeScript.NodeType.FuncDecl) {
              if(this.typeFlow.functionInterfaceType && memberType == this.typeFlow.functionInterfaceType) {
                continue
              }
              if(!this.canContextuallyTypeFunction(memberType, args.members[j], true)) {
                if(this.canContextuallyTypeFunction(memberType, args.members[j], false)) {
                  this.typeFlow.typeCheck(args.members[j]);
                  if(!this.sourceIsAssignableToTarget(args.members[j].type, memberType, comparisonInfo)) {
                    break
                  }
                }else {
                  break
                }
              }else {
                this.typeCheckWithContextualType(memberType, true, true, args.members[j]);
                this.cleanStartedPTO();
                hadProvisionalErrors = this.hadProvisionalErrors();
                if(!this.sourceIsAssignableToTarget(args.members[j].type, memberType, comparisonInfo)) {
                  if(comparisonInfo) {
                    comparisonInfo.setMessage("Could not apply type '" + memberType.getTypeName() + "' to argument " + (j + 1) + ", which is of type '" + args.members[j].type.getTypeName() + "'")
                  }
                  miss = true
                }
                if(hadProvisionalErrors) {
                  cxt = this.currentContextualTypeContext;
                  this.typeCheckWithContextualType(null, true, true, args.members[j]);
                  if(!this.sourceIsAssignableToTarget(args.members[j].type, memberType)) {
                    miss = true
                  }
                  this.cleanStartedPTO()
                }
                this.resetProvisionalErrors();
                if(miss) {
                  break
                }
              }
            }else {
              if(args.members[j].nodeType == TypeScript.NodeType.ObjectLit) {
                if(this.typeFlow.objectInterfaceType && memberType == this.typeFlow.objectInterfaceType) {
                  continue
                }
                this.typeCheckWithContextualType(memberType, true, true, args.members[j]);
                this.cleanStartedPTO();
                hadProvisionalErrors = this.hadProvisionalErrors();
                if(!this.sourceIsAssignableToTarget(args.members[j].type, memberType, comparisonInfo)) {
                  if(comparisonInfo) {
                    comparisonInfo.setMessage("Could not apply type '" + memberType.getTypeName() + "' to argument " + (j + 1) + ", which is of type '" + args.members[j].type.getTypeName() + "'")
                  }
                  miss = true
                }
                if(hadProvisionalErrors) {
                  this.typeCheckWithContextualType(null, true, true, args.members[j]);
                  if(!this.sourceIsAssignableToTarget(args.members[j].type, memberType)) {
                    miss = true
                  }
                  this.cleanStartedPTO()
                }
                this.resetProvisionalErrors();
                if(miss) {
                  break
                }
              }else {
                if(args.members[j].nodeType == TypeScript.NodeType.ArrayLit) {
                  if(this.typeFlow.arrayInterfaceType && memberType == this.typeFlow.arrayInterfaceType) {
                    continue
                  }
                  this.typeCheckWithContextualType(memberType, true, true, args.members[j]);
                  this.cleanStartedPTO();
                  hadProvisionalErrors = this.hadProvisionalErrors();
                  if(!this.sourceIsAssignableToTarget(args.members[j].type, memberType, comparisonInfo)) {
                    if(comparisonInfo) {
                      comparisonInfo.setMessage("Could not apply type '" + memberType.getTypeName() + "' to argument " + (j + 1) + ", which is of type '" + args.members[j].type.getTypeName() + "'")
                    }
                    break
                  }
                  if(hadProvisionalErrors) {
                    this.typeCheckWithContextualType(null, true, true, args.members[j]);
                    if(!this.sourceIsAssignableToTarget(args.members[j].type, memberType)) {
                      miss = true
                    }
                    this.cleanStartedPTO()
                  }
                  this.resetProvisionalErrors();
                  if(miss) {
                    break
                  }
                }
              }
            }
          }
        }
        if(j == args.members.length) {
          applicableSigs[applicableSigs.length] = {signature:signatures[i], hadProvisionalErrors:hadProvisionalErrors}
        }
        hadProvisionalErrors = false
      }
      return applicableSigs
    };
    TypeChecker.prototype.canContextuallyTypeFunction = function(candidateType, funcDecl, beStringent) {
      if(funcDecl.isParenthesized || funcDecl.isMethod() || beStringent && funcDecl.returnTypeAnnotation || funcDecl.isInlineCallLiteral) {
        return false
      }
      beStringent = beStringent || this.typeFlow.functionInterfaceType == candidateType;
      if(!beStringent) {
        return true
      }
      if(!funcDecl.signature) {
        this.createFunctionSignature(funcDecl, this.typeFlow.scope.container, this.typeFlow.scope, null, null);
        this.typeFlow.typeCheck(funcDecl)
      }
      var signature = funcDecl.signature;
      var paramLen = signature.parameters.length;
      for(var i = 0;i < paramLen;i++) {
        var param = signature.parameters[i];
        var symbol = param;
        var argDecl = symbol.declAST;
        if(beStringent && argDecl.typeExpr) {
          return false
        }
      }
      if(candidateType.construct && candidateType.call) {
        return false
      }
      var candidateSigs = candidateType.construct ? candidateType.construct : candidateType.call;
      if(!candidateSigs || candidateSigs.signatures.length > 1) {
        return false
      }
      return true
    };
    TypeChecker.prototype.canContextuallyTypeObjectLiteral = function(targetType, objectLit) {
      if(targetType == this.typeFlow.objectInterfaceType) {
        return true
      }
      var memberDecls = objectLit.operand;
      if(!(memberDecls && targetType.memberScope)) {
        return false
      }
      var id = null;
      var targetMember = null;
      var text = "";
      var foundSyms = {};
      for(var i = 0;i < memberDecls.members.length;i++) {
        id = memberDecls.members[i].operand1;
        if(id.nodeType == TypeScript.NodeType.Name) {
          text = id.text
        }else {
          if(id.nodeType == TypeScript.NodeType.QString) {
            var idText = id.text;
            text = idText.substring(1, idText.length - 1)
          }else {
            return false
          }
        }
        targetMember = targetType.memberScope.find(text, true, false);
        if(!targetMember) {
          return false
        }
        foundSyms[text] = true
      }
      var targetMembers = targetType.memberScope.getAllValueSymbolNames(true);
      for(var i = 0;i < targetMembers.length;i++) {
        var memberName = targetMembers[i];
        var memberSym = targetType.memberScope.find(memberName, true, false);
        if(!foundSyms[targetMembers[i]] && !TypeScript.hasFlag(memberSym.flags, TypeScript.SymbolFlags.Optional)) {
          return false
        }
      }
      return true
    };
    TypeChecker.prototype.widenType = function(t) {
      if(t == this.undefinedType || t == this.nullType) {
        return this.anyType
      }
      return t
    };
    TypeChecker.prototype.isNullOrUndefinedType = function(t) {
      return t == this.undefinedType || t == this.nullType
    };
    TypeChecker.prototype.findBestCommonType = function(initialType, targetType, collection, comparisonInfo) {
      var i = 0;
      var len = collection.getLength();
      var nlastChecked = 0;
      var bestCommonType = initialType;
      if(targetType) {
        bestCommonType = bestCommonType ? bestCommonType.mergeOrdered(targetType, this) : targetType
      }
      var convergenceType = bestCommonType;
      while(nlastChecked < len) {
        for(i = 0;i < len;i++) {
          if(i == nlastChecked) {
            continue
          }
          if(convergenceType && (bestCommonType = convergenceType.mergeOrdered(collection.getTypeAtIndex(i), this, comparisonInfo))) {
            convergenceType = bestCommonType
          }
          if(bestCommonType == this.anyType || bestCommonType == null) {
            break
          }else {
            if(targetType) {
              collection.setTypeAtIndex(i, targetType)
            }
          }
        }
        if(convergenceType && bestCommonType) {
          break
        }
        nlastChecked++;
        if(nlastChecked < len) {
          convergenceType = collection.getTypeAtIndex(nlastChecked)
        }
      }
      return bestCommonType
    };
    TypeChecker.prototype.typesAreIdentical = function(t1, t2) {
      if(t1 == t2) {
        return true
      }
      if(!t1 || !t2) {
        return false
      }
      var comboId = t2.typeID << 16 | t1.typeID;
      if(this.identicalCache[comboId]) {
        return true
      }
      if(t1.typeFlags & TypeScript.TypeFlags.IsEnum || t2.typeFlags & TypeScript.TypeFlags.IsEnum) {
        return false
      }
      if(t1.isArray() || t2.isArray()) {
        if(!(t1.isArray() && t2.isArray())) {
          return false
        }
        this.identicalCache[comboId] = false;
        var ret = this.typesAreIdentical(t1.elementType, t2.elementType);
        if(ret) {
          this.subtypeCache[comboId] = true
        }else {
          this.subtypeCache[comboId] = undefined
        }
        return ret
      }
      if(t1.primitiveTypeClass != t2.primitiveTypeClass) {
        return false
      }
      this.identicalCache[comboId] = false;
      if(t1.memberScope && t2.memberScope) {
        var t1MemberKeys = t1.memberScope.getAllValueSymbolNames(true).sort();
        var t2MemberKeys = t2.memberScope.getAllValueSymbolNames(true).sort();
        if(t1MemberKeys.length != t2MemberKeys.length) {
          this.identicalCache[comboId] = undefined;
          return false
        }
        var t1MemberSymbol = null;
        var t2MemberSymbol = null;
        var t1MemberType = null;
        var t2MemberType = null;
        for(var iMember = 0;iMember < t1MemberKeys.length;iMember++) {
          if(t1MemberKeys[iMember] != t2MemberKeys[iMember]) {
            this.identicalCache[comboId] = undefined;
            return false
          }
          t1MemberSymbol = t1.memberScope.find(t1MemberKeys[iMember], false, false);
          t2MemberSymbol = t2.memberScope.find(t2MemberKeys[iMember], false, false);
          if((t1MemberSymbol.flags & TypeScript.SymbolFlags.Optional) != (t2MemberSymbol.flags & TypeScript.SymbolFlags.Optional)) {
            this.identicalCache[comboId] = undefined;
            return false
          }
          t1MemberType = t1MemberSymbol.getType();
          t2MemberType = t2MemberSymbol.getType();
          if(t1MemberType && t2MemberType && this.identicalCache[t2MemberType.typeID << 16 | t1MemberType.typeID] != undefined) {
            continue
          }
          if(!this.typesAreIdentical(t1MemberType, t2MemberType)) {
            this.identicalCache[comboId] = undefined;
            return false
          }
        }
      }else {
        if(t1.memberScope || t2.memberScope) {
          this.identicalCache[comboId] = undefined;
          return false
        }
      }
      if(!this.signatureGroupsAreIdentical(t1.call, t2.call)) {
        this.identicalCache[comboId] = undefined;
        return false
      }
      if(!this.signatureGroupsAreIdentical(t1.construct, t2.construct)) {
        this.identicalCache[comboId] = undefined;
        return false
      }
      if(!this.signatureGroupsAreIdentical(t1.index, t2.index)) {
        this.identicalCache[comboId] = undefined;
        return false
      }
      this.identicalCache[comboId] = true;
      return true
    };
    TypeChecker.prototype.signatureGroupsAreIdentical = function(sg1, sg2) {
      if(sg1 == sg2) {
        return true
      }
      if(!sg1 || !sg2) {
        return false
      }
      if(sg1.signatures.length != sg2.signatures.length) {
        return false
      }
      var sig1 = null;
      var sig2 = null;
      var sigsMatch = false;
      for(var iSig1 = 0;iSig1 < sg1.signatures.length;iSig1++) {
        sig1 = sg1.signatures[iSig1];
        for(var iSig2 = 0;iSig2 < sg2.signatures.length;iSig2++) {
          sig2 = sg2.signatures[iSig2];
          if(this.signaturesAreIdentical(sig1, sig2)) {
            sigsMatch = true;
            break
          }
        }
        if(sigsMatch) {
          sigsMatch = false;
          continue
        }
        return false
      }
      return true
    };
    TypeChecker.prototype.signaturesAreIdentical = function(s1, s2) {
      if(s1.hasVariableArgList != s2.hasVariableArgList) {
        return false
      }
      if(s1.nonOptionalParameterCount != s2.nonOptionalParameterCount) {
        return false
      }
      if(s1.parameters.length != s2.parameters.length) {
        return false
      }
      if(!this.typesAreIdentical(s1.returnType.type, s2.returnType.type)) {
        return false
      }
      for(var iParam = 0;iParam < s1.parameters.length;iParam++) {
        if(!this.typesAreIdentical(s1.parameters[iParam].parameter.typeLink.type, s2.parameters[iParam].parameter.typeLink.type)) {
          return false
        }
      }
      return true
    };
    TypeChecker.prototype.sourceIsSubtypeOfTarget = function(source, target, comparisonInfo) {
      return this.sourceIsRelatableToTarget(source, target, false, this.subtypeCache, comparisonInfo)
    };
    TypeChecker.prototype.signatureGroupIsSubtypeOfTarget = function(sg1, sg2, comparisonInfo) {
      return this.signatureGroupIsRelatableToTarget(sg1, sg2, false, this.subtypeCache, comparisonInfo)
    };
    TypeChecker.prototype.signatureIsSubtypeOfTarget = function(s1, s2, comparisonInfo) {
      return this.signatureIsRelatableToTarget(s1, s2, false, this.subtypeCache, comparisonInfo)
    };
    TypeChecker.prototype.sourceIsAssignableToTarget = function(source, target, comparisonInfo) {
      return this.sourceIsRelatableToTarget(source, target, true, this.assignableCache, comparisonInfo)
    };
    TypeChecker.prototype.signatureGroupIsAssignableToTarget = function(sg1, sg2, comparisonInfo) {
      return this.signatureGroupIsRelatableToTarget(sg1, sg2, true, this.assignableCache, comparisonInfo)
    };
    TypeChecker.prototype.signatureIsAssignableToTarget = function(s1, s2, comparisonInfo) {
      return this.signatureIsRelatableToTarget(s1, s2, true, this.assignableCache, comparisonInfo)
    };
    TypeChecker.prototype.sourceIsRelatableToTarget = function(source, target, assignableTo, comparisonCache, comparisonInfo) {
      if(source == target) {
        return true
      }
      if(!(source && target)) {
        return true
      }
      var comboId = source.typeID << 16 | target.typeID;
      if(comparisonCache[comboId]) {
        return true
      }
      if(assignableTo) {
        if(source == this.anyType || target == this.anyType) {
          return true
        }
      }else {
        if(target == this.anyType) {
          return true
        }
      }
      if(source == this.undefinedType) {
        return true
      }
      if(source == this.nullType && target != this.undefinedType && target != this.voidType) {
        return true
      }
      if(target == this.numberType && source.typeFlags & TypeScript.TypeFlags.IsEnum) {
        return true
      }
      if(source == this.numberType && target.typeFlags & TypeScript.TypeFlags.IsEnum) {
        return true
      }
      if(source.typeFlags & TypeScript.TypeFlags.IsEnum || target.typeFlags & TypeScript.TypeFlags.IsEnum) {
        return false
      }
      if(source.isArray() || target.isArray()) {
        if(!(source.isArray() && target.isArray())) {
          return false
        }
        comparisonCache[comboId] = false;
        var ret = this.sourceIsRelatableToTarget(source.elementType, target.elementType, assignableTo, comparisonCache, comparisonInfo);
        if(ret) {
          comparisonCache[comboId] = true
        }else {
          comparisonCache[comboId] = undefined
        }
        return ret
      }
      if(source.primitiveTypeClass != target.primitiveTypeClass) {
        if(target.primitiveTypeClass == TypeScript.Primitive.None) {
          if(source == this.numberType && this.typeFlow.numberInterfaceType) {
            source = this.typeFlow.numberInterfaceType
          }else {
            if(source == this.stringType && this.typeFlow.stringInterfaceType) {
              source = this.typeFlow.stringInterfaceType
            }else {
              if(source == this.booleanType && this.typeFlow.booleanInterfaceType) {
                source = this.typeFlow.booleanInterfaceType
              }else {
                return false
              }
            }
          }
        }else {
          return false
        }
      }
      comparisonCache[comboId] = false;
      if(source.hasBase(target)) {
        comparisonCache[comboId] = true;
        return true
      }
      if(this.typeFlow.objectInterfaceType && target == this.typeFlow.objectInterfaceType) {
        return true
      }
      if(this.typeFlow.functionInterfaceType && (source.call || source.construct) && target == this.typeFlow.functionInterfaceType) {
        return true
      }
      if(target.isClass() || target.isClassInstance()) {
        comparisonCache[comboId] = undefined;
        return false
      }
      if(target.memberScope && source.memberScope) {
        var mPropKeys = target.memberScope.getAllValueSymbolNames(true);
        var mProp = null;
        var nProp = null;
        var mPropType = null;
        var nPropType = null;
        var inferenceSymbol = null;
        for(var iMProp = 0;iMProp < mPropKeys.length;iMProp++) {
          mProp = target.memberScope.find(mPropKeys[iMProp], false, false);
          nProp = source.memberScope.find(mPropKeys[iMProp], false, false);
          if(mProp.kind() == TypeScript.SymbolKind.Variable && mProp.variable.typeLink.ast && mProp.variable.typeLink.ast.nodeType == TypeScript.NodeType.Name && mProp.variable.typeLink.ast.text == "IArguments") {
            continue
          }
          if(mProp.isInferenceSymbol()) {
            inferenceSymbol = mProp;
            if(inferenceSymbol.typeCheckStatus == TypeScript.TypeCheckStatus.NotStarted) {
              this.typeFlow.typeCheck(mProp.declAST)
            }
          }
          mPropType = mProp.getType();
          if(!nProp) {
            if(this.typeFlow.objectInterfaceType) {
              nProp = this.typeFlow.objectInterfaceType.memberScope.find(mPropKeys[iMProp], false, false)
            }
            if(!nProp) {
              if(this.typeFlow.functionInterfaceType && (mPropType.call || mPropType.construct)) {
                nProp = this.typeFlow.functionInterfaceType.memberScope.find(mPropKeys[iMProp], false, false)
              }
              if(!nProp) {
                if(!(mProp.flags & TypeScript.SymbolFlags.Optional)) {
                  comparisonCache[comboId] = undefined;
                  if(comparisonInfo) {
                    comparisonInfo.flags |= TypeScript.TypeRelationshipFlags.RequiredPropertyIsMissing;
                    comparisonInfo.addMessageToFront("Type '" + source.getTypeName() + "' is missing property '" + mPropKeys[iMProp] + "' from type '" + target.getTypeName() + "'")
                  }
                  return false
                }else {
                  continue
                }
              }
            }
          }
          if(nProp.isInferenceSymbol()) {
            inferenceSymbol = nProp;
            if(inferenceSymbol.typeCheckStatus == TypeScript.TypeCheckStatus.NotStarted) {
              this.typeFlow.typeCheck(nProp.declAST)
            }
          }
          nPropType = nProp.getType();
          if(mPropType && nPropType && comparisonCache[nPropType.typeID << 16 | mPropType.typeID] != undefined) {
            continue
          }
          if(!this.sourceIsRelatableToTarget(nPropType, mPropType, assignableTo, comparisonCache, comparisonInfo)) {
            comparisonCache[comboId] = undefined;
            if(comparisonInfo) {
              comparisonInfo.flags |= TypeScript.TypeRelationshipFlags.IncompatiblePropertyTypes;
              comparisonInfo.addMessageToFront("Types of property '" + mProp.name + "' of types '" + source.getTypeName() + "' and '" + target.getTypeName() + "' are incompatible")
            }
            return false
          }
        }
      }
      if(source.call || target.call) {
        if(!this.signatureGroupIsRelatableToTarget(source.call, target.call, assignableTo, comparisonCache, comparisonInfo)) {
          if(comparisonInfo) {
            if(source.call && target.call) {
              comparisonInfo.addMessageToFront("Call signatures of types '" + source.getTypeName() + "' and '" + target.getTypeName() + "' are incompatible")
            }else {
              var hasSig = target.call ? target.getTypeName() : source.getTypeName();
              var lacksSig = !target.call ? target.getTypeName() : source.getTypeName();
              comparisonInfo.setMessage("Type '" + hasSig + "' requires a call signature, but Type '" + lacksSig + "' lacks one")
            }
            comparisonInfo.flags |= TypeScript.TypeRelationshipFlags.IncompatibleSignatures
          }
          comparisonCache[comboId] = undefined;
          return false
        }
      }
      if(source.construct || target.construct) {
        if(!this.signatureGroupIsRelatableToTarget(source.construct, target.construct, assignableTo, comparisonCache, comparisonInfo)) {
          if(comparisonInfo) {
            if(source.construct && target.construct) {
              comparisonInfo.addMessageToFront("Construct signatures of types '" + source.getTypeName() + "' and '" + target.getTypeName() + "' are incompatible")
            }else {
              var hasSig = target.construct ? target.getTypeName() : source.getTypeName();
              var lacksSig = !target.construct ? target.getTypeName() : source.getTypeName();
              comparisonInfo.setMessage("Type '" + hasSig + "' requires a construct signature, but Type '" + lacksSig + "' lacks one")
            }
            comparisonInfo.flags |= TypeScript.TypeRelationshipFlags.IncompatibleSignatures
          }
          comparisonCache[comboId] = undefined;
          return false
        }
      }
      if(target.index) {
        var targetIndex = !target.index && this.typeFlow.objectInterfaceType ? this.typeFlow.objectInterfaceType.index : target.index;
        var sourceIndex = !source.index && this.typeFlow.objectInterfaceType ? this.typeFlow.objectInterfaceType.index : source.index;
        if(!this.signatureGroupIsRelatableToTarget(sourceIndex, targetIndex, assignableTo, comparisonCache, comparisonInfo)) {
          if(comparisonInfo) {
            comparisonInfo.addMessageToFront("Index signatures of types '" + source.getTypeName() + "' and '" + target.getTypeName() + "' are incompatible");
            comparisonInfo.flags |= TypeScript.TypeRelationshipFlags.IncompatibleSignatures
          }
          comparisonCache[comboId] = undefined;
          return false
        }
      }
      comparisonCache[comboId] = true;
      return true
    };
    TypeChecker.prototype.signatureGroupIsRelatableToTarget = function(sourceSG, targetSG, assignableTo, comparisonCache, comparisonInfo) {
      if(sourceSG == targetSG) {
        return true
      }
      if(!(sourceSG && targetSG)) {
        return false
      }
      var mSig = null;
      var nSig = null;
      var foundMatch = false;
      for(var iMSig = 0;iMSig < targetSG.signatures.length;iMSig++) {
        mSig = targetSG.signatures[iMSig];
        for(var iNSig = 0;iNSig < sourceSG.signatures.length;iNSig++) {
          nSig = sourceSG.signatures[iNSig];
          if(this.signatureIsRelatableToTarget(nSig, mSig, assignableTo, comparisonCache, comparisonInfo)) {
            foundMatch = true;
            break
          }
        }
        if(foundMatch) {
          foundMatch = false;
          continue
        }
        return false
      }
      return true
    };
    TypeChecker.prototype.signatureIsRelatableToTarget = function(sourceSig, targetSig, assignableTo, comparisonCache, comparisonInfo) {
      if(!sourceSig.parameters || !targetSig.parameters) {
        return false
      }
      var targetVarArgCount = targetSig.hasVariableArgList ? targetSig.nonOptionalParameterCount - 1 : targetSig.nonOptionalParameterCount;
      var sourceVarArgCount = sourceSig.hasVariableArgList ? sourceSig.nonOptionalParameterCount - 1 : sourceSig.nonOptionalParameterCount;
      if(sourceVarArgCount > targetVarArgCount && !targetSig.hasVariableArgList) {
        if(comparisonInfo) {
          comparisonInfo.flags |= TypeScript.TypeRelationshipFlags.SourceSignatureHasTooManyParameters;
          comparisonInfo.addMessageToFront("Call signature expects " + targetVarArgCount + " or fewer parameters")
        }
        return false
      }
      var sourceReturnType = sourceSig.returnType.type;
      var targetReturnType = targetSig.returnType.type;
      if(targetReturnType != this.voidType) {
        if(!this.sourceIsRelatableToTarget(sourceReturnType, targetReturnType, assignableTo, comparisonCache, comparisonInfo)) {
          if(comparisonInfo) {
            comparisonInfo.flags |= TypeScript.TypeRelationshipFlags.IncompatibleReturnTypes
          }
          return false
        }
      }
      var len = sourceVarArgCount < targetVarArgCount && sourceSig.hasVariableArgList ? targetVarArgCount : sourceVarArgCount;
      var sourceParamType = null;
      var targetParamType = null;
      var sourceParamName = "";
      var targetParamName = "";
      for(var iSource = 0, iTarget = 0;iSource < len;iSource++, iTarget++) {
        if(!sourceSig.hasVariableArgList || iSource < sourceVarArgCount) {
          sourceParamType = sourceSig.parameters[iSource].parameter.typeLink.type;
          sourceParamName = sourceSig.parameters[iSource].parameter.symbol.name
        }else {
          if(iSource == sourceVarArgCount) {
            sourceParamType = sourceSig.parameters[iSource].parameter.typeLink.type;
            if(sourceParamType.elementType) {
              sourceParamType = sourceParamType.elementType
            }
            sourceParamName = sourceSig.parameters[iSource].parameter.symbol.name
          }
        }
        if(iTarget < targetSig.parameters.length && iTarget < targetVarArgCount) {
          targetParamType = targetSig.parameters[iTarget].parameter.typeLink.type;
          targetParamName = targetSig.parameters[iTarget].parameter.symbol.name
        }else {
          if(targetSig.hasVariableArgList && iTarget == targetVarArgCount) {
            targetParamType = targetSig.parameters[iTarget].parameter.typeLink.type;
            if(targetParamType.elementType) {
              targetParamType = targetParamType.elementType
            }
            targetParamName = targetSig.parameters[iTarget].parameter.symbol.name
          }
        }
        if(!(this.sourceIsRelatableToTarget(sourceParamType, targetParamType, assignableTo, comparisonCache, comparisonInfo) || this.sourceIsRelatableToTarget(targetParamType, sourceParamType, assignableTo, comparisonCache, comparisonInfo))) {
          if(comparisonInfo) {
            comparisonInfo.flags |= TypeScript.TypeRelationshipFlags.IncompatibleParameterTypes
          }
          return false
        }
      }
      return true
    };
    return TypeChecker
  }();
  TypeScript.TypeChecker = TypeChecker
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  var Continuation = function() {
    function Continuation(normalBlock) {
      this.normalBlock = normalBlock;
      this.exceptionBlock = -1
    }
    return Continuation
  }();
  TypeScript.Continuation = Continuation;
  function getBaseTypeLinks(bases, baseTypeLinks) {
    if(bases) {
      var len = bases.members.length;
      if(baseTypeLinks == null) {
        baseTypeLinks = new Array
      }
      for(var i = 0;i < len;i++) {
        var baseExpr = bases.members[i];
        var name = baseExpr;
        if(name.nodeType == TypeScript.NodeType.Call) {
          name = name.target
        }
        var typeLink = new TypeScript.TypeLink;
        typeLink.ast = name;
        baseTypeLinks[baseTypeLinks.length] = typeLink
      }
    }
    return baseTypeLinks
  }
  function getBases(type, typeDecl) {
    type.extendsTypeLinks = getBaseTypeLinks(typeDecl.extendsList, type.extendsTypeLinks);
    type.implementsTypeLinks = getBaseTypeLinks(typeDecl.implementsList, type.implementsTypeLinks)
  }
  function addPrototypeField(classType, ast, context) {
    var field = new TypeScript.ValueLocation;
    field.typeLink = new TypeScript.TypeLink;
    field.typeLink.ast = ast;
    field.typeLink.type = classType.instanceType;
    var fieldSymbol = new TypeScript.FieldSymbol("prototype", ast.minChar, context.checker.locationInfo.unitIndex, true, field);
    fieldSymbol.flags |= TypeScript.SymbolFlags.Property | TypeScript.SymbolFlags.BuiltIn;
    field.symbol = fieldSymbol;
    fieldSymbol.declAST = ast;
    classType.members.addPublicMember("prototype", fieldSymbol)
  }
  function createNewConstructGroupForType(type) {
    var signature = new TypeScript.Signature;
    signature.returnType = new TypeScript.TypeLink;
    signature.returnType.type = type.instanceType;
    signature.parameters = [];
    type.construct = new TypeScript.SignatureGroup;
    type.construct.addSignature(signature)
  }
  TypeScript.createNewConstructGroupForType = createNewConstructGroupForType;
  function cloneParentConstructGroupForChildType(child, parent) {
    child.construct = new TypeScript.SignatureGroup;
    var sig = null;
    if(!parent.construct) {
      createNewConstructGroupForType(parent)
    }
    for(var i = 0;i < parent.construct.signatures.length;i++) {
      sig = new TypeScript.Signature;
      sig.parameters = parent.construct.signatures[i].parameters;
      sig.nonOptionalParameterCount = parent.construct.signatures[i].nonOptionalParameterCount;
      sig.typeCheckStatus = parent.construct.signatures[i].typeCheckStatus;
      sig.declAST = parent.construct.signatures[i].declAST;
      sig.returnType = new TypeScript.TypeLink;
      sig.returnType.type = child.instanceType;
      child.construct.addSignature(sig)
    }
  }
  TypeScript.cloneParentConstructGroupForChildType = cloneParentConstructGroupForChildType;
  TypeScript.globalId = "__GLO";
  function findTypeSymbolInScopeChain(name, scopeChain) {
    var symbol = scopeChain.scope.find(name, false, true);
    if(symbol == null && scopeChain.previous) {
      symbol = findTypeSymbolInScopeChain(name, scopeChain.previous)
    }
    return symbol
  }
  function findSymbolFromAlias(alias, context) {
    var symbol = null;
    switch(alias.nodeType) {
      case TypeScript.NodeType.Name:
        var name = alias.text;
        var isDynamic = TypeScript.isQuoted(name);
        var findSym = function(id) {
          if(context.members) {
            return context.members.lookup(name)
          }else {
            return findTypeSymbolInScopeChain(name, context.topLevelScope)
          }
        };
        if(isDynamic) {
          symbol = context.tcContext.checker.findSymbolForDynamicModule(name, context.tcContext.script.locationInfo.filename, findSym)
        }else {
          symbol = findSym(name)
        }
        break;
      case TypeScript.NodeType.Dot:
        var dottedExpr = alias;
        var op1Sym = findSymbolFromAlias(dottedExpr.operand1, context);
        if(op1Sym && op1Sym.getType()) {
          symbol = findSymbolFromAlias(dottedExpr.operand2, context)
        }
        break;
      default:
        break
    }
    if(symbol) {
      var symType = symbol.getType();
      if(symType) {
        var members = symType.members;
        if(members) {
          context.members = members.publicMembers
        }
      }else {
        context.tcContext.checker.errorReporter.simpleError(alias, "Potentially circular alias reference - could not obtain type of alias")
      }
    }
    return symbol
  }
  function preCollectImportTypes(ast, parent, context) {
    var scopeChain = context.scopeChain;
    var typeSymbol = null;
    var modType = null;
    var importDecl = ast;
    var isExported = TypeScript.hasFlag(importDecl.varFlags, TypeScript.VarFlags.Exported);
    var aliasedModSymbol = findSymbolFromAlias(importDecl.alias, {topLevelScope:scopeChain, members:null, tcContext:context});
    var isGlobal = context.scopeChain.container == context.checker.gloMod;
    if(aliasedModSymbol) {
      var aliasedModType = aliasedModSymbol.getType();
      if(aliasedModType) {
        modType = aliasedModType
      }
    }
    typeSymbol = new TypeScript.TypeSymbol(importDecl.id.text, importDecl.minChar, context.checker.locationInfo.unitIndex, modType);
    typeSymbol.aliasLink = importDecl;
    if(context.scopeChain.moduleDecl) {
      typeSymbol.declModule = context.scopeChain.moduleDecl
    }
    typeSymbol.declAST = importDecl;
    importDecl.id.sym = typeSymbol;
    scopeChain.scope.enter(scopeChain.container, ast, typeSymbol, context.checker.errorReporter, isExported || isGlobal, true, false);
    scopeChain.scope.enter(scopeChain.container, ast, typeSymbol, context.checker.errorReporter, isExported || isGlobal, false, false);
    return true
  }
  TypeScript.preCollectImportTypes = preCollectImportTypes;
  function preCollectModuleTypes(ast, parent, context) {
    var scopeChain = context.scopeChain;
    var moduleDecl = ast;
    var isAmbient = TypeScript.hasFlag(moduleDecl.modFlags, TypeScript.ModuleFlags.Ambient);
    var isEnum = TypeScript.hasFlag(moduleDecl.modFlags, TypeScript.ModuleFlags.IsEnum);
    var isGlobal = context.scopeChain.container == context.checker.gloMod;
    var isExported = TypeScript.hasFlag(moduleDecl.modFlags, TypeScript.ModuleFlags.Exported);
    var modName = moduleDecl.name.text;
    var isDynamic = TypeScript.isQuoted(modName);
    var symbol = scopeChain.scope.findLocal(modName, false, false);
    var typeSymbol = null;
    var modType = null;
    if(symbol == null || symbol.kind() != TypeScript.SymbolKind.Type) {
      if(modType == null) {
        var enclosedTypes = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
        var ambientEnclosedTypes = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
        modType = new TypeScript.ModuleType(enclosedTypes, ambientEnclosedTypes);
        if(isEnum) {
          modType.typeFlags |= TypeScript.TypeFlags.IsEnum
        }
        modType.members = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
        modType.ambientMembers = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
        modType.setHasImplementation()
      }
      typeSymbol = new TypeScript.TypeSymbol(modName, moduleDecl.minChar, context.checker.locationInfo.unitIndex, modType);
      if(context.scopeChain.moduleDecl) {
        typeSymbol.declModule = context.scopeChain.moduleDecl
      }
      typeSymbol.declAST = moduleDecl;
      typeSymbol.prettyName = moduleDecl.prettyName;
      scopeChain.scope.enter(scopeChain.container, ast, typeSymbol, context.checker.errorReporter, isExported || isGlobal, true, isAmbient);
      scopeChain.scope.enter(scopeChain.container, ast, typeSymbol, context.checker.errorReporter, isExported || isGlobal, false, isAmbient);
      modType.symbol = typeSymbol
    }else {
      if(symbol && symbol.declAST && symbol.declAST.nodeType != TypeScript.NodeType.Module) {
        context.checker.errorReporter.simpleError(moduleDecl, "Conflicting symbol name for module '" + modName + "'")
      }
      typeSymbol = symbol;
      var publicEnclosedTypes = typeSymbol.type.getAllEnclosedTypes().publicMembers;
      var publicEnclosedTypesTable = publicEnclosedTypes == null ? new TypeScript.StringHashTable : publicEnclosedTypes;
      var enclosedTypes = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(publicEnclosedTypesTable, new TypeScript.StringHashTable));
      var publicEnclosedAmbientTypes = typeSymbol.type.getAllAmbientEnclosedTypes().publicMembers;
      var publicAmbientEnclosedTypesTable = publicEnclosedAmbientTypes == null ? new TypeScript.StringHashTable : publicEnclosedAmbientTypes;
      var ambientEnclosedTypes = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(publicAmbientEnclosedTypesTable, new TypeScript.StringHashTable));
      var publicMembers = typeSymbol.type.members.publicMembers;
      var publicMembersTable = publicMembers == null ? new TypeScript.StringHashTable : publicMembers;
      var members = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(publicMembersTable, new TypeScript.StringHashTable));
      var publicAmbientMembers = typeSymbol.type.ambientMembers.publicMembers;
      var publicAmbientMembersTable = publicAmbientMembers == null ? new TypeScript.StringHashTable : publicAmbientMembers;
      var ambientMembers = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(publicAmbientMembersTable, new TypeScript.StringHashTable));
      modType = new TypeScript.ModuleType(enclosedTypes, ambientEnclosedTypes);
      if(isEnum) {
        modType.typeFlags |= TypeScript.TypeFlags.IsEnum
      }
      modType.members = members;
      modType.ambientMembers = ambientMembers;
      modType.setHasImplementation();
      modType.symbol = typeSymbol;
      typeSymbol.addLocation(moduleDecl.minChar);
      typeSymbol.expansions.push(modType)
    }
    if(context.scopeChain.moduleDecl) {
      context.scopeChain.moduleDecl.recordNonInterface()
    }
    if(isExported) {
      typeSymbol.flags |= TypeScript.SymbolFlags.Exported
    }
    if(context.scopeChain.moduleDecl || context.scopeChain.container == context.checker.gloMod) {
      typeSymbol.flags |= TypeScript.SymbolFlags.ModuleMember
    }
    moduleDecl.mod = modType;
    TypeScript.pushTypeCollectionScope(typeSymbol, modType.members, modType.ambientMembers, modType.enclosedTypes, modType.ambientEnclosedTypes, context, null, null, moduleDecl);
    return true
  }
  TypeScript.preCollectModuleTypes = preCollectModuleTypes;
  function preCollectClassTypes(ast, parent, context) {
    var scopeChain = context.scopeChain;
    var classDecl = ast;
    var classType;
    var instanceType;
    var typeSymbol = null;
    var className = classDecl.name.text;
    var alreadyInScope = false;
    var isAmbient = TypeScript.hasFlag(classDecl.varFlags, TypeScript.VarFlags.Ambient);
    var isExported = TypeScript.hasFlag(classDecl.varFlags, TypeScript.VarFlags.Exported);
    var isGlobal = context.scopeChain.container == context.checker.gloMod;
    var containerMod = scopeChain.container;
    var foundValSymbol = false;
    typeSymbol = scopeChain.scope.findLocal(className, false, true);
    if(!typeSymbol) {
      var valTypeSymbol = scopeChain.scope.findLocal(className, false, false);
      if(valTypeSymbol && valTypeSymbol.isType() && valTypeSymbol.declAST && valTypeSymbol.declAST.nodeType == TypeScript.NodeType.FuncDecl && valTypeSymbol.declAST.isSignature()) {
        typeSymbol = valTypeSymbol;
        foundValSymbol = true;
        if(isExported) {
          typeSymbol.flags |= TypeScript.SymbolFlags.Exported
        }
        if(isAmbient) {
          typeSymbol.flags |= TypeScript.SymbolFlags.Ambient
        }
        context.scopeChain.scope.enter(context.scopeChain.container, ast, typeSymbol, context.checker.errorReporter, isExported || isGlobal, true, isAmbient)
      }
    }
    if(typeSymbol && !foundValSymbol && typeSymbol.declAST != classDecl && !typeSymbol.declAST.isOverload) {
      typeSymbol = null
    }
    if(typeSymbol == null) {
      var valueSymbol = scopeChain.scope.findLocal(className, false, false);
      classType = new TypeScript.Type;
      classType.setHasImplementation();
      instanceType = new TypeScript.Type;
      instanceType.setHasImplementation();
      classType.instanceType = instanceType;
      classType.members = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
      classType.ambientMembers = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
      addPrototypeField(classType, classDecl, context);
      instanceType.members = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
      instanceType.ambientMembers = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
      typeSymbol = new TypeScript.TypeSymbol(className, classDecl.minChar, context.checker.locationInfo.unitIndex, classType);
      typeSymbol.declAST = classDecl;
      typeSymbol.instanceType = instanceType;
      classType.symbol = typeSymbol;
      instanceType.symbol = typeSymbol;
      if(context.scopeChain.moduleDecl) {
        context.scopeChain.moduleDecl.recordNonInterface();
        typeSymbol.declModule = context.scopeChain.moduleDecl;
        typeSymbol.flags |= TypeScript.SymbolFlags.ModuleMember
      }
      if(isExported) {
        typeSymbol.flags |= TypeScript.SymbolFlags.Exported
      }
      if(isAmbient) {
        typeSymbol.flags |= TypeScript.SymbolFlags.Ambient
      }
      ast.type = classType;
      context.scopeChain.scope.enter(context.scopeChain.container, ast, typeSymbol, context.checker.errorReporter, isExported || isGlobal, true, isAmbient);
      if(valueSymbol == null) {
        context.scopeChain.scope.enter(context.scopeChain.container, ast, typeSymbol, context.checker.errorReporter, isExported || isGlobal, false, isAmbient)
      }
    }else {
      classType = typeSymbol.type;
      if(classType.instanceType == null) {
        classType.instanceType = new TypeScript.Type;
        classType.instanceType.setHasImplementation();
        classType.instanceType.members = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
        classType.instanceType.symbol = classType.symbol;
        classType.members = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
        classType.ambientMembers = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable))
      }
      instanceType = classType.instanceType;
      ast.type = classType
    }
    if(!classDecl.constructorDecl) {
      if(typeSymbol && typeSymbol.declAST && typeSymbol.declAST.type && typeSymbol.declAST.type.call && !typeSymbol.declAST.isOverload) {
        context.checker.errorReporter.duplicateIdentifier(typeSymbol.declAST, typeSymbol.name)
      }
      createNewConstructGroupForType(classDecl.type)
    }
    classType.typeFlags |= TypeScript.TypeFlags.IsClass;
    instanceType.typeFlags |= TypeScript.TypeFlags.IsClass;
    getBases(instanceType, classDecl);
    TypeScript.pushTypeCollectionScope(typeSymbol, instanceType.members, instanceType.ambientMembers, null, null, context, instanceType, classType, null);
    return true
  }
  TypeScript.preCollectClassTypes = preCollectClassTypes;
  function preCollectInterfaceTypes(ast, parent, context) {
    var scopeChain = context.scopeChain;
    var interfaceDecl = ast;
    var interfaceSymbol = null;
    var interfaceType = null;
    var isExported = TypeScript.hasFlag(interfaceDecl.varFlags, TypeScript.VarFlags.Exported);
    var isGlobal = context.scopeChain.container == context.checker.gloMod;
    var alreadyInScope = true;
    alreadyInScope = false;
    var interfaceName = interfaceDecl.name.text;
    interfaceSymbol = scopeChain.scope.findLocal(interfaceName, false, true);
    if(interfaceSymbol == null) {
      interfaceType = new TypeScript.Type;
      interfaceSymbol = new TypeScript.TypeSymbol(interfaceName, ast.minChar, context.checker.locationInfo.unitIndex, interfaceType);
      interfaceType.symbol = interfaceSymbol;
      interfaceType.members = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
      interfaceType.ambientMembers = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
      interfaceSymbol.declAST = interfaceDecl;
      interfaceSymbol.declModule = context.scopeChain.moduleDecl
    }else {
      alreadyInScope = true;
      interfaceType = interfaceSymbol.type
    }
    if(!interfaceType) {
      interfaceType = context.checker.anyType
    }
    ast.type = interfaceType;
    getBases(interfaceType, interfaceDecl);
    if(isExported) {
      interfaceSymbol.flags |= TypeScript.SymbolFlags.Exported
    }
    if(context.scopeChain.moduleDecl) {
      interfaceSymbol.flags |= TypeScript.SymbolFlags.ModuleMember
    }
    if(!alreadyInScope) {
      context.scopeChain.scope.enter(context.scopeChain.container, ast, interfaceSymbol, context.checker.errorReporter, isGlobal || isExported, true, false)
    }
    TypeScript.pushTypeCollectionScope(interfaceSymbol, interfaceType.members, interfaceType.ambientMembers, null, null, context, interfaceType, null, null);
    return true
  }
  TypeScript.preCollectInterfaceTypes = preCollectInterfaceTypes;
  function preCollectArgDeclTypes(ast, parent, context) {
    var scopeChain = context.scopeChain;
    var argDecl = ast;
    if(TypeScript.hasFlag(argDecl.varFlags, TypeScript.VarFlags.Public | TypeScript.VarFlags.Private)) {
      var field = new TypeScript.ValueLocation;
      var isPrivate = TypeScript.hasFlag(argDecl.varFlags, TypeScript.VarFlags.Private);
      var fieldSymbol = new TypeScript.FieldSymbol(argDecl.id.text, argDecl.minChar, context.checker.locationInfo.unitIndex, !TypeScript.hasFlag(argDecl.varFlags, TypeScript.VarFlags.Readonly), field);
      fieldSymbol.transferVarFlags(argDecl.varFlags);
      field.symbol = fieldSymbol;
      fieldSymbol.declAST = ast;
      argDecl.parameterPropertySym = fieldSymbol;
      context.scopeChain.scope.enter(context.scopeChain.container, ast, fieldSymbol, context.checker.errorReporter, !isPrivate, false, false);
      field.typeLink = TypeScript.getTypeLink(argDecl.typeExpr, context.checker, argDecl.init == null);
      argDecl.sym = fieldSymbol
    }
    return false
  }
  TypeScript.preCollectArgDeclTypes = preCollectArgDeclTypes;
  function preCollectVarDeclTypes(ast, parent, context) {
    var scopeChain = context.scopeChain;
    var varDecl = ast;
    var isAmbient = TypeScript.hasFlag(varDecl.varFlags, TypeScript.VarFlags.Ambient);
    var isExported = TypeScript.hasFlag(varDecl.varFlags, TypeScript.VarFlags.Exported);
    var isGlobal = context.scopeChain.container == context.checker.gloMod;
    var isProperty = TypeScript.hasFlag(varDecl.varFlags, TypeScript.VarFlags.Property);
    var isStatic = TypeScript.hasFlag(varDecl.varFlags, TypeScript.VarFlags.Static);
    var isPrivate = TypeScript.hasFlag(varDecl.varFlags, TypeScript.VarFlags.Private);
    var isOptional = TypeScript.hasFlag(varDecl.id.flags, TypeScript.ASTFlags.OptionalName);
    if(context.scopeChain.moduleDecl) {
      context.scopeChain.moduleDecl.recordNonInterface()
    }
    if(isProperty || isExported || context.scopeChain.container == context.checker.gloMod || context.scopeChain.moduleDecl) {
      if(isAmbient) {
        var existingSym = scopeChain.scope.findLocal(varDecl.id.text, false, false);
        if(existingSym) {
          varDecl.sym = existingSym;
          return false
        }
      }
      if(varDecl.id == null) {
        context.checker.errorReporter.simpleError(varDecl, "Expected variable identifier at this location");
        return false
      }
      var field = new TypeScript.ValueLocation;
      var fieldSymbol = new TypeScript.FieldSymbol(varDecl.id.text, varDecl.minChar, context.checker.locationInfo.unitIndex, (varDecl.varFlags & TypeScript.VarFlags.Readonly) == TypeScript.VarFlags.None, field);
      fieldSymbol.transferVarFlags(varDecl.varFlags);
      if(isOptional) {
        fieldSymbol.flags |= TypeScript.SymbolFlags.Optional
      }
      field.symbol = fieldSymbol;
      fieldSymbol.declAST = ast;
      if(context.scopeChain.moduleDecl || context.scopeChain.container == context.checker.gloMod) {
        fieldSymbol.flags |= TypeScript.SymbolFlags.ModuleMember;
        fieldSymbol.declModule = context.scopeChain.moduleDecl
      }
      if(TypeScript.hasFlag(varDecl.varFlags, TypeScript.VarFlags.Property) && isStatic && context.scopeChain.classType) {
        if(!context.scopeChain.classType.members.publicMembers.add(varDecl.id.text, fieldSymbol)) {
          context.checker.errorReporter.duplicateIdentifier(ast, fieldSymbol.name)
        }
        fieldSymbol.container = context.scopeChain.classType.symbol
      }else {
        context.scopeChain.scope.enter(context.scopeChain.container, ast, fieldSymbol, context.checker.errorReporter, !isPrivate && (isProperty || isExported || isGlobal || isStatic), false, isAmbient)
      }
      if(TypeScript.hasFlag(varDecl.varFlags, TypeScript.VarFlags.Exported)) {
        fieldSymbol.flags |= TypeScript.SymbolFlags.Exported
      }
      field.typeLink = TypeScript.getTypeLink(varDecl.typeExpr, context.checker, varDecl.init == null);
      varDecl.sym = fieldSymbol
    }
    return false
  }
  TypeScript.preCollectVarDeclTypes = preCollectVarDeclTypes;
  function preCollectFuncDeclTypes(ast, parent, context) {
    var scopeChain = context.scopeChain;
    if(context.scopeChain.moduleDecl) {
      context.scopeChain.moduleDecl.recordNonInterface()
    }
    var funcDecl = ast;
    var fgSym = null;
    var nameText = funcDecl.getNameText();
    var isExported = TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.Exported | TypeScript.FncFlags.ClassPropertyMethodExported);
    var isStatic = TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.Static);
    var isPrivate = TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.Private);
    var isConstructor = funcDecl.isConstructMember() || funcDecl.isConstructor;
    var containerSym = (funcDecl.isMethod() && isStatic || funcDecl.isAccessor()) && context.scopeChain.classType ? context.scopeChain.classType.symbol : context.scopeChain.container;
    var containerScope = context.scopeChain.scope;
    var isGlobal = containerSym == context.checker.gloMod;
    var isOptional = funcDecl.name && TypeScript.hasFlag(funcDecl.name.flags, TypeScript.ASTFlags.OptionalName);
    var go = false;
    var foundSymbol = false;
    if(isConstructor && TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.ClassMethod)) {
      containerSym = containerSym.container;
      containerScope = scopeChain.previous.scope
    }
    funcDecl.unitIndex = context.checker.locationInfo.unitIndex;
    if(!funcDecl.isConstructor && containerSym && containerSym.declAST && containerSym.declAST.nodeType == TypeScript.NodeType.FuncDecl && containerSym.declAST.isConstructor && !funcDecl.isMethod()) {
      return go
    }
    if(TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.Signature)) {
      var instType = context.scopeChain.thisType;
      if(nameText && nameText != "__missing") {
        if(isStatic) {
          fgSym = containerSym.type.members.allMembers.lookup(nameText)
        }else {
          fgSym = containerScope.findLocal(nameText, false, false);
          if(fgSym == null) {
            fgSym = containerScope.findLocal(nameText, false, true)
          }
        }
        if(fgSym) {
          foundSymbol = true;
          if(!funcDecl.isSignature() && TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.Ambient) != TypeScript.hasFlag(fgSym.flags, TypeScript.SymbolFlags.Ambient)) {
            fgSym = null
          }
        }
      }
      if(fgSym == null) {
        if(!funcDecl.isSpecialFn()) {
          fgSym = context.checker.createFunctionSignature(funcDecl, containerSym, containerScope, null, !foundSymbol).declAST.type.symbol
        }else {
          fgSym = context.checker.createFunctionSignature(funcDecl, containerSym, containerScope, containerSym, false).declAST.type.symbol
        }
        if(fgSym.declAST == null || !funcDecl.isSpecialFn()) {
          fgSym.declAST = ast
        }
      }else {
        if(fgSym.kind() == TypeScript.SymbolKind.Type) {
          fgSym = context.checker.createFunctionSignature(funcDecl, containerSym, containerScope, fgSym, false).declAST.type.symbol
        }else {
          context.checker.errorReporter.simpleError(funcDecl, "Function or method '" + funcDecl.name.text + "' already declared as a property")
        }
      }
      if(funcDecl.isSpecialFn() && !isStatic) {
        funcDecl.type = instType ? instType : fgSym.type
      }else {
        funcDecl.type = fgSym.type
      }
    }else {
      if(nameText) {
        if(isStatic) {
          fgSym = containerSym.type.members.allMembers.lookup(nameText)
        }else {
          if(funcDecl.isConstructor && context.scopeChain.previous) {
            fgSym = context.scopeChain.previous.scope.findLocal(nameText, false, false)
          }
          if(fgSym == null) {
            fgSym = containerScope.findLocal(nameText, false, false)
          }
        }
        if(fgSym) {
          foundSymbol = true;
          if(!isConstructor && fgSym.declAST.nodeType == TypeScript.NodeType.FuncDecl && !fgSym.declAST.isAccessor() && !fgSym.declAST.isSignature()) {
            fgSym = null;
            foundSymbol = false
          }
        }
      }
      if(fgSym && !fgSym.isAccessor() && fgSym.type && fgSym.type.construct && fgSym.type.construct.signatures != [] && (fgSym.type.construct.signatures[0].declAST == null || !TypeScript.hasFlag(fgSym.type.construct.signatures[0].declAST.fncFlags, TypeScript.FncFlags.Ambient)) && !funcDecl.isConstructor) {
        context.checker.errorReporter.simpleError(funcDecl, "Functions may not have class overloads")
      }
      if(fgSym && !(fgSym.kind() == TypeScript.SymbolKind.Type) && funcDecl.isMethod() && !funcDecl.isAccessor() && !funcDecl.isConstructor) {
        context.checker.errorReporter.simpleError(funcDecl, "Function or method '" + funcDecl.name.text + "' already declared as a property");
        fgSym.type = context.checker.anyType
      }
      var sig = context.checker.createFunctionSignature(funcDecl, containerSym, containerScope, fgSym, !foundSymbol);
      if((!fgSym || fgSym.declAST.nodeType != TypeScript.NodeType.FuncDecl) && funcDecl.isAccessor() || fgSym && fgSym.isAccessor()) {
        funcDecl.accessorSymbol = context.checker.createAccessorSymbol(funcDecl, fgSym, containerSym.type, funcDecl.isMethod() && isStatic, true, containerScope, containerSym)
      }
      funcDecl.type.symbol.declAST = ast;
      if(funcDecl.isConstructor) {
        go = true
      }
    }
    if(isExported) {
      if(funcDecl.type.call) {
        funcDecl.type.symbol.flags |= TypeScript.SymbolFlags.Exported
      }
      if(fgSym && !fgSym.isAccessor() && fgSym.type.call) {
        fgSym.flags |= TypeScript.SymbolFlags.Exported
      }
    }
    if(context.scopeChain.moduleDecl && !funcDecl.isSpecialFn()) {
      funcDecl.type.symbol.flags |= TypeScript.SymbolFlags.ModuleMember;
      funcDecl.type.symbol.declModule = context.scopeChain.moduleDecl
    }
    if(fgSym && isOptional) {
      fgSym.flags |= TypeScript.SymbolFlags.Optional
    }
    return go
  }
  TypeScript.preCollectFuncDeclTypes = preCollectFuncDeclTypes;
  function preCollectTypes(ast, parent, walker) {
    var context = walker.state;
    var go = false;
    var scopeChain = context.scopeChain;
    if(ast.nodeType == TypeScript.NodeType.Script) {
      var script = ast;
      context.script = script;
      go = true
    }else {
      if(ast.nodeType == TypeScript.NodeType.List) {
        go = true
      }else {
        if(ast.nodeType == TypeScript.NodeType.Import) {
          go = preCollectImportTypes(ast, parent, context)
        }else {
          if(ast.nodeType == TypeScript.NodeType.With) {
            go = false
          }else {
            if(ast.nodeType == TypeScript.NodeType.Module) {
              go = preCollectModuleTypes(ast, parent, context)
            }else {
              if(ast.nodeType == TypeScript.NodeType.Class) {
                go = preCollectClassTypes(ast, parent, context)
              }else {
                if(ast.nodeType == TypeScript.NodeType.Block) {
                  go = true
                }else {
                  if(ast.nodeType == TypeScript.NodeType.Interface) {
                    go = preCollectInterfaceTypes(ast, parent, context)
                  }else {
                    if(ast.nodeType == TypeScript.NodeType.ArgDecl) {
                      go = preCollectArgDeclTypes(ast, parent, context)
                    }else {
                      if(ast.nodeType == TypeScript.NodeType.VarDecl) {
                        go = preCollectVarDeclTypes(ast, parent, context)
                      }else {
                        if(ast.nodeType == TypeScript.NodeType.FuncDecl) {
                          go = preCollectFuncDeclTypes(ast, parent, context)
                        }else {
                          if(ast.isStatementOrExpression() && context.scopeChain.moduleDecl) {
                            context.scopeChain.moduleDecl.recordNonInterface()
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    walker.options.goChildren = go;
    return ast
  }
  TypeScript.preCollectTypes = preCollectTypes;
  function postCollectTypes(ast, parent, walker) {
    var context = walker.state;
    if(ast.nodeType == TypeScript.NodeType.Module) {
      TypeScript.popTypeCollectionScope(context)
    }else {
      if(ast.nodeType == TypeScript.NodeType.Class) {
        TypeScript.popTypeCollectionScope(context)
      }else {
        if(ast.nodeType == TypeScript.NodeType.Interface) {
          TypeScript.popTypeCollectionScope(context)
        }
      }
    }
    return ast
  }
  TypeScript.postCollectTypes = postCollectTypes
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  var ScopeChain = function() {
    function ScopeChain(container, previous, scope) {
      this.container = container;
      this.previous = previous;
      this.scope = scope
    }
    return ScopeChain
  }();
  TypeScript.ScopeChain = ScopeChain;
  var BBUseDefInfo = function() {
    function BBUseDefInfo(bb) {
      this.bb = bb;
      this.defsBySymbol = new Array;
      this.useIndexBySymbol = new Array
    }
    BBUseDefInfo.prototype.updateTop = function() {
      var temp = new BitVector(this.top.bitCount);
      for(var i = 0, succLen = this.bb.successors.length;i < succLen;i++) {
        var succ = this.bb.successors[i];
        if(succ.useDef) {
          temp.union(succ.useDef.top)
        }
      }
      temp.difference(this.kill);
      temp.union(this.gen);
      var changed = temp.notEq(this.top);
      this.top = temp;
      return changed
    };
    BBUseDefInfo.prototype.initialize = function(useDefContext) {
      var _this = this;
      var defSym = function(sym, context) {
        if(context.isLocalSym(sym)) {
          var index = context.getSymbolIndex(sym);
          _this.useIndexBySymbol[index] = new Array;
          _this.defsBySymbol[index] = true
        }
      };
      var useSym = function(sym, context, ast) {
        if(context.isLocalSym(sym)) {
          var symIndex = context.getSymbolIndex(sym);
          if(_this.useIndexBySymbol[symIndex] == undefined) {
            _this.useIndexBySymbol[symIndex] = new Array
          }
          var symUses = _this.useIndexBySymbol[symIndex];
          var astIndex = context.getUseIndex(ast);
          context.addUse(symIndex, astIndex);
          symUses.push(astIndex)
        }
      };
      function initUseDefPre(cur, parent, walker) {
        var context = walker.state;
        if(cur == null) {
          cur = null
        }
        if(cur.nodeType == TypeScript.NodeType.VarDecl) {
          var varDecl = cur;
          if(varDecl.init || TypeScript.hasFlag(varDecl.varFlags, TypeScript.VarFlags.AutoInit)) {
            defSym(varDecl.sym, context)
          }
        }else {
          if(cur.nodeType == TypeScript.NodeType.Name) {
            if(parent) {
              if(parent.nodeType == TypeScript.NodeType.Asg) {
                var asg = parent;
                if(asg.operand1 == cur) {
                  return cur
                }
              }else {
                if(parent.nodeType == TypeScript.NodeType.VarDecl) {
                  var parentDecl = parent;
                  if(parentDecl.id == cur) {
                    return cur
                  }
                }
              }
            }
            var id = cur;
            useSym(id.sym, context, cur)
          }else {
            if(cur.nodeType >= TypeScript.NodeType.Asg && cur.nodeType <= TypeScript.NodeType.LastAsg) {
              var asg = cur;
              if(asg.operand1 && asg.operand1.nodeType == TypeScript.NodeType.Name) {
                var id = asg.operand1;
                defSym(id.sym, context)
              }
            }else {
              if(cur.nodeType == TypeScript.NodeType.FuncDecl) {
                walker.options.goChildren = false
              }
            }
          }
        }
        return cur
      }
      var options = new TypeScript.AstWalkOptions;
      options.reverseSiblings = true;
      TypeScript.getAstWalkerFactory().walk(this.bb.content, initUseDefPre, null, options, useDefContext)
    };
    BBUseDefInfo.prototype.initializeGen = function(useDefContext) {
      var symbolLen = this.useIndexBySymbol.length;
      var bitCount = useDefContext.uses.length;
      this.gen = new BitVector(bitCount);
      for(var s = 0;s < symbolLen;s++) {
        var symUses = this.useIndexBySymbol[s];
        if(symUses != undefined && symUses.length > 0) {
          for(var u = 0, uLen = symUses.length;u < uLen;u++) {
            this.gen.set(symUses[u], true)
          }
        }
      }
      this.top = this.gen
    };
    BBUseDefInfo.prototype.initializeKill = function(useDefContext) {
      this.kill = new BitVector(this.gen.bitCount);
      for(var s = 0, symbolLen = this.defsBySymbol.length;s < symbolLen;s++) {
        if(this.defsBySymbol[s]) {
          var globalSymUses = useDefContext.useIndexBySymbol[s];
          if(globalSymUses) {
            for(var u = 0, useLen = globalSymUses.length;u < useLen;u++) {
              this.kill.set(globalSymUses[u], true)
            }
          }
        }
      }
    };
    return BBUseDefInfo
  }();
  TypeScript.BBUseDefInfo = BBUseDefInfo;
  var UseDefContext = function() {
    function UseDefContext() {
      this.useIndexBySymbol = new Array;
      this.uses = new Array;
      this.symbols = new Array;
      this.symbolMap = new TypeScript.StringHashTable;
      this.symbolCount = 0
    }
    UseDefContext.prototype.getSymbolIndex = function(sym) {
      var name = sym.name;
      var index = this.symbolMap.lookup(name);
      if(index == null) {
        index = this.symbolCount++;
        this.symbols[index] = sym;
        this.symbolMap.add(name, index)
      }
      return index
    };
    UseDefContext.prototype.addUse = function(symIndex, astIndex) {
      var useBySym = this.useIndexBySymbol[symIndex];
      if(useBySym == undefined) {
        useBySym = new Array;
        this.useIndexBySymbol[symIndex] = useBySym
      }
      useBySym[useBySym.length] = astIndex
    };
    UseDefContext.prototype.getUseIndex = function(ast) {
      this.uses[this.uses.length] = ast;
      return this.uses.length - 1
    };
    UseDefContext.prototype.isLocalSym = function(sym) {
      return sym && sym.container == this.func && sym.kind() == TypeScript.SymbolKind.Variable
    };
    UseDefContext.prototype.killSymbol = function(sym, bbUses) {
      var index = this.symbolMap.lookup(sym.name);
      var usesOfSym = this.useIndexBySymbol[index];
      for(var k = 0, len = usesOfSym.length;k < len;k++) {
        bbUses.set(usesOfSym[k], true)
      }
    };
    return UseDefContext
  }();
  TypeScript.UseDefContext = UseDefContext;
  var BitVector = function() {
    function BitVector(bitCount) {
      this.bitCount = bitCount;
      this.firstBits = 0;
      this.restOfBits = null;
      if(this.bitCount > BitVector.packBits) {
        this.restOfBits = new Array;
        var len = Math.floor(this.bitCount / BitVector.packBits);
        for(var i = 0;i < len;i++) {
          this.restOfBits[i] = 0
        }
      }
    }
    BitVector.packBits = 30;
    BitVector.prototype.set = function(bitIndex, value) {
      if(bitIndex < BitVector.packBits) {
        if(value) {
          this.firstBits |= 1 << bitIndex
        }else {
          this.firstBits &= ~(1 << bitIndex)
        }
      }else {
        var offset = Math.floor(bitIndex / BitVector.packBits) - 1;
        var localIndex = bitIndex % BitVector.packBits;
        if(value) {
          this.restOfBits[offset] |= 1 << localIndex
        }else {
          this.restOfBits[offset] &= ~(1 << localIndex)
        }
      }
    };
    BitVector.prototype.map = function(fn) {
      var k;
      for(k = 0;k < BitVector.packBits;k++) {
        if(k == this.bitCount) {
          return
        }
        if((1 << k & this.firstBits) != 0) {
          fn(k)
        }
      }
      if(this.restOfBits) {
        var len;
        var cumu = BitVector.packBits;
        for(k = 0, len = this.restOfBits.length;k < len;k++) {
          var myBits = this.restOfBits[k];
          for(var j = 0;j < BitVector.packBits;j++) {
            if((1 << j & myBits) != 0) {
              fn(cumu)
            }
            cumu++;
            if(cumu == this.bitCount) {
              return
            }
          }
        }
      }
    };
    BitVector.prototype.union = function(b) {
      this.firstBits |= b.firstBits;
      if(this.restOfBits) {
        for(var k = 0, len = this.restOfBits.length;k < len;k++) {
          var myBits = this.restOfBits[k];
          var bBits = b.restOfBits[k];
          this.restOfBits[k] = myBits | bBits
        }
      }
    };
    BitVector.prototype.intersection = function(b) {
      this.firstBits &= b.firstBits;
      if(this.restOfBits) {
        for(var k = 0, len = this.restOfBits.length;k < len;k++) {
          var myBits = this.restOfBits[k];
          var bBits = b.restOfBits[k];
          this.restOfBits[k] = myBits & bBits
        }
      }
    };
    BitVector.prototype.notEq = function(b) {
      if(this.firstBits != b.firstBits) {
        return true
      }
      if(this.restOfBits) {
        for(var k = 0, len = this.restOfBits.length;k < len;k++) {
          var myBits = this.restOfBits[k];
          var bBits = b.restOfBits[k];
          if(myBits != bBits) {
            return true
          }
        }
      }
      return false
    };
    BitVector.prototype.difference = function(b) {
      var oldFirstBits = this.firstBits;
      this.firstBits &= ~b.firstBits;
      if(this.restOfBits) {
        for(var k = 0, len = this.restOfBits.length;k < len;k++) {
          var myBits = this.restOfBits[k];
          var bBits = b.restOfBits[k];
          this.restOfBits[k] &= ~bBits
        }
      }
    };
    return BitVector
  }();
  TypeScript.BitVector = BitVector;
  var BasicBlock = function() {
    function BasicBlock() {
      this.predecessors = new Array;
      this.index = -1;
      this.markValue = 0;
      this.successors = new Array;
      this.useDef = null;
      this.content = new TypeScript.ASTList
    }
    BasicBlock.prototype.marked = function(markBase) {
      return this.markValue > markBase
    };
    BasicBlock.prototype.mark = function() {
      this.markValue++
    };
    BasicBlock.prototype.addSuccessor = function(successor) {
      this.successors[this.successors.length] = successor;
      successor.predecessors[successor.predecessors.length] = this
    };
    return BasicBlock
  }();
  TypeScript.BasicBlock = BasicBlock;
  var ControlFlowContext = function() {
    function ControlFlowContext(current, exit) {
      this.current = current;
      this.exit = exit;
      this.entry = null;
      this.unreachable = null;
      this.noContinuation = false;
      this.statementStack = new Array;
      this.currentSwitch = new Array;
      this.markBase = 0;
      this.linearBBs = new Array;
      this.entry = this.current
    }
    ControlFlowContext.prototype.walk = function(ast, parent) {
      return this.walker.walk(ast, parent)
    };
    ControlFlowContext.prototype.pushSwitch = function(bb) {
      this.currentSwitch.push(bb)
    };
    ControlFlowContext.prototype.popSwitch = function() {
      return this.currentSwitch.pop()
    };
    ControlFlowContext.prototype.reportUnreachable = function(er) {
      if(this.unreachable && this.unreachable.length > 0) {
        var len = this.unreachable.length;
        for(var i = 0;i < len;i++) {
          var unreachableAST = this.unreachable[i];
          if(unreachableAST.nodeType != TypeScript.NodeType.EndCode) {
            er.simpleError(unreachableAST, "unreachable code")
          }
        }
      }
    };
    ControlFlowContext.prototype.printAST = function(ast, outfile) {
      var printContext = new TypeScript.PrintContext(outfile, null);
      printContext.increaseIndent();
      TypeScript.getAstWalkerFactory().walk(ast, TypeScript.prePrintAST, TypeScript.postPrintAST, null, printContext);
      printContext.decreaseIndent()
    };
    ControlFlowContext.prototype.printBlockContent = function(bb, outfile) {
      var content = bb.content;
      for(var i = 0, len = content.members.length;i < len;i++) {
        var ast = content.members[i];
        this.printAST(ast, outfile)
      }
    };
    ControlFlowContext.prototype.bfs = function(nodeFunc, edgeFunc, preEdges, postEdges) {
      var markValue = this.markBase++;
      var q = new Array;
      q[q.length] = this.entry;
      while(q.length > 0) {
        var bb = q.pop();
        if(!bb.marked(markValue)) {
          bb.mark();
          if(nodeFunc) {
            nodeFunc(bb)
          }
          var succLen = bb.successors.length;
          if(succLen > 0) {
            if(preEdges) {
              preEdges()
            }
            for(var j = succLen - 1;j >= 0;j--) {
              var successor = bb.successors[j];
              if(!successor.marked(this.markBase)) {
                if(edgeFunc) {
                  edgeFunc(bb, successor)
                }
                q[q.length] = successor
              }
            }
            if(postEdges) {
              postEdges()
            }
          }
        }
      }
    };
    ControlFlowContext.prototype.useDef = function(er, funcSym) {
      var _this = this;
      var useDefContext = new UseDefContext;
      useDefContext.func = funcSym;
      var useDefInit = function(bb) {
        bb.useDef = new BBUseDefInfo(bb);
        bb.useDef.initialize(useDefContext);
        _this.linearBBs[_this.linearBBs.length] = bb
      };
      this.bfs(useDefInit, null, null, null);
      var i;
      var bbLen;
      for(i = 0, bbLen = this.linearBBs.length;i < bbLen;i++) {
        this.linearBBs[i].useDef.initializeGen(useDefContext);
        this.linearBBs[i].useDef.initializeKill(useDefContext)
      }
      var changed = true;
      while(changed) {
        changed = false;
        for(i = 0;i < bbLen;i++) {
          changed = this.linearBBs[i].useDef.updateTop() || changed
        }
      }
      var top = this.entry.useDef.top;
      top.map(function(index) {
        var ast = useDefContext.uses[index];
        er.simpleError(ast, "use of variable '" + ast.text + "' that is not definitely assigned")
      })
    };
    ControlFlowContext.prototype.print = function(outfile) {
      var _this = this;
      var index = 0;
      var node = function(bb) {
        if(bb.index < 0) {
          bb.index = index++
        }
        if(bb == _this.exit) {
          outfile.WriteLine("Exit block with index " + bb.index)
        }else {
          outfile.WriteLine("Basic block with index " + bb.index);
          _this.printBlockContent(bb, outfile)
        }
      };
      function preEdges() {
        outfile.Write("  Branches to ")
      }
      function postEdges() {
        outfile.WriteLine("")
      }
      function edge(node1, node2) {
        if(node2.index < 0) {
          node2.index = index++
        }
        outfile.Write(node2.index + " ")
      }
      this.bfs(node, edge, preEdges, postEdges);
      if(this.unreachable != null) {
        for(var i = 0, len = this.unreachable.length;i < len;i++) {
          outfile.WriteLine("Unreachable basic block ...");
          this.printAST(this.unreachable[i], outfile)
        }
      }
    };
    ControlFlowContext.prototype.pushStatement = function(stmt, continueBB, breakBB) {
      this.statementStack.push({stmt:stmt, continueBB:continueBB, breakBB:breakBB})
    };
    ControlFlowContext.prototype.popStatement = function() {
      return this.statementStack.pop()
    };
    ControlFlowContext.prototype.returnStmt = function() {
      this.current.addSuccessor(this.exit);
      this.setUnreachable()
    };
    ControlFlowContext.prototype.setUnreachable = function() {
      this.current = null;
      this.noContinuation = true
    };
    ControlFlowContext.prototype.addUnreachable = function(ast) {
      if(this.unreachable === null) {
        this.unreachable = new Array
      }
      this.unreachable[this.unreachable.length] = ast
    };
    ControlFlowContext.prototype.unconditionalBranch = function(target, isContinue) {
      var targetBB = null;
      for(var i = 0, len = this.statementStack.length;i < len;i++) {
        var targetInfo = this.statementStack[i];
        if(targetInfo.stmt == target) {
          if(isContinue) {
            targetBB = targetInfo.continueBB
          }else {
            targetBB = targetInfo.breakBB
          }
          break
        }
      }
      if(targetBB) {
        this.current.addSuccessor(targetBB)
      }
      this.setUnreachable()
    };
    ControlFlowContext.prototype.addContent = function(ast) {
      if(this.current) {
        this.current.content.append(ast)
      }
    };
    return ControlFlowContext
  }();
  TypeScript.ControlFlowContext = ControlFlowContext;
  var ResolutionDataCache = function() {
    function ResolutionDataCache() {
      this.cacheSize = 16;
      this.rdCache = [];
      this.nextUp = 0;
      for(var i = 0;i < this.cacheSize;i++) {
        this.rdCache[i] = {actuals:new Array, exactCandidates:new Array, conversionCandidates:new Array, id:i}
      }
    }
    ResolutionDataCache.prototype.getResolutionData = function() {
      var rd = null;
      if(this.nextUp < this.cacheSize) {
        rd = this.rdCache[this.nextUp]
      }
      if(rd == null) {
        this.cacheSize++;
        rd = {actuals:new Array, exactCandidates:new Array, conversionCandidates:new Array, id:this.cacheSize};
        this.rdCache[this.cacheSize] = rd
      }
      this.nextUp++;
      return rd
    };
    ResolutionDataCache.prototype.returnResolutionData = function(rd) {
      rd.actuals.length = 0;
      rd.exactCandidates.length = 0;
      rd.conversionCandidates.length = 0;
      this.nextUp = rd.id
    };
    return ResolutionDataCache
  }();
  TypeScript.ResolutionDataCache = ResolutionDataCache;
  var TypeFlow = function() {
    function TypeFlow(logger, initScope, parser, checker) {
      this.logger = logger;
      this.initScope = initScope;
      this.parser = parser;
      this.checker = checker;
      this.thisFnc = null;
      this.thisClassNode = null;
      this.enclosingFncIsMethod = false;
      this.arrayInterfaceType = null;
      this.stringInterfaceType = null;
      this.objectInterfaceType = null;
      this.functionInterfaceType = null;
      this.numberInterfaceType = null;
      this.booleanInterfaceType = null;
      this.currentScript = null;
      this.inNewTargetTypeCheck = false;
      this.inImportTypeCheck = false;
      this.inTypeRefTypeCheck = false;
      this.inArrayElementTypeCheck = false;
      this.resolutionDataCache = new ResolutionDataCache;
      this.nestingLevel = 0;
      this.inBoundPropTypeCheck = false;
      this.inSuperCall = false;
      this.checker.typeFlow = this;
      this.scope = this.initScope;
      this.globalScope = this.initScope;
      this.doubleType = this.checker.numberType;
      this.booleanType = this.checker.booleanType;
      this.stringType = this.checker.stringType;
      this.anyType = this.checker.anyType;
      this.regexType = this.anyType;
      this.nullType = this.checker.nullType;
      this.voidType = this.checker.voidType;
      this.arrayAnyType = this.checker.makeArrayType(this.anyType)
    }
    TypeFlow.prototype.initLibs = function() {
      var arraySym = this.globalScope.find("Array", false, true);
      if(arraySym && arraySym.kind() == TypeScript.SymbolKind.Type) {
        this.arrayInterfaceType = arraySym.type
      }
      var stringSym = this.globalScope.find("String", false, true);
      if(stringSym && stringSym.kind() == TypeScript.SymbolKind.Type) {
        this.stringInterfaceType = stringSym.type
      }
      var objectSym = this.globalScope.find("Object", false, true);
      if(objectSym && objectSym.kind() == TypeScript.SymbolKind.Type) {
        this.objectInterfaceType = objectSym.type
      }
      var fnSym = this.globalScope.find("Function", false, true);
      if(fnSym && fnSym.kind() == TypeScript.SymbolKind.Type) {
        this.functionInterfaceType = fnSym.type
      }
      var numberSym = this.globalScope.find("Number", false, true);
      if(numberSym && numberSym.kind() == TypeScript.SymbolKind.Type) {
        this.numberInterfaceType = numberSym.type
      }
      var booleanSym = this.globalScope.find("Boolean", false, true);
      if(booleanSym && booleanSym.kind() == TypeScript.SymbolKind.Type) {
        this.booleanInterfaceType = booleanSym.type
      }
      var regexSym = this.globalScope.find("RegExp", false, true);
      if(regexSym && regexSym.kind() == TypeScript.SymbolKind.Type) {
        this.regexType = regexSym.type
      }
    };
    TypeFlow.prototype.cast = function(ast, type) {
      return this.castWithCoercion(ast, type, true, false)
    };
    TypeFlow.prototype.castWithCoercion = function(ast, type, applyCoercion, typeAssertion) {
      var comparisonInfo = new TypeScript.TypeComparisonInfo;
      if(this.checker.sourceIsAssignableToTarget(ast.type, type, comparisonInfo) || typeAssertion && this.checker.sourceIsAssignableToTarget(type, ast.type, comparisonInfo)) {
        if(applyCoercion) {
          if(type == null) {
            ast.type = this.anyType
          }else {
            if(type.isClass()) {
              ast.type = type.instanceType
            }else {
              ast.type = type
            }
          }
        }
        return ast
      }else {
        this.checker.errorReporter.incompatibleTypes(ast, ast.type, type, null, this.scope, comparisonInfo);
        return ast
      }
    };
    TypeFlow.prototype.inScopeTypeCheck = function(ast, enclosingScope) {
      var prevScope = this.scope;
      this.scope = enclosingScope;
      var svThisFnc = this.thisFnc;
      var svThisType = this.thisType;
      var svThisClassNode = this.thisClassNode;
      var svCurrentModDecl = this.checker.currentModDecl;
      var prevMethodStatus = this.enclosingFncIsMethod;
      var container = this.scope.container;
      var fnc = null;
      while(container) {
        if(container.kind() == TypeScript.SymbolKind.Type) {
          var typeSym = container;
          var type = typeSym.type;
          if(type.call) {
            if(fnc == null) {
              this.enclosingFncIsMethod = typeSym.isMethod;
              fnc = container.declAST
            }
          }
          if(type.isClass()) {
            this.thisType = type.instanceType;
            if(typeSym.declAST && typeSym.declAST.nodeType == TypeScript.NodeType.Class) {
              this.thisClassNode = typeSym.declAST
            }
            break
          }
          if(type.isModuleType()) {
            this.checker.currentModDecl = typeSym.declAST;
            break
          }
        }
        container = container.container
      }
      this.thisFnc = fnc;
      var updated = this.typeCheck(ast);
      this.thisFnc = svThisFnc;
      this.thisType = svThisType;
      this.thisClassNode = svThisClassNode;
      this.checker.currentModDecl = svCurrentModDecl;
      this.enclosingFncIsMethod = prevMethodStatus;
      this.scope = prevScope;
      return updated
    };
    TypeFlow.prototype.typeCheck = function(ast) {
      if(ast) {
        return ast.typeCheck(this)
      }else {
        return null
      }
    };
    TypeFlow.prototype.inScopeTypeCheckDecl = function(ast) {
      if(ast.nodeType == TypeScript.NodeType.VarDecl || ast.nodeType == TypeScript.NodeType.ArgDecl) {
        this.inScopeTypeCheckBoundDecl(ast)
      }else {
        if(ast.nodeType == TypeScript.NodeType.FuncDecl) {
          var funcDecl = ast;
          if(funcDecl.isAccessor()) {
            this.typeCheckFunction(funcDecl)
          }
        }
      }
    };
    TypeFlow.prototype.inScopeTypeCheckBoundDecl = function(varDecl) {
      var sym = varDecl.sym;
      var svThisFnc = this.thisFnc;
      var svThisType = this.thisType;
      var prevMethodStatus = this.enclosingFncIsMethod;
      var prevLocationInfo = this.checker.locationInfo;
      if(sym && sym.container) {
        var instanceScope = TypeScript.hasFlag(varDecl.varFlags, TypeScript.VarFlags.ClassConstructorProperty) ? sym.container.getType().constructorScope : sym.container.instanceScope();
        if(TypeScript.hasFlag(varDecl.varFlags, TypeScript.VarFlags.Property) && sym.container.declAST.nodeType == TypeScript.NodeType.FuncDecl) {
          this.thisFnc = sym.container.declAST
        }
        if(instanceScope) {
          var prevScope = this.scope;
          this.scope = instanceScope;
          var container = sym.container;
          if(this.checker.units && sym.unitIndex >= 0 && sym.unitIndex < this.checker.units.length) {
            this.checker.locationInfo = this.checker.units[sym.unitIndex]
          }else {
            this.checker.locationInfo = TypeScript.unknownLocationInfo
          }
          while(container) {
            if(container.kind() == TypeScript.SymbolKind.Type) {
              var typeSym = container;
              var type = typeSym.type;
              if(type.call) {
                this.enclosingFncIsMethod = typeSym.isMethod
              }
              if(type.isClass()) {
                this.thisType = type.instanceType;
                break
              }
            }
            container = container.container
          }
          this.typeCheckBoundDecl(varDecl);
          this.scope = prevScope
        }
      }
      this.thisFnc = svThisFnc;
      this.thisType = svThisType;
      this.checker.locationInfo = prevLocationInfo;
      this.enclosingFncIsMethod = prevMethodStatus
    };
    TypeFlow.prototype.resolveBoundDecl = function(varDecl) {
      if(varDecl.typeExpr) {
        if(varDecl.typeExpr.type == null || varDecl.typeExpr.type && varDecl.typeExpr.type == this.anyType && this.scope || varDecl.typeExpr.type.symbol == null || !this.checker.typeStatusIsFinished(varDecl.typeExpr.type.symbol.typeCheckStatus)) {
          this.typeCheck(varDecl.typeExpr)
        }
        varDecl.type = varDecl.typeExpr.type;
        if(varDecl.sym) {
          varDecl.sym.setType(varDecl.type)
        }
      }else {
        if(varDecl.init == null) {
          if(this.checker.styleSettings.implicitAny) {
            this.checker.errorReporter.styleError(varDecl, "type implicitly set to 'any'")
          }
          varDecl.type = this.anyType;
          if(varDecl.sym) {
            if(varDecl.sym.isType()) {
              var tsym = varDecl.sym;
              if(tsym.isMethod) {
                this.checker.errorReporter.simpleError(varDecl, "Cannot bind method group to variable.  (Did you mean to use 'declare function' instead of 'declare var'?)");
                return
              }else {
                this.checker.errorReporter.simpleError(varDecl, "Cannot bind type to variable");
                return
              }
            }
            varDecl.sym.setType(varDecl.type)
          }
        }
      }
    };
    TypeFlow.prototype.typeCheckBoundDecl = function(varDecl) {
      var infSym = varDecl.sym;
      if(infSym == null) {
        if(varDecl.init) {
          varDecl.init = this.typeCheck(varDecl.init);
          varDecl.type = this.checker.widenType(varDecl.init.type)
        }else {
          if(this.checker.styleSettings.implicitAny) {
            this.checker.errorReporter.styleError(varDecl, "type implicitly set to 'any'")
          }
          varDecl.type = this.anyType
        }
      }else {
        if(infSym.typeCheckStatus == TypeScript.TypeCheckStatus.Started) {
          if(this.checker.styleSettings.implicitAny) {
            this.checker.errorReporter.styleError(varDecl, "type implicitly set to 'any'")
          }
          varDecl.type = this.anyType;
          infSym.setType(this.anyType)
        }else {
          if(infSym.typeCheckStatus == TypeScript.TypeCheckStatus.NotStarted) {
            infSym.typeCheckStatus = TypeScript.TypeCheckStatus.Started;
            this.checker.addStartedPTO(infSym);
            var resolved = false;
            if(varDecl.type == null) {
              if(varDecl.typeExpr) {
                this.resolveBoundDecl(varDecl);
                resolved = true;
                varDecl.type = varDecl.typeExpr.type;
                infSym.typeCheckStatus = this.checker.getTypeCheckFinishedStatus()
              }
            }
            if(varDecl.init) {
              if(TypeScript.hasFlag(varDecl.varFlags, TypeScript.VarFlags.Ambient)) {
                this.checker.errorReporter.simpleError(varDecl, "Ambient variable can not have an initializer")
              }
              var isLocalStatic = TypeScript.hasFlag(varDecl.varFlags, TypeScript.VarFlags.LocalStatic);
              var prevScope = this.scope;
              var applyTargetType = !varDecl.init.isParenthesized;
              if(isLocalStatic) {
                this.scope = varDecl.sym.container.getType().memberScope
              }
              if(varDecl.varFlags & TypeScript.VarFlags.Property) {
                this.inBoundPropTypeCheck = true
              }
              this.checker.typeCheckWithContextualType(varDecl.type, this.checker.inProvisionalTypecheckMode(), applyTargetType, varDecl.init);
              if(this.inBoundPropTypeCheck) {
                this.inBoundPropTypeCheck = false
              }
              this.scope = prevScope;
              if(varDecl.type) {
                var preserveScope = false;
                var preservedContainedScope = null;
                if(varDecl.init.type) {
                  preservedContainedScope = varDecl.init.type.containedScope;
                  preserveScope = true;
                  if(varDecl.init.type == this.voidType) {
                    this.checker.errorReporter.simpleError(varDecl, "Cannot assign type 'void' to variable '" + varDecl.id.text + "'")
                  }
                }
                varDecl.init = this.castWithCoercion(varDecl.init, varDecl.type, applyTargetType, false);
                if(preserveScope && varDecl.init.type.containedScope == null) {
                  varDecl.init.type.containedScope = preservedContainedScope
                }
              }else {
                varDecl.type = this.checker.widenType(varDecl.init.type);
                if(varDecl.type == this.voidType) {
                  this.checker.errorReporter.simpleError(varDecl, "Cannot assign type 'void' to variable '" + varDecl.id.text + "'");
                  varDecl.type = this.anyType
                }
              }
              infSym.setType(varDecl.type)
            }else {
              if(!resolved) {
                this.resolveBoundDecl(varDecl)
              }
            }
            infSym.typeCheckStatus = this.checker.getTypeCheckFinishedStatus()
          }else {
            if(this.checker.typeStatusIsFinished(infSym.typeCheckStatus) && infSym.declAST != varDecl) {
              if(varDecl.init) {
                varDecl.init = this.typeCheck(varDecl.init);
                varDecl.type = infSym.getType();
                varDecl.init = this.cast(varDecl.init, varDecl.type)
              }
            }
          }
        }
      }
      if(varDecl.id && varDecl.sym) {
        varDecl.id.sym = varDecl.sym
      }
      return varDecl
    };
    TypeFlow.prototype.typeCheckSuper = function(ast) {
      if(this.thisType && this.enclosingFncIsMethod && !this.thisFnc.isStatic() && this.thisType.baseClass()) {
        ast.type = this.thisType.baseClass()
      }else {
        ast.type = this.anyType;
        this.checker.errorReporter.invalidSuperReference(ast)
      }
      return ast
    };
    TypeFlow.prototype.typeCheckThis = function(ast) {
      var illegalThisRef = false;
      if(this.thisFnc == null) {
        if(this.thisType) {
          if(this.thisClassNode && this.thisClassNode.nty == TypeScript.NodeType.Class) {
            illegalThisRef = true;
            ast.type = this.anyType
          }else {
            ast.type = this.thisType
          }
        }else {
          if(this.checker.currentModDecl) {
            this.checker.errorReporter.simpleError(ast, "'this' may not be referenced within module bodies")
          }
          ast.type = this.anyType
        }
      }else {
        if((this.inBoundPropTypeCheck || this.inSuperCall) && this.thisClassNode && this.thisClassNode.nty == TypeScript.NodeType.Class) {
          illegalThisRef = true
        }
        if(this.thisFnc.isMethod() || this.thisFnc.isConstructor || this.thisFnc.isTargetTypedAsMethod) {
          if(this.thisType && !(this.thisFnc.fncFlags & TypeScript.FncFlags.Static)) {
            ast.type = this.thisType
          }else {
            ast.type = this.anyType
          }
        }else {
          ast.type = this.anyType
        }
      }
      if(!this.enclosingFncIsMethod && this.thisFnc && TypeScript.hasFlag(this.thisFnc.fncFlags, TypeScript.FncFlags.IsFatArrowFunction)) {
        if(this.thisFnc.boundToProperty) {
          var container = this.thisFnc.boundToProperty.sym.container;
          if(container.declAST.nodeType == TypeScript.NodeType.FuncDecl) {
            container.declAST.setHasSelfReference()
          }
        }else {
          var encFnc = this.thisFnc.enclosingFnc;
          var firstEncFnc = encFnc;
          var foundMeth = false;
          while(encFnc) {
            if(encFnc.isMethod() || encFnc.isConstructor || encFnc.hasSelfReference()) {
              encFnc.setHasSelfReference();
              foundMeth = true;
              break
            }
            encFnc = encFnc.enclosingFnc
          }
          if(!foundMeth && firstEncFnc) {
            firstEncFnc.setHasSelfReference()
          }
          if(foundMeth && this.thisType) {
            ast.type = this.thisType
          }
        }
      }
      if(illegalThisRef) {
        this.checker.errorReporter.simpleError(ast, "Keyword 'this' cannot be referenced in initializers in a class body, or in super constructor calls")
      }
      return ast
    };
    TypeFlow.prototype.setTypeFromSymbol = function(ast, symbol) {
      if(symbol.isVariable()) {
        if(symbol.isInferenceSymbol()) {
          var infSym = symbol;
          if(infSym.declAST && !this.checker.typeStatusIsFinished(infSym.typeCheckStatus)) {
            this.inScopeTypeCheckDecl(infSym.declAST)
          }
          if(!this.checker.styleSettings.innerScopeDeclEscape) {
            if(infSym.declAST && infSym.declAST.nodeType == TypeScript.NodeType.VarDecl) {
              if(this.nestingLevel < infSym.declAST.nestingLevel) {
                this.checker.errorReporter.styleError(ast, "Illegal reference to a variable defined in more nested scope")
              }
            }
          }
        }
        ast.type = symbol.getType();
        if(!symbol.writeable()) {
          ast.flags = ast.flags & ~TypeScript.ASTFlags.Writeable
        }
      }else {
        if(symbol.isType()) {
          ast.type = symbol.getType();
          ast.flags = ast.flags & ~TypeScript.ASTFlags.Writeable
        }else {
          ast.type = this.anyType;
          this.checker.errorReporter.symbolDoesNotReferToAValue(ast, symbol.name)
        }
      }
    };
    TypeFlow.prototype.typeCheckName = function(ast) {
      var _this = this;
      var identifier = ast;
      if(this.checker.inWith) {
        identifier.type = this.anyType
      }else {
        var typespace = false;
        var idText = identifier.text;
        var originalIdText = idText;
        var isDynamicModuleName = TypeScript.isQuoted(identifier.text);
        var symbol = this.scope.find(idText, false, typespace);
        if(symbol == null && isDynamicModuleName) {
          symbol = this.checker.findSymbolForDynamicModule(idText, this.currentScript.locationInfo.filename, function(id) {
            return _this.scope.find(id, false, typespace)
          })
        }
        if(!symbol) {
          if(!identifier.isMissing()) {
            this.checker.errorReporter.unresolvedSymbol(identifier, identifier.text)
          }
          identifier.type = this.anyType
        }else {
          if(this.inNewTargetTypeCheck && symbol.isInferenceSymbol() && !this.checker.typeStatusIsFinished(symbol.typeCheckStatus)) {
            this.checker.errorReporter.simpleError(ast, "Symbol '" + identifier.text + "' is referenced before its declaration")
          }
          if(TypeScript.optimizeModuleCodeGen && symbol && symbol.isType()) {
            var symType = symbol.getType();
            if(symType && symbol.aliasLink && symbol.onlyReferencedAsTypeRef) {
              var modDecl = symType.symbol.declAST;
              if(modDecl && TypeScript.hasFlag(modDecl.modFlags, TypeScript.ModuleFlags.IsDynamic)) {
                symbol.onlyReferencedAsTypeRef = this.inTypeRefTypeCheck
              }
            }
          }
          if(symbol.declAST && symbol.declAST.nodeType == TypeScript.NodeType.FuncDecl && !symbol.declAST.returnTypeAnnotation && symbol.declAST.signature.typeCheckStatus == TypeScript.TypeCheckStatus.Started) {
            symbol.declAST.type.symbol.flags |= TypeScript.SymbolFlags.RecursivelyReferenced;
            symbol.declAST.signature.returnType.type = this.anyType
          }
          this.setTypeFromSymbol(ast, symbol);
          identifier.sym = symbol;
          if(this.thisFnc) {
            if(this.thisFnc.type && symbol.container != this.thisFnc.type.symbol) {
              this.thisFnc.freeVariables[this.thisFnc.freeVariables.length] = symbol
            }
          }
        }
      }
      return ast
    };
    TypeFlow.prototype.typeCheckScript = function(script) {
      this.checker.locationInfo = script.locationInfo;
      this.scope = this.checker.globalScope;
      if(!script.topLevelMod) {
        this.addLocalsFromScope(this.scope, this.checker.gloMod, script.vars, this.checker.globals, true)
      }
      this.currentScript = script;
      script.bod = this.typeCheck(script.bod);
      this.currentScript = null;
      return script
    };
    TypeFlow.prototype.typeCheckBitNot = function(ast) {
      var unex = ast;
      unex.operand = this.typeCheck(unex.operand);
      unex.type = this.doubleType;
      return unex
    };
    TypeFlow.prototype.typeCheckUnaryNumberOperator = function(ast) {
      var unex = ast;
      unex.operand = this.typeCheck(unex.operand);
      unex.type = this.doubleType;
      return ast
    };
    TypeFlow.prototype.typeCheckLogNot = function(ast) {
      var unex = ast;
      unex.operand = this.typeCheck(unex.operand);
      unex.type = this.booleanType;
      return unex
    };
    TypeFlow.prototype.astIsWriteable = function(ast) {
      return TypeScript.hasFlag(ast.flags, TypeScript.ASTFlags.Writeable)
    };
    TypeFlow.prototype.typeCheckIncOrDec = function(ast) {
      var unex = ast;
      var lval = unex.operand;
      if(!this.astIsWriteable(unex)) {
        this.checker.errorReporter.valueCannotBeModified(unex);
        unex.type = this.doubleType
      }else {
        unex = this.typeCheckUnaryNumberOperator(ast);
        if(unex.operand.type != this.checker.numberType && unex.operand.type != this.checker.anyType && !(unex.operand.type.typeFlags & TypeScript.TypeFlags.IsEnum)) {
          this.checker.errorReporter.simpleError(ast, "'++' and '--' may only be applied to operands of type 'number' or 'any'")
        }
      }
      return unex
    };
    TypeFlow.prototype.typeCheckBitwiseOperator = function(ast, assignment) {
      var binex = ast;
      var resultType = null;
      binex.operand1 = this.typeCheck(binex.operand1);
      binex.operand2 = this.typeCheck(binex.operand2);
      var leftType = binex.operand1.type;
      var rightType = binex.operand2.type;
      if(assignment && !this.astIsWriteable(binex)) {
        this.checker.errorReporter.valueCannotBeModified(binex)
      }
      if(this.checker.styleSettings.bitwise) {
        this.checker.errorReporter.styleError(ast, "use of " + TypeScript.nodeTypeTable[binex.nodeType])
      }
      if(this.checker.sourceIsSubtypeOfTarget(leftType, this.doubleType) && this.checker.sourceIsSubtypeOfTarget(rightType, this.doubleType)) {
        resultType = this.doubleType
      }else {
        if(leftType == this.booleanType && rightType == this.booleanType) {
          resultType = this.booleanType
        }else {
          if(leftType == this.anyType) {
            if(rightType == this.anyType || rightType == this.doubleType || rightType == this.booleanType) {
              resultType = this.anyType
            }
          }else {
            if(rightType == this.anyType) {
              if(leftType == this.anyType || leftType == this.doubleType || leftType == this.booleanType) {
                resultType = this.anyType
              }
            }
          }
        }
      }
      if(resultType == null) {
        resultType = this.anyType;
        this.checker.errorReporter.incompatibleTypes(binex, leftType, rightType, binex.printLabel(), this.scope)
      }
      binex.type = resultType;
      return binex
    };
    TypeFlow.prototype.typeCheckArithmeticOperator = function(ast, assignment) {
      var binex = ast;
      binex.operand1 = this.typeCheck(binex.operand1);
      binex.operand2 = this.typeCheck(binex.operand2);
      var leftType = binex.operand1.type;
      var rightType = binex.operand2.type;
      if(assignment && !this.astIsWriteable(binex)) {
        this.checker.errorReporter.valueCannotBeModified(binex)
      }
      if(this.checker.styleSettings.bitwise && (binex.nodeType == TypeScript.NodeType.And || binex.nodeType == TypeScript.NodeType.Or || binex.nodeType == TypeScript.NodeType.AsgAnd || binex.nodeType == TypeScript.NodeType.AsgOr)) {
        this.checker.errorReporter.styleError(ast, "use of " + TypeScript.nodeTypeTable[binex.nodeType])
      }
      if(leftType == null || rightType == null) {
        this.checker.errorReporter.simpleError(binex, "Could not typecheck arithmetic operation.  Possible recursive typecheck error?");
        binex.type = this.anyType;
        return binex
      }
      var nodeType = binex.nodeType;
      if(this.checker.isNullOrUndefinedType(leftType)) {
        leftType = rightType
      }
      if(this.checker.isNullOrUndefinedType(rightType)) {
        rightType = leftType
      }
      leftType = this.checker.widenType(leftType);
      rightType = this.checker.widenType(rightType);
      if(nodeType == TypeScript.NodeType.Add || nodeType == TypeScript.NodeType.AsgAdd) {
        if(leftType == this.checker.stringType || rightType == this.checker.stringType) {
          binex.type = this.checker.stringType
        }else {
          if(leftType == this.checker.numberType && rightType == this.checker.numberType) {
            binex.type = this.checker.numberType
          }else {
            if(this.checker.sourceIsSubtypeOfTarget(leftType, this.checker.numberType) && this.checker.sourceIsSubtypeOfTarget(rightType, this.checker.numberType)) {
              binex.type = this.checker.numberType
            }else {
              if(leftType == this.checker.anyType || rightType == this.checker.anyType) {
                binex.type = this.checker.anyType
              }else {
                binex.type = this.anyType;
                this.checker.errorReporter.incompatibleTypes(binex, leftType, rightType, binex.printLabel(), this.scope)
              }
            }
          }
        }
      }else {
        if(leftType == this.checker.numberType && rightType == this.checker.numberType) {
          binex.type = this.checker.numberType
        }else {
          if(this.checker.sourceIsSubtypeOfTarget(leftType, this.checker.numberType) && this.checker.sourceIsSubtypeOfTarget(rightType, this.checker.numberType)) {
            binex.type = this.checker.numberType
          }else {
            if(leftType == this.checker.anyType || rightType == this.checker.anyType) {
              binex.type = this.checker.numberType
            }else {
              binex.type = this.anyType;
              this.checker.errorReporter.incompatibleTypes(binex, leftType, rightType, binex.printLabel(), this.scope)
            }
          }
        }
      }
      return binex
    };
    TypeFlow.prototype.typeCheckDotOperator = function(ast) {
      var binex = ast;
      var leftIsFnc = false;
      binex.operand1 = this.typeCheck(binex.operand1);
      var leftType = binex.operand1.type;
      var leftScope = null;
      if(leftType) {
        if(leftType == this.anyType) {
          binex.type = this.anyType;
          return binex
        }else {
          if(leftType == this.stringType) {
            if(this.stringInterfaceType) {
              leftScope = this.stringInterfaceType.memberScope
            }else {
              binex.type = this.anyType;
              return binex
            }
          }else {
            if(leftType == this.doubleType) {
              if(this.numberInterfaceType) {
                leftScope = this.numberInterfaceType.memberScope
              }else {
                binex.type = this.anyType;
                return binex
              }
            }else {
              if(leftType == this.booleanType) {
                if(this.booleanInterfaceType) {
                  leftScope = this.booleanInterfaceType.memberScope
                }else {
                  binex.type = this.anyType;
                  return binex
                }
              }else {
                if((leftType.call || leftType.construct) && leftType.members == null) {
                  if(this.functionInterfaceType) {
                    leftScope = this.functionInterfaceType.memberScope
                  }else {
                    binex.type = this.anyType;
                    return binex
                  }
                }else {
                  if(leftType.elementType) {
                    if(this.arrayInterfaceType) {
                      var arrInstType = leftType.elementType.getArrayBase(this.arrayInterfaceType, this.checker);
                      leftScope = arrInstType.memberScope
                    }else {
                      binex.type = this.anyType;
                      return binex
                    }
                  }else {
                    leftScope = leftType.memberScope
                  }
                }
              }
            }
          }
        }
      }
      if(leftScope == null) {
        this.checker.errorReporter.expectedClassOrInterface(binex);
        binex.type = this.anyType
      }else {
        var propertyName = binex.operand2;
        var lhsIsEnclosingType = this.thisClassNode && binex.operand1.type == this.thisClassNode.type.instanceType;
        var symbol = leftScope.find(propertyName.text, !lhsIsEnclosingType, false);
        if(!symbol) {
          if(this.objectInterfaceType && leftType) {
            if(leftType.isReferenceType()) {
              symbol = this.objectInterfaceType.memberScope.find(propertyName.text, false, false)
            }
            if(!symbol) {
              if(this.functionInterfaceType && (leftType.call || leftType.construct)) {
                symbol = this.functionInterfaceType.memberScope.find(propertyName.text, false, false)
              }
            }
          }
        }
        if(!symbol || !symbol.visible(leftScope, this.checker)) {
          binex.type = this.anyType;
          if(symbol == null) {
            this.checker.errorReporter.simpleError(propertyName, "The property '" + propertyName.text + "' does not exist on value of type '" + leftType.getScopedTypeName(this.scope) + "'")
          }else {
            this.checker.errorReporter.simpleError(binex, "The property '" + propertyName.text + " on type '" + leftType.getScopedTypeName(this.scope) + "' is not visible")
          }
        }else {
          if(symbol.isVariable()) {
            if(symbol.isInferenceSymbol()) {
              var infSym = symbol;
              if(infSym.declAST && !this.checker.typeStatusIsFinished(infSym.typeCheckStatus)) {
                this.inScopeTypeCheckDecl(infSym.declAST)
              }
            }
          }
          propertyName.sym = symbol;
          binex.type = symbol.getType()
        }
      }
      if(binex.type == null) {
        binex.type = this.anyType
      }
      return binex
    };
    TypeFlow.prototype.typeCheckBooleanOperator = function(ast) {
      var binex = ast;
      binex.operand1 = this.typeCheck(binex.operand1);
      binex.operand2 = this.typeCheck(binex.operand2);
      var leftType = binex.operand1.type;
      var rightType = binex.operand2.type;
      if(!this.checker.sourceIsAssignableToTarget(leftType, rightType) && !this.checker.sourceIsAssignableToTarget(rightType, leftType)) {
        this.checker.errorReporter.incompatibleTypes(binex, leftType, rightType, binex.printLabel(), this.scope)
      }
      binex.type = this.booleanType;
      return binex
    };
    TypeFlow.prototype.typeCheckAsgOperator = function(ast) {
      var binex = ast;
      var applyTargetType = !binex.operand2.isParenthesized;
      binex.operand1 = this.typeCheck(binex.operand1);
      this.checker.typeCheckWithContextualType(binex.operand1.type, this.checker.inProvisionalTypecheckMode(), applyTargetType, binex.operand2);
      var leftType = binex.operand1.type;
      var rightType = binex.operand2.type;
      if(!this.astIsWriteable(binex.operand1)) {
        this.checker.errorReporter.valueCannotBeModified(binex)
      }
      if(binex.operand1.nodeType == TypeScript.NodeType.Call) {
        var callEx = binex.operand1
      }
      var preserveScope = false;
      var preservedContainedScope = null;
      if(binex.operand2.type) {
        preservedContainedScope = binex.operand2.type.containedScope;
        preserveScope = true
      }
      binex.operand2 = this.castWithCoercion(binex.operand2, leftType, applyTargetType, false);
      if(preserveScope && binex.operand2.type.containedScope == null) {
        binex.operand2.type.containedScope = preservedContainedScope
      }
      binex.type = rightType;
      return binex
    };
    TypeFlow.prototype.typeCheckIndex = function(ast) {
      var binex = ast;
      binex.operand1 = this.typeCheck(binex.operand1);
      binex.operand2 = this.typeCheck(binex.operand2);
      if(!this.checker.styleSettings.literalSubscript) {
        if(binex.operand2.nodeType == TypeScript.NodeType.QString) {
          this.checker.errorReporter.styleError(ast, "use literal subscript ('.') notation instead)")
        }
      }
      var objExprType = binex.operand1.type;
      var indexExprType = binex.operand2.type;
      if(objExprType.elementType) {
        if(indexExprType == this.checker.anyType || indexExprType == this.checker.numberType || TypeScript.hasFlag(indexExprType.typeFlags, TypeScript.TypeFlags.IsEnum)) {
          binex.type = objExprType.elementType
        }else {
          if(indexExprType == this.checker.stringType) {
            binex.type = this.checker.anyType
          }else {
            this.checker.errorReporter.simpleError(binex, "Illegal property access");
            binex.type = this.checker.anyType
          }
        }
      }else {
        if(objExprType.index) {
          if(indexExprType == this.checker.anyType || !(objExprType.index.flags & TypeScript.SignatureFlags.IsStringIndexer || objExprType.index.flags & TypeScript.SignatureFlags.IsNumberIndexer) || objExprType.index.flags & TypeScript.SignatureFlags.IsStringIndexer && indexExprType == this.checker.stringType || objExprType.index.flags & TypeScript.SignatureFlags.IsNumberIndexer && (indexExprType == this.checker.numberType || TypeScript.hasFlag(indexExprType.typeFlags, TypeScript.TypeFlags.IsEnum))) {
            var sig = this.resolveOverload(ast, objExprType.index);
            if(sig) {
              binex.type = sig.returnType.type
            }else {
              binex.type = this.checker.anyType
            }
          }else {
            if(indexExprType == this.checker.stringType) {
              binex.type = this.checker.anyType
            }else {
              this.checker.errorReporter.simpleError(binex, "Illegal property access");
              binex.type = this.checker.anyType
            }
          }
        }else {
          if((objExprType == this.checker.anyType || objExprType == this.checker.stringType || objExprType == this.checker.numberType || objExprType == this.checker.booleanType || objExprType.isReferenceType()) && (indexExprType == this.checker.anyType || indexExprType == this.checker.stringType || indexExprType == this.checker.numberType || TypeScript.hasFlag(indexExprType.typeFlags, TypeScript.TypeFlags.IsEnum))) {
            binex.type = this.checker.anyType
          }else {
            this.checker.errorReporter.simpleError(binex, "Illegal property access");
            binex.type = this.checker.anyType
          }
        }
      }
      return binex
    };
    TypeFlow.prototype.typeCheckInOperator = function(binex) {
      binex.operand1 = this.cast(this.typeCheck(binex.operand1), this.stringType);
      binex.operand2 = this.typeCheck(binex.operand2);
      if(!((binex.operand1.type == this.checker.anyType || binex.operand1.type == this.checker.stringType) && (binex.operand2.type == this.anyType || this.checker.sourceIsSubtypeOfTarget(binex.operand2.type, this.objectInterfaceType)))) {
        this.checker.errorReporter.simpleError(binex, "The in operator requires the left operand to be of type Any or the String primitive type, and the right operand to be of type Any or an object type")
      }
      binex.type = this.booleanType;
      return binex
    };
    TypeFlow.prototype.typeCheckShift = function(binex, assignment) {
      binex.operand1 = this.cast(this.typeCheck(binex.operand1), this.doubleType);
      binex.operand2 = this.cast(this.typeCheck(binex.operand2), this.doubleType);
      if(assignment && !this.astIsWriteable(binex.operand1)) {
        this.checker.errorReporter.valueCannotBeModified(binex)
      }
      binex.type = this.doubleType;
      return binex
    };
    TypeFlow.prototype.typeCheckQMark = function(trinex) {
      trinex.operand1 = this.typeCheck(trinex.operand1);
      trinex.operand2 = this.typeCheck(trinex.operand2);
      trinex.operand3 = this.typeCheck(trinex.operand3);
      var leftType = trinex.operand2.type;
      var rightType = trinex.operand3.type;
      if(leftType == rightType) {
        trinex.type = leftType
      }else {
        if(this.checker.sourceIsSubtypeOfTarget(leftType, rightType)) {
          trinex.type = rightType
        }else {
          if(this.checker.sourceIsSubtypeOfTarget(rightType, leftType)) {
            trinex.type = leftType
          }else {
            trinex.type = this.anyType;
            this.checker.errorReporter.incompatibleTypes(trinex, leftType, rightType, trinex.printLabel(), this.scope)
          }
        }
      }
      return trinex
    };
    TypeFlow.prototype.addFormals = function(container, signature, table) {
      var len = signature.parameters.length;
      for(var i = 0;i < len;i++) {
        var symbol = signature.parameters[i];
        symbol.container = container;
        table.add(symbol.name, symbol)
      }
    };
    TypeFlow.prototype.addLocalsFromScope = function(scope, container, vars, table, isModContainer) {
      var len = vars.members.length;
      var hasArgsDef = false;
      for(var i = 0;i < len;i++) {
        var local = vars.members[i];
        if(local.sym == null || local.sym.kind() != TypeScript.SymbolKind.Field) {
          var result = null;
          if((result = table.lookup(local.id.text)) == null) {
            var localVar = new TypeScript.ValueLocation;
            localVar.typeLink = new TypeScript.TypeLink;
            var varSym = null;
            if(TypeScript.hasFlag(local.varFlags, TypeScript.VarFlags.Static)) {
              local.varFlags |= TypeScript.VarFlags.LocalStatic;
              varSym = new TypeScript.FieldSymbol(local.id.text, local.minChar, this.checker.locationInfo.unitIndex, true, localVar)
            }else {
              varSym = new TypeScript.VariableSymbol(local.id.text, local.minChar, this.checker.locationInfo.unitIndex, localVar)
            }
            varSym.transferVarFlags(local.varFlags);
            localVar.symbol = varSym;
            varSym.declAST = local;
            localVar.typeLink.ast = local.typeExpr;
            this.checker.resolveTypeLink(scope, localVar.typeLink, false);
            if(local.type == null && local.init == null) {
              local.type = this.anyType
            }
            localVar.typeLink.type = local.type;
            localVar.symbol.container = container;
            local.sym = localVar.symbol;
            table.add(local.id.text, varSym);
            if(local.id.text == "arguments") {
              hasArgsDef = true
            }
          }else {
            local.type = result.getType();
            local.sym = result
          }
        }
      }
      if(!isModContainer) {
        if(!hasArgsDef) {
          var argLoc = new TypeScript.ValueLocation;
          argLoc.typeLink = new TypeScript.TypeLink;
          var theArgSym = new TypeScript.VariableSymbol("arguments", vars.minChar, this.checker.locationInfo.unitIndex, argLoc);
          argLoc.typeLink.ast = new TypeScript.Identifier("IArguments");
          this.checker.resolveTypeLink(scope, argLoc.typeLink, false);
          table.add("arguments", theArgSym)
        }
      }
    };
    TypeFlow.prototype.addConstructorLocalArgs = function(container, args, table, isClass) {
      if(args) {
        var len = args.members.length;
        for(var i = 0;i < len;i++) {
          var local = args.members[i];
          if(local.sym == null || isClass || local.sym.kind() != TypeScript.SymbolKind.Field) {
            var result = null;
            if((result = table.lookup(local.id.text)) == null) {
              this.resolveBoundDecl(local);
              var localVar = new TypeScript.ValueLocation;
              localVar.typeLink = new TypeScript.TypeLink;
              var varSym = new TypeScript.ParameterSymbol(local.id.text, local.minChar, this.checker.locationInfo.unitIndex, localVar);
              varSym.declAST = local;
              localVar.symbol = varSym;
              localVar.typeLink.type = local.type;
              localVar.symbol.container = container;
              local.sym = localVar.symbol;
              table.add(local.id.text, varSym)
            }else {
              local.type = result.getType();
              local.sym = result
            }
          }
        }
      }
    };
    TypeFlow.prototype.checkInitSelf = function(funcDecl) {
      if(!funcDecl.isMethod()) {
        var freeVars = funcDecl.freeVariables;
        for(var k = 0, len = freeVars.length;k < len;k++) {
          var sym = freeVars[k];
          if(sym.isInstanceProperty()) {
            return true
          }
        }
      }
      var fns = funcDecl.scopes;
      var fnsLen = fns.members.length;
      for(var j = 0;j < fnsLen;j++) {
        var fn = fns.members[j];
        if(this.checkInitSelf(fn)) {
          return true
        }
      }
      return false
    };
    TypeFlow.prototype.checkPromoteFreeVars = function(funcDecl, constructorSym) {
      var freeVars = funcDecl.freeVariables;
      for(var k = 0, len = freeVars.length;k < len;k++) {
        var sym = freeVars[k];
        if(!sym.isInstanceProperty() && sym.container == constructorSym) {
          TypeScript.instanceFilter.reset();
          if(this.scope.search(TypeScript.instanceFilter, sym.name, false, false)) {
            this.checker.errorReporter.simpleError(funcDecl, "Constructor-local variable shadows class property '" + sym.name + "'. To access the class property, use 'self." + sym.name + "'")
          }
          this.checker.errorReporter.simpleError(funcDecl, "Constructor-local variables may not be accessed from instance method bodies. Consider changing local variable '" + sym.name + "' to a class property")
        }
      }
    };
    TypeFlow.prototype.allReturnsAreVoid = function(funcDecl) {
      var allReturnsAreVoid = true;
      if(funcDecl.signature.returnType.type == null) {
        var preFindReturnExpressionTypes = function(ast, parent, walker) {
          var go = true;
          switch(ast.nodeType) {
            case TypeScript.NodeType.FuncDecl:
              go = false;
              break;
            case TypeScript.NodeType.Return:
              var returnStmt = ast;
              if(returnStmt.returnExpression) {
                allReturnsAreVoid = false;
                go = false
              }
            ;
            default:
              break
          }
          walker.options.goChildren = go;
          walker.options.goNextSibling = go;
          return ast
        };
        TypeScript.getAstWalkerFactory().walk(funcDecl.bod, preFindReturnExpressionTypes)
      }
      return allReturnsAreVoid
    };
    TypeFlow.prototype.classConstructorHasSuperCall = function(funcDecl) {
      var foundSuper = false;
      var preFindSuperCall = function(ast, parent, walker) {
        var go = true;
        switch(ast.nodeType) {
          case TypeScript.NodeType.FuncDecl:
            go = false;
            break;
          case TypeScript.NodeType.Call:
            var call = ast;
            if(call.target.nodeType == TypeScript.NodeType.Super) {
              go = false;
              foundSuper = true;
              break
            }
            break;
          default:
            break
        }
        walker.options.goChildren = go;
        return ast
      };
      TypeScript.getAstWalkerFactory().walk(funcDecl.bod, preFindSuperCall);
      return foundSuper
    };
    TypeFlow.prototype.typeCheckFunction = function(funcDecl) {
      this.nestingLevel = 0;
      var fnType = funcDecl.type;
      var fgSym = fnType.symbol;
      var signature = funcDecl.signature;
      if(this.checker.typeStatusIsFinished(signature.typeCheckStatus)) {
        return funcDecl
      }else {
        if(signature.typeCheckStatus == TypeScript.TypeCheckStatus.Started) {
          if(!funcDecl.returnTypeAnnotation && funcDecl.bod && !funcDecl.isSignature() && !funcDecl.isConstructor && this.allReturnsAreVoid(funcDecl)) {
            signature.returnType.type = this.voidType;
            return funcDecl
          }else {
            if(funcDecl.returnTypeAnnotation == null) {
              if(this.checker.styleSettings.implicitAny) {
                this.checker.errorReporter.styleError(funcDecl, "type implicitly set to 'any'")
              }
              signature.returnType.type = this.anyType;
              fgSym.flags |= TypeScript.SymbolFlags.RecursivelyReferenced
            }
            return funcDecl
          }
        }
      }
      signature.typeCheckStatus = TypeScript.TypeCheckStatus.Started;
      this.checker.addStartedPTO(signature);
      var prevScope = this.scope;
      var prevFnc = this.thisFnc;
      var prevMethodStatus = this.enclosingFncIsMethod;
      var prevClassNode = this.thisClassNode;
      this.enclosingFncIsMethod = funcDecl.isMethod() || funcDecl.isConstructor;
      this.thisFnc = funcDecl;
      var container = funcDecl.type.symbol;
      var prevThisType = this.thisType;
      var prevLocationInfo = this.checker.locationInfo;
      var funcTable = null;
      var setNewTargetType = false;
      var targetParams = null;
      var targetReturnType = null;
      var isGetter = funcDecl.isAccessor() && TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.GetAccessor);
      var isSetter = funcDecl.isAccessor() && TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.SetAccessor);
      var accessorType = (isGetter || isSetter) && funcDecl.accessorSymbol ? funcDecl.accessorSymbol.getType() : null;
      var prevModDecl = this.checker.currentModDecl;
      if(funcDecl.isConstructor && !funcDecl.isOverload) {
        if(fnType.instanceType == null) {
          this.checker.errorReporter.simpleError(funcDecl, "Malformed function body (is this a class named the same as an existing interface?)");
          return funcDecl
        }
        this.scope = fnType.instanceType.constructorScope;
        var ssb = this.scope;
        funcTable = ssb.valueMembers.allMembers
      }else {
        if(funcDecl.isOverload) {
          funcTable = funcDecl.symbols;
          if(!TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.Static) && fnType.containedScope) {
            this.scope = fnType.containedScope
          }
        }else {
          if(funcDecl.bod) {
            this.scope = fnType.containedScope
          }
          var ssb = this.scope;
          if(ssb && ssb.valueMembers) {
            funcTable = ssb.valueMembers.allMembers
          }
        }
      }
      if(funcDecl.isConstructor && funcDecl.bod && TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.ClassMethod)) {
        var hasBaseType = TypeScript.hasFlag(funcDecl.classDecl.type.instanceType.typeFlags, TypeScript.TypeFlags.HasBaseType);
        var noSuperCallAllowed = !hasBaseType || TypeScript.hasFlag(funcDecl.classDecl.type.instanceType.typeFlags, TypeScript.TypeFlags.HasBaseTypeOfObject);
        var superCallMustBeFirst = TypeScript.hasFlag(funcDecl.classDecl.varFlags, TypeScript.VarFlags.ClassSuperMustBeFirstCallInConstructor);
        if(noSuperCallAllowed && this.classConstructorHasSuperCall(funcDecl)) {
          this.checker.errorReporter.simpleError(funcDecl, "Calls to 'super' constructor are not allowed in classes that either inherit directly from 'Object' or have no base class")
        }else {
          if(hasBaseType) {
            if(superCallMustBeFirst) {
              if(!funcDecl.bod || !funcDecl.bod.members.length || !(funcDecl.bod.members[0].nodeType == TypeScript.NodeType.Call && funcDecl.bod.members[0].target.nodeType == TypeScript.NodeType.Super)) {
                this.checker.errorReporter.simpleError(funcDecl, "If a derived class contains initialized properties or constructor parameter properties, the first statement in the constructor body must be a call to the super constructor")
              }
            }else {
              if(!this.classConstructorHasSuperCall(funcDecl)) {
                this.checker.errorReporter.simpleError(funcDecl, "Constructors for derived classes must contain a call to the class's 'super' constructor")
              }
            }
          }
        }
      }
      if(funcDecl.isMethod() && funcDecl.type.enclosingType) {
        var enclosingClassNode = null;
        if(funcDecl.type.enclosingType.symbol.declAST.nodeType == TypeScript.NodeType.FuncDecl) {
          enclosingClassNode = funcDecl.type.enclosingType.symbol.declAST.classDecl
        }else {
          if(funcDecl.type.enclosingType.symbol.declAST.nodeType == TypeScript.NodeType.Class) {
            enclosingClassNode = funcDecl.type.enclosingType.symbol.declAST
          }
        }
        if(enclosingClassNode) {
          this.thisClassNode = enclosingClassNode
        }
      }
      if(fnType.enclosingType) {
        var enclosingSym = fnType.symbol.container;
        if(enclosingSym && enclosingSym.isType() && enclosingSym.getType().isClass()) {
          enclosingSym = enclosingSym.container
        }
        if(enclosingSym && enclosingSym.declAST && enclosingSym.declAST.nodeType == TypeScript.NodeType.Module) {
          this.checker.currentModDecl = enclosingSym.declAST
        }
      }
      if(this.checker.units && funcDecl.unitIndex >= 0 && funcDecl.unitIndex < this.checker.units.length) {
        this.checker.locationInfo = this.checker.units[funcDecl.unitIndex]
      }else {
        this.checker.locationInfo = TypeScript.unknownLocationInfo
      }
      if(fnType.enclosingType) {
        this.thisType = fnType.enclosingType
      }else {
        this.thisType = prevThisType
      }
      var paramLen = signature.parameters.length;
      if(!funcDecl.isConstructor && funcDecl.bod && !funcDecl.isSignature()) {
        var tmpParamScope = this.scope;
        var ssb = this.scope;
        if(!funcDecl.isMethod() && funcDecl.returnTypeAnnotation == null) {
          if(prevScope && funcDecl.name && !funcDecl.name.isMissing()) {
            var considerSym = prevScope.findAmbient(funcDecl.name.text, false, false);
            if(considerSym && considerSym.declAST && considerSym.declAST.type) {
              this.checker.setContextualType(considerSym.declAST.type, false);
              setNewTargetType = true
            }
          }
          if(this.checker.hasTargetType()) {
            var candidateTypeContext = this.checker.getTargetTypeContext();
            var candidateType = candidateTypeContext.contextualType;
            if(this.checker.canContextuallyTypeFunction(candidateType, funcDecl, true)) {
              var candidateSigs = candidateType.construct ? candidateType.construct : candidateType.call;
              candidateTypeContext.targetSig = candidateSigs.signatures[0];
              var candidateParams = candidateTypeContext.targetSig.parameters;
              targetParams = candidateParams;
              targetReturnType = candidateTypeContext.targetSig.returnType.type;
              if(candidateTypeContext.targetSig.declAST) {
                if(candidateTypeContext.targetSig.declAST.isConstructor) {
                  funcDecl.isTargetTypedAsMethod = true
                }else {
                  if(candidateTypeContext.targetSig.declAST.isMethod()) {
                    funcDecl.isTargetTypedAsMethod = true
                  }
                }
              }
              fgSym.type = candidateTypeContext.contextualType
            }else {
              if(candidateType && funcDecl.isAccessor()) {
                accessorType = candidateType;
                candidateTypeContext.targetAccessorType = accessorType
              }else {
                this.checker.killTargetType()
              }
            }
          }
        }
        var paramTable = ssb.valueMembers;
        this.scope = new TypeScript.SymbolScopeBuilder(paramTable, null, null, null, prevScope, container);
        for(var p = 0;p < paramLen;p++) {
          var param = signature.parameters[p];
          var symbol = param;
          var ast = symbol.declAST;
          if(this.checker.hasTargetType() && targetParams && (this.checker.getTargetTypeContext().targetSig.hasVariableArgList || p < targetParams.length)) {
            var candidateTypeContext = this.checker.getTargetTypeContext();
            var hasVarArgList = candidateTypeContext.targetSig.hasVariableArgList;
            ast.type = hasVarArgList && p >= targetParams.length - 1 ? targetParams[targetParams.length - 1].getType().elementType : targetParams[p].getType();
            ast.sym.setType(ast.type);
            ast.sym.typeCheckStatus = this.checker.getTypeCheckFinishedStatus()
          }else {
            this.typeCheck(ast)
          }
          if(isSetter && accessorType) {
            ast = this.cast(ast, accessorType)
          }
          symbol.container = container;
          paramTable.publicMembers.add(symbol.name, symbol)
        }
        this.scope = tmpParamScope
      }else {
        this.typeCheck(funcDecl.args);
        for(var p = 0;p < paramLen;p++) {
          signature.parameters[p].parameter.typeLink.type = funcDecl.args.members[p].type;
          if(funcDecl.args.members[p].parameterPropertySym) {
            funcDecl.args.members[p].parameterPropertySym.setType(funcDecl.args.members[p].type)
          }
        }
        if(funcDecl.fncFlags & TypeScript.FncFlags.IndexerMember) {
          if(!paramLen || paramLen > 1) {
            this.checker.errorReporter.simpleError(funcDecl, "Index signatures may take only one parameter")
          }else {
            if(funcDecl.args.members[0].type == this.checker.numberType) {
              fnType.index.flags |= TypeScript.SignatureFlags.IsNumberIndexer
            }else {
              if(funcDecl.args.members[0].type == this.checker.stringType) {
                fnType.index.flags |= TypeScript.SignatureFlags.IsStringIndexer
              }else {
                this.checker.errorReporter.simpleError(funcDecl, "Index signatures may only take 'string' or 'number' as their parameter")
              }
            }
          }
        }
      }
      if(funcDecl.bod && !funcDecl.isSignature()) {
        if(!funcDecl.isConstructor) {
          this.addFormals(container, signature, funcTable)
        }else {
          this.addConstructorLocalArgs(funcDecl.type.symbol, funcDecl.args, funcTable, TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.ClassMethod));
          if(this.thisClassNode && this.thisClassNode.extendsList) {
            var tmpScope = this.scope;
            var funcMembers = new TypeScript.ScopedMembers(funcTable);
            this.scope = new TypeScript.FilteredSymbolScopeBuilder(funcMembers, prevScope, funcDecl.type.symbol, function(sym) {
              return sym.kind() == TypeScript.SymbolKind.Parameter
            });
            this.typeCheckBaseCalls(this.thisClassNode.extendsList);
            this.scope = tmpScope
          }
        }
        var prevMod = this.checker.currentModDecl;
        if(funcDecl.type && funcDecl.type.symbol && !funcDecl.isMethod() && funcDecl.type.symbol.declModule) {
          this.checker.currentModDecl = funcDecl.type.symbol.declModule
        }
        this.typeCheck(funcDecl.bod);
        this.checker.currentModDecl = prevMod;
        if(this.checker.checkControlFlow) {
          var cfg = funcDecl.buildControlFlow();
          if(this.checker.printControlFlowGraph) {
            cfg.print(this.checker.errorReporter.outfile)
          }
          cfg.reportUnreachable(this.checker.errorReporter);
          if(this.checker.checkControlFlowUseDef) {
            cfg.useDef(this.checker.errorReporter, funcDecl.type.symbol)
          }
        }
        if(funcDecl.isConstructor) {
          var fns = funcDecl.scopes;
          var fnsLen = fns.members.length;
          var freeVars;
          var sym;
          var j = 0;
          for(;j < fnsLen;j++) {
            var fn = fns.members[j];
            if(!fn.isSignature()) {
              if(TypeScript.hasFlag(fn.fncFlags, TypeScript.FncFlags.Method) && !TypeScript.hasFlag(fn.fncFlags, TypeScript.FncFlags.Static)) {
                this.checkPromoteFreeVars(fn, funcDecl.type.symbol)
              }
            }
          }
        }
      }
      this.scope = prevScope;
      this.thisFnc = prevFnc;
      this.thisClassNode = prevClassNode;
      this.enclosingFncIsMethod = prevMethodStatus;
      this.thisType = prevThisType;
      this.checker.locationInfo = prevLocationInfo;
      this.checker.currentModDecl = prevModDecl;
      signature.typeCheckStatus = this.checker.getTypeCheckFinishedStatus();
      if(funcDecl.returnTypeAnnotation) {
        this.checkForVoidConstructor(funcDecl.returnTypeAnnotation.type, funcDecl.returnTypeAnnotation);
        if(signature.returnType.type == null) {
          this.checker.resolveTypeLink(this.scope, signature.returnType, false)
        }
      }else {
        if(targetReturnType) {
          signature.returnType.type = targetReturnType
        }
      }
      if(!(fgSym.flags & TypeScript.SymbolFlags.RecursivelyReferenced) && funcDecl.returnStatementsWithExpressions.length > 0) {
        var collection = {getLength:function() {
          return funcDecl.returnStatementsWithExpressions.length
        }, setTypeAtIndex:function(index, type) {
          funcDecl.returnStatementsWithExpressions[index].type = type
        }, getTypeAtIndex:function(index) {
          return funcDecl.returnStatementsWithExpressions[index].type
        }};
        var bestCommonReturnType = funcDecl.returnStatementsWithExpressions[0].type;
        bestCommonReturnType = this.checker.findBestCommonType(bestCommonReturnType, null, collection);
        if(bestCommonReturnType) {
          signature.returnType.type = this.checker.widenType(bestCommonReturnType)
        }else {
          for(var i = 0;i < funcDecl.returnStatementsWithExpressions.length;i++) {
            this.checker.errorReporter.simpleError(funcDecl.returnStatementsWithExpressions[i], "Incompatible return type")
          }
          signature.returnType.type = this.anyType
        }
      }
      if(signature.returnType.type == null) {
        if(TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.HasReturnExpression)) {
          if(this.checker.styleSettings.implicitAny) {
            this.checker.errorReporter.styleError(funcDecl, "type implicitly set to 'any'")
          }
          signature.returnType.type = this.anyType
        }else {
          signature.returnType.type = this.voidType
        }
      }else {
        if(signature.returnType.type == this.nullType || signature.returnType.type == this.checker.undefinedType) {
          signature.returnType.type = this.anyType
        }else {
          if(signature.returnType.type != this.voidType && (signature.returnType.type != this.checker.undefinedType && signature.returnType.type != this.anyType) && funcDecl.returnTypeAnnotation) {
            if(!funcDecl.isSignature() && !funcDecl.isConstructor && !TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.HasReturnExpression) && !TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.IsFatArrowFunction)) {
              var onlyHasThrow = funcDecl.bod.members.length > 0 && funcDecl.bod.members[0].nodeType == TypeScript.NodeType.Throw;
              if(!onlyHasThrow) {
                this.checker.errorReporter.simpleError(funcDecl, "Function declared a non-void return type, but has no return expression")
              }
            }
          }
        }
      }
      if(setNewTargetType) {
        this.checker.unsetContextualType()
      }
      if(funcDecl.accessorSymbol) {
        var accessorType = funcDecl.accessorSymbol.getType();
        if(accessorType) {
          if(TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.GetAccessor) && accessorType != signature.returnType.type || funcDecl.args.members.length > 0 && accessorType != funcDecl.args.members[0].type) {
            this.checker.errorReporter.simpleError(funcDecl, "Getter and setter types do not agree")
          }
        }else {
          if(TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.GetAccessor)) {
            funcDecl.accessorSymbol.setType(signature.returnType.type)
          }else {
            if(funcDecl.args.members.length != 1) {
              this.checker.errorReporter.simpleError(funcDecl, "Setters may have one and only one argument")
            }else {
              funcDecl.accessorSymbol.setType(funcDecl.args.members[0].type)
            }
          }
        }
      }
      this.typeCheckOverloadSignatures(fnType, funcDecl);
      return funcDecl
    };
    TypeFlow.prototype.typeCheckBases = function(type) {
      var seenInterface = false;
      var bases = type.extendsList;
      if(bases) {
        var len = bases.length;
        this.inNewTargetTypeCheck = true;
        if(len > 0) {
          type.typeFlags |= TypeScript.TypeFlags.HasBaseType
        }
        for(var i = 0;i < len;i++) {
          var base = bases[i];
          var baseTypeOfObject = base.symbol && base.symbol.name == "Object" && base.symbol.container == this.checker.gloMod;
          if(baseTypeOfObject) {
            type.typeFlags |= TypeScript.TypeFlags.HasBaseTypeOfObject
          }
          if(base.isClassInstance()) {
            if(type.isClassInstance() && !this.checker.typeStatusIsFinished(base.symbol.typeCheckStatus) && base.symbol.declAST) {
              this.checker.errorReporter.simpleErrorFromSym(base.symbol, "Base type '" + base.symbol.name + "' is referenced before its declaration");
              this.typeCheck(base.symbol.declAST)
            }
            if(this.currentScript) {
              this.currentScript.requiresInherits = true
            }
            if(!type.isClassInstance()) {
              this.checker.errorReporter.simpleErrorFromSym(base.symbol, "Interface base type must be interface")
            }else {
              if(seenInterface) {
                this.checker.errorReporter.simpleErrorFromSym(base.symbol, "Class may not follow interface as base type")
              }
            }
          }else {
            if(base.isModuleType()) {
              this.checker.errorReporter.simpleErrorFromSym(base.symbol, "Types may not be derived from module types")
            }else {
              if(base.members) {
                if(!seenInterface) {
                  seenInterface = true
                }
              }else {
                if(!type.isClassInstance()) {
                  this.checker.errorReporter.simpleErrorFromSym(base.symbol, "Interface base type must be interface")
                }else {
                  this.checker.errorReporter.simpleErrorFromSym(base.symbol, "Base type must be interface or class")
                }
                break
              }
            }
          }
        }
        this.inNewTargetTypeCheck = false
      }
    };
    TypeFlow.prototype.checkMembersImplementInterfaces = function(implementingType) {
      var instanceType = implementingType.getInstanceType();
      if(instanceType.implementsList) {
        var len = instanceType.implementsList.length;
        this.inNewTargetTypeCheck = true;
        for(var i = 0;i < len;i++) {
          var interfaceType = instanceType.implementsList[i];
          var comparisonInfo = new TypeScript.TypeComparisonInfo;
          if(!this.checker.sourceIsSubtypeOfTarget(instanceType, interfaceType, comparisonInfo)) {
            var emsg = "Class '" + instanceType.getTypeName() + "' declares interface '" + interfaceType.getTypeName() + "' but does not implement it";
            if(!comparisonInfo.message) {
              this.checker.errorReporter.simpleErrorFromSym(instanceType.symbol, emsg)
            }else {
              this.checker.errorReporter.simpleErrorFromSym(instanceType.symbol, emsg + ": " + comparisonInfo.message)
            }
          }
        }
        this.inNewTargetTypeCheck = false
      }
    };
    TypeFlow.prototype.typeCheckBaseCalls = function(bases) {
      if(bases == null) {
        return
      }
      var basesLen = bases.members.length;
      for(var i = 0;i < basesLen;i++) {
        var baseExpr = bases.members[i];
        var baseSymbol = null;
        if(baseExpr.nodeType == TypeScript.NodeType.Call) {
          this.typeCheckNew(baseExpr)
        }
      }
    };
    TypeFlow.prototype.assertUniqueNamesInBaseTypes = function(names, type, classDecl, checkUnique) {
      var _this = this;
      if(type) {
        if(type.members) {
          type.members.publicMembers.map(function(key, s, c) {
            var sym = s;
            var dup = names.lookup(sym.name);
            if(dup) {
              if(checkUnique) {
                _this.checker.errorReporter.simpleError(classDecl, "duplicate member name in bases for " + classDecl.name.text + ": " + type.symbol.name + " and " + dup.container.name + " both contain member with name " + sym.name)
              }
            }else {
              names.add(sym.name, sym)
            }
          }, null)
        }
        if(type.extendsList) {
          var len = type.extendsList.length;
          for(var i = 0;i < len;i++) {
            if(!(type.extendsList[i].symbol.flags & TypeScript.SymbolFlags.RecursivelyReferenced)) {
              this.assertUniqueNamesInBaseTypes(names, type.extendsList[i], classDecl, checkUnique)
            }
          }
        }
      }
    };
    TypeFlow.prototype.checkBaseTypeMemberInheritance = function(derivedType, derivedTypeDecl) {
      var _this = this;
      var instanceType = derivedType.getInstanceType();
      if(instanceType.extendsList == null) {
        return
      }
      var len = instanceType.extendsList.length;
      if(len > 0) {
        var names = new TypeScript.StringHashTable;
        if(instanceType.isClassInstance()) {
          for(var i = 0;i < len;i++) {
            this.assertUniqueNamesInBaseTypes(names, instanceType.extendsList[i], derivedTypeDecl, i > 0)
          }
        }
        if(instanceType.members) {
          instanceType.members.publicMembers.map(function(key, s, c) {
            var sym = s;
            for(var j = 0;j < len;j++) {
              var base = instanceType.extendsList[j];
              if(base.memberScope == null) {
                _this.checker.errorReporter.simpleError(derivedTypeDecl, "Base type '" + base.symbol.name + "' lacks an implementation.")
              }else {
                var bSym = base.memberScope.find(sym.name, false, false);
                if(bSym) {
                  var aType = sym.getType();
                  var bType = bSym.getType();
                  if(!_this.checker.sourceIsSubtypeOfTarget(aType, bType)) {
                    _this.checker.errorReporter.simpleErrorFromSym(sym, "Type of overridden member '" + sym.name + "' is not subtype of original member defined by type '" + bSym.container.name + "'")
                  }else {
                    if(sym.kind() == TypeScript.SymbolKind.Type && bSym.kind() == TypeScript.SymbolKind.Field) {
                      _this.checker.errorReporter.simpleErrorFromSym(sym, "Cannot override field '" + sym.name + "' with method")
                    }
                  }
                }
              }
            }
          }, null)
        }
      }
    };
    TypeFlow.prototype.typeCheckClass = function(classDecl) {
      var typeSymbol = classDecl.type.symbol;
      if(typeSymbol.typeCheckStatus == TypeScript.TypeCheckStatus.Finished) {
        return classDecl
      }else {
        if(typeSymbol.typeCheckStatus == TypeScript.TypeCheckStatus.Started) {
          return classDecl
        }else {
          typeSymbol.typeCheckStatus = TypeScript.TypeCheckStatus.Started;
          this.checker.addStartedPTO(typeSymbol)
        }
      }
      var prevScope = this.scope;
      var svClassNode = this.thisClassNode;
      this.thisClassNode = classDecl;
      var classType = classDecl.type;
      this.typeCheckBases(classType.instanceType);
      var prevThisType = this.thisType;
      this.thisType = classType.instanceType;
      this.scope = classType.instanceType.containedScope;
      if(classDecl.constructorDecl) {
        this.scope = classType.instanceType.constructorScope;
        var ssb = this.scope;
        var funcTable = ssb.valueMembers.allMembers;
        this.addConstructorLocalArgs(classDecl.constructorDecl.type.symbol, classDecl.constructorDecl.args, funcTable, true)
      }
      this.typeCheck(classDecl.members);
      typeSymbol.typeCheckStatus = TypeScript.TypeCheckStatus.Finished;
      this.checkBaseTypeMemberInheritance(classType, classDecl);
      this.checkMembersImplementInterfaces(classType);
      this.typeCheckOverloadSignatures(classType, classDecl);
      this.typeCheckOverloadSignatures(classType.instanceType, classDecl);
      if(!classDecl.constructorDecl) {
        if(classDecl.baseClass && classDecl.baseClass.members.length && classDecl.baseClass.members[0].type && classDecl.baseClass.members[0].type.symbol.type.isClass()) {
          TypeScript.cloneParentConstructGroupForChildType(classDecl.type, classDecl.baseClass.members[0].type.symbol.type)
        }
      }
      this.thisType = prevThisType;
      this.thisClassNode = svClassNode;
      this.scope = prevScope;
      return classDecl
    };
    TypeFlow.prototype.typeCheckOverloadSignatures = function(type, ast) {
      if(type.call) {
        type.call.typeCheck(this.checker, ast, type.construct != null)
      }
      if(type.construct) {
        type.construct.typeCheck(this.checker, ast, false)
      }
      if(type.index) {
        type.index.typeCheck(this.checker, ast, false)
      }
    };
    TypeFlow.prototype.typeCheckInterface = function(interfaceDecl) {
      this.typeCheckBases(interfaceDecl.type);
      this.typeCheck(interfaceDecl.members);
      this.checkBaseTypeMemberInheritance(interfaceDecl.type, interfaceDecl);
      if(interfaceDecl.extendsList) {
        for(var i = 0;i < interfaceDecl.extendsList.members.length;i++) {
          if(interfaceDecl.extendsList.members[i].type.call) {
            if(interfaceDecl.type.call) {
              interfaceDecl.type.call.signatures = interfaceDecl.type.call.signatures.concat(interfaceDecl.extendsList.members[i].type.call.signatures)
            }else {
              interfaceDecl.type.call = interfaceDecl.extendsList.members[i].type.call
            }
          }
          if(interfaceDecl.extendsList.members[i].type.construct) {
            if(interfaceDecl.type.construct) {
              interfaceDecl.type.construct.signatures = interfaceDecl.type.construct.signatures.concat(interfaceDecl.extendsList.members[i].type.construct.signatures)
            }else {
              interfaceDecl.type.construct = interfaceDecl.extendsList.members[i].type.construct
            }
          }
          if(interfaceDecl.extendsList.members[i].type.index) {
            if(interfaceDecl.type.index) {
              interfaceDecl.type.index.signatures = interfaceDecl.type.index.signatures.concat(interfaceDecl.extendsList.members[i].type.index.signatures)
            }else {
              interfaceDecl.type.index = interfaceDecl.extendsList.members[i].type.index
            }
          }
        }
      }
      return interfaceDecl
    };
    TypeFlow.prototype.typeCheckImportDecl = function(importDecl) {
      var mod = importDecl.alias.type;
      var sym = null;
      var prevInImportTC = this.inImportTypeCheck;
      this.inImportTypeCheck = true;
      this.typeCheck(importDecl.alias);
      mod = importDecl.alias.type;
      if(mod == null) {
        this.checker.errorReporter.simpleError(importDecl.alias, "Could not resolve module alias '" + importDecl.id.text + "'");
        mod = this.checker.anyType;
        importDecl.id.sym.type = mod
      }
      importDecl.id.type = mod;
      sym = mod.symbol;
      if(!mod.isModuleType()) {
        this.checker.errorReporter.simpleError(importDecl.alias, "A module cannot be aliased to a non-module type")
      }else {
        sym.type = mod;
        if(this.checker.currentModDecl && this.checker.currentModDecl.mod) {
          this.checker.currentModDecl.mod.importedModules.push(importDecl)
        }
        importDecl.id.sym.type = mod;
        if(mod.symbol && mod.symbol.declAST) {
          mod.symbol.declAST.modFlags &= ~TypeScript.ModuleFlags.ShouldEmitModuleDecl
        }
      }
      this.inImportTypeCheck = prevInImportTC;
      return importDecl
    };
    TypeFlow.prototype.typeCheckModule = function(moduleDecl) {
      if(!moduleDecl.mod) {
        return moduleDecl
      }
      if(this.currentScript) {
        this.currentScript.requiresGlobal = true
      }
      var mod = moduleDecl.mod;
      var sym = null;
      var prevScope = this.scope;
      var prevThisType = this.thisType;
      var prevCurrentModDecl = this.checker.currentModDecl;
      this.checker.currentModDecl = moduleDecl;
      if(!this.inImportTypeCheck && prevCurrentModDecl && TypeScript.hasFlag(moduleDecl.modFlags, TypeScript.ModuleFlags.IsDynamic) && !TypeScript.hasFlag(moduleDecl.modFlags, TypeScript.ModuleFlags.Ambient)) {
        this.checker.errorReporter.simpleError(moduleDecl, "Dynamic modules may not be nested within other modules")
      }
      this.thisType = null;
      this.scope = mod.containedScope;
      this.typeCheck(moduleDecl.members);
      sym = mod.symbol;
      this.checker.currentModDecl = prevCurrentModDecl;
      this.thisType = prevThisType;
      this.scope = prevScope;
      moduleDecl.type = mod;
      if(sym) {
        sym.typeCheckStatus = TypeScript.TypeCheckStatus.Finished
      }
      return moduleDecl
    };
    TypeFlow.prototype.typeCheckFor = function(forStmt) {
      forStmt.init = this.typeCheck(forStmt.init);
      this.nestingLevel++;
      forStmt.cond = this.typeCheck(forStmt.cond);
      this.typeCheckCondExpr(forStmt.cond);
      forStmt.incr = this.typeCheck(forStmt.incr);
      this.nestingLevel--;
      forStmt.body = this.typeCheck(forStmt.body);
      this.typeCheckCompoundStmtBlock(forStmt.body, "for statement");
      forStmt.type = this.voidType;
      return forStmt
    };
    TypeFlow.prototype.typeCheckWith = function(withStmt) {
      if(this.checker.errorsOnWith) {
        this.checker.errorReporter.simpleError(withStmt.expr, "All symbols within a 'with' block will be typed as 'any'")
      }
      withStmt.expr = this.typeCheck(withStmt.expr);
      this.checker.inWith = true;
      withStmt.body = this.typeCheck(withStmt.body);
      this.typeCheckCompoundStmtBlock(withStmt.body, "with statement");
      this.checker.inWith = false;
      return withStmt
    };
    TypeFlow.prototype.typeCheckForIn = function(forInStmt) {
      forInStmt.obj = this.typeCheck(forInStmt.obj);
      forInStmt.lval = this.cast(this.typeCheck(forInStmt.lval), this.checker.stringType);
      if(forInStmt.lval.nodeType == TypeScript.NodeType.VarDecl) {
        var varDecl = forInStmt.lval;
        if(varDecl.typeExpr) {
          this.checker.errorReporter.simpleError(varDecl, "Variable declarations for for/in expressions may not contain a type annotation")
        }
        if(varDecl.sym) {
          varDecl.sym.setType(this.checker.stringType)
        }
      }
      forInStmt.body = this.typeCheck(forInStmt.body);
      this.typeCheckCompoundStmtBlock(forInStmt.body, "for in statement");
      return forInStmt
    };
    TypeFlow.prototype.typeCheckWhile = function(whileStmt) {
      whileStmt.cond = this.typeCheck(whileStmt.cond);
      this.typeCheckCondExpr(whileStmt.cond);
      whileStmt.body = this.typeCheck(whileStmt.body);
      this.typeCheckCompoundStmtBlock(whileStmt.body, "while statement");
      whileStmt.type = this.voidType;
      return whileStmt
    };
    TypeFlow.prototype.typeCheckDoWhile = function(doWhileStmt) {
      doWhileStmt.cond = this.typeCheck(doWhileStmt.cond);
      this.typeCheckCondExpr(doWhileStmt.cond);
      doWhileStmt.body = this.typeCheck(doWhileStmt.body);
      this.typeCheckCompoundStmtBlock(doWhileStmt.body, "do while statement");
      doWhileStmt.type = this.voidType;
      return doWhileStmt
    };
    TypeFlow.prototype.typeCheckCondExpr = function(cond) {
      if(this.checker.styleSettings.assignmentInCond) {
        if(cond !== null && cond.nodeType >= TypeScript.NodeType.Asg && cond.nodeType <= TypeScript.NodeType.LastAsg) {
          this.checker.errorReporter.simpleError(cond, "top-level assignment statement in conditional expression")
        }
      }
    };
    TypeFlow.prototype.typeCheckCompoundStmtBlock = function(stmts, stmtType) {
      if(this.checker.styleSettings.blockInCompoundStmt && stmts) {
        if(stmts.nodeType != TypeScript.NodeType.Block) {
          this.checker.errorReporter.styleError(stmts, stmtType + " requires a block")
        }
      }
    };
    TypeFlow.prototype.typeCheckIf = function(ifStmt) {
      ifStmt.cond = this.typeCheck(ifStmt.cond);
      this.typeCheckCondExpr(ifStmt.cond);
      ifStmt.thenBod = this.typeCheck(ifStmt.thenBod);
      ifStmt.elseBod = this.typeCheck(ifStmt.elseBod);
      this.typeCheckCompoundStmtBlock(ifStmt.thenBod, "if statement");
      this.typeCheckCompoundStmtBlock(ifStmt.elseBod, "if statement");
      ifStmt.type = this.voidType;
      return ifStmt
    };
    TypeFlow.prototype.typeFromAccessorFuncDecl = function(funcDecl) {
      if(!funcDecl.isAccessor()) {
        return null
      }
      if(TypeScript.hasFlag(funcDecl.fncFlags, TypeScript.FncFlags.GetAccessor)) {
        return funcDecl.type.call.signatures[0].returnType.type
      }else {
        return funcDecl.type.call.signatures[0].parameters[0].getType()
      }
    };
    TypeFlow.prototype.typeCheckObjectLit = function(objectLit) {
      var resultType = new TypeScript.Type;
      resultType.symbol = new TypeScript.TypeSymbol(this.checker.anon, objectLit.minChar, this.checker.locationInfo.unitIndex, resultType);
      resultType.members = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
      resultType.memberScope = new TypeScript.SymbolTableScope(resultType.members, null, null, null, null);
      var aggScope = new TypeScript.SymbolAggregateScope(resultType.symbol);
      aggScope.addParentScope(resultType.memberScope);
      aggScope.addParentScope(this.scope);
      resultType.containedScope = aggScope;
      var memberDecls = objectLit.operand;
      var prevThisType = this.thisType;
      var acceptTargetType = false;
      var targetType = null;
      if(this.checker.hasTargetType()) {
        targetType = this.checker.getTargetTypeContext().contextualType;
        if(targetType && targetType.symbol && !this.checker.typeStatusIsFinished(targetType.symbol.typeCheckStatus)) {
          if(targetType.symbol.declAST) {
            this.typeCheck(targetType.symbol.declAST)
          }
        }
        acceptTargetType = true
      }
      if(memberDecls) {
        for(var i = 0, len = memberDecls.members.length;i < len;i++) {
          var binex = memberDecls.members[i];
          var id = binex.operand1;
          var text;
          var targetMember = null;
          var fieldSymbol = null;
          if(id.nodeType == TypeScript.NodeType.Name) {
            text = id.text
          }else {
            if(id.nodeType == TypeScript.NodeType.QString) {
              var idText = id.text;
              text = idText.substring(1, idText.length - 1)
            }else {
              this.checker.errorReporter.simpleError(objectLit, "malformed object literal");
              resultType = this.anyType;
              break
            }
          }
          if(acceptTargetType && targetType.memberScope) {
            targetMember = targetType.memberScope.find(text, false, false)
          }
          if(binex.operand2.nodeType == TypeScript.NodeType.FuncDecl && binex.operand2.isAccessor()) {
            var funcDecl = binex.operand2;
            var accessorSym = resultType.members.publicMembers.lookup(text);
            accessorSym = this.checker.createAccessorSymbol(funcDecl, accessorSym, resultType, true, false, resultType.memberScope, null);
            funcDecl.accessorSymbol = accessorSym;
            fieldSymbol = accessorSym;
            if(id.nodeType == TypeScript.NodeType.Name) {
              id.sym = accessorSym
            }
          }
          this.checker.typeCheckWithContextualType(acceptTargetType && targetMember ? targetMember.getType() : null, false, acceptTargetType, binex.operand2);
          if(acceptTargetType && targetMember) {
            if(binex.operand2.type == this.anyType || this.checker.sourceIsAssignableToTarget(binex.operand2.type, targetMember.getType()) || binex.operand2.nodeType == TypeScript.NodeType.FuncDecl && binex.operand2.isAccessor() && this.typeFromAccessorFuncDecl(binex.operand2) == targetMember.getType()) {
              binex.operand1.type = targetMember.getType()
            }
          }else {
            binex.operand2.type = binex.operand2.type == this.checker.undefinedType ? this.anyType : binex.operand2.type
          }
          if(fieldSymbol == null) {
            var memberType = binex.operand2.type;
            var field = new TypeScript.ValueLocation;
            fieldSymbol = new TypeScript.FieldSymbol(text, id.minChar, this.checker.locationInfo.unitIndex, true, field);
            fieldSymbol.flags |= TypeScript.SymbolFlags.Property;
            field.symbol = fieldSymbol;
            fieldSymbol.typeCheckStatus = this.checker.getTypeCheckFinishedStatus();
            field.typeLink = new TypeScript.TypeLink;
            field.typeLink.type = memberType;
            resultType.members.publicMembers.add(text, fieldSymbol)
          }
          fieldSymbol.isObjectLitField = true
        }
      }
      this.thisType = prevThisType;
      objectLit.type = resultType;
      if(targetType) {
        objectLit.targetType = targetType
      }
    };
    TypeFlow.prototype.typeCheckArrayLit = function(arrayLit) {
      var elements = arrayLit.operand;
      var elementType = this.anyType;
      var targetElementType = null;
      var comparisonInfo = new TypeScript.TypeComparisonInfo;
      comparisonInfo.onlyCaptureFirstError = true;
      if(this.checker.hasTargetType()) {
        var targetType = this.checker.getTargetTypeContext().contextualType;
        if(targetType.elementType) {
          targetElementType = targetType.elementType
        }
      }
      if(elements) {
        var prevInArrayElemTypeCheck = this.inArrayElementTypeCheck;
        this.inArrayElementTypeCheck = true;
        this.checker.typeCheckWithContextualType(targetElementType, this.checker.inProvisionalTypecheckMode(), targetElementType != null, elements);
        this.inArrayElementTypeCheck = prevInArrayElemTypeCheck;
        elementType = elements.members[0].type;
        var collection = {getLength:function() {
          return elements.members.length
        }, setTypeAtIndex:function(index, type) {
          elements.members[index].type = type
        }, getTypeAtIndex:function(index) {
          return elements.members[index].type
        }};
        elementType = this.checker.findBestCommonType(elementType, targetElementType, collection, comparisonInfo);
        if(elementType == this.checker.undefinedType || !prevInArrayElemTypeCheck && elementType == this.nullType) {
          elementType = this.anyType
        }
      }
      if(!elementType) {
        var emsg = "Incompatible types in array literal expression";
        if(!comparisonInfo.message) {
          this.checker.errorReporter.simpleError(arrayLit, emsg)
        }else {
          this.checker.errorReporter.simpleError(arrayLit, emsg + ": " + comparisonInfo.message)
        }
        elementType = this.anyType
      }else {
        if(targetElementType) {
          if(this.checker.sourceIsAssignableToTarget(elementType, targetElementType)) {
            elementType = targetElementType
          }
        }
      }
      arrayLit.type = this.checker.makeArrayType(elementType)
    };
    TypeFlow.prototype.checkForVoidConstructor = function(type, ast) {
      if(type && type.construct && type.construct.signatures.length > 0) {
        for(var i = 0;i < type.construct.signatures.length;i++) {
          if(type.construct.signatures[i].returnType.type == this.checker.voidType) {
            this.checker.errorReporter.simpleError(ast, "Constructors may not have a return type of 'void'");
            break
          }
        }
      }
    };
    TypeFlow.prototype.typeCheckReturn = function(returnStmt) {
      if(this.thisFnc) {
        var targetType = null;
        if(this.checker.hasTargetType()) {
          var tcContext = this.checker.getTargetTypeContext();
          var accessorType = tcContext.targetAccessorType;
          if(accessorType) {
            targetType = accessorType
          }else {
            var targetSig = this.checker.getTargetTypeContext().targetSig;
            if(targetSig && targetSig.returnType.type != this.voidType) {
              targetType = targetSig.returnType.type
            }
          }
        }
        if(returnStmt.returnExpression) {
          this.thisFnc.fncFlags |= TypeScript.FncFlags.HasReturnExpression;
          if(targetType == null && this.thisFnc.returnTypeAnnotation && this.thisFnc.returnTypeAnnotation.type && this.thisFnc.returnTypeAnnotation.type != this.voidType) {
            targetType = this.thisFnc.returnTypeAnnotation.type
          }
          this.checker.typeCheckWithContextualType(targetType, this.checker.inProvisionalTypecheckMode(), targetType != null, returnStmt.returnExpression);
          var expectedReturnType = this.thisFnc.returnTypeAnnotation && this.thisFnc.returnTypeAnnotation.type ? this.thisFnc.returnTypeAnnotation.type : targetType;
          if(expectedReturnType) {
            if(expectedReturnType == this.voidType && returnStmt.returnExpression.type != this.voidType) {
              this.checker.errorReporter.simpleError(returnStmt, "Return with value expression in void function");
              returnStmt.type = returnStmt.returnExpression.type
            }else {
              returnStmt.returnExpression = this.cast(returnStmt.returnExpression, expectedReturnType);
              returnStmt.type = expectedReturnType
            }
          }else {
            if(targetType) {
              if(returnStmt.returnExpression.type != this.voidType) {
                returnStmt.returnExpression = this.cast(returnStmt.returnExpression, targetType)
              }else {
                returnStmt.returnExpression.type = targetType
              }
            }
            returnStmt.type = returnStmt.returnExpression.type
          }
          this.thisFnc.returnStatementsWithExpressions[this.thisFnc.returnStatementsWithExpressions.length] = returnStmt
        }else {
          returnStmt.type = targetType == null ? this.checker.voidType : targetType
        }
      }
      return returnStmt
    };
    TypeFlow.prototype.typeCheckInstOf = function(ast) {
      var binex = ast;
      binex.operand1 = this.typeCheck(binex.operand1);
      binex.operand2 = this.typeCheck(binex.operand2);
      if(!((binex.operand1.type == this.checker.anyType || this.checker.sourceIsSubtypeOfTarget(binex.operand1.type, this.objectInterfaceType)) && (binex.operand2.type == this.anyType || this.checker.sourceIsSubtypeOfTarget(binex.operand2.type, this.functionInterfaceType)))) {
        this.checker.errorReporter.simpleError(ast, "The instanceof operator requires the left operand to be of type Any or an object type, and the right operand to be of type Any or a subtype of the Function interface type")
      }
      binex.type = this.booleanType;
      return binex
    };
    TypeFlow.prototype.typeCheckCommaOperator = function(ast) {
      var binex = ast;
      binex.operand1 = this.typeCheck(binex.operand1);
      binex.operand2 = this.typeCheck(binex.operand2);
      binex.type = binex.operand2.type;
      return binex
    };
    TypeFlow.prototype.typeCheckLogOr = function(binex) {
      binex.operand1 = this.typeCheck(binex.operand1);
      binex.operand2 = this.typeCheck(binex.operand2);
      var leftType = binex.operand1.type;
      var rightType = binex.operand2.type;
      if(leftType == this.checker.anyType || rightType == this.checker.anyType) {
        binex.type = this.checker.anyType
      }else {
        if(leftType == this.checker.booleanType) {
          if(rightType == this.checker.booleanType) {
            binex.type = this.checker.booleanType
          }else {
            binex.type = this.checker.anyType
          }
        }else {
          if(leftType == this.checker.numberType) {
            if(rightType == this.checker.numberType) {
              binex.type = this.checker.numberType
            }else {
              binex.type = this.checker.anyType
            }
          }else {
            if(leftType == this.checker.stringType) {
              if(rightType == this.checker.stringType) {
                binex.type = this.checker.stringType
              }else {
                binex.type = this.checker.anyType
              }
            }else {
              if(this.checker.sourceIsSubtypeOfTarget(leftType, rightType)) {
                binex.type = rightType
              }else {
                if(this.checker.sourceIsSubtypeOfTarget(rightType, leftType)) {
                  binex.type = leftType
                }else {
                  binex.type = this.checker.anyType
                }
              }
            }
          }
        }
      }
      return binex
    };
    TypeFlow.prototype.typeCheckLogAnd = function(binex) {
      binex.operand1 = this.typeCheck(binex.operand1);
      binex.operand2 = this.typeCheck(binex.operand2);
      binex.type = binex.operand2.type;
      return binex
    };
    TypeFlow.prototype.tryAddCandidates = function(signature, actuals, exactCandidates, conversionCandidates, comparisonInfo) {
      var lowerBound = signature.nonOptionalParameterCount;
      var upperBound = signature.parameters.length;
      var formalLen = lowerBound;
      var acceptable = false;
      if(actuals.length >= lowerBound && (signature.hasVariableArgList || actuals.length <= upperBound)) {
        formalLen = signature.hasVariableArgList ? signature.parameters.length : actuals.length;
        acceptable = true
      }
      var repeatType = null;
      if(acceptable || signature.hasVariableArgList) {
        if(signature.hasVariableArgList) {
          formalLen -= 1;
          repeatType = signature.parameters[formalLen].parameter.typeLink.type;
          repeatType = repeatType.elementType;
          acceptable = actuals.length >= formalLen
        }
        var len = actuals.length;
        var exact = acceptable;
        var convert = acceptable;
        for(var i = 0;i < len;i++) {
          var typeA;
          if(i < formalLen) {
            typeA = signature.parameters[i].parameter.typeLink.type
          }else {
            typeA = repeatType
          }
          var typeB = actuals[i];
          if(!typeA || !typeB || !this.checker.typesAreIdentical(typeA, typeB)) {
            exact = false
          }
          if(!this.checker.sourceIsAssignableToTarget(typeB, typeA, comparisonInfo)) {
            convert = false
          }
          if(!(exact || convert)) {
            break
          }
        }
        if(exact) {
          exactCandidates[exactCandidates.length] = signature
        }else {
          if(convert && exactCandidates.length == 0) {
            conversionCandidates[conversionCandidates.length] = signature
          }
        }
      }
    };
    TypeFlow.prototype.resolveOverload = function(application, group) {
      var rd = this.resolutionDataCache.getResolutionData();
      var actuals = rd.actuals;
      var exactCandidates = rd.exactCandidates;
      var conversionCandidates = rd.conversionCandidates;
      var candidate = null;
      var hasOverloads = group.signatures.length > 1;
      var comparisonInfo = new TypeScript.TypeComparisonInfo;
      var args = null;
      var target = null;
      if(application.nodeType == TypeScript.NodeType.Call || application.nodeType == TypeScript.NodeType.New) {
        var callEx = application;
        args = callEx.args;
        target = callEx.target;
        if(callEx.args) {
          var len = callEx.args.members.length;
          for(var i = 0;i < len;i++) {
            actuals[i] = callEx.args.members[i].type
          }
        }
      }else {
        if(application.nodeType == TypeScript.NodeType.Index) {
          var binExp = application;
          target = binExp.operand1;
          args = new TypeScript.ASTList;
          args.members[0] = binExp.operand2;
          actuals[0] = binExp.operand2.type
        }
      }
      for(var j = 0, groupLen = group.signatures.length;j < groupLen;j++) {
        var signature = group.signatures[j];
        if(hasOverloads && signature == group.definitionSignature && !this.checker.canCallDefinitionSignature) {
          continue
        }
        if(!signature.returnType.type && signature.declAST && signature.typeCheckStatus != TypeScript.TypeCheckStatus.Finished) {
          this.typeCheckFunction(signature.declAST)
        }
        this.tryAddCandidates(signature, actuals, exactCandidates, conversionCandidates, comparisonInfo)
      }
      if(exactCandidates.length == 0) {
        var applicableCandidates = this.checker.getApplicableSignatures(conversionCandidates, args, comparisonInfo);
        if(applicableCandidates.length > 0) {
          var candidateInfo = this.checker.findMostApplicableSignature(applicableCandidates, args);
          if(candidateInfo.ambiguous) {
            this.checker.errorReporter.simpleError(target, "Ambiguous call expression - could not choose overload")
          }
          candidate = candidateInfo.sig
        }else {
          var emsg = "Supplied parameters do not match any signature of call target";
          if(comparisonInfo.message) {
            this.checker.errorReporter.simpleError(target, emsg + ":\n\t" + comparisonInfo.message)
          }else {
            this.checker.errorReporter.simpleError(target, emsg)
          }
        }
      }else {
        if(exactCandidates.length > 1) {
          var applicableSigs = [];
          for(var i = 0;i < exactCandidates.length;i++) {
            applicableSigs[i] = {signature:exactCandidates[i], hadProvisionalErrors:false}
          }
          var candidateInfo = this.checker.findMostApplicableSignature(applicableSigs, args);
          if(candidateInfo.ambiguous) {
            this.checker.errorReporter.simpleError(target, "Ambiguous call expression - could not choose overload")
          }
          candidate = candidateInfo.sig
        }else {
          candidate = exactCandidates[0]
        }
      }
      this.resolutionDataCache.returnResolutionData(rd);
      return candidate
    };
    TypeFlow.prototype.typeCheckNew = function(ast) {
      var callEx = ast;
      callEx.target = this.typeCheck(callEx.target);
      var target = callEx.target;
      if(target.type.construct || target.type.call) {
        this.preTypeCheckCallArgs(callEx.args)
      }else {
        callEx.args = this.typeCheck(callEx.args)
      }
      if(target.type == this.anyType) {
        callEx.type = this.anyType;
        callEx.args = this.typeCheck(callEx.args)
      }else {
        if(target.type.construct) {
          var signature = this.resolveOverload(callEx, target.type.construct);
          if(signature == null) {
            callEx.type = this.anyType
          }else {
            if(signature.returnType.type == this.voidType) {
              callEx.type = this.anyType;
              callEx.signature = signature
            }else {
              callEx.type = signature.returnType.type;
              callEx.signature = signature
            }
          }
        }else {
          if(target.type.call) {
            var signature = this.resolveOverload(callEx, target.type.call);
            if(signature == null) {
              callEx.type = this.anyType
            }else {
              if(signature.returnType.type == this.voidType || signature.returnType.type == this.anyType) {
                callEx.type = this.anyType;
                callEx.signature = signature
              }else {
                this.checker.errorReporter.simpleError(callEx.target, "new expression only valid on constructors")
              }
            }
          }else {
            if(target.type.elementType) {
              callEx.type = target.type
            }else {
              this.checker.errorReporter.invalidCall(callEx, callEx.nodeType, this.scope);
              callEx.type = this.anyType
            }
          }
        }
      }
      this.postTypeCheckCallArgs(callEx);
      return callEx
    };
    TypeFlow.prototype.preTypeCheckCallArgs = function(args) {
      if(!args) {
        return
      }
      for(var i = 0;i < args.members.length;i++) {
        switch(args.members[i].nodeType) {
          case TypeScript.NodeType.FuncDecl:
          ;
          case TypeScript.NodeType.ObjectLit:
          ;
          case TypeScript.NodeType.ArrayLit:
            continue;
          default:
            this.typeCheck(args.members[i]);
            break
        }
      }
    };
    TypeFlow.prototype.postTypeCheckCallArgs = function(callEx) {
      var acceptedTargetType = false;
      var i = 0;
      if(callEx.target && callEx.target.type && callEx.signature && callEx.args) {
        var sig = callEx.signature;
        if(sig && callEx.args.members.length >= sig.nonOptionalParameterCount) {
          acceptedTargetType = true;
          var targetType = null;
          var len = callEx.args.members.length < sig.parameters.length ? callEx.args.members.length : sig.parameters.length;
          for(i = 0;i < len;i++) {
            targetType = sig.parameters[i].getType();
            if(targetType && sig.hasVariableArgList && i >= sig.nonOptionalParameterCount - 1) {
              targetType = targetType.elementType
            }
            switch(callEx.args.members[i].nodeType) {
              case TypeScript.NodeType.FuncDecl:
              ;
              case TypeScript.NodeType.ObjectLit:
              ;
              case TypeScript.NodeType.ArrayLit:
                this.checker.typeCheckWithContextualType(targetType, this.checker.inProvisionalTypecheckMode(), !sig.parameters[i].declAST.isParenthesized, callEx.args.members[i]);
                break;
              default:
                continue
            }
          }
        }
      }
      if(!acceptedTargetType && callEx.args) {
        this.checker.killTargetType();
        for(i = 0;i < callEx.args.members.length;i++) {
          switch(callEx.args.members[i].nodeType) {
            case TypeScript.NodeType.FuncDecl:
            ;
            case TypeScript.NodeType.ObjectLit:
            ;
            case TypeScript.NodeType.ArrayLit:
              this.typeCheck(callEx.args.members[i]);
              break;
            default:
              continue
          }
        }
      }
    };
    TypeFlow.prototype.typeCheckCall = function(ast) {
      var callEx = ast;
      if(this.checker.styleSettings.newMustBeUsed && ast.nodeType == TypeScript.NodeType.New) {
        if(TypeScript.hasFlag(ast.flags, TypeScript.ASTFlags.IsStatement)) {
          this.checker.errorReporter.styleError(ast, "use of new expression as a statement")
        }
      }else {
        if(!this.checker.styleSettings.evalOK && ast.nodeType == TypeScript.NodeType.Call) {
          if(callEx.target.nodeType == TypeScript.NodeType.Name && callEx.target.text == "eval") {
            this.checker.errorReporter.styleError(callEx, "eval not permitted")
          }
        }
      }
      if(callEx.target.nodeType == TypeScript.NodeType.FuncDecl) {
        callEx.target.isInlineCallLiteral = true
      }
      var prevInSuperCall = this.inSuperCall;
      if(callEx.target.nodeType == TypeScript.NodeType.Super) {
        this.inSuperCall = true
      }
      callEx.target = this.typeCheck(callEx.target);
      this.preTypeCheckCallArgs(callEx.args);
      var target = callEx.target;
      if(target.type == null || target.type == this.anyType || this.functionInterfaceType && target.type == this.functionInterfaceType) {
        callEx.type = this.anyType
      }else {
        var fnType = target.type;
        if(fnType.call) {
          var signature = this.resolveOverload(callEx, fnType.call);
          if(signature == null) {
            callEx.type = this.anyType
          }else {
            callEx.type = signature.returnType.type;
            callEx.signature = signature
          }
        }else {
          if(callEx.target.nodeType == TypeScript.NodeType.Super && this.thisFnc && this.thisFnc.isConstructor && TypeScript.hasFlag(this.thisFnc.fncFlags, TypeScript.FncFlags.ClassMethod)) {
            var signature = fnType.symbol.type.construct ? this.resolveOverload(callEx, fnType.symbol.type.construct) : null;
            if(signature == null) {
              callEx.type = this.anyType
            }else {
              callEx.flags |= TypeScript.ASTFlags.ClassBaseConstructorCall;
              callEx.type = signature.returnType.type;
              callEx.signature = signature
            }
          }else {
            callEx.type = this.anyType;
            this.checker.errorReporter.invalidCall(callEx, callEx.nodeType, this.scope)
          }
        }
      }
      this.postTypeCheckCallArgs(callEx);
      this.inSuperCall = prevInSuperCall;
      return callEx
    };
    TypeFlow.prototype.assignScopes = function(ast) {
      var script = ast;
      this.checker.locationInfo = script.locationInfo;
      var globalChain = new ScopeChain(null, null, this.globalScope);
      var context = new TypeScript.AssignScopeContext(globalChain, this, [this.checker.currentModDecl]);
      TypeScript.getAstWalkerFactory().walk(ast, TypeScript.preAssignScopes, TypeScript.postAssignScopes, null, context)
    };
    TypeFlow.prototype.findMemberScope = function(enclosingScopeContext, matchFlag) {
      var enclosingScope = enclosingScopeContext.getScope();
      var pos = enclosingScopeContext.pos - enclosingScopeContext.getScriptFragmentPosition();
      var scriptFragment = enclosingScopeContext.getScriptFragment();
      var memContext = new TypeScript.MemberScopeContext(this, pos, matchFlag);
      memContext.scope = enclosingScope;
      if(scriptFragment.nodeType == TypeScript.NodeType.Name) {
        return scriptFragment.type.getMemberScope(this)
      }else {
        TypeScript.getAstWalkerFactory().walk(scriptFragment, TypeScript.preFindMemberScope, null, null, memContext);
        if(memContext.ast && enclosingScopeContext.enclosingClassDecl && memContext.ast.type == enclosingScopeContext.enclosingClassDecl.type.instanceType) {
          enclosingScopeContext.publicsOnly = false
        }
        if(memContext.type) {
          return memContext.type.getMemberScope(this)
        }else {
          return null
        }
      }
    };
    TypeFlow.prototype.findMemberScopeAt = function(enclosingScopeContext) {
      return this.findMemberScope(enclosingScopeContext, TypeScript.ASTFlags.DotLHS)
    };
    TypeFlow.prototype.findMemberScopeAtFullAst = function(enclosingScopeContext) {
      var matchFlag = TypeScript.ASTFlags.DotLHS;
      var pos = enclosingScopeContext.pos;
      var astResult = null;
      var preFindMemberScopeFullAst = function(ast, parent, walker) {
        if(TypeScript.isValidAstNode(ast)) {
          if(TypeScript.hasFlag(ast.flags, matchFlag) && (pos == ast.limChar || pos - 1 == ast.limChar)) {
            astResult = ast;
            walker.options.stopWalk()
          }
          walker.options.goChildren = ast.minChar <= pos && pos <= ast.limChar
        }
        return ast
      };
      var preFindMemberScopeFullAstFuzy = function(ast, parent, walker) {
        if(TypeScript.isValidAstNode(ast)) {
          if(TypeScript.hasFlag(ast.flags, matchFlag) && ast.minChar < pos && pos <= ast.limChar) {
            astResult = ast
          }
          walker.options.goChildren = ast.minChar <= pos && pos <= ast.limChar
        }
        return ast
      };
      TypeScript.getAstWalkerFactory().walk(enclosingScopeContext.script, preFindMemberScopeFullAst);
      if(astResult == null) {
        TypeScript.getAstWalkerFactory().walk(enclosingScopeContext.script, preFindMemberScopeFullAstFuzy)
      }
      if(astResult && enclosingScopeContext.enclosingClassDecl && astResult.type == enclosingScopeContext.enclosingClassDecl.type.instanceType) {
        enclosingScopeContext.publicsOnly = false
      }
      if(astResult && astResult.type) {
        return astResult.type.getMemberScope(this)
      }else {
        return null
      }
    };
    return TypeFlow
  }();
  TypeScript.TypeFlow = TypeFlow
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  (function(Primitive) {
    Primitive._map = [];
    Primitive.None = 0;
    Primitive.Void = 1;
    Primitive.Double = 2;
    Primitive.String = 4;
    Primitive.Boolean = 8;
    Primitive.Any = 16;
    Primitive.Null = 32;
    Primitive.Undefined = 64
  })(TypeScript.Primitive || (TypeScript.Primitive = {}));
  var Primitive = TypeScript.Primitive;
  var MemberName = function() {
    function MemberName() {
      this.prefix = "";
      this.suffix = ""
    }
    MemberName.prototype.isString = function() {
      return false
    };
    MemberName.prototype.isArray = function() {
      return false
    };
    MemberName.prototype.toString = function() {
      return MemberName.memberNameToString(this)
    };
    MemberName.memberNameToString = function memberNameToString(memberName) {
      var result = memberName.prefix;
      if(memberName.isString()) {
        result += memberName.text
      }else {
        var ar = memberName;
        for(var index = 0;index < ar.entries.length;index++) {
          result += MemberName.memberNameToString(ar.entries[index]);
          result += ar.delim
        }
      }
      result += memberName.suffix;
      return result
    };
    MemberName.create = function create(arg1, arg2, arg3) {
      if(typeof arg1 == "string") {
        return new MemberNameString(arg1)
      }else {
        var result = new MemberNameArray;
        if(arg2) {
          result.prefix = arg2
        }
        if(arg3) {
          result.suffix = arg3
        }
        result.entries.push(arg1);
        return result
      }
    };
    return MemberName
  }();
  TypeScript.MemberName = MemberName;
  var MemberNameString = function(_super) {
    __extends(MemberNameString, _super);
    function MemberNameString(text) {
      _super.call(this);
      this.text = text
    }
    MemberNameString.prototype.isString = function() {
      return true
    };
    return MemberNameString
  }(MemberName);
  TypeScript.MemberNameString = MemberNameString;
  var MemberNameArray = function(_super) {
    __extends(MemberNameArray, _super);
    function MemberNameArray() {
      _super.apply(this, arguments);
      this.delim = "";
      this.entries = []
    }
    MemberNameArray.prototype.isArray = function() {
      return true
    };
    MemberNameArray.prototype.add = function(entry) {
      this.entries.push(entry)
    };
    MemberNameArray.prototype.addAll = function(entries) {
      for(var i = 0;i < entries.length;i++) {
        this.entries.push(entries[i])
      }
    };
    return MemberNameArray
  }(MemberName);
  TypeScript.MemberNameArray = MemberNameArray;
  var currentTypeID = -1;
  var Type = function() {
    function Type() {
      this.typeID = currentTypeID++;
      this.construct = null;
      this.call = null;
      this.index = null;
      this.passTypeCreated = TypeScript.CompilerDiagnostics.analysisPass;
      this.primitiveTypeClass = Primitive.None;
      this.typeFlags = TypeScript.TypeFlags.None
    }
    Type.prototype.baseClass = function() {
      if(this.extendsList && this.extendsList.length > 0) {
        return this.extendsList[0]
      }else {
        return null
      }
    };
    Type.prototype.getArrayBase = function(arrInstType, checker) {
      return this.arrayCache.specialize(arrInstType, checker)
    };
    Type.prototype.isClass = function() {
      return this.instanceType != null
    };
    Type.prototype.isArray = function() {
      return this.elementType != null
    };
    Type.prototype.isClassInstance = function() {
      return this.symbol && !this.elementType && this.symbol.type.isClass()
    };
    Type.prototype.getInstanceType = function() {
      if(this.isClass()) {
        return this.instanceType
      }else {
        return this
      }
    };
    Type.prototype.hasImplementation = function() {
      return TypeScript.hasFlag(this.typeFlags, TypeScript.TypeFlags.HasImplementation)
    };
    Type.prototype.setHasImplementation = function() {
      this.typeFlags |= TypeScript.TypeFlags.HasImplementation
    };
    Type.prototype.isDouble = function() {
      return TypeScript.hasFlag(this.primitiveTypeClass, Primitive.Double)
    };
    Type.prototype.isString = function() {
      return TypeScript.hasFlag(this.primitiveTypeClass, Primitive.String)
    };
    Type.prototype.isBoolean = function() {
      return TypeScript.hasFlag(this.primitiveTypeClass, Primitive.Boolean)
    };
    Type.prototype.isNull = function() {
      return TypeScript.hasFlag(this.primitiveTypeClass, Primitive.Null)
    };
    Type.prototype.getTypeName = function() {
      return this.getMemberTypeName("", true, false, null)
    };
    Type.prototype.getScopedTypeName = function(scope) {
      return this.getMemberTypeName("", true, false, scope)
    };
    Type.prototype.getScopedTypeNameEx = function(scope) {
      return this.getMemberTypeNameEx("", true, false, scope)
    };
    Type.prototype.callCount = function() {
      var total = 0;
      if(this.call) {
        total += this.call.signatures.length
      }
      if(this.construct) {
        total += this.construct.signatures.length
      }
      if(this.index) {
        total += this.index.signatures.length
      }
      return total
    };
    Type.prototype.getMemberTypeName = function(prefix, topLevel, isElementType, scope) {
      var memberName = this.getMemberTypeNameEx(prefix, topLevel, isElementType, scope);
      return memberName.toString()
    };
    Type.prototype.getMemberTypeNameEx = function(prefix, topLevel, isElementType, scope) {
      if(this.elementType) {
        return MemberName.create(this.elementType.getMemberTypeNameEx(prefix, false, true, scope), "", "[]")
      }else {
        if(this.symbol && this.symbol.name && this.symbol.name != "_anonymous" && (this.call == null && this.construct == null && this.index == null || TypeScript.hasFlag(this.typeFlags, TypeScript.TypeFlags.BuildingName) || this.members && !this.isClass())) {
          var tn = this.symbol.scopeRelativeName(scope);
          return MemberName.create(tn == "null" ? "any" : tn)
        }else {
          if(this.members || this.call || this.construct) {
            if(TypeScript.hasFlag(this.typeFlags, TypeScript.TypeFlags.BuildingName)) {
              return MemberName.create("this")
            }
            this.typeFlags |= TypeScript.TypeFlags.BuildingName;
            var builder = "";
            var allMemberNames = new MemberNameArray;
            var curlies = isElementType;
            var signatureCount = 0;
            var memCount = 0;
            var delim = "; ";
            if(this.members) {
              this.members.allMembers.map(function(key, s, unused) {
                var sym = s;
                if(!TypeScript.hasFlag(sym.flags, TypeScript.SymbolFlags.BuiltIn)) {
                  var typeName = sym.getTypeName(scope);
                  if(typeName.length >= delim.length && typeName.substring(typeName.length - delim.length) == delim) {
                    typeName = typeName.substring(0, typeName.length - delim.length)
                  }
                  allMemberNames.add(MemberName.create(typeName));
                  memCount++;
                  if(sym.kind() == TypeScript.SymbolKind.Type) {
                    var memberType = sym.type;
                    if(memberType.callCount() > 1) {
                      curlies = true
                    }
                  }else {
                    curlies = true
                  }
                }
              }, null)
            }
            var signatures;
            var j;
            var len = 0;
            var shortform = memCount == 0 && this.callCount() == 1 && topLevel;
            if(!shortform) {
              allMemberNames.delim = delim
            }
            if(this.call) {
              signatures = this.call.toStrings(prefix, shortform, scope);
              for(j = 0, len = signatures.length;j < len;j++) {
                allMemberNames.add(MemberName.create(signatures[j]));
                signatureCount++
              }
            }
            if(this.construct) {
              signatures = this.construct.toStrings("new", shortform, scope);
              for(j = 0, len = signatures.length;j < len;j++) {
                allMemberNames.add(MemberName.create(signatures[j]));
                signatureCount++
              }
            }
            if(this.index) {
              signatures = this.index.toStrings("", shortform, scope);
              for(j = 0, len = signatures.length;j < len;j++) {
                allMemberNames.add(MemberName.create(signatures[j]));
                signatureCount++
              }
            }
            if(curlies || signatureCount > 1 && topLevel) {
              allMemberNames.prefix = "{ ";
              allMemberNames.suffix = "}"
            }
            this.typeFlags &= ~TypeScript.TypeFlags.BuildingName;
            if(signatureCount == 0 && memCount == 0) {
              return MemberName.create("{}")
            }else {
              return allMemberNames
            }
          }else {
            return MemberName.create("{}")
          }
        }
      }
    };
    Type.prototype.checkDecl = function(checker) {
      if(this.isClassInstance() || this.isClass()) {
        if(this.symbol.declAST) {
          checker.typeFlow.inScopeTypeCheckDecl(this.symbol.declAST)
        }
      }
    };
    Type.prototype.getMemberScope = function(flow) {
      if(this == flow.anyType) {
        return null
      }else {
        if(this.isDouble()) {
          if(flow.numberInterfaceType) {
            return flow.numberInterfaceType.memberScope
          }else {
            return null
          }
        }else {
          if(this.isBoolean()) {
            if(flow.booleanInterfaceType) {
              return flow.booleanInterfaceType.memberScope
            }else {
              return null
            }
          }else {
            if(this == flow.stringType) {
              if(flow.stringInterfaceType) {
                return flow.stringInterfaceType.memberScope
              }else {
                return null
              }
            }else {
              if(this.elementType) {
                if(flow.arrayInterfaceType) {
                  var arrInstType = this.elementType.getArrayBase(flow.arrayInterfaceType, flow.checker);
                  return arrInstType.memberScope
                }else {
                  return null
                }
              }else {
                return this.memberScope
              }
            }
          }
        }
      }
    };
    Type.prototype.isReferenceType = function() {
      return this.members || this.extendsList || this.construct || this.call || this.index || this.elementType
    };
    Type.prototype.specializeType = function(pattern, replacement, checker, membersOnly) {
      if(pattern == this) {
        return replacement
      }
      var result = this;
      if(membersOnly) {
        if(this.isReferenceType()) {
          result = new Type;
          if(this.members) {
            result.members = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
            this.members.publicMembers.map(function(key, s, unused) {
              var sym = s;
              var bSym = sym.specializeType(pattern, replacement, checker);
              result.members.addPublicMember(bSym.name, bSym)
            }, null);
            this.members.privateMembers.map(function(key, s, unused) {
              var sym = s;
              var bSym = sym.specializeType(pattern, replacement, checker);
              result.members.addPrivateMember(bSym.name, bSym)
            }, null)
          }
          if(this.ambientMembers) {
            result.ambientMembers = new TypeScript.ScopedMembers(new TypeScript.DualStringHashTable(new TypeScript.StringHashTable, new TypeScript.StringHashTable));
            this.ambientMembers.publicMembers.map(function(key, s, unused) {
              var sym = s;
              var bSym = sym.specializeType(pattern, replacement, checker);
              result.ambientMembers.addPublicMember(bSym.name, bSym)
            }, null);
            this.ambientMembers.privateMembers.map(function(key, s, unused) {
              var sym = s;
              var bSym = sym.specializeType(pattern, replacement, checker);
              result.ambientMembers.addPrivateMember(bSym.name, bSym)
            }, null)
          }
          result.containedScope = checker.scopeOf(result);
          result.memberScope = result.containedScope
        }
      }else {
        if(this.elementType) {
          if(this.elementType == pattern) {
            result = checker.makeArrayType(replacement)
          }else {
            if(this.elementType.elementType == pattern) {
              result = checker.makeArrayType(checker.makeArrayType(replacement))
            }
          }
        }else {
          if(this.call) {
            result = new Type;
            result.call = this.call.specializeType(pattern, replacement, checker)
          }
        }
      }
      return result
    };
    Type.prototype.hasBase = function(baseType) {
      if(baseType == this) {
        return true
      }else {
        if(this.extendsList) {
          for(var i = 0, len = this.extendsList.length;i < len;i++) {
            if(this.extendsList[i].hasBase(baseType)) {
              return true
            }
          }
        }
      }
      return false
    };
    Type.prototype.mergeOrdered = function(b, checker, comparisonInfo) {
      if(this == checker.anyType || b == checker.anyType) {
        return checker.anyType
      }else {
        if(this == b) {
          return this
        }else {
          if(b == checker.nullType && this != checker.nullType) {
            return this
          }else {
            if(this == checker.nullType && b != checker.nullType) {
              return b
            }else {
              if(b == checker.voidType && this != checker.voidType) {
                return this
              }else {
                if(this == checker.voidType && b != checker.voidType) {
                  return b
                }else {
                  if(b == checker.undefinedType && this != checker.undefinedType) {
                    return this
                  }else {
                    if(this == checker.undefinedType && b != checker.undefinedType) {
                      return b
                    }else {
                      if(this.elementType && b.elementType) {
                        if(this.elementType == b.elementType) {
                          return this
                        }else {
                          var mergedET = this.elementType.mergeOrdered(b.elementType, checker, comparisonInfo);
                          if(mergedET == null) {
                            return checker.makeArrayType(checker.anyType)
                          }else {
                            return checker.makeArrayType(mergedET)
                          }
                        }
                      }else {
                        if(checker.sourceIsSubtypeOfTarget(this, b, comparisonInfo)) {
                          return b
                        }else {
                          if(checker.sourceIsSubtypeOfTarget(b, this, comparisonInfo)) {
                            return this
                          }else {
                            return null
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    Type.prototype.isModuleType = function() {
      return false
    };
    Type.prototype.hasMembers = function() {
      return this.members != null
    };
    Type.prototype.getAllEnclosedTypes = function() {
      return null
    };
    Type.prototype.getAllAmbientEnclosedTypes = function() {
      return null
    };
    Type.prototype.getPublicEnclosedTypes = function() {
      return null
    };
    Type.prototype.getpublicAmbientEnclosedTypes = function() {
      return null
    };
    return Type
  }();
  TypeScript.Type = Type;
  var ModuleType = function(_super) {
    __extends(ModuleType, _super);
    function ModuleType(enclosedTypes, ambientEnclosedTypes) {
      _super.call(this);
      this.enclosedTypes = enclosedTypes;
      this.ambientEnclosedTypes = ambientEnclosedTypes;
      this.importedModules = []
    }
    ModuleType.prototype.isModuleType = function() {
      return true
    };
    ModuleType.prototype.hasMembers = function() {
      return this.members != null || this.enclosedTypes != null
    };
    ModuleType.prototype.getAllEnclosedTypes = function() {
      return this.enclosedTypes
    };
    ModuleType.prototype.getAllAmbientEnclosedTypes = function() {
      return this.ambientEnclosedTypes
    };
    ModuleType.prototype.getPublicEnclosedTypes = function() {
      return null
    };
    ModuleType.prototype.getpublicAmbientEnclosedTypes = function() {
      return null
    };
    return ModuleType
  }(Type);
  TypeScript.ModuleType = ModuleType;
  var TypeLink = function() {
    function TypeLink() {
      this.type = null;
      this.ast = null
    }
    return TypeLink
  }();
  TypeScript.TypeLink = TypeLink;
  function getTypeLink(ast, checker, autoVar) {
    var result = new TypeLink;
    result.ast = ast;
    if(ast == null && autoVar) {
      result.type = checker.anyType
    }else {
      result.type = null
    }
    return result
  }
  TypeScript.getTypeLink = getTypeLink
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  function stripQuotes(str) {
    return str.replace('"', "").replace("'", "").replace("'", "").replace('"', "")
  }
  TypeScript.stripQuotes = stripQuotes;
  function isQuoted(str) {
    return str.indexOf('"') != -1 || str.indexOf("'") != -1 || str.indexOf("'") != -1 || str.indexOf('"') != -1
  }
  TypeScript.isQuoted = isQuoted;
  function quoteStr(str) {
    return'"' + str + '"'
  }
  TypeScript.quoteStr = quoteStr;
  function swapQuotes(str) {
    if(str.indexOf('"') != -1) {
      str = str.replace('"', "'");
      str = str.replace('"', "'")
    }else {
      str = str.replace("'", '"');
      str = str.replace("'", '"')
    }
    return str
  }
  TypeScript.swapQuotes = swapQuotes;
  function switchToForwardSlashes(path) {
    return path.replace(/\\/g, "/")
  }
  TypeScript.switchToForwardSlashes = switchToForwardSlashes;
  function trimModName(modName) {
    if(modName.length > 6 && modName.substring(modName.length - 6, modName.length) == ".d.str") {
      return modName.substring(0, modName.length - 6)
    }
    if(modName.length > 4 && modName.substring(modName.length - 4, modName.length) == ".str") {
      return modName.substring(0, modName.length - 4)
    }
    if(modName.length > 5 && modName.substring(modName.length - 5, modName.length) == ".d.ts") {
      return modName.substring(0, modName.length - 5)
    }
    if(modName.length > 3 && modName.substring(modName.length - 3, modName.length) == ".ts") {
      return modName.substring(0, modName.length - 3)
    }
    if(modName.length > 3 && modName.substring(modName.length - 3, modName.length) == ".js") {
      return modName.substring(0, modName.length - 3)
    }
    return modName
  }
  TypeScript.trimModName = trimModName;
  function isSTRFile(fname) {
    return fname.length > 4 && fname.substring(fname.length - 4, fname.length) == ".str"
  }
  TypeScript.isSTRFile = isSTRFile;
  function isTSFile(fname) {
    return fname.length > 3 && fname.substring(fname.length - 3, fname.length) == ".ts"
  }
  TypeScript.isTSFile = isTSFile;
  function isDSTRFile(fname) {
    return fname.length > 6 && fname.substring(fname.length - 6, fname.length) == ".d.str"
  }
  TypeScript.isDSTRFile = isDSTRFile;
  function isDTSFile(fname) {
    return fname.length > 5 && fname.substring(fname.length - 5, fname.length) == ".d.ts"
  }
  TypeScript.isDTSFile = isDTSFile;
  function getPrettyName(modPath, quote, treatAsFileName) {
    if(typeof quote === "undefined") {
      quote = true
    }
    if(typeof treatAsFileName === "undefined") {
      treatAsFileName = false
    }
    var modName = treatAsFileName ? switchToForwardSlashes(modPath) : trimModName(stripQuotes(modPath));
    var components = modName.split("/");
    return components.length ? quote ? quoteStr(components[components.length - 1]) : components[components.length - 1] : modPath
  }
  TypeScript.getPrettyName = getPrettyName;
  function quoteBaseName(modPath) {
    var modName = trimModName(stripQuotes(modPath));
    var path = getRootFilePath(modName);
    if(path == "") {
      return modPath
    }else {
      var components = modName.split(path);
      var fileIndex = components.length > 1 ? 1 : 0;
      return quoteStr(components[fileIndex])
    }
  }
  TypeScript.quoteBaseName = quoteBaseName;
  function changePathToSTR(modPath) {
    return trimModName(stripQuotes(modPath)) + ".str"
  }
  TypeScript.changePathToSTR = changePathToSTR;
  function changePathToDSTR(modPath) {
    return trimModName(stripQuotes(modPath)) + ".d.str"
  }
  TypeScript.changePathToDSTR = changePathToDSTR;
  function changePathToTS(modPath) {
    return trimModName(stripQuotes(modPath)) + ".ts"
  }
  TypeScript.changePathToTS = changePathToTS;
  function changePathToDTS(modPath) {
    return trimModName(stripQuotes(modPath)) + ".d.ts"
  }
  TypeScript.changePathToDTS = changePathToDTS;
  function isRelative(path) {
    return path.charAt(0) == "."
  }
  TypeScript.isRelative = isRelative;
  function isRooted(path) {
    return path.charAt(0) == "\\" || path.charAt(0) == "/" || path.indexOf(":\\") != -1 || path.indexOf(":/") != -1
  }
  TypeScript.isRooted = isRooted;
  function getRootFilePath(outFname) {
    if(outFname == "") {
      return outFname
    }else {
      var isPath = outFname.indexOf("/") != -1;
      return isPath ? filePath(outFname) : ""
    }
  }
  TypeScript.getRootFilePath = getRootFilePath;
  function filePath(fullPath) {
    fullPath = switchToForwardSlashes(fullPath);
    var components = fullPath.split("/");
    var path = components.slice(0, components.length - 1);
    return path.join("/") + "/"
  }
  TypeScript.filePath = filePath;
  function normalizeURL(url) {
    var hostDomainAndPortRegex = /^(https?:\/\/[\-\w\.]+(:\d+)?\/)(.*)$/i;
    var matches = hostDomainAndPortRegex.exec(url);
    if(matches) {
      var hostDomainAndPort = matches[1];
      var actualPath = matches[3];
      return hostDomainAndPort + normalizePath(actualPath)
    }
    return normalizePath(url)
  }
  TypeScript.normalizeURL = normalizeURL;
  TypeScript.pathNormalizeRegExp = /\//g;
  function normalizePath(path) {
    path = switchToForwardSlashes(path);
    var startedWithSep = path.charAt(0) === "/";
    var parts = path.split("/");
    for(var i = 0;i < parts.length;i++) {
      if(parts[i] === "." || parts[i] === "") {
        parts.splice(i, 1);
        i--
      }
      if(i > 0 && parts[i] === ".." && parts[i - 1] !== "..") {
        parts.splice(i - 1, 2);
        i -= 2
      }
    }
    return(startedWithSep ? "/" : "") + parts.join("/")
  }
  TypeScript.normalizePath = normalizePath;
  function normalizeImportPath(path) {
    return normalizePath(path)
  }
  TypeScript.normalizeImportPath = normalizeImportPath
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  var SourceUnit = function() {
    function SourceUnit(path, content) {
      this.path = path;
      this.content = content
    }
    SourceUnit.prototype.getText = function(start, end) {
      return this.content.substring(start, end)
    };
    SourceUnit.prototype.getLength = function() {
      return this.content.length
    };
    return SourceUnit
  }();
  TypeScript.SourceUnit = SourceUnit;
  var CompilationEnvironment = function() {
    function CompilationEnvironment(compilationSettings, ioHost) {
      this.compilationSettings = compilationSettings;
      this.ioHost = ioHost;
      this.residentCode = [];
      this.code = []
    }
    return CompilationEnvironment
  }();
  TypeScript.CompilationEnvironment = CompilationEnvironment;
  var CodeResolver = function() {
    function CodeResolver(environment) {
      this.environment = environment;
      this.visited = {}
    }
    CodeResolver.prototype.resolveCode = function(referencePath, parentPath, performSearch, resolutionDispatcher) {
      var resolvedFile = {content:"", path:referencePath};
      var ioHost = this.environment.ioHost;
      var isRelativePath = TypeScript.isRelative(referencePath);
      var isRootedPath = isRelativePath ? false : TypeScript.isRooted(referencePath);
      var normalizedPath = isRelativePath ? ioHost.resolvePath(parentPath + "/" + referencePath) : isRootedPath || !parentPath || performSearch ? referencePath : parentPath + "/" + referencePath;
      if(!TypeScript.isSTRFile(normalizedPath) && !TypeScript.isTSFile(normalizedPath)) {
        normalizedPath += ".ts"
      }
      normalizedPath = TypeScript.switchToForwardSlashes(TypeScript.stripQuotes(normalizedPath));
      var absoluteModuleID = this.environment.compilationSettings.useCaseSensitiveFileResolution ? normalizedPath : normalizedPath.toLocaleUpperCase();
      if(!this.visited[absoluteModuleID]) {
        if(isRelativePath || isRootedPath || !performSearch) {
          try {
            TypeScript.CompilerDiagnostics.debugPrint("   Reading code from " + normalizedPath);
            try {
              resolvedFile.content = ioHost.readFile(normalizedPath)
            }catch(err) {
              try {
                if(TypeScript.isSTRFile(normalizedPath)) {
                  normalizedPath = TypeScript.changePathToTS(normalizedPath)
                }else {
                  if(TypeScript.isTSFile(normalizedPath)) {
                    normalizedPath = TypeScript.changePathToSTR(normalizedPath)
                  }
                }
                TypeScript.CompilerDiagnostics.debugPrint("   Reading code from " + normalizedPath);
                resolvedFile.content = ioHost.readFile(normalizedPath)
              }catch(err) {
                normalizedPath = TypeScript.changePathToDSTR(normalizedPath);
                TypeScript.CompilerDiagnostics.debugPrint("   Reading code from " + normalizedPath);
                try {
                  resolvedFile.content = ioHost.readFile(normalizedPath)
                }catch(err) {
                  normalizedPath = TypeScript.changePathToDTS(normalizedPath);
                  TypeScript.CompilerDiagnostics.debugPrint("   Reading code from " + normalizedPath);
                  resolvedFile.content = ioHost.readFile(normalizedPath)
                }
              }
            }
            TypeScript.CompilerDiagnostics.debugPrint("   Found code at " + normalizedPath);
            resolvedFile.path = normalizedPath;
            this.visited[absoluteModuleID] = true
          }catch(err) {
            TypeScript.CompilerDiagnostics.debugPrint("   Did not find code for " + referencePath)
          }
        }else {
          resolvedFile = ioHost.findFile(parentPath, normalizedPath);
          if(!resolvedFile) {
            if(TypeScript.isSTRFile(normalizedPath)) {
              normalizedPath = TypeScript.changePathToTS(normalizedPath)
            }else {
              if(TypeScript.isTSFile(normalizedPath)) {
                normalizedPath = TypeScript.changePathToSTR(normalizedPath)
              }
            }
            resolvedFile = ioHost.findFile(parentPath, normalizedPath)
          }
          if(!resolvedFile) {
            normalizedPath = TypeScript.changePathToDTS(normalizedPath);
            resolvedFile = ioHost.findFile(parentPath, normalizedPath);
            if(!resolvedFile) {
              normalizedPath = TypeScript.changePathToDSTR(normalizedPath);
              resolvedFile = ioHost.findFile(parentPath, normalizedPath)
            }
          }
          if(resolvedFile) {
            resolvedFile.path = TypeScript.switchToForwardSlashes(TypeScript.stripQuotes(resolvedFile.path));
            TypeScript.CompilerDiagnostics.debugPrint(referencePath + " resolved to: " + resolvedFile.path);
            resolvedFile.content = resolvedFile.content;
            this.visited[absoluteModuleID] = true
          }else {
            TypeScript.CompilerDiagnostics.debugPrint("Could not find " + referencePath)
          }
        }
        if(resolvedFile && resolvedFile.content) {
          var rootDir = ioHost.dirName(resolvedFile.path);
          var sourceUnit = new SourceUnit(resolvedFile.path, resolvedFile.content);
          var preProcessedFileInfo = TypeScript.preProcessFile(sourceUnit, this.environment.compilationSettings);
          for(var i = 0;i < preProcessedFileInfo.referencedFiles.length;i++) {
            var referencedFile = preProcessedFileInfo.referencedFiles[i];
            var normalizedPath = TypeScript.isRooted(referencedFile.path) ? referencedFile.path : rootDir + "/" + referencedFile.path;
            normalizedPath = ioHost.resolvePath(normalizedPath);
            if(referencePath == normalizedPath) {
              resolutionDispatcher.postResolutionError(normalizedPath, "File contains reference to itself", null);
              continue
            }
            this.resolveCode(referencedFile.path, rootDir, false, resolutionDispatcher)
          }
          for(var i = 0;i < preProcessedFileInfo.importedFiles.length;i++) {
            this.resolveCode(preProcessedFileInfo.importedFiles[i].path, rootDir, true, resolutionDispatcher)
          }
          resolutionDispatcher.postResolution(sourceUnit.path, sourceUnit)
        }
      }
    };
    return CodeResolver
  }();
  TypeScript.CodeResolver = CodeResolver
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  var StyleSettings = function() {
    function StyleSettings() {
      this.bitwise = false;
      this.blockInCompoundStmt = false;
      this.eqeqeq = false;
      this.forin = false;
      this.emptyBlocks = true;
      this.newMustBeUsed = false;
      this.requireSemi = false;
      this.assignmentInCond = false;
      this.eqnull = false;
      this.evalOK = true;
      this.innerScopeDeclEscape = true;
      this.funcInLoop = true;
      this.reDeclareLocal = true;
      this.literalSubscript = true;
      this.implicitAny = false
    }
    StyleSettings.prototype.setOption = function(opt, val) {
      var optExists = this[opt];
      if(optExists !== undefined) {
        this[opt] = val;
        return true
      }else {
        return false
      }
    };
    StyleSettings.prototype.parseOptions = function(str) {
      var opts = str.split(";");
      for(var i = 0, len = opts.length;i < len;i++) {
        var opt = opts[i];
        var val = true;
        var colonIndex = opt.lastIndexOf(":");
        if(colonIndex >= 0) {
          var valStr = opt.substring(colonIndex + 1);
          opt = opt.substring(0, colonIndex);
          if(valStr == "off") {
            val = false
          }
        }
        if(!this.setOption(opt, val)) {
          return false
        }
      }
      return true
    };
    return StyleSettings
  }();
  TypeScript.StyleSettings = StyleSettings;
  var CompilationSettings = function() {
    function CompilationSettings() {
      this.styleSettings = new StyleSettings;
      this.propagateConstants = false;
      this.minWhitespace = false;
      this.parseOnly = false;
      this.outputMany = true;
      this.errorRecovery = false;
      this.emitComments = false;
      this.watch = false;
      this.exec = false;
      this.resolve = true;
      this.controlFlow = false;
      this.printControlFlow = false;
      this.controlFlowUseDef = false;
      this.errorOnWith = true;
      this.preprocess = true;
      this.canCallDefinitionSignature = false;
      this.inferPropertiesFromThisAssignment = false;
      this.useDefaultLib = true;
      this.codeGenTarget = TypeScript.CodeGenTarget.ES3;
      this.moduleGenTarget = TypeScript.ModuleGenTarget.Synchronous;
      this.outputFileName = "";
      this.errorFileName = "";
      this.mapSourceFiles = false;
      this.generateDeclarationFiles = false;
      this.useCaseSensitiveFileResolution = false
    }
    CompilationSettings.prototype.setStyleOptions = function(str) {
      this.styleSettings.parseOptions(str)
    };
    CompilationSettings.prototype.outputOne = function(outFile) {
      this.outputFileName = outFile;
      this.outputMany = false
    };
    return CompilationSettings
  }();
  TypeScript.CompilationSettings = CompilationSettings;
  function getFileReferenceFromReferencePath(comment) {
    var referencesRegEx = /^(\/\/\/\s*<reference\s+path=)('|")(.+?)\2\s*(static=('|")(.+?)\2\s*)*\/>/igm;
    var match = referencesRegEx.exec(comment);
    if(match) {
      var path = TypeScript.normalizePath(match[3]);
      var adjustedPath = TypeScript.normalizePath(path);
      var isResident = match.length >= 7 && match[6] == "true";
      if(isResident) {
        TypeScript.CompilerDiagnostics.debugPrint(path + " is resident")
      }
      return{minChar:0, limChar:0, path:TypeScript.switchToForwardSlashes(adjustedPath), isResident:isResident}
    }else {
      return null
    }
  }
  function getAdditionalDependencyPath(comment) {
    var referencesRegEx = /^(\/\/\/\s*<amd-dependency\s+path=)('|")(.+?)\2\s*(static=('|")(.+?)\2\s*)*\/>/igm;
    var match = referencesRegEx.exec(comment);
    if(match) {
      var path = match[3];
      return path
    }else {
      return null
    }
  }
  TypeScript.getAdditionalDependencyPath = getAdditionalDependencyPath;
  function getStyleSettings(comment, styleSettings) {
    var styleRegEx = /^(\/\/\/\s*<style\s+)(([a-zA-Z])+=('|").+('|"))\s*\/>/igm;
    var settings = styleRegEx.exec(comment);
    if(settings) {
      var settingsRegEx = /^([a-zA-Z]+=['"]on['|"])/igm;
      settings = settingsRegEx.exec(settings[2]);
      if(settings) {
        for(var i = 0;i < settings.length;i++) {
          var setting = settings[i].split("=");
          var on = '"on"';
          switch(setting[0]) {
            case "blockInCompoundStmt":
              styleSettings.blockInCompoundStmt = setting[1] == on;
              break;
            case "eqeqeq":
              styleSettings.eqeqeq = setting[1] == on;
              break;
            case "forin":
              styleSettings.forin = setting[1] == on;
              break;
            case "emptyBlocks":
              styleSettings.emptyBlocks = setting[1] == on;
              break;
            case "newMustBeUsed":
              styleSettings.newMustBeUsed = setting[1] == on;
              break;
            case "requireSemi":
              styleSettings.requireSemi = setting[1] == on;
              break;
            case "assignmentInCond":
              styleSettings.assignmentInCond = setting[1] == on;
              break;
            case "eqnull":
              styleSettings.eqnull = setting[1] == on;
              break;
            case "evalOK":
              styleSettings.evalOK = setting[1] == on;
              break;
            case "innerScopeDeclEscape":
              styleSettings.innerScopeDeclEscape = setting[1] == on;
              break;
            case "funcInLoop":
              styleSettings.funcInLoop = setting[1] == on;
              break;
            case "reDeclareLocal":
              styleSettings.reDeclareLocal = setting[1] == on;
              break;
            case "literalSubscript":
              styleSettings.literalSubscript = setting[1] == on;
              break;
            case "implicitAny":
              styleSettings.implicitAny = setting[1] == on;
              break
          }
        }
      }
    }
  }
  TypeScript.getStyleSettings = getStyleSettings;
  function preProcessFile(sourceText, options) {
    if(typeof options === "undefined") {
      options = new CompilationSettings
    }
    var scanner = new TypeScript.Scanner;
    scanner.resetComments();
    scanner.setSourceText(sourceText, TypeScript.LexMode.File);
    var tok = scanner.scan();
    var comments = [];
    var comment = null;
    var leftCurlies = [];
    var settings = options;
    var referencedFiles = [];
    var importedFiles = [];
    var isLibFile = false;
    while(tok.tokenId != TypeScript.TokenID.EOF) {
      if(tok.tokenId == TypeScript.TokenID.IMPORT) {
        tok = scanner.scan();
        if(tok.tokenId == TypeScript.TokenID.ID || TypeScript.convertTokToID(tok, false)) {
          tok = scanner.scan();
          if(tok.tokenId == TypeScript.TokenID.Asg) {
            tok = scanner.scan();
            if(tok.tokenId == TypeScript.TokenID.MODULE) {
              tok = scanner.scan();
              if(tok.tokenId == TypeScript.TokenID.LParen) {
                tok = scanner.scan();
                if(tok.tokenId == TypeScript.TokenID.QString) {
                  var ref = {minChar:scanner.startPos, limChar:scanner.pos, path:TypeScript.stripQuotes(TypeScript.switchToForwardSlashes(tok.getText())), isResident:false};
                  importedFiles.push(ref)
                }
              }
            }
          }
        }
      }
      if(tok.tokenId == TypeScript.TokenID.LCurly) {
        leftCurlies.push(tok)
      }
      if(tok.tokenId == TypeScript.TokenID.RCurly) {
        leftCurlies.pop()
      }
      tok = scanner.scan()
    }
    comments = scanner.getComments();
    for(var iComment = 0;iComment < comments.length;iComment++) {
      comment = comments[iComment];
      if(!comment.isBlock) {
        var referencedCode = getFileReferenceFromReferencePath(comment.getText());
        if(referencedCode) {
          referencedCode.minChar = comment.startPos;
          referencedCode.limChar = referencedCode.minChar + comment.value.length;
          referencedFiles.push(referencedCode)
        }
        getStyleSettings(comment.getText(), settings.styleSettings);
        var isNoLibRegex = /^(\/\/\/\s*<reference\s+no-default-lib=)('|")(.+?)\2\s*\/>/igm;
        var isNoLibMatch = isNoLibRegex.exec(comment.getText());
        if(isNoLibMatch) {
          isLibFile = isNoLibMatch[3] == "true"
        }
      }
    }
    return{settings:settings, referencedFiles:referencedFiles, importedFiles:importedFiles, isLibFile:isLibFile}
  }
  TypeScript.preProcessFile = preProcessFile
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  var IncrementalParser = function() {
    function IncrementalParser(logger) {
      this.logger = logger;
      this.astLogger = new TypeScript.AstLogger(this.logger)
    }
    IncrementalParser.prototype.getEnclosingScopeContextIfSingleScopeEdit = function(previousScript, scriptId, newSourceText, editRange) {
      this.logger.log('checkEditsInsideSingleScope("' + scriptId + '")');
      if(editRange === null) {
        throw new Error("editRange should be valid");
      }
      if(editRange.isUnknown()) {
        this.logger.log("  Bailing out because edit range is unknown");
        return null
      }
      var scope1 = TypeScript.findEnclosingScopeAt(this.logger, previousScript, newSourceText, editRange.minChar, false);
      var scope2 = TypeScript.findEnclosingScopeAt(this.logger, previousScript, newSourceText, editRange.limChar, false);
      if(scope1 == null || scope2 == null) {
        this.logger.log("  Bailing out because containing scopes cannot be determined");
        return null
      }
      if(scope1.scopeStartAST !== scope2.scopeStartAST) {
        this.logger.log("  Bailing out because edit overlaps 2 disctint scopes");
        return null
      }
      var newScopeLength = scope1.scopeStartAST.limChar - scope1.scopeStartAST.minChar + editRange.delta;
      if(newScopeLength <= 0) {
        this.logger.log("  Bailing out because scope has been entirely removed from new source text");
        return null
      }
      return scope1
    };
    IncrementalParser.prototype.attemptIncrementalUpdateUnit = function(previousScript, scriptId, newSourceText, editRange) {
      this.logger.log('attemptIncrementalUpdateUnit("' + scriptId + '")');
      if(editRange === null) {
        throw new Error("editRange should be valid");
      }
      var scope1 = this.getEnclosingScopeContextIfSingleScopeEdit(previousScript, scriptId, newSourceText, editRange);
      if(scope1 === null) {
        return null
      }
      var newScopeLength = scope1.scopeStartAST.limChar - scope1.scopeStartAST.minChar + editRange.delta;
      if(newScopeLength >= newSourceText.getLength() / 2) {
        this.logger.log("  Bailing out because range of scope to reparse (" + newScopeLength + " characters) is greater than half the size of the source text");
        return null
      }
      var parseErrors = [];
      var errorCapture = function(minChar, charLen, message, unitIndex) {
        parseErrors.push(new TypeScript.ErrorEntry(unitIndex, minChar, minChar + charLen, message))
      };
      var quickParseResult = TypeScript.quickParse(this.logger, scope1.scopeStartAST, newSourceText, scope1.scopeStartAST.minChar, scope1.scopeStartAST.minChar + newScopeLength, errorCapture);
      if(quickParseResult.endLexState != TypeScript.LexState.Start) {
        this.logger.log("  Bailing out because scope contains unterminated comment");
        return null
      }
      var scriptFragment = quickParseResult.Script;
      if(scriptFragment.vars.members.length !== 0) {
        this.logger.log("  Bailing out because new source text defines variables");
        return null
      }
      if(scriptFragment.bod.members.length !== 1) {
        this.logger.log("  Bailing out because new source text defines more than one scope (or none)");
        return null
      }
      var oldScope = scope1.scopeStartAST;
      var newScope = scriptFragment.bod.members[0];
      if(oldScope.nodeType != newScope.nodeType) {
        this.logger.log("  Bailing out because new source text does not define the same scope type as the existing scope");
        return null
      }
      if(!oldScope.leftCurlyCount || !oldScope.rightCurlyCount) {
        this.logger.log("  Bailing out because sopce doesn't have left/right curly count");
        return null
      }
      if(oldScope.leftCurlyCount !== newScope.leftCurlyCount) {
        this.logger.log("  Bailing out because new source text contains more (or fewer) left curly braces");
        return null
      }
      if(oldScope.rightCurlyCount !== newScope.rightCurlyCount) {
        this.logger.log("  Bailing out because new source text contains more (or fewer) right curly braces");
        return null
      }
      if(newScope.minChar !== 0) {
        this.logger.log("  Bailing out because new function declaration does not start at position 0");
        return null
      }
      if(newScope.limChar !== newScopeLength) {
        this.logger.log("  Bailing out because new function declaration does not end at the new end position");
        return null
      }
      return TypeScript.UpdateUnitResult.singleScopeEdits(previousScript, scriptFragment, oldScope, newScope, editRange, parseErrors)
    };
    IncrementalParser.prototype.mergeTrees = function(updateResult) {
      var _this = this;
      TypeScript.timeFunction(this.logger, "mergeTrees()", function() {
        var editRange = new TypeScript.ScriptEditRange(updateResult.scope1.minChar, updateResult.scope1.limChar, updateResult.editRange.delta);
        _this.applyDeltaPosition(updateResult.script1, editRange.limChar, editRange.delta);
        _this.applyDeltaPosition(updateResult.script2, 0, editRange.minChar);
        _this.mergeLocationInfo(updateResult.script1, updateResult.script2, editRange);
        _this.replaceAST(updateResult.script1, updateResult.scope1, updateResult.scope2)
      })
    };
    IncrementalParser.prototype.replaceAST = function(script, oldAst, newAst) {
      var _this = this;
      var pre = function(cur, parent, walker) {
        if(cur === oldAst) {
          newAst.preComments = cur.preComments;
          newAst.postComments = cur.postComments;
          _this.logger.log("replaced old AST node with new one in script AST");
          walker.options.stopWalk();
          return newAst
        }
        if(TypeScript.isValidAstNode(cur)) {
          if(cur.limChar < oldAst.minChar || cur.minChar > oldAst.limChar) {
            walker.options.goChildren = false
          }
        }
        return cur
      };
      TypeScript.getAstWalkerFactory().walk(script, pre)
    };
    IncrementalParser.prototype.mergeLocationInfo = function(script, partial, editRange) {
      var lineMap1 = script.locationInfo.lineMap;
      var lineMap2 = partial.locationInfo.lineMap;
      if(this.logger.information()) {
        this.logger.log("lineMap1 (before):");
        this.astLogger.logLinemap(lineMap1);
        this.logger.log("lineMap2 (quick parse):");
        this.astLogger.logLinemap(lineMap2);
        this.logger.log("EditRange=" + editRange)
      }
      var i1 = 2;
      var i2 = 2;
      var len1 = lineMap1.length;
      var len2 = lineMap2.length;
      while(i1 < len1 || i2 < len2) {
        if(i1 < len1) {
          if(lineMap1[i1] <= editRange.minChar) {
            i1++
          }else {
            if(lineMap1[i1] >= editRange.limChar) {
              lineMap1[i1] += editRange.delta;
              i1++
            }else {
              if(i2 < len2) {
                lineMap1.splice(i1, 0, lineMap2[i2] + editRange.minChar);
                i1++;
                len1++;
                i2++
              }else {
                lineMap1.splice(i1, 1);
                len1--
              }
            }
          }
        }else {
          lineMap1.push(lineMap2[i2] + editRange.minChar);
          i2++
        }
      }
      if(this.logger.information()) {
        this.logger.log("lineMap1 (after merge):");
        this.astLogger.logLinemap(lineMap1)
      }
    };
    IncrementalParser.prototype.applyDeltaPosition = function(ast, start, delta) {
      var applyDelta = function(ast) {
        if(ast.minChar !== -1 && ast.minChar >= start) {
          ast.minChar += delta
        }
        if(ast.limChar !== -1 && ast.limChar >= start) {
          ast.limChar += delta
        }
      };
      var applyDeltaToComments = function(comments) {
        if(comments && comments.length > 0) {
          for(var i = 0;i < comments.length;i++) {
            applyDelta(comments[i])
          }
        }
      };
      var pre = function(cur, parent, walker) {
        if(cur.limChar !== -1 && cur.limChar < start) {
          walker.options.goChildren = false
        }
        applyDelta(cur);
        applyDeltaToComments(cur.preComments);
        applyDeltaToComments(cur.postComments);
        return cur
      };
      TypeScript.getAstWalkerFactory().walk(ast, pre)
    };
    return IncrementalParser
  }();
  TypeScript.IncrementalParser = IncrementalParser
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  (function(UpdateUnitKind) {
    UpdateUnitKind._map = [];
    UpdateUnitKind._map[0] = "Unknown";
    UpdateUnitKind.Unknown = 0;
    UpdateUnitKind._map[1] = "NoEdits";
    UpdateUnitKind.NoEdits = 1;
    UpdateUnitKind._map[2] = "EditsInsideSingleScope";
    UpdateUnitKind.EditsInsideSingleScope = 2
  })(TypeScript.UpdateUnitKind || (TypeScript.UpdateUnitKind = {}));
  var UpdateUnitKind = TypeScript.UpdateUnitKind;
  var ScriptEditRange = function() {
    function ScriptEditRange(minChar, limChar, delta) {
      this.minChar = minChar;
      this.limChar = limChar;
      this.delta = delta
    }
    ScriptEditRange.unknown = function unknown() {
      return new ScriptEditRange(-1, -1, -1)
    };
    ScriptEditRange.prototype.isUnknown = function() {
      return this.minChar === -1 && this.limChar === -1 && this.delta === -1
    };
    ScriptEditRange.prototype.containsPosition = function(pos) {
      return this.minChar <= pos && pos < this.limChar || this.minChar <= pos && pos < this.limChar + this.delta
    };
    ScriptEditRange.prototype.toString = function() {
      return"editRange(minChar=" + this.minChar + ", limChar=" + this.limChar + ", delta=" + this.delta + ")"
    };
    return ScriptEditRange
  }();
  TypeScript.ScriptEditRange = ScriptEditRange;
  var UpdateUnitResult = function() {
    function UpdateUnitResult(kind, unitIndex, script1, script2) {
      this.kind = kind;
      this.unitIndex = unitIndex;
      this.script1 = script1;
      this.script2 = script2;
      this.scope1 = null;
      this.scope2 = null;
      this.editRange = null;
      this.parseErrors = []
    }
    UpdateUnitResult.noEdits = function noEdits(unitIndex) {
      return new UpdateUnitResult(UpdateUnitKind.NoEdits, unitIndex, null, null)
    };
    UpdateUnitResult.unknownEdits = function unknownEdits(script1, script2, parseErrors) {
      var result = new UpdateUnitResult(UpdateUnitKind.Unknown, script1.locationInfo.unitIndex, script1, script2);
      result.parseErrors = parseErrors;
      return result
    };
    UpdateUnitResult.singleScopeEdits = function singleScopeEdits(script1, script2, scope1, scope2, editRange, parseErrors) {
      var result = new UpdateUnitResult(UpdateUnitKind.EditsInsideSingleScope, script1.locationInfo.unitIndex, script1, script2);
      result.scope1 = scope1;
      result.scope2 = scope2;
      result.editRange = editRange;
      result.parseErrors = parseErrors;
      return result
    };
    return UpdateUnitResult
  }();
  TypeScript.UpdateUnitResult = UpdateUnitResult;
  var ErrorEntry = function() {
    function ErrorEntry(unitIndex, minChar, limChar, message) {
      this.unitIndex = unitIndex;
      this.minChar = minChar;
      this.limChar = limChar;
      this.message = message
    }
    return ErrorEntry
  }();
  TypeScript.ErrorEntry = ErrorEntry;
  TypeScript.defaultSettings = new TypeScript.CompilationSettings;
  var TypeScriptCompiler = function() {
    function TypeScriptCompiler(outfile, errorOutput, logger, settings) {
      if(typeof logger === "undefined") {
        logger = new TypeScript.NullLogger
      }
      if(typeof settings === "undefined") {
        settings = TypeScript.defaultSettings
      }
      this.outfile = outfile;
      this.errorOutput = errorOutput;
      this.logger = logger;
      this.settings = settings;
      this.parser = new TypeScript.Parser;
      this.typeFlow = null;
      this.scripts = new TypeScript.ASTList;
      this.units = new Array;
      this.errorReporter = new TypeScript.ErrorReporter(this.outfile);
      this.persistentTypeState = new TypeScript.PersistentGlobalTypeState(this.errorReporter);
      this.errorReporter.parser = this.parser;
      this.initTypeChecker(this.errorOutput);
      this.parser.style_requireSemi = this.settings.styleSettings.requireSemi;
      this.parser.style_funcInLoop = this.settings.styleSettings.funcInLoop;
      this.parser.inferPropertiesFromThisAssignment = this.settings.inferPropertiesFromThisAssignment;
      this.emitSettings = {minWhitespace:this.settings.minWhitespace, propagateConstants:this.settings.propagateConstants, emitComments:this.settings.emitComments, path:this.settings.outputFileName, createFile:null, outputMany:this.settings.outputMany};
      TypeScript.codeGenTarget = settings.codeGenTarget
    }
    TypeScriptCompiler.prototype.timeFunction = function(funcDescription, func) {
      return TypeScript.timeFunction(this.logger, funcDescription, func)
    };
    TypeScriptCompiler.prototype.initTypeChecker = function(errorOutput) {
      this.persistentTypeState.refreshPersistentState();
      this.typeChecker = new TypeScript.TypeChecker(this.persistentTypeState);
      this.typeChecker.errorReporter = this.errorReporter;
      this.typeChecker.checkControlFlow = this.settings.controlFlow;
      this.typeChecker.checkControlFlowUseDef = this.settings.controlFlowUseDef;
      this.typeChecker.printControlFlowGraph = this.settings.printControlFlow;
      this.typeChecker.errorsOnWith = this.settings.errorOnWith;
      this.typeChecker.styleSettings = this.settings.styleSettings;
      this.typeChecker.canCallDefinitionSignature = this.settings.canCallDefinitionSignature;
      this.errorReporter.checker = this.typeChecker;
      this.setErrorOutput(this.errorOutput)
    };
    TypeScriptCompiler.prototype.setErrorOutput = function(outerr) {
      this.errorOutput = outerr;
      this.errorReporter.setErrOut(outerr);
      this.parser.outfile = outerr
    };
    TypeScriptCompiler.prototype.emitCommentsToOutput = function() {
      this.emitSettings = {minWhitespace:this.settings.minWhitespace, propagateConstants:this.settings.propagateConstants, emitComments:this.settings.emitComments, path:this.settings.outputFileName, createFile:null, outputMany:this.settings.outputMany}
    };
    TypeScriptCompiler.prototype.setErrorCallback = function(fn) {
      this.parser.errorCallback = fn
    };
    TypeScriptCompiler.prototype.updateUnit = function(prog, filename, setRecovery) {
      return this.updateSourceUnit(new TypeScript.StringSourceText(prog), filename, setRecovery)
    };
    TypeScriptCompiler.prototype.updateSourceUnit = function(sourceText, filename, setRecovery) {
      var _this = this;
      return this.timeFunction("updateSourceUnit(" + filename + ")", function() {
        var updateResult = _this.partialUpdateUnit(sourceText, filename, setRecovery);
        return _this.applyUpdateResult(updateResult)
      })
    };
    TypeScriptCompiler.prototype.applyUpdateResult = function(updateResult) {
      switch(updateResult.kind) {
        case UpdateUnitKind.NoEdits:
          return false;
        case UpdateUnitKind.Unknown:
          this.scripts.members[updateResult.unitIndex] = updateResult.script2;
          this.units[updateResult.unitIndex] = updateResult.script2.locationInfo;
          for(var i = 0, len = updateResult.parseErrors.length;i < len;i++) {
            var e = updateResult.parseErrors[i];
            if(this.parser.errorCallback) {
              this.parser.errorCallback(e.minChar, e.limChar - e.minChar, e.message, e.unitIndex)
            }
          }
          return true;
        case UpdateUnitKind.EditsInsideSingleScope:
          (new TypeScript.IncrementalParser(this.logger)).mergeTrees(updateResult);
          return true
      }
    };
    TypeScriptCompiler.prototype.partialUpdateUnit = function(sourceText, filename, setRecovery) {
      var _this = this;
      return this.timeFunction("partialUpdateUnit(" + filename + ")", function() {
        for(var i = 0, len = _this.units.length;i < len;i++) {
          if(_this.units[i].filename == filename) {
            if(_this.scripts.members[i].isResident) {
              return UpdateUnitResult.noEdits(i)
            }
            if(setRecovery) {
              _this.parser.setErrorRecovery(null, 0, 0)
            }
            var updateResult;
            var parseErrors = [];
            var errorCapture = function(minChar, charLen, message, unitIndex) {
              parseErrors.push(new ErrorEntry(unitIndex, minChar, minChar + charLen, message))
            };
            var svErrorCallback = _this.parser.errorCallback;
            if(svErrorCallback) {
              _this.parser.errorCallback = errorCapture
            }
            var oldScript = _this.scripts.members[i];
            var newScript = _this.parser.parse(sourceText, filename, i);
            if(svErrorCallback) {
              _this.parser.errorCallback = svErrorCallback
            }
            updateResult = UpdateUnitResult.unknownEdits(oldScript, newScript, parseErrors);
            return updateResult
          }
        }
        throw new Error('Unknown file "' + filename + '"');
      })
    };
    TypeScriptCompiler.prototype.addUnit = function(prog, filename, keepResident) {
      if(typeof keepResident === "undefined") {
        keepResident = false
      }
      return this.addSourceUnit(new TypeScript.StringSourceText(prog), filename, keepResident)
    };
    TypeScriptCompiler.prototype.addSourceUnit = function(sourceText, filename, keepResident) {
      if(typeof keepResident === "undefined") {
        keepResident = false
      }
      var _this = this;
      return this.timeFunction("addSourceUnit(" + filename + ", " + keepResident + ")", function() {
        var script = _this.parser.parse(sourceText, filename, _this.units.length, TypeScript.AllowedElements.Global);
        script.isResident = keepResident;
        _this.persistentTypeState.setCollectionMode(keepResident ? TypeScript.TypeCheckCollectionMode.Resident : TypeScript.TypeCheckCollectionMode.Transient);
        var index = _this.units.length;
        _this.units[index] = script.locationInfo;
        _this.typeChecker.collectTypes(script);
        _this.scripts.append(script);
        return script
      })
    };
    TypeScriptCompiler.prototype.parseUnit = function(prog, filename) {
      return this.parseSourceUnit(new TypeScript.StringSourceText(prog), filename)
    };
    TypeScriptCompiler.prototype.parseSourceUnit = function(sourceText, filename) {
      this.parser.setErrorRecovery(this.outfile, -1, -1);
      var script = this.parser.parse(sourceText, filename, 0);
      var context = new TypeScript.PrintContext(this.outfile, this.parser);
      TypeScript.getAstWalkerFactory().walk(script, TypeScript.prePrintAST, TypeScript.postPrintAST, null, context)
    };
    TypeScriptCompiler.prototype.typeCheck = function() {
      var _this = this;
      return this.timeFunction("typeCheck()", function() {
        var binder = new TypeScript.Binder(_this.typeChecker);
        _this.typeChecker.units = _this.units;
        binder.bind(_this.typeChecker.globalScope, _this.typeChecker.globals);
        binder.bind(_this.typeChecker.globalScope, _this.typeChecker.ambientGlobals);
        binder.bind(_this.typeChecker.globalScope, _this.typeChecker.globalTypes);
        binder.bind(_this.typeChecker.globalScope, _this.typeChecker.ambientGlobalTypes);
        _this.typeFlow = new TypeScript.TypeFlow(_this.logger, _this.typeChecker.globalScope, _this.parser, _this.typeChecker);
        var i = 0;
        var script = null;
        var len = _this.scripts.members.length;
        _this.persistentTypeState.setCollectionMode(TypeScript.TypeCheckCollectionMode.Resident);
        for(i = 0;i < len;i++) {
          script = _this.scripts.members[i];
          if(!script.isResident || script.hasBeenTypeChecked) {
            continue
          }
          _this.typeFlow.assignScopes(script);
          _this.typeFlow.initLibs()
        }
        for(i = 0;i < len;i++) {
          script = _this.scripts.members[i];
          if(!script.isResident || script.hasBeenTypeChecked) {
            continue
          }
          _this.typeFlow.typeCheck(script);
          script.hasBeenTypeChecked = true
        }
        _this.persistentTypeState.setCollectionMode(TypeScript.TypeCheckCollectionMode.Transient);
        len = _this.scripts.members.length;
        for(i = 0;i < len;i++) {
          script = _this.scripts.members[i];
          if(script.isResident) {
            continue
          }
          _this.typeFlow.assignScopes(script);
          _this.typeFlow.initLibs()
        }
        for(i = 0;i < len;i++) {
          script = _this.scripts.members[i];
          if(script.isResident) {
            continue
          }
          _this.typeFlow.typeCheck(script)
        }
        return null
      })
    };
    TypeScriptCompiler.prototype.cleanASTTypesForReTypeCheck = function(ast) {
      function cleanASTType(ast, parent) {
        ast.type = null;
        if(ast.nodeType == TypeScript.NodeType.VarDecl) {
          var vardecl = ast;
          vardecl.sym = null
        }else {
          if(ast.nodeType == TypeScript.NodeType.ArgDecl) {
            var argdecl = ast;
            argdecl.sym = null
          }else {
            if(ast.nodeType == TypeScript.NodeType.Name) {
              var name = ast;
              name.sym = null
            }else {
              if(ast.nodeType == TypeScript.NodeType.FuncDecl) {
                var funcdecl = ast;
                funcdecl.signature = null;
                funcdecl.freeVariables = new Array;
                funcdecl.symbols = null;
                funcdecl.accessorSymbol = null;
                funcdecl.scopeType = null
              }else {
                if(ast.nodeType == TypeScript.NodeType.Module) {
                  var modDecl = ast;
                  modDecl.mod = null
                }else {
                  if(ast.nodeType == TypeScript.NodeType.With) {
                    ast.withSym = null
                  }else {
                    if(ast.nodeType == TypeScript.NodeType.Catch) {
                      ast.containedScope = null
                    }
                  }
                }
              }
            }
          }
        }
        return ast
      }
      TypeScript.getAstWalkerFactory().walk(ast, cleanASTType)
    };
    TypeScriptCompiler.prototype.cleanTypesForReTypeCheck = function() {
      var _this = this;
      return this.timeFunction("cleanTypesForReTypeCheck()", function() {
        for(var i = 0, len = _this.scripts.members.length;i < len;i++) {
          var script = _this.scripts.members[i];
          if(script.isResident) {
            continue
          }
          _this.cleanASTTypesForReTypeCheck(script);
          _this.typeChecker.collectTypes(script)
        }
        return null
      })
    };
    TypeScriptCompiler.prototype.attemptIncrementalTypeCheck = function(updateResult) {
      return this.timeFunction("attemptIncrementalTypeCheck()", function() {
        return false
      })
    };
    TypeScriptCompiler.prototype.reTypeCheck = function() {
      var _this = this;
      return this.timeFunction("reTypeCheck()", function() {
        TypeScript.CompilerDiagnostics.analysisPass++;
        _this.initTypeChecker(_this.errorOutput);
        _this.persistentTypeState.setCollectionMode(TypeScript.TypeCheckCollectionMode.Transient);
        _this.cleanTypesForReTypeCheck();
        return _this.typeCheck()
      })
    };
    TypeScriptCompiler.prototype.emit = function(outputMany, createFile) {
      var emitter = null;
      this.emitSettings.createFile = createFile;
      for(var i = 0, len = this.scripts.members.length;i < len;i++) {
        var script = this.scripts.members[i];
        if(!script.emitRequired()) {
          continue
        }
        var outf = this.outfile;
        if(outputMany) {
          var fname = this.units[i].filename;
          var splitFname = fname.split(".");
          splitFname.pop();
          var baseName = splitFname.join(".");
          var outFname = baseName + ".js";
          this.emitSettings.path = outFname;
          outf = createFile(outFname);
          emitter = new TypeScript.Emitter(this.typeChecker, outf, this.emitSettings);
          if(this.settings.mapSourceFiles) {
            emitter.setSourceMappings(new TypeScript.SourceMapper(fname, outFname, outf, createFile(outFname + TypeScript.SourceMapper.MapFileExtension)))
          }
          if(this.settings.generateDeclarationFiles) {
            var declareFileName = TypeScript.isSTRFile(fname) ? TypeScript.changePathToDSTR(fname) : TypeScript.isTSFile(fname) ? TypeScript.changePathToDTS(fname) : TypeScript.changePathToDTS(fname);
            emitter.setDeclarationFile(createFile(declareFileName))
          }
        }else {
          if(emitter == null) {
            emitter = new TypeScript.Emitter(this.typeChecker, this.outfile, this.emitSettings);
            if(this.settings.mapSourceFiles) {
              emitter.setSourceMappings(new TypeScript.SourceMapper(script.locationInfo.filename, this.settings.outputFileName, this.outfile, createFile(this.settings.outputFileName + TypeScript.SourceMapper.MapFileExtension)))
            }
            if(this.settings.generateDeclarationFiles) {
              var outfname = this.settings.outputFileName;
              outfname = TypeScript.isSTRFile(outfname) ? TypeScript.changePathToDSTR(outfname) : TypeScript.isTSFile(outfname) ? TypeScript.changePathToDTS(outfname) : TypeScript.changePathToDTS(outfname);
              emitter.setDeclarationFile(createFile(outfname))
            }
          }else {
            if(this.settings.mapSourceFiles) {
              emitter.setSourceMappings(new TypeScript.SourceMapper(script.locationInfo.filename, emitter.sourceMapper.jsFileName, this.outfile, emitter.sourceMapper.sourceMapOut))
            }
          }
        }
        this.typeChecker.locationInfo = script.locationInfo;
        emitter.emitJavascript(script, TypeScript.TokenID.Comma, false, emitter.canWriteDeclFile());
        if(outputMany) {
          if(this.settings.mapSourceFiles) {
            emitter.emitSourceMappings()
          }
          if(this.settings.generateDeclarationFiles) {
            emitter.declFile.Close()
          }
          outf.Close()
        }
      }
      if(!outputMany) {
        if(this.settings.mapSourceFiles) {
          emitter.emitSourceMappings()
        }
        if(this.settings.generateDeclarationFiles) {
          emitter.declFile.Close()
        }
      }
    };
    TypeScriptCompiler.prototype.emitToOutfile = function() {
      var emitter = null;
      if(this.settings.mapSourceFiles) {
        throw Error("Cannot generate source map");
      }
      if(this.settings.generateDeclarationFiles) {
        throw Error("Cannot generate declaration files");
      }
      for(var i = 0, len = this.scripts.members.length;i < len;i++) {
        if(emitter == null) {
          emitter = new TypeScript.Emitter(this.typeChecker, this.outfile, this.emitSettings)
        }
        var script = this.scripts.members[i];
        this.typeChecker.locationInfo = script.locationInfo;
        emitter.emitJavascript(script, TypeScript.TokenID.Comma, false)
      }
    };
    return TypeScriptCompiler
  }();
  TypeScript.TypeScriptCompiler = TypeScriptCompiler;
  var ScopeEntry = function() {
    function ScopeEntry(name, type, sym) {
      this.name = name;
      this.type = type;
      this.sym = sym
    }
    return ScopeEntry
  }();
  TypeScript.ScopeEntry = ScopeEntry;
  var ScopeTraversal = function() {
    function ScopeTraversal(compiler) {
      this.compiler = compiler
    }
    ScopeTraversal.prototype.getScope = function(enclosingScopeContext) {
      if(enclosingScopeContext.enclosingObjectLit && enclosingScopeContext.isMemberCompletion) {
        return enclosingScopeContext.getObjectLiteralScope()
      }else {
        if(enclosingScopeContext.isMemberCompletion) {
          if(enclosingScopeContext.useFullAst) {
            return this.compiler.typeFlow.findMemberScopeAtFullAst(enclosingScopeContext)
          }else {
            return this.compiler.typeFlow.findMemberScopeAt(enclosingScopeContext)
          }
        }else {
          return enclosingScopeContext.getScope()
        }
      }
    };
    ScopeTraversal.prototype.getScopeEntries = function(enclosingScopeContext) {
      var scope = this.getScope(enclosingScopeContext);
      if(scope == null) {
        return[]
      }
      var inScopeNames = new TypeScript.StringHashTable;
      var allSymbolNames = scope.getAllSymbolNames(enclosingScopeContext.isMemberCompletion);
      for(var i = 0;i < allSymbolNames.length;i++) {
        var name = allSymbolNames[i];
        if(name == TypeScript.globalId || name == "_Core" || name == "_element") {
          continue
        }
        inScopeNames.add(name, "")
      }
      var svModuleDecl = this.compiler.typeChecker.currentModDecl;
      this.compiler.typeChecker.currentModDecl = enclosingScopeContext.deepestModuleDecl;
      var result = this.getTypeNamesForNames(enclosingScopeContext, inScopeNames.getAllKeys(), scope);
      this.compiler.typeChecker.currentModDecl = svModuleDecl;
      return result
    };
    ScopeTraversal.prototype.getTypeNamesForNames = function(enclosingScopeContext, allNames, scope) {
      var result = [];
      var enclosingScope = enclosingScopeContext.getScope();
      for(var i = 0;i < allNames.length;i++) {
        var name = allNames[i];
        var publicsOnly = enclosingScopeContext.publicsOnly && enclosingScopeContext.isMemberCompletion;
        var symbol = scope.find(name, publicsOnly, false);
        if(symbol == null) {
          symbol = scope.find(name, publicsOnly, true)
        }
        var displayThisMember = symbol && symbol.flags & TypeScript.SymbolFlags.Private ? symbol.container == scope.container : true;
        if(symbol) {
          if(displayThisMember && !TypeScript.isQuoted(symbol.name) && !TypeScript.isRelative(symbol.name)) {
            var typeName = symbol.getType().getScopedTypeName(enclosingScope);
            result.push(new ScopeEntry(name, typeName, symbol))
          }
        }else {
          if(name == "true" || name == "false") {
            result.push(new ScopeEntry(name, "bool", this.compiler.typeChecker.booleanType.symbol))
          }
        }
      }
      return result
    };
    return ScopeTraversal
  }();
  TypeScript.ScopeTraversal = ScopeTraversal
})(TypeScript || (TypeScript = {}));
var TypeScript;
(function(TypeScript) {
  (function(CompilerDiagnostics) {
    CompilerDiagnostics.debug = false;
    CompilerDiagnostics.diagnosticWriter = null;
    CompilerDiagnostics.analysisPass = 0;
    function Alert(output) {
      if(CompilerDiagnostics.diagnosticWriter) {
        CompilerDiagnostics.diagnosticWriter.Alert(output)
      }
    }
    CompilerDiagnostics.Alert = Alert;
    function debugPrint(s) {
      if(CompilerDiagnostics.debug) {
        Alert(s)
      }
    }
    CompilerDiagnostics.debugPrint = debugPrint;
    function assert(condition, s) {
      if(CompilerDiagnostics.debug) {
        if(!condition) {
          Alert(s)
        }
      }
    }
    CompilerDiagnostics.assert = assert
  })(TypeScript.CompilerDiagnostics || (TypeScript.CompilerDiagnostics = {}));
  var CompilerDiagnostics = TypeScript.CompilerDiagnostics;
  var NullLogger = function() {
    function NullLogger() {
    }
    NullLogger.prototype.information = function() {
      return false
    };
    NullLogger.prototype.debug = function() {
      return false
    };
    NullLogger.prototype.warning = function() {
      return false
    };
    NullLogger.prototype.error = function() {
      return false
    };
    NullLogger.prototype.fatal = function() {
      return false
    };
    NullLogger.prototype.log = function(s) {
    };
    return NullLogger
  }();
  TypeScript.NullLogger = NullLogger;
  var LoggerAdapter = function() {
    function LoggerAdapter(logger) {
      this.logger = logger;
      this._information = this.logger.information();
      this._debug = this.logger.debug();
      this._warning = this.logger.warning();
      this._error = this.logger.error();
      this._fatal = this.logger.fatal()
    }
    LoggerAdapter.prototype.information = function() {
      return this._information
    };
    LoggerAdapter.prototype.debug = function() {
      return this._debug
    };
    LoggerAdapter.prototype.warning = function() {
      return this._warning
    };
    LoggerAdapter.prototype.error = function() {
      return this._error
    };
    LoggerAdapter.prototype.fatal = function() {
      return this._fatal
    };
    LoggerAdapter.prototype.log = function(s) {
      this.logger.log(s)
    };
    return LoggerAdapter
  }();
  TypeScript.LoggerAdapter = LoggerAdapter;
  var BufferedLogger = function() {
    function BufferedLogger() {
      this.logContents = []
    }
    BufferedLogger.prototype.information = function() {
      return false
    };
    BufferedLogger.prototype.debug = function() {
      return false
    };
    BufferedLogger.prototype.warning = function() {
      return false
    };
    BufferedLogger.prototype.error = function() {
      return false
    };
    BufferedLogger.prototype.fatal = function() {
      return false
    };
    BufferedLogger.prototype.log = function(s) {
      this.logContents.push(s)
    };
    return BufferedLogger
  }();
  TypeScript.BufferedLogger = BufferedLogger;
  function timeFunction(logger, funcDescription, func) {
    var start = +new Date;
    var result = func();
    var end = +new Date;
    logger.log(funcDescription + " completed in " + (end - start) + " msec");
    return result
  }
  TypeScript.timeFunction = timeFunction;
  function stringToLiteral(value, length) {
    var result = "";
    var addChar = function(index) {
      var ch = value.charCodeAt(index);
      switch(ch) {
        case 9:
          result += "\\t";
          break;
        case 10:
          result += "\\n";
          break;
        case 11:
          result += "\\v";
          break;
        case 12:
          result += "\\f";
          break;
        case 13:
          result += "\\r";
          break;
        case 34:
          result += '\\"';
          break;
        case 39:
          result += "\\'";
          break;
        case 92:
          result += "\\";
          break;
        default:
          result += value.charAt(index)
      }
    };
    var tooLong = value.length > length;
    if(tooLong) {
      var mid = length >> 1;
      for(var i = 0;i < mid;i++) {
        addChar(i)
      }
      result += "(...)";
      for(var i = value.length - mid;i < value.length;i++) {
        addChar(i)
      }
    }else {
      length = value.length;
      for(var i = 0;i < length;i++) {
        addChar(i)
      }
    }
    return result
  }
  TypeScript.stringToLiteral = stringToLiteral
})(TypeScript || (TypeScript = {}));
var TSCompiler;
(function(TSCompiler) {
  TSCompiler.API_VERSION = 0.1;
  var CompileInfo = function() {
    function CompileInfo() {
      this.errors = [];
      this.outStream = new StringOutputStream
    }
    CompileInfo.prototype.addError = function(start, len, msg, block) {
      this.errors.push({start:start, len:len, msg:msg, block:block})
    };
    CompileInfo.prototype.getErrorCallback = function() {
      var $this = this;
      return function() {
        $this.addError.apply($this, arguments)
      }
    };
    CompileInfo.prototype.getErrorCount = function() {
      return this.errors.length
    };
    return CompileInfo
  }();
  TSCompiler.CompileInfo = CompileInfo;
  var StringOutputStream = function() {
    function StringOutputStream() {
      this.data = ""
    }
    StringOutputStream.prototype.Write = function(s) {
      this.data += s
    };
    StringOutputStream.prototype.WriteLine = function(s) {
      this.data += s + "\n"
    };
    StringOutputStream.prototype.Close = function() {
    };
    return StringOutputStream
  }();
  function compile(options, cInfo) {
    if(typeof cInfo == "undefined") {
      cInfo = new CompileInfo
    }
    var compiler = new TypeScript.TypeScriptCompiler(cInfo.outStream);
    compiler.parser.errorRecovery = true;
    compiler.setErrorCallback(cInfo.getErrorCallback());
    for(var i = 0;i < options.units.length;i++) {
      var unit = options.units[i];
      compiler.addUnit(unit.data, unit.name)
    }
    compiler.typeCheck();
    compiler.emit(false, function create() {
      return cInfo.outStream
    });
    return cInfo.outStream.data
  }
  TSCompiler.compile = compile;
  function compileStr(str, options, cInfo) {
    if(!options) {
      options = {units:[]}
    }
    options.units.push({data:str, name:""});
    return compile(options, cInfo)
  }
  TSCompiler.compileStr = compileStr;
  function runStr(str, options, cInfo) {
    var code = compileStr(str, options, cInfo);
    insertScriptBlock(code);
    return code
  }
  TSCompiler.runStr = runStr;
  function insertScriptBlock(content) {
    var block = document.createElement("script");
    block.setAttribute("type", "text/javascript");
    block.innerHTML = content;
    document.body.appendChild(block)
  }
  TSCompiler.insertScriptBlock = insertScriptBlock;
  function runScriptBlock(block, options, cInfo) {
    if(typeof block == "string") {
      block = document.getElementById(block)
    }
    if(!block || !block.tagName || block.tagName.toLowerCase() != "script") {
      throw Error("Invalid script block.");
    }
    var result = compileStr(block.innerHTML, options, cInfo);
    insertScriptBlock(result)
  }
  TSCompiler.runScriptBlock = runScriptBlock;
  function runAllScriptBlocks(allowedTypes, options, cInfo) {
    if(typeof allowedTypes == "undefined" || allowedTypes === null) {
      allowedTypes = ["text/typescript", "application/typescript"]
    }
    var testType = true;
    var blocks = null;
    if(document.querySelectorAll) {
      testType = false;
      var query = "";
      for(var i = 0, len = allowedTypes.length;i < len;i++) {
        query += 'script[type="' + allowedTypes[i] + '"]';
        if(i != len - 1) {
          query += ","
        }
      }
      blocks = document.querySelectorAll(query)
    }else {
      blocks = document.getElementsByTagName("script")
    }
    for(var i = 0, len = blocks.length;i < len;i++) {
      var block = blocks[i];
      if(testType) {
        var type = block.getAttribute("type").toLowerCase();
        var ok = false;
        for(var j = 0, typeLen = allowedTypes.length;j < typeLen;j++) {
          if(type == allowedTypes[j]) {
            ok = true;
            break
          }
        }
        if(!ok) {
          continue
        }
      }
      if(block.src) {
        compileExtern(block.src)
      }else {
        runScriptBlock(block, options, cInfo)
      }
    }
  }
  TSCompiler.runAllScriptBlocks = runAllScriptBlocks;
  function compileExtern(url, run, callback, options, cInfo) {
    if(!callback) {
      callback = function() {
      }
    }
    if(typeof run == "undefined") {
      run = true
    }
    if(typeof cInfo == "undefined" || cInfo === null) {
      cInfo = new CompileInfo
    }
    var xhr = new XMLHttpRequest;
    xhr.open("GET", url);
    xhr.onreadystatechange = function() {
      if(xhr.readyState == 4) {
        if(xhr.status == 200) {
          var js = compileStr(xhr.responseText, options, cInfo);
          if(run) {
            insertScriptBlock(js);
            callback({result:js, compileInfo:cInfo})
          }else {
            callback({result:js, compileInfo:cInfo})
          }
        }else {
          callback({error:true})
        }
      }
    };
    xhr.send(null)
  }
  TSCompiler.compileExtern = compileExtern
})(TSCompiler || (TSCompiler = {}));

