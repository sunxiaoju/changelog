module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    "type-enum": [2, 'always', ['fix', 'feat', 'docs', 'style', 'test', 'perf']], // type 枚举
    'type-case': [0], // 类型大小写
    'type-empty': [2, 'never'], // 枚举允许为空  0为允许为空
    'scope-empty': [0], // scope  允许为空
    'scope-case': [0, 'always'],  // scope 不校验大小写
    'subject-full-stop': [0, 'never'], // 不校验 是否能以.结尾
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 100]
  }
}
