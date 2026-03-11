#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import re
import json
from pathlib import Path

def extract_vocabulary_from_file(file_path):
    """Trích xuất từ vựng từ file text"""
    vocabulary = []
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Tìm phần VOCABULARY
    vocab_match = re.search(r'VOCABULARY|A\. VOCABULARY(.*?)(?:PRONUNCIATION|B\. PRONUNCIATION|GRAMMAR|C\. GRAMMAR|$)', content, re.DOTALL | re.IGNORECASE)
    
    if vocab_match:
        vocab_section = vocab_match.group(1)
        
        # Tìm các từ và định nghĩa
        # Pattern: word (definition) hoặc word: definition
        patterns = [
            r'[-•]\s*([a-zA-Z\s\']+)\s*\(([^)]+)\)',
            r'[-•]\s*([a-zA-Z\s\']+):\s*([^\n]+)',
            r'^([a-zA-Z\s\']+)\s*\(([^)]+)\)$',
        ]
        
        for line in vocab_section.split('\n'):
            line = line.strip()
            if not line or len(line) < 3:
                continue
            
            for pattern in patterns:
                match = re.search(pattern, line)
                if match:
                    word = match.group(1).strip()
                    definition = match.group(2).strip()
                    
                    if len(word) > 1 and len(definition) > 1 and word[0].isalpha():
                        vocabulary.append({
                            'word': word,
                            'definition': definition,
                            'example': ''
                        })
                    break
    
    return vocabulary

def extract_grammar_from_file(file_path):
    """Trích xuất ngữ pháp từ file text"""
    grammar_rules = []
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Tìm phần GRAMMAR
    grammar_match = re.search(r'GRAMMAR|C\. GRAMMAR(.*?)(?:EXERCISE|D\. EXERCISE|$)', content, re.DOTALL | re.IGNORECASE)
    
    if grammar_match:
        grammar_section = grammar_match.group(1)
        
        # Chia nhỏ thành các quy tắc
        rules = grammar_section.split('\n\n')
        for rule in rules:
            rule = rule.strip()
            if len(rule) > 20:
                # Lấy dòng đầu tiên làm tiêu đề
                lines = rule.split('\n')
                if len(lines) > 1:
                    title = lines[0]
                    content_rule = '\n'.join(lines[1:])
                    
                    grammar_rules.append({
                        'rule': title,
                        'explanation': content_rule[:300],  # Lấy 300 ký tự đầu
                        'examples': []
                    })
    
    return grammar_rules

def create_flashcards(vocabulary_list, grammar_list, day_number, day_title):
    """Tạo flashcards từ từ vựng và ngữ pháp"""
    flashcards = []
    
    # Thêm flashcards từ vựng
    for i, vocab in enumerate(vocabulary_list):
        flashcards.append({
            'id': f'{day_number}_vocab_{i}',
            'type': 'vocabulary',
            'front': vocab['word'],
            'back': vocab['definition'],
            'example': vocab['example'],
            'day': day_number,
            'day_title': day_title,
            'interval': 1,
            'easeFactor': 2.5,
            'nextReview': 0,
            'repetitions': 0,
            'lastReview': 0
        })
    
    # Thêm flashcards ngữ pháp
    for i, grammar in enumerate(grammar_list):
        flashcards.append({
            'id': f'{day_number}_grammar_{i}',
            'type': 'grammar',
            'front': grammar['rule'],
            'back': grammar['explanation'],
            'example': '',
            'day': day_number,
            'day_title': day_title,
            'interval': 1,
            'easeFactor': 2.5,
            'nextReview': 0,
            'repetitions': 0,
            'lastReview': 0
        })
    
    return flashcards

def process_all_files():
    """Xử lý tất cả các file"""
    dos_dir = '/Users/locnm/Downloads/Code/englishblog/dos'
    txt_files = sorted([f for f in os.listdir(dos_dir) if f.endswith('.txt')])
    
    all_flashcards = []
    
    for txt_file in txt_files:
        file_path = os.path.join(dos_dir, txt_file)
        day_title = txt_file.replace('.txt', '').replace('Day', 'Ngày ')
        
        # Trích xuất day number
        match = re.search(r'Day(\d+)', txt_file)
        day_number = match.group(1) if match else '0'
        
        print(f'Processing: {txt_file}')
        
        vocabulary = extract_vocabulary_from_file(file_path)
        grammar = extract_grammar_from_file(file_path)
        flashcards = create_flashcards(vocabulary, grammar, day_number, day_title)
        
        all_flashcards.extend(flashcards)
    
    return all_flashcards

if __name__ == '__main__':
    flashcards = process_all_files()
    
    # Lưu vào file JSON
    output_path = '/Users/locnm/Downloads/Code/englishblog/flashcards_data.json'
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(flashcards, f, ensure_ascii=False, indent=2)
    
    print(f'\nTotal flashcards created: {len(flashcards)}')
    print(f'Saved to: {output_path}')
