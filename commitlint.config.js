module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    "type-enum": [2, 'always', ['fix', 'feat', 'docs', 'style', 'test', 'perf']], // type 枚举
    'type-case': [0], // 类型大小写
    'type-empty': [2, 'always'], // 枚举允许为空不允许为空
    // 'scope-empty': [0],
    // 'scope-case': [0],
    // 'subject-full-stop': [0, 'never'],
    // 'subject-case': [0, 'never'],
    // 'header-max-length': [0, 'always', 72]
  }
}
